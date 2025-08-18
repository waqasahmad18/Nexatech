"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette, 
  Shield, 
  Zap,
  Database,
  Globe,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies like React, Next.js, Vue.js, and Node.js. From simple websites to complex enterprise applications.",
    features: ["React & Next.js", "Node.js & Express", "Progressive Web Apps", "E-commerce Solutions"],
    color: "from-blue-500 to-cyan-500",
    slug: "web-development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native technologies.",
    features: ["React Native", "Flutter", "iOS Development", "Android Development"],
    color: "from-purple-500 to-pink-500",
    slug: "mobile-development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, Google Cloud Platform, and modern DevOps practices.",
    features: ["AWS Services", "Azure Cloud", "Google Cloud", "DevOps & CI/CD"],
    color: "from-green-500 to-emerald-500",
    slug: "cloud-solutions",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces and exceptional user experiences that convert visitors into customers and enhance brand value.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    color: "from-orange-500 to-red-500",
    slug: "ui-ux-design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets, ensure data privacy compliance, and prevent cyber threats.",
    features: ["Security Audits", "Penetration Testing", "Data Protection", "Compliance Solutions"],
    color: "from-indigo-500 to-purple-500",
    slug: "cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Advanced data analytics and business intelligence solutions to drive informed decision making and business growth.",
    features: ["Data Visualization", "Business Intelligence", "Predictive Analytics", "Data Warehousing"],
    color: "from-teal-500 to-blue-500",
    slug: "data-analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
  },
  {
    icon: Zap,
    title: "AI & Machine Learning",
    description: "Intelligent automation and ML-powered solutions to revolutionize your business processes and enhance efficiency.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "AI Automation"],
    color: "from-yellow-500 to-orange-500",
    slug: "ai-machine-learning",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=300&fit=crop"
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "End-to-end digital transformation consulting to modernize your business operations and embrace digital technologies.",
    features: ["Digital Strategy", "Process Automation", "Legacy Modernization", "Technology Consulting"],
    color: "from-pink-500 to-purple-500",
    slug: "digital-transformation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
  }
];

export default function ServicesList() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-60`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
                    <service.icon size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? We specialize in creating custom technology solutions tailored to your unique business needs.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discuss Your Project
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}