"use client";

import { motion } from "framer-motion";
import { Copy, ExternalLink, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function DocumentationContent() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    authentication: `// Authentication with NexaTech API
const nexatech = require('@nexatech/sdk');

const client = new nexatech.Client({
  apiKey: 'your_api_key_here',
  environment: 'production' // or 'sandbox'
});

// Authenticate user
const user = await client.auth.authenticate({
  email: 'user@example.com',
  password: 'secure_password'
});`,
    
    userManagement: `// User Management Example
// Create a new user
const newUser = await client.users.create({
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin'
});

// Get user by ID
const user = await client.users.get(userId);

// Update user profile
const updatedUser = await client.users.update(userId, {
  name: 'John Smith',
  preferences: {
    theme: 'dark',
    notifications: true
  }
});`,

    paymentProcessing: `// Payment Processing
// Create a payment intent
const payment = await client.payments.create({
  amount: 10000, // Amount in cents
  currency: 'PKR',
  customer: customerId,
  description: 'Product purchase',
  metadata: {
    orderId: 'order_123'
  }
});

// Confirm payment
const confirmedPayment = await client.payments.confirm(payment.id, {
  paymentMethod: 'card_1234567890'
});`
  };

  return (
    <main className="flex-1 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Getting Started with NexaTech API
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Learn how to integrate NexaTech services into your applications with our comprehensive API documentation.
          </p>
        </div>

        {/* Quick Start Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            Authentication
          </h2>
          
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              First, you'll need to authenticate with our API using your API key. Here's how to get started:
            </p>
            
            <div className="relative">
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{codeExamples.authentication}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(codeExamples.authentication, 'auth')}
                className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors duration-200"
              >
                {copiedCode === 'auth' ? (
                  <CheckCircle size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} className="text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </motion.section>

        {/* User Management Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            User Management
          </h2>
          
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Manage users in your application with our User Management API:
            </p>
            
            <div className="relative">
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{codeExamples.userManagement}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(codeExamples.userManagement, 'users')}
                className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors duration-200"
              >
                {copiedCode === 'users' ? (
                  <CheckCircle size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} className="text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </motion.section>

        {/* Payment Processing Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            Payment Processing
          </h2>
          
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Process payments securely with our Payment API:
            </p>
            
            <div className="relative">
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{codeExamples.paymentProcessing}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(codeExamples.paymentProcessing, 'payments')}
                className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors duration-200"
              >
                {copiedCode === 'payments' ? (
                  <CheckCircle size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} className="text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </motion.section>

        {/* Next Steps */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Next Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                Explore SDKs
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Check out our language-specific SDKs for faster integration.
              </p>
              <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View SDKs <ExternalLink size={16} />
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                API Reference
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Complete API reference with all endpoints and parameters.
              </p>
              <button className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:underline">
                View API Docs <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}