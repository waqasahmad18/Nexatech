"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, CheckCircle, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  color: string;
  slug: string;
  client: string;
  duration: string;
  year: string;
  features: string[];
  challenge: string;
  solution: string;
  results: string[];
  gallery: string[];
}

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-40`}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/#portfolio"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{project.description}</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className={`bg-gradient-to-r ${project.color} px-4 py-2 rounded-full text-sm font-medium`}>
                {project.category}
              </span>
              <div className="flex items-center text-white/80">
                <User size={16} className="mr-2" />
                {project.client}
              </div>
              <div className="flex items-center text-white/80">
                <Calendar size={16} className="mr-2" />
                {project.year}
              </div>
              <div className="flex items-center text-white/80">
                <Clock size={16} className="mr-2" />
                {project.duration}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">The Challenge</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Our Solution</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Results Achieved</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-r ${project.color} p-6 rounded-xl text-white text-center`}
                    >
                      <p className="font-semibold text-lg">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl mb-8"
              >
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Client</span>
                    <p className="text-slate-800 dark:text-white font-medium">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Duration</span>
                    <p className="text-slate-800 dark:text-white font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Year</span>
                    <p className="text-slate-800 dark:text-white font-medium">{project.year}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Category</span>
                    <p className="text-slate-800 dark:text-white font-medium">{project.category}</p>
                  </div>
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl mb-8"
              >
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                  <ExternalLink size={20} className="mr-2" />
                  View Live Project
                </button>
                <button className="w-full border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-600 dark:text-slate-300 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                  <Github size={20} className="mr-2" />
                  View Source Code
                </button>
              </motion.div>
            </div>
          </div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-xl cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${project.color}`}>
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can bring your vision to life with cutting-edge technology solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-slate-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowLeft size={20} className="ml-2 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}