"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Calendar, Eye, FileText } from "lucide-react";

const whitePapers = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    description: "Comprehensive analysis of how artificial intelligence is transforming software development processes, from code generation to automated testing.",
    author: "Dr. Ahmad Hassan",
    publishDate: "December 2024",
    pages: 42,
    downloads: 2500,
    category: "Artificial Intelligence",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%233B82F6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white' font-family='Arial'%3EAI Development%3C/text%3E%3C/svg%3E",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Cloud-Native Architecture Best Practices",
    description: "A detailed guide to designing and implementing cloud-native applications with microservices, containers, and serverless technologies.",
    author: "Eng. Emily Thompson",
    publishDate: "November 2024",
    pages: 38,
    downloads: 3200,
    category: "Cloud Computing",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%2310B981'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white' font-family='Arial'%3ECloud Architecture%3C/text%3E%3C/svg%3E",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Cybersecurity in the Digital Age",
    description: "Essential cybersecurity strategies for modern businesses, covering threat landscape, security frameworks, and incident response protocols.",
    author: "Muhammad Ali",
    publishDate: "October 2024",
    pages: 35,
    downloads: 1800,
    category: "Cybersecurity",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23DC2626'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white' font-family='Arial'%3ECybersecurity%3C/text%3E%3C/svg%3E",
    color: "from-red-500 to-pink-500"
  },
  {
    id: 4,
    title: "Digital Transformation Roadmap",
    description: "Strategic guide for organizations planning digital transformation initiatives, including technology selection and change management.",
    author: "Emma Kalinton",
    publishDate: "September 2024",
    pages: 45,
    downloads: 4100,
    category: "Digital Transformation",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%238B5CF6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white' font-family='Arial'%3EDigital Transform%3C/text%3E%3C/svg%3E",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 5,
    title: "Mobile App Performance Optimization",
    description: "Advanced techniques for optimizing mobile application performance, covering both iOS and Android platforms with real-world examples.",
    author: "Usman Sheikh",
    publishDate: "August 2024",
    pages: 32,
    downloads: 2700,
    category: "Mobile Development",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23F59E0B'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white' font-family='Arial'%3EMobile Optimization%3C/text%3E%3C/svg%3E",
    color: "from-orange-500 to-yellow-500"
  },
  {
    id: 6,
    title: "Blockchain Implementation Guide",
    description: "Practical guide to implementing blockchain technology in business applications, covering smart contracts and decentralized systems.",
    author: "Hassan Ahmed",
    publishDate: "July 2024",
    pages: 40,
    downloads: 1950,
    category: "Blockchain",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%236366F1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white' font-family='Arial'%3EBlockchain Guide%3C/text%3E%3C/svg%3E",
    color: "from-indigo-500 to-purple-500"
  }
];

const categories = ["All", "Artificial Intelligence", "Cloud Computing", "Cybersecurity", "Digital Transformation", "Mobile Development", "Blockchain"];

export default function WhitePapersList() {
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
            Latest White Papers
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Access our collection of research papers, industry analyses, and technical guides written by our expert team
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                index === 0
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* White Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitePapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={paper.image}
                  alt={paper.title}
                  width={400}
                  height={160}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${paper.color} opacity-20`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 bg-gradient-to-r ${paper.color} text-white text-xs rounded-full font-medium`}>
                    {paper.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 leading-tight">
                  {paper.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                  {paper.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-2 mb-4 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>By {paper.author}</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {paper.publishDate}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FileText size={12} />
                      {paper.pages} pages
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={12} />
                      {paper.downloads.toLocaleString()} downloads
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${paper.color} text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2`}
                >
                  <Download size={16} />
                  Download PDF
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Load More White Papers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}