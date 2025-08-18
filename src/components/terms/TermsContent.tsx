"use client";

import { motion } from "framer-motion";
import { Calendar, FileText } from "lucide-react";

export default function TermsContent() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-4 mb-4">
            <FileText className="text-blue-600 dark:text-blue-400" size={24} />
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
              Terms of Service Agreement
            </h1>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Calendar size={16} />
            <span>Last updated: January 1, 2024</span>
          </div>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-slate dark:prose-invert max-w-none"
        >
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              By accessing and using NexaTech services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              These Terms of Service ("Terms") govern your use of our website located at nexatech.pk and our software services (the "Service") operated by NexaTech ("us", "we", or "our").
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">2. Use License</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of NexaTech materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>attempt to decompile or reverse engineer any software contained on our website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">3. Service Availability</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              We strive to maintain 99.9% uptime for our services. However, we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
              <li>Modify or discontinue the service with or without notice</li>
              <li>Perform scheduled maintenance during low-traffic periods</li>
              <li>Implement emergency maintenance as needed for security or stability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">4. Privacy Policy</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Your privacy is critically important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We implement appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">5. Payment Terms</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              For paid services, you agree to pay all fees and applicable taxes associated with your use of the Service. Payment terms include:
            </p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
              <li>Monthly subscriptions are billed in advance on a monthly basis</li>
              <li>Annual subscriptions are billed in advance on an annual basis</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>Price changes will be communicated 30 days in advance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">6. User Accounts</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
              <li>Safeguarding the password and all activities under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>Ensuring your account information remains accurate and up-to-date</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">7. Limitation of Liability</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              In no event shall NexaTech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use NexaTech services, even if NexaTech or its authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">8. Contact Information</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Email:</strong> legal@nexatech.pk</p>
              <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Phone:</strong> +92 300 1234567</p>
                              <p className="text-slate-700 dark:text-slate-300"><strong>Service Delivery:</strong> Currently we are providing services remotely with global reach</p>
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
}