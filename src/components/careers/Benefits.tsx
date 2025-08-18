"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Calendar, 
  Home, 
  GraduationCap, 
  Shield, 
  Gift,
  Laptop,
  Coffee,
  Users,
  TrendingUp,
  MapPin,
  Clock
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family",
    items: ["Medical Insurance", "Dental Coverage", "Mental Health Support", "Gym Membership"],
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Calendar,
    title: "Time Off",
    description: "Generous vacation and leave policies for work-life balance",
    items: ["25 Days Annual Leave", "Sick Leave", "Paid Holidays", "Parental Leave"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Home,
    title: "Flexible Work",
    description: "Work from anywhere with our flexible remote work options",
    items: ["Remote Work", "Flexible Hours", "Hybrid Options", "Home Office Setup"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning opportunities and skill development",
    items: ["Training Budget", "Conference Tickets", "Online Courses", "Certification Support"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career progression paths and advancement opportunities",
    items: ["Regular Promotions", "Skill Development", "Leadership Training", "Mentorship"],
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Gift,
    title: "Financial Benefits",
    description: "Competitive compensation and financial perks",
    items: ["Performance Bonuses", "Profit Sharing", "Stock Options", "Retirement Plan"],
    color: "from-teal-500 to-blue-500"
  }
];

const perks = [
  { icon: Laptop, title: "Latest Tech", description: "MacBook Pro and premium equipment" },
  { icon: Coffee, title: "Free Meals", description: "Complimentary lunch and snacks" },
  { icon: Users, title: "Team Events", description: "Regular team building activities" },
  { icon: Shield, title: "Job Security", description: "Stable employment with growth" },
  { icon: MapPin, title: "Remote Work", description: "Currently we are providing services remotely with global reach" },
  { icon: Clock, title: "No Overtime", description: "Respect for personal time" }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
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
            Why You'll Love Working Here
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We believe in taking care of our team members with comprehensive benefits and perks that support both professional and personal growth.
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
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
                className={`w-16 h-16 mb-6 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center`}
              >
                <benefit.icon size={32} className="text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              <ul className="space-y-2">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-slate-600 dark:text-slate-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${benefit.color} rounded-full mr-3`}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Perks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-700"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Additional Perks & Benefits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <perk.icon size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">
                    {perk.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {perk.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Ready to Join Our Team?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't see your ideal role? Send us your resume anyway. We're always looking for talented individuals to join our team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Send Your Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}