"use client";

import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Heart, Award, Zap, Coffee, Globe } from "lucide-react";

const cultureValues = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "We're passionate about transforming Pakistan's digital landscape through innovative technology solutions.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "We believe in the power of teamwork and support each other to achieve collective success.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We encourage creative thinking and embrace new technologies to solve complex challenges.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We prioritize employee wellbeing and maintain a healthy balance between work and personal life.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do and continuously improve our skills and processes.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Growth Mindset",
    description: "We invest in continuous learning and provide opportunities for professional development.",
    color: "from-indigo-500 to-purple-500"
  }
];

const workEnvironment = [
  {
    icon: Coffee,
    title: "Relaxed Atmosphere",
    description: "Enjoy a comfortable, stress-free work environment with flexible dress code and open communication.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work with talented professionals in cross-functional teams that support and inspire each other.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
  },
  {
    icon: Globe,
    title: "Remote Work Culture",
    description: "Currently we are providing services remotely with state-of-the-art technology and flexible work arrangements.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop"
  }
];

const testimonials = [
  {
    name: "James Wilson",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    quote: "NexaTech has provided me with incredible opportunities to grow my skills and work on exciting projects that make a real impact."
  },
  {
    name: "Emma Kalinton",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    quote: "The collaborative culture here is amazing. Everyone supports each other, and there's always room for creative input and innovation."
  },
  {
    name: "Michael Davis",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    quote: "Working at NexaTech has been the best decision of my career. The work-life balance and growth opportunities are exceptional."
  }
];

export default function CompanyCulture() {
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
            Our Company Culture
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            At NexaTech, we've built a culture that fosters creativity, collaboration, and continuous growth. Here's what makes our workplace special.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cultureValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mb-6 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center`}
              >
                <value.icon size={32} className="text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                {value.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Work Environment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-12 text-center">
            Our Work Environment
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workEnvironment.map((env, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={env.image}
                    alt={env.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <env.icon size={32} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                    {env.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {env.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Employee Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-12 text-center">
            What Our Team Says
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <blockquote className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                Employee Satisfaction
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                3.2
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                Years Avg Tenure
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                Team Members
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                Remote Friendly
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}