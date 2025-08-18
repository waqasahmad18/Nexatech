"use client";

import { motion } from "framer-motion";
import { Eye, Heart, Award } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-4 sm:mb-6">
            Our Portfolio
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Discover the innovative solutions we've built for our clients. From startups to enterprises, we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">500+ Projects</h3>
              <p className="text-gray-300 text-xs sm:text-sm text-center">
                Successfully delivered across various industries
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">98% Satisfaction</h3>
              <p className="text-gray-300 text-xs sm:text-sm text-center">
                Client satisfaction rate with repeat business
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Award Winning</h3>
              <p className="text-gray-300 text-xs sm:text-sm text-center">
                Recognition for excellence in development
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}