"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What services does NexaTech provide?",
        answer: "NexaTech provides comprehensive software development services including web development, mobile app development, cloud solutions, UI/UX design, cybersecurity, and AI/machine learning solutions."
      },
      {
        question: "How do I get started with NexaTech?",
        answer: "You can get started by contacting us through our contact form, scheduling a consultation call, or reaching out via live chat. We'll discuss your project requirements and provide a customized solution."
      },
      {
        question: "What is your development process?",
        answer: "Our development process includes discovery & planning, design & prototyping, development & testing, and launch & support phases. We follow agile methodology to ensure quality and timely delivery."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What technologies do you work with?",
        answer: "We work with modern technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, Google Cloud, and many more. We choose the best technology stack for each project."
      },
      {
        question: "Do you provide API integration services?",
        answer: "Yes, we provide comprehensive API integration services including REST APIs, GraphQL, third-party integrations, and custom API development. We also offer API documentation and testing services."
      },
      {
        question: "How do you ensure code quality?",
        answer: "We ensure code quality through code reviews, automated testing, continuous integration, and following industry best practices. Our team uses modern development tools and maintains high coding standards."
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "How do you price your services?",
        answer: "Our pricing depends on project scope, complexity, timeline, and technology requirements. We offer fixed-price projects, hourly rates, and dedicated team models. Contact us for a customized quote."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans including milestone-based payments, monthly payments for ongoing projects, and custom payment schedules based on your business needs."
      },
      {
        question: "What is included in your support packages?",
        answer: "Our support packages include bug fixes, security updates, performance monitoring, regular backups, technical support, and feature enhancements. Different tiers offer varying levels of support."
      }
    ]
  },
  {
    category: "Support",
    questions: [
      {
        question: "What are your support hours?",
        answer: "We offer 24/7 support for enterprise customers and business hours support (9 AM - 6 PM PST) for standard customers. Emergency support is available for critical issues."
      },
      {
        question: "How can I track my project progress?",
        answer: "We provide project management dashboards, regular progress reports, and scheduled meetings to keep you updated. You'll have access to our project management tools for real-time tracking."
      },
      {
        question: "Do you provide training for the delivered solutions?",
        answer: "Yes, we provide comprehensive training for your team including user manuals, video tutorials, live training sessions, and ongoing support to ensure smooth adoption of the solution."
      }
    ]
  }
];

export default function SupportFAQ() {
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and support.
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const questionId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openQuestions.includes(questionId);
                  
                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: questionIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="w-full p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-slate-800 dark:text-white pr-4">
                            {faq.question}
                          </h4>
                          {isOpen ? (
                            <ChevronDown size={20} className="text-slate-500 flex-shrink-0" />
                          ) : (
                            <ChevronRight size={20} className="text-slate-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Need Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-700"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Still Need Help?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Live Chat
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}