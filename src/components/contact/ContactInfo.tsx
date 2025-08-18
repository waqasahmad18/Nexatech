"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  CheckCircle,
  Users,
  Award,
  Zap,
  Shield
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@nexatech.pk",
    subtitle: "We respond within 24 hours",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+92 300 1234567",
    subtitle: "Mon-Fri 9AM-6PM PST",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Lahore, Pakistan",
    subtitle: "Schedule an appointment",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon-Fri: 9AM-6PM",
    subtitle: "Saturday: 10AM-4PM",
    color: "from-orange-500 to-red-500"
  }
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "5+ years of experience with latest technologies"
  },
  {
    icon: Zap,
    title: "Fast Delivery", 
    description: "Agile development with quick turnaround times"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes"
  },
  {
    icon: Award,
    title: "100% Satisfaction",
    description: "We guarantee your satisfaction with unlimited revisions"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "98%", label: "Success Rate" },
  { number: "24/7", label: "Support" }
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Information */}
      <div>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
          Ready to start your project? Contact us today and let's discuss how we can bring your vision to life with cutting-edge technology solutions.
        </p>
        
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0`}
              >
                <info.icon size={24} className="text-white" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-1">
                  {info.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  {info.details}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {info.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700"
      >
        <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center">
          <MessageSquare className="mr-2 text-blue-600" size={20} />
          Why Choose NexaTech?
        </h3>
        <div className="space-y-4">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3"
            >
              <item.icon className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={16} />
              <div>
                <h4 className="font-medium text-slate-800 dark:text-white">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Process Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
      >
        <h3 className="font-bold text-slate-800 dark:text-white mb-4">
          What Happens Next?
        </h3>
        <div className="space-y-3">
          <div className="flex items-center text-slate-600 dark:text-slate-300">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
              1
            </div>
            <span className="text-sm">We review your project requirements</span>
          </div>
          <div className="flex items-center text-slate-600 dark:text-slate-300">
            <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
              2
            </div>
            <span className="text-sm">Schedule a consultation call within 24 hours</span>
          </div>
          <div className="flex items-center text-slate-600 dark:text-slate-300">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
              3
            </div>
            <span className="text-sm">Provide detailed proposal and timeline</span>
          </div>
          <div className="flex items-center text-slate-600 dark:text-slate-300">
            <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
              4
            </div>
            <span className="text-sm">Start development after agreement</span>
          </div>
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800"
      >
        <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">
          Need Urgent Help?
        </h3>
        <p className="text-red-600 dark:text-red-300 text-sm mb-3">
          For urgent project requirements or technical emergencies, contact us directly:
        </p>
        <a
          href="tel:+923001234567"
          className="inline-flex items-center text-red-700 dark:text-red-200 font-semibold hover:text-red-800 dark:hover:text-red-100 transition-colors duration-300"
        >
          <Phone size={16} className="mr-2" />
          +92 300 1234567 (Emergency Line)
        </a>
      </motion.div>
    </motion.div>
  );
}