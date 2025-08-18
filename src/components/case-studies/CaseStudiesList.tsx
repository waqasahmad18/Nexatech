"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Building, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Digital Banking Transformation",
    client: "Pakistan National Bank",
    industry: "Finance",
    duration: "8 months",
    year: "2024",
    challenge: "Modernize legacy banking systems and implement mobile banking platform",
    solution: "Cloud-native microservices architecture with AI-powered fraud detection",
    results: [
      "70% increase in digital transactions",
      "45% reduction in operational costs",
      "99.9% system uptime achieved",
      "2M+ active mobile users"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%233B82F6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='white' font-family='Arial'%3EDigital Banking%3C/text%3E%3C/svg%3E",
    color: "from-blue-500 to-cyan-500",
    slug: "digital-banking-transformation"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    client: "Shaukat Khanum Hospital",
    industry: "Healthcare",
    duration: "6 months",
    year: "2024",
    challenge: "Integrate patient management with telemedicine capabilities",
    solution: "HIPAA-compliant platform with real-time video consultations",
    results: [
      "200% increase in patient consultations",
      "60% reduction in wait times",
      "100% HIPAA compliance",
      "95% patient satisfaction"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%2310B981'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='white' font-family='Arial'%3EHealthcare System%3C/text%3E%3C/svg%3E",
    color: "from-green-500 to-emerald-500",
    slug: "healthcare-management-system"
  },
  {
    id: 3,
    title: "E-commerce Platform Scaling",
    client: "Daraz Pakistan",
    industry: "E-commerce",
    duration: "10 months",
    year: "2023",
    challenge: "Handle 10x traffic growth during peak shopping seasons",
    solution: "Auto-scaling infrastructure with CDN and microservices",
    results: [
      "1000% traffic capacity increase",
      "50% faster page load times",
      "99.99% uptime during sales",
      "$50M+ in sales handled"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%238B5CF6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='white' font-family='Arial'%3EE-commerce Platform%3C/text%3E%3C/svg%3E",
    color: "from-purple-500 to-pink-500",
    slug: "ecommerce-platform-scaling"
  },
  {
    id: 4,
    title: "Smart City IoT Infrastructure",
    client: "Lahore Smart City",
    industry: "Government",
    duration: "12 months",
    year: "2023",
    challenge: "Implement city-wide IoT sensors for traffic and utilities",
    solution: "Edge computing with real-time analytics and AI predictions",
    results: [
      "40% reduction in traffic congestion",
      "30% energy savings achieved",
      "500+ IoT sensors deployed",
      "24/7 monitoring system"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%236366F1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='white' font-family='Arial'%3ESmart City IoT%3C/text%3E%3C/svg%3E",
    color: "from-indigo-500 to-purple-500",
    slug: "smart-city-iot-infrastructure"
  },
  {
    id: 5,
    title: "Educational Platform Revolution",
    client: "Virtual University",
    industry: "Education",
    duration: "9 months",
    year: "2023",
    challenge: "Support 100K+ concurrent online students",
    solution: "Scalable LMS with AI-powered personalized learning",
    results: [
      "300% increase in student engagement",
      "80% improvement in completion rates",
      "100K+ concurrent users supported",
      "AI-powered learning paths"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%2306B6D4'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='white' font-family='Arial'%3EEducation Platform%3C/text%3E%3C/svg%3E",
    color: "from-cyan-500 to-blue-500",
    slug: "educational-platform-revolution"
  },
  {
    id: 6,
    title: "Supply Chain Optimization",
    client: "Unilever Pakistan",
    industry: "Manufacturing",
    duration: "7 months",
    year: "2024",
    challenge: "Optimize supply chain and reduce inventory costs",
    solution: "AI-driven demand forecasting with blockchain tracking",
    results: [
      "35% reduction in inventory costs",
      "50% faster delivery times",
      "Real-time supply chain visibility",
      "Predictive maintenance implemented"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23F59E0B'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='white' font-family='Arial'%3ESupply Chain%3C/text%3E%3C/svg%3E",
    color: "from-orange-500 to-yellow-500",
    slug: "supply-chain-optimization"
  }
];

const categories = ["All", "Finance", "Healthcare", "E-commerce", "Government", "Education", "Manufacturing"];

export default function CaseStudiesList() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                index === 0
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-20`}></div>
                
                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${study.color} text-white text-sm rounded-full font-medium`}>
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Building size={14} />
                    {study.client}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {study.year}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {study.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Challenge:</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Solution:</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                    <TrendingUp size={16} />
                    Key Results:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-2 text-sm">
                        <div className={`w-2 h-2 bg-gradient-to-r ${study.color} rounded-full`}></div>
                        <span className="text-slate-600 dark:text-slate-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/case-studies/${study.slug}`}
                  className={`group inline-flex items-center gap-2 bg-gradient-to-r ${study.color} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg`}
                >
                  Read Full Case Study
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
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
            Load More Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}