"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Coffee, Users, Lightbulb, Heart, Award, Zap } from "lucide-react";

const cultureValues = [
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We believe in maintaining a healthy balance between professional and personal life.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We encourage creative thinking and innovative solutions to complex problems.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Teamwork and collaboration are at the heart of everything we do.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Award,
    title: "Excellence Driven",
    description: "We strive for excellence in every project and continuously improve our skills.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "We invest in our team's growth through training and skill development programs.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Coffee,
    title: "Fun Environment",
    description: "We maintain a positive, enjoyable workplace where everyone feels valued.",
    color: "from-orange-500 to-red-500"
  }
];

const benefits = [
  "Competitive salary packages",
  "Health insurance coverage",
  "Flexible working hours",
  "Remote work options",
  "Professional development budget",
  "Team building activities",
      "Remote work capabilities",
  "Performance bonuses"
];

export default function TeamCulture() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Culture Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
            Our Culture & Values
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We've built a culture that fosters creativity, collaboration, and continuous growth. Here's what makes NexaTech a great place to work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cultureValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 mb-4 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}
              >
                <value.icon size={28} className="text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                {value.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
              Why Join Our Team?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              At NexaTech, we don't just offer jobs – we offer careers. Join a team that values your growth, celebrates your achievements, and supports your journey in the tech industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                href="/careers"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Join Our Team
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
              alt="Team Culture"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                  Employee Satisfaction
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                  Years Avg Tenure
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-700 text-center"
        >
          <blockquote className="text-xl text-slate-700 dark:text-slate-300 mb-6 italic">
            "Working at NexaTech has been an incredible journey. The team is supportive, the projects are challenging, and there's always room to grow and learn new technologies."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
              alt="Team Member"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
                              <div className="font-semibold text-slate-800 dark:text-white">Michael Davis</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Lead Full Stack Developer</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}