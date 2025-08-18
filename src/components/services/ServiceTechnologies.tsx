"use client";

import { motion } from "framer-motion";

interface Technology {
  name: string;
  category: string;
  logo: string;
}

interface ServiceTechnologiesProps {
  technologies: Technology[];
}

export default function ServiceTechnologies({ technologies }: ServiceTechnologiesProps) {
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
            Technologies We Use
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build robust, scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 p-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Cpath d='m9 9 5 12 1.774-5.226L21 14 9 9z'/%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-2">
                {tech.name}
              </h3>
              
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from(new Set(technologies.map(tech => tech.category))).map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-700"
              >
                <h4 className="font-semibold text-slate-800 dark:text-white text-sm">
                  {category}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {technologies.filter(tech => tech.category === category).length} Tools
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}