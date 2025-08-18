"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, BookOpen, Users, Headphones } from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7 for Enterprise",
    responseTime: "< 5 minutes",
    action: "Start Chat",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us detailed questions or issues",
    availability: "24/7",
    responseTime: "< 2 hours",
    action: "Send Email",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri 9AM-6PM",
    responseTime: "Immediate",
    action: "Call Now",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Find answers in our comprehensive guides",
    availability: "Always Available",
    responseTime: "Instant",
    action: "Browse Docs",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with other developers and users",
    availability: "24/7",
    responseTime: "Community driven",
    action: "Join Forum",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Expert help for complex technical issues",
    availability: "Enterprise only",
    responseTime: "< 30 minutes",
    action: "Request Support",
    color: "from-teal-500 to-blue-500"
  }
];

export default function SupportOptions() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            How Can We Help You?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Choose the support option that works best for you. Our team is here to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mb-6 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center`}
              >
                <option.icon size={32} className="text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                {option.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {option.description}
              </p>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Availability:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{option.availability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Response Time:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{option.responseTime}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r ${option.color} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg`}
              >
                {option.action}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}