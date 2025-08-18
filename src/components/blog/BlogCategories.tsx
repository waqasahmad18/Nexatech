"use client";

import { motion } from "framer-motion";
import { Search, Tag, TrendingUp } from "lucide-react";

const categories = [
  { name: "Web Development", count: 12 },
  { name: "Mobile Development", count: 8 },
  { name: "AI & Machine Learning", count: 6 },
  { name: "Cybersecurity", count: 5 },
  { name: "Cloud Computing", count: 7 },
  { name: "UI/UX Design", count: 9 },
  { name: "DevOps", count: 4 },
  { name: "Blockchain", count: 3 }
];

const recentPosts = [
  {
    title: "Building Scalable React Applications",
    date: "Dec 15, 2024"
  },
  {
    title: "React Native vs Flutter Comparison",
    date: "Dec 12, 2024"
  },
  {
    title: "AI in Pakistan's Tech Industry",
    date: "Dec 10, 2024"
  },
  {
    title: "Cybersecurity Best Practices",
    date: "Dec 8, 2024"
  }
];

const tags = [
  "React", "Next.js", "Node.js", "Flutter", "React Native", 
  "AI", "Machine Learning", "Cybersecurity", "Cloud", "AWS",
  "UI/UX", "Design", "JavaScript", "TypeScript", "Python"
];

export default function BlogCategories() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
      >
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
          <Search className="mr-2" size={20} />
          Search Articles
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for articles..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
      >
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
          <Tag className="mr-2" size={20} />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 text-left">
                <span className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                  {category.name}
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                  {category.count}
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
      >
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
          <TrendingUp className="mr-2" size={20} />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pb-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0 last:pb-0"
            >
              <h4 className="text-slate-800 dark:text-white font-medium mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                {post.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {post.date}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
      >
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700"
      >
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
          Stay Updated
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
          Subscribe to our newsletter and get the latest tech insights delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
}