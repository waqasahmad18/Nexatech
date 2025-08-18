"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js 14",
    excerpt: "Learn how to create high-performance, scalable React applications using the latest features of Next.js 14, including app router and server components.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    author: "Ahmed Hassan",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "Dec 15, 2024",
    category: "Web Development",
    readTime: "8 min read",
    slug: "building-scalable-react-nextjs-14"
  },
  {
    id: 2,
    title: "The Future of Mobile Development: React Native vs Flutter",
    excerpt: "A comprehensive comparison of React Native and Flutter for cross-platform mobile development, helping you choose the right framework for your project.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    author: "Emily Thompson",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face",
    date: "Dec 12, 2024",
    category: "Mobile Development",
    readTime: "12 min read",
    slug: "react-native-vs-flutter-2024"
  },
  {
    id: 3,
    title: "AI and Machine Learning in Pakistan's Tech Industry",
    excerpt: "Exploring how artificial intelligence and machine learning are transforming businesses in Pakistan and creating new opportunities for growth.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
    author: "Ali Rahman",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "Dec 10, 2024",
    category: "AI & Machine Learning",
    readTime: "10 min read",
    slug: "ai-ml-pakistan-tech-industry"
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for Pakistani Businesses",
    excerpt: "Essential cybersecurity measures every Pakistani business should implement to protect against data breaches and cyber threats.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    author: "Emma Kalinton",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "Dec 8, 2024",
    category: "Cybersecurity",
    readTime: "15 min read",
    slug: "cybersecurity-best-practices-pakistan"
  },
  {
    id: 5,
    title: "Cloud Migration Strategies for Growing Companies",
    excerpt: "A step-by-step guide to successful cloud migration, covering planning, execution, and optimization for maximum business value.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    author: "Muhammad Usman",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    date: "Dec 5, 2024",
    category: "Cloud Computing",
    readTime: "11 min read",
    slug: "cloud-migration-strategies-guide"
  },
  {
    id: 6,
    title: "UI/UX Design Trends Shaping 2024",
    excerpt: "Discover the latest UI/UX design trends that are defining user experiences in 2024, from micro-interactions to inclusive design.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    author: "Aisha Malik",
    authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    date: "Dec 3, 2024",
    category: "UI/UX Design",
    readTime: "7 min read",
    slug: "ui-ux-design-trends-2024"
  }
];

export default function BlogPosts() {
  return (
    <div className="space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-slate-800 dark:text-white mb-8"
      >
        Latest Articles
      </motion.h2>

      <div className="space-y-12">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Article Image */}
              <div className="md:col-span-1 relative h-64 md:h-auto overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="md:col-span-2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 group"
                >
                  Read Full Article
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Load More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
          Load More Articles
        </button>
      </motion.div>
    </div>
  );
}