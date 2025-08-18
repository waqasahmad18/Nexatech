"use client";

import { motion } from "framer-motion";
import { Play, Copy, Settings, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState("POST /api/v1/auth/login");
  const [requestBody, setRequestBody] = useState(`{
  "email": "user@example.com",
  "password": "your_password"
}`);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const endpoints = [
    "POST /api/v1/auth/login",
    "GET /api/v1/users/{id}",
    "POST /api/v1/payments",
    "GET /api/v1/analytics/dashboard"
  ];

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleSendRequest = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResponse(`{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 3600
  },
  "timestamp": "${new Date().toISOString()}"
}`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
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
            API Playground
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Test our APIs directly from the browser. No setup required - just select an endpoint and send your request.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Request Panel */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Send className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Request</h3>
              </div>

              {/* Endpoint Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Select Endpoint
                </label>
                <select
                  value={selectedEndpoint}
                  onChange={(e) => setSelectedEndpoint(e.target.value)}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {endpoints.map((endpoint, index) => (
                    <option key={index} value={endpoint}>
                      {endpoint}
                    </option>
                  ))}
                </select>
              </div>

              {/* Headers */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Headers
                </label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Content-Type"
                      value="Content-Type"
                      readOnly
                      className="flex-1 p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="application/json"
                      value="application/json"
                      readOnly
                      className="flex-1 p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Authorization"
                      value="Authorization"
                      readOnly
                      className="flex-1 p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Bearer YOUR_API_TOKEN"
                      value="Bearer YOUR_API_TOKEN"
                      className="flex-1 p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Request Body */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Request Body
                  </label>
                  <button
                    onClick={() => copyToClipboard(requestBody, 'request-body')}
                    className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {copiedCode === 'request-body' ? (
                      <>
                        <CheckCircle size={14} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <textarea
                  value={requestBody}
                  onChange={(e) => setRequestBody(e.target.value)}
                  rows={8}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter request body..."
                />
              </div>

              {/* Send Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSendRequest}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Play size={20} />
                    Send Request
                  </>
                )}
              </motion.button>
            </div>

            {/* Response Panel */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Settings className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Response</h3>
              </div>

              {/* Response Status */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Status
                </label>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-sm font-medium">
                    200 OK
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Response time: 245ms
                  </span>
                </div>
              </div>

              {/* Response Body */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Response Body
                  </label>
                  {response && (
                    <button
                      onClick={() => copyToClipboard(response, 'response-body')}
                      className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 hover:underline"
                    >
                      {copiedCode === 'response-body' ? (
                        <>
                          <CheckCircle size={14} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </button>
                  )}
                </div>
                <div className="relative">
                  <pre className="w-full h-64 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-mono text-sm overflow-auto">
                    {response || "// Response will appear here after sending a request..."}
                  </pre>
                  {!response && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-slate-400 dark:text-slate-500 text-center">
                        <Play size={48} className="mx-auto mb-2 opacity-50" />
                        <p>Send a request to see the response</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Playground Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Play className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              Real API Calls
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Test against our live API endpoints with real responses
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Copy className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              Copy Code
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Copy request examples to use in your applications
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Settings className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              Custom Headers
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Test with authentication tokens and custom headers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}