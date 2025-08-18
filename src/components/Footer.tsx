"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Github,
  ArrowUp
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-development" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "Data Analytics", href: "/services/data-analytics" },
    { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
    { name: "Digital Transformation", href: "/services/digital-transformation" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Our Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" }
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Documentation", href: "/documentation" },
    { name: "API Reference", href: "/api-reference" },
    { name: "Support Center", href: "/support" },
    { name: "Terms of Service", href: "/terms" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { icon: Twitter, href: "#", color: "hover:text-sky-500" },
  { icon: Instagram, href: "#", color: "hover:text-pink-600" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
  { icon: Github, href: "#", color: "hover:text-gray-600" }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "success" | "error">("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setSubscriptionStatus("error");
      setTimeout(() => setSubscriptionStatus("idle"), 3000);
      return;
    }

    setIsSubscribing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically make an API call to your newsletter service
      // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
      
      setSubscriptionStatus("success");
      setEmail("");
      setTimeout(() => setSubscriptionStatus("idle"), 8000);
    } catch (error) {
      setSubscriptionStatus("error");
      setTimeout(() => setSubscriptionStatus("idle"), 3000);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold">NexaTech</span>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              NexaTech is Pakistan's leading technology company, specializing in innovative software solutions that transform businesses and drive digital growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={18} />
                <span className="text-slate-300">hello@nexatech.pk</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={18} />
                <span className="text-slate-300">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-400" size={18} />
                <span className="text-slate-300">Lahore, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  viewport={{ once: true }}
                  className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:bg-slate-700`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-800"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-6">
              Subscribe to our newsletter for the latest tech insights and company updates
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isSubscribing}
                  className={`flex-1 px-4 py-3 rounded-lg bg-slate-800 border text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    subscriptionStatus === "error" 
                      ? "border-red-500 focus:ring-red-500" 
                      : "border-slate-700"
                  } ${isSubscribing ? "opacity-50 cursor-not-allowed" : ""}`}
                />
                <motion.button
                  type="submit"
                  disabled={isSubscribing || !email}
                  whileHover={!isSubscribing ? { scale: 1.05 } : {}}
                  whileTap={!isSubscribing ? { scale: 0.95 } : {}}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isSubscribing || !email
                      ? "bg-slate-600 cursor-not-allowed opacity-50"
                      : subscriptionStatus === "success"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  } text-white`}
                >
                  {isSubscribing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : subscriptionStatus === "success" ? (
                    "Subscribed!"
                  ) : (
                    "Subscribe"
                  )}
                </motion.button>
              </div>
              
              {/* Status Messages */}
              {subscriptionStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-2"
                >
                  <p className="text-green-400 text-center font-medium">
                    ✅ Thank you for subscribing!
                  </p>
                  <p className="text-green-300 text-sm text-center mt-1">
                    Check your email for confirmation.
                  </p>
                </motion.div>
              )}
              
              {subscriptionStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mt-2"
                >
                  <p className="text-red-400 text-center text-sm">
                    ❌ Please enter a valid email address.
                  </p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm mb-4 md:mb-0"
            >
              © 2024 NexaTech. All rights reserved. Built with ❤️ in Pakistan.
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              
              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}