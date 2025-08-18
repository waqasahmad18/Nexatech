"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Users, Trophy, Clock, Heart, Star, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    label: "Happy Clients",
    suffix: "+"
  },
  {
    icon: Trophy,
    value: 1000,
    label: "Projects Completed",
    suffix: "+"
  },
  {
    icon: Clock,
    value: 5,
    label: "Years Experience",
    suffix: "+"
  },
  {
    icon: Heart,
    value: 98,
    label: "Client Satisfaction",
    suffix: "%"
  },
  {
    icon: Star,
    value: 4.9,
    label: "Average Rating",
    suffix: "/5"
  },
  {
    icon: Award,
    value: 15,
    label: "Industry Awards",
    suffix: "+"
  }
];

function Counter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {value === 4.9 ? count.toFixed(1) : count}
    </div>
  );
}

export default function CompanyStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Numbers That Speak
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our success is measured by the success of our clients and the impact we create in the technology landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-slate-200 dark:border-slate-700"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
              >
                <stat.icon size={32} className="text-white" />
              </motion.div>
              
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 font-medium text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Why Businesses Choose NexaTech
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Proven Track Record</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                5+ years of delivering exceptional software solutions across various industries
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Expert Team</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Highly skilled developers, designers, and project managers with international experience
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Quality Assurance</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Rigorous testing processes ensuring bug-free, scalable, and secure applications
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}