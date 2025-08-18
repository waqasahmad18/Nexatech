"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const team = [
  {
    name: "James Wilson",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with 10+ years in tech industry, driving NexaTech's strategic growth and innovation across Pakistan's digital landscape.",
    expertise: ["Strategic Planning", "Business Development", "Team Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@nexatech.pk"
    }
  },
  {
    name: "Emily Thompson",
    role: "Chief Technology Officer",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%236366F1'/%3E%3Ccircle cx='200' cy='160' r='60' fill='white'/%3E%3Crect x='160' y='240' width='80' height='120' rx='40' fill='white'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white' font-family='Arial'%3EEmily Thompson%3C/text%3E%3C/svg%3E",
    bio: "Tech expert specializing in scalable architectures and emerging technologies with 8+ years experience in software development.",
    expertise: ["System Architecture", "Cloud Computing", "DevOps"],
    social: {
      linkedin: "#",
      github: "#",
      email: "emily@nexatech.pk"
    }
  },
  {
    name: "Michael Davis",
    role: "Lead Full Stack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack developer passionate about creating innovative web solutions and mentoring junior developers in modern technologies.",
    expertise: ["React", "Node.js", "MongoDB", "TypeScript"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "michael@nexatech.pk"
    }
  },
  {
    name: "Emma Kalinton",
    role: "UI/UX Design Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Creative designer focused on user-centered design and creating exceptional digital experiences that delight users and drive conversions.",
    expertise: ["User Research", "Prototyping", "Visual Design", "Figma"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emma@nexatech.pk"
    }
  },
  {
    name: "David Johnson",
    role: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Mobile development specialist with expertise in React Native, Flutter, and native iOS/Android development for scalable applications.",
    expertise: ["React Native", "Flutter", "iOS", "Android"],
    social: {
      linkedin: "#",
      github: "#",
      email: "david@nexatech.pk"
    }
  },
  {
    name: "Annie Williams",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bio: "Agile project management expert ensuring timely delivery and client satisfaction across all projects with exceptional communication skills.",
    expertise: ["Agile", "Scrum", "Client Relations", "Risk Management"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "annie@nexatech.pk"
    }
  },
  {
    name: "Robert Brown",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "Backend specialist focused on building robust, scalable server-side applications with expertise in microservices and database optimization.",
    expertise: ["Python", "Django", "PostgreSQL", "Docker"],
    social: {
      linkedin: "#",
      github: "#",
      email: "robert@nexatech.pk"
    }
  },
  {
    name: "Zara Sheikh",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Frontend developer passionate about creating beautiful, responsive user interfaces using modern frameworks and best practices.",
    expertise: ["React", "Vue.js", "CSS", "JavaScript"],
    social: {
      linkedin: "#",
      github: "#",
      email: "zara@nexatech.pk"
    }
  },
  {
    name: "Christopher Lee",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "DevOps engineer specializing in cloud infrastructure, automation, and ensuring smooth deployment pipelines for enterprise applications.",
    expertise: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    social: {
      linkedin: "#",
      github: "#",
      email: "christopher@nexatech.pk"
    }
  }
];

export default function TeamGrid() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
            Our Expert Team Members
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Each team member brings unique skills and perspectives, contributing to our collective success in delivering exceptional solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {/* Team Member Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-sky-500 transition-all duration-300"
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Team Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}