"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "NexaTech was established with a vision to bridge the technology gap in Pakistan"
  },
  {
    year: "2020",
    title: "First Major Client",
    description: "Successfully delivered our first enterprise-level project for a major Pakistani corporation"
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to 25+ skilled developers, designers, and project managers"
  },
  {
    year: "2022",
    title: "International Recognition",
    description: "Received awards for excellence in software development and client satisfaction"
  },
  {
    year: "2023",
    title: "500+ Projects",
    description: "Successfully completed over 500 projects for clients across various industries"
  },
  {
    year: "2024",
    title: "Leading Innovation",
    description: "Emerged as one of Pakistan's top software development companies"
  }
];

const achievements = [
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Winner of Pakistan Software Excellence Award 2023",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    description: "98% client satisfaction rate with 95% repeat business",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across Pakistan, UAE, UK, and USA",
    color: "from-blue-500 to-purple-500"
  }
];

export default function AboutContent() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Founded in 2019, NexaTech emerged from a simple yet powerful vision: to transform how businesses in Pakistan leverage technology for growth and innovation. What started as a small team of passionate developers has evolved into one of the region's most trusted technology partners.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to excellence. We've had the privilege of working with startups, SMEs, and large enterprises, helping them navigate the digital landscape and achieve their business objectives.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-slate-600 dark:text-slate-300">Client-focused approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-slate-600 dark:text-slate-300">Cutting-edge technology stack</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-slate-600 dark:text-slate-300">Agile development methodology</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-slate-600 dark:text-slate-300">24/7 support and maintenance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="NexaTech Team"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
          </motion.div>
        </div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center`}>
                  <achievement.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}