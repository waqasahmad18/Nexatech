"use client";

import { motion } from "framer-motion";
import { Copy, ExternalLink, ChevronDown, CheckCircle } from "lucide-react";
import { useState } from "react";

interface Endpoint {
  method: string;
  path: string;
  description: string;
  category: string;
  parameters: Parameter[];
  response: string;
  example: string;
}

interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const endpoints: Endpoint[] = [
  {
    method: "POST",
    path: "/api/v1/auth/login",
    description: "Authenticate user and return access token",
    category: "Authentication",
    parameters: [
      { name: "email", type: "string", required: true, description: "User email address" },
      { name: "password", type: "string", required: true, description: "User password" }
    ],
    response: `{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 3600
  }
}`,
    example: `curl -X POST https://api.nexatech.pk/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`
  },
  {
    method: "GET",
    path: "/api/v1/users/{id}",
    description: "Retrieve user information by ID",
    category: "User Management",
    parameters: [
      { name: "id", type: "string", required: true, description: "User ID" }
    ],
    response: `{
  "success": true,
  "data": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "John Doe",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-15T00:00:00Z"
  }
}`,
    example: `curl -X GET https://api.nexatech.pk/v1/users/user_123 \\
  -H "Authorization: Bearer YOUR_API_TOKEN"`
  },
  {
    method: "POST",
    path: "/api/v1/payments",
    description: "Create a new payment intent",
    category: "Payments",
    parameters: [
      { name: "amount", type: "integer", required: true, description: "Amount in cents" },
      { name: "currency", type: "string", required: true, description: "Currency code (PKR, USD)" },
      { name: "customer_id", type: "string", required: true, description: "Customer ID" }
    ],
    response: `{
  "success": true,
  "data": {
    "id": "payment_123",
    "amount": 10000,
    "currency": "PKR",
    "status": "pending",
    "client_secret": "pi_123_secret_456"
  }
}`,
    example: `curl -X POST https://api.nexatech.pk/v1/payments \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 10000,
    "currency": "PKR",
    "customer_id": "cust_123"
  }'`
  }
];

const categories = ["All", "Authentication", "User Management", "Payments", "Analytics", "Files"];

export default function ApiEndpoints() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedEndpoint, setExpandedEndpoint] = useState<number | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredEndpoints = endpoints.filter(endpoint => 
    selectedCategory === "All" || endpoint.category === selectedCategory
  );

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "POST": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "PUT": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "DELETE": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            API Endpoints
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore all available API endpoints with detailed documentation, parameters, and response examples
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Endpoints List */}
        <div className="space-y-6">
          {filteredEndpoints.map((endpoint, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Endpoint Header */}
              <button
                onClick={() => setExpandedEndpoint(expandedEndpoint === index ? null : index)}
                className="w-full p-6 text-left hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-slate-800 dark:text-white">
                      {endpoint.path}
                    </code>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-500 transition-transform duration-200 ${
                      expandedEndpoint === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  {endpoint.description}
                </p>
              </button>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedEndpoint === index ? "auto" : 0,
                  opacity: expandedEndpoint === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 border-t border-slate-200 dark:border-slate-600">
                  {/* Parameters */}
                  {endpoint.parameters.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Parameters</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-slate-200 dark:border-slate-600">
                              <th className="text-left py-2 font-medium text-slate-700 dark:text-slate-300">Name</th>
                              <th className="text-left py-2 font-medium text-slate-700 dark:text-slate-300">Type</th>
                              <th className="text-left py-2 font-medium text-slate-700 dark:text-slate-300">Required</th>
                              <th className="text-left py-2 font-medium text-slate-700 dark:text-slate-300">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.parameters.map((param, paramIndex) => (
                              <tr key={paramIndex} className="border-b border-slate-100 dark:border-slate-700">
                                <td className="py-2 font-mono text-slate-800 dark:text-white">{param.name}</td>
                                <td className="py-2 text-slate-600 dark:text-slate-300">{param.type}</td>
                                <td className="py-2">
                                  <span className={`px-2 py-1 rounded text-xs ${
                                    param.required 
                                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                                  }`}>
                                    {param.required ? 'Required' : 'Optional'}
                                  </span>
                                </td>
                                <td className="py-2 text-slate-600 dark:text-slate-300">{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Example Request */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Example Request</h4>
                    <div className="relative">
                      <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{endpoint.example}</code>
                      </pre>
                      <button
                        onClick={() => copyToClipboard(endpoint.example, `example-${index}`)}
                        className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors duration-200"
                      >
                        {copiedCode === `example-${index}` ? (
                          <CheckCircle size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-slate-300" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Response */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Response</h4>
                    <div className="relative">
                      <pre className="bg-slate-900 text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{endpoint.response}</code>
                      </pre>
                      <button
                        onClick={() => copyToClipboard(endpoint.response, `response-${index}`)}
                        className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors duration-200"
                      >
                        {copiedCode === `response-${index}` ? (
                          <CheckCircle size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-slate-300" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}