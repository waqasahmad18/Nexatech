"use client";

import { motion } from "framer-motion";
import { Building, Users, Clock, Target } from "lucide-react";

const stats = [
  {
    icon: Building,
    value: "200+",
    label: "Companies Transformed",
    description: "Businesses across various industries",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    value: "50K+",
    label: "Users Impacted",
    description: "End users benefiting from our solutions",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Clock,
    value: "75%",
    label: "Time Reduction",
    description: "Average time saved in business processes",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    value: "95%",
    label: "Goal Achievement",
    description: "Projects meeting or exceeding objectives",
    color: "from-orange-500 to-red-500"
  }
];

const industries = [
  "Healthcare", "Finance", "E-commerce", "Education", "Manufacturing", 
  "Real Estate", "Logistics", "Retail", "Government", "Non-profit"
];

export default function CaseStudiesStats() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
            Our Impact by Numbers
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Real results from real projects - see how we've helped businesses achieve measurable success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}
              >
                <stat.icon size={32} className="text-white" />
              </motion.div>
              
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                {stat.label}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-700"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Industries We've Transformed
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-300"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}