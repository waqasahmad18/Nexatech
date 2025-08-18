import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTechnologies from "@/components/services/ServiceTechnologies";

import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "Web Development Services - Custom Website Development | NexaTech",
  description: "Professional web development services in Pakistan. We build custom websites, web applications, and e-commerce solutions using latest technologies like React, Next.js, and Node.js.",
};

const serviceData = {
  title: "Web Development",
  subtitle: "Building Modern, Scalable Web Solutions",
  description: "Transform your business with custom web applications that drive growth and deliver exceptional user experiences. Our expert developers create responsive, high-performance websites tailored to your unique needs.",
  image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
  features: [
    {
      title: "Custom Web Applications",
      description: "Bespoke web solutions built from scratch to match your exact business requirements and goals.",
      icon: "Code"
    },
    {
      title: "E-commerce Development",
      description: "Full-featured online stores with payment integration, inventory management, and analytics.",
      icon: "ShoppingCart"
    },
    {
      title: "Responsive Design",
      description: "Mobile-first designs that look perfect on all devices and screen sizes.",
      icon: "Smartphone"
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast websites with optimized loading times and superior user experience.",
      icon: "Zap"
    },
    {
      title: "SEO Optimization",
      description: "Built-in SEO best practices to help your website rank higher in search results.",
      icon: "Search"
    },
    {
      title: "CMS Integration",
      description: "Easy-to-use content management systems for seamless content updates.",
      icon: "Edit"
    }
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive development strategy."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes to visualize the user interface and experience."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers build your application using best practices and conduct thorough testing."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your website and provide ongoing maintenance and support services."
    }
  ],
  technologies: [
    { name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "MongoDB", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "AWS", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", category: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
  ],
  portfolio: [
    {
      title: "E-Commerce Platform",
      description: "Complete online marketplace with vendor management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["Next.js", "Node.js", "MongoDB"]
    },
    {
      title: "Corporate Website",
      description: "Professional business website with CMS integration", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "Express", "PostgreSQL"]
    },
    {
      title: "SaaS Application",
      description: "Cloud-based software solution with subscription model",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", 
      tech: ["Vue.js", "Laravel", "MySQL"]
    }
  ]
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <ServiceHero service={serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServiceTechnologies technologies={serviceData.technologies} />

      <ServiceCTA 
        title="Ready to Build Your Web Solution?"
        description="Let's discuss your web development project and create something amazing together."
      />
      <Footer />
    </>
  );
}