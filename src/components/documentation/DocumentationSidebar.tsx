"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, Book, Code, Settings, Zap } from "lucide-react";
import { useState } from "react";

interface DocSection {
  title: string;
  icon: React.ComponentType<any>;
  items: string[];
}

const docSections: DocSection[] = [
  {
    title: "Getting Started",
    icon: Zap,
    items: ["Quick Start", "Installation", "Authentication", "First API Call"]
  },
  {
    title: "API Reference",
    icon: Code,
    items: ["Authentication API", "User Management", "Payment Processing", "Data Analytics", "File Upload", "Webhooks"]
  },
  {
    title: "SDKs & Libraries",
    icon: Book,
    items: ["JavaScript SDK", "Python SDK", "PHP SDK", "React Components", "Vue Components", "Mobile SDKs"]
  },
  {
    title: "Integration Guides",
    icon: Settings,
    items: ["E-commerce Integration", "CRM Integration", "Mobile App Integration", "Webhook Setup", "Custom Solutions"]
  }
];

export default function DocumentationSidebar() {
  const [openSections, setOpenSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <aside className="w-80 bg-slate-50 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 min-h-screen">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Documentation</h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">API guides and references</p>
      </div>
      
      <nav className="p-4">
        {docSections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
            className="mb-4"
          >
            <button
              onClick={() => toggleSection(sectionIndex)}
              className="w-full flex items-center justify-between p-3 text-left bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <section.icon size={18} className="text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-slate-800 dark:text-white">{section.title}</span>
              </div>
              {openSections.includes(sectionIndex) ? (
                <ChevronDown size={16} className="text-slate-500" />
              ) : (
                <ChevronRight size={16} className="text-slate-500" />
              )}
            </button>
            
            <motion.div
              initial={false}
              animate={{
                height: openSections.includes(sectionIndex) ? "auto" : 0,
                opacity: openSections.includes(sectionIndex) ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-2 ml-4 space-y-1">
                {section.items.map((item, itemIndex) => (
                  <motion.button
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                    className="block w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </nav>
    </aside>
  );
}