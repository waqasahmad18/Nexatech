"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Users, Trophy, Star } from "lucide-react";

const stats = [
  {
    icon: Code,
    value: "50+",
    label: "Web Applications",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    value: "30+",
    label: "Mobile Apps",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    value: "20+",
    label: "E-commerce Sites",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    value: "500K+",
    label: "Users Served",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Trophy,
    value: "15+",
    label: "Industry Awards",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Rating",
    color: "from-yellow-500 to-orange-500"
  }
];

export default function PortfolioStats() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Portfolio by Numbers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
            Our diverse portfolio spans across multiple industries and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-slate-900 p-3 sm:p-4 lg:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-slate-200 dark:border-slate-700"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
              >
                <stat.icon size={20} className="text-white sm:w-6 sm:h-6" />
              </motion.div>
              
              <div className={`text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}