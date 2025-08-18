"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, DollarSign, Users, Code, Palette, Database, Smartphone } from "lucide-react";

const jobCategories = [
  {
    icon: Code,
    title: "Development",
    count: 8,
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Design",
    count: 3,
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Database,
    title: "DevOps",
    count: 2,
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Management",
    count: 4,
    color: "from-orange-500 to-red-500"
  }
];

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Development",
    type: "Full-time",
    location: "Remote",
    experience: "4-6 years",
    salary: "PKR 150,000 - 250,000",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    description: "Lead development of scalable web applications using modern technologies and mentor junior developers.",
    icon: Code,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    experience: "3-5 years",
    salary: "PKR 120,000 - 180,000",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    description: "Create beautiful and intuitive user experiences for web and mobile applications.",
    icon: Palette,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Mobile App Developer",
    department: "Development",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 years",
    salary: "PKR 100,000 - 160,000",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    description: "Develop cross-platform mobile applications with focus on performance and user experience.",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "DevOps",
    type: "Full-time",
    location: "Remote",
    experience: "3-5 years",
    salary: "PKR 140,000 - 200,000",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: "Manage cloud infrastructure and implement automated deployment pipelines.",
    icon: Database,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Project Manager",
    department: "Management",
    type: "Full-time",
    location: "Remote",
    experience: "4-7 years",
    salary: "PKR 130,000 - 190,000",
    skills: ["Agile", "Scrum", "Project Planning", "Team Leadership"],
    description: "Lead cross-functional teams to deliver projects on time and within budget.",
    icon: Users,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Frontend Developer",
    department: "Development",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 years",
    salary: "PKR 90,000 - 140,000",
    skills: ["React", "Vue.js", "JavaScript", "CSS"],
    description: "Build responsive and interactive user interfaces for modern web applications.",
    icon: Code,
    color: "from-blue-500 to-cyan-500"
  }
];

export default function JobOpenings() {
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
            Current Job Openings
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Join our growing team and be part of Pakistan's most innovative software company. We have exciting opportunities across different departments.
          </p>
        </motion.div>

        {/* Job Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {jobCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
              >
                <category.icon size={28} className="text-white" />
              </motion.div>
              
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                {category.title}
              </h3>
              
              <p className={`text-sm font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.count} Positions
              </p>
            </motion.div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start space-x-4 mb-6 lg:mb-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${job.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <job.icon size={32} className="text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center text-slate-600 dark:text-slate-300">
                        <Users size={16} className="mr-2 text-blue-500" />
                        <span className="text-sm">{job.department}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-300">
                        <Clock size={16} className="mr-2 text-green-500" />
                        <span className="text-sm">{job.type}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-300">
                        <MapPin size={16} className="mr-2 text-purple-500" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-300">
                        <DollarSign size={16} className="mr-2 text-orange-500" />
                        <span className="text-sm">{job.salary}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${job.color} text-white text-sm rounded-full font-medium`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3 lg:flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                  </motion.button>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-700"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Don't See Your Perfect Role?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Resume
            </Link>
            <button className="inline-flex items-center justify-center border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Join Talent Pool
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}