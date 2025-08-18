import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTechnologies from "@/components/services/ServiceTechnologies";

import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "Mobile App Development - iOS & Android Apps | NexaTech Pakistan",
  description: "Professional mobile app development services in Pakistan. We create native and cross-platform mobile applications using React Native, Flutter, and native technologies.",
};

const serviceData = {
  title: "Mobile App Development",
  subtitle: "Creating Innovative Mobile Experiences",
  description: "Transform your ideas into powerful mobile applications that engage users and drive business growth. Our expert team develops high-performance, user-friendly apps for iOS and Android platforms.",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
  features: [
    {
      title: "Native iOS Development",
      description: "High-performance native iOS apps using Swift and latest iOS frameworks for optimal user experience.",
      icon: "Smartphone"
    },
    {
      title: "Native Android Development",
      description: "Robust Android applications using Kotlin and Java with Material Design principles.",
      icon: "Monitor"
    },
    {
      title: "Cross-Platform Development",
      description: "Cost-effective solutions using React Native and Flutter for both iOS and Android platforms.",
      icon: "Layers"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging mobile interfaces designed for optimal user experience and conversion.",
      icon: "Palette"
    },
    {
      title: "App Store Optimization",
      description: "Strategic optimization to improve app visibility and downloads on App Store and Google Play.",
      icon: "TrendingUp"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing app maintenance, updates, and technical support to ensure smooth operation.",
      icon: "Shield"
    }
  ],
  process: [
    {
      step: "01",
      title: "Concept & Strategy",
      description: "We analyze your idea, target audience, and market to create a comprehensive mobile app strategy."
    },
    {
      step: "02",
      title: "Design & Prototyping", 
      description: "Our designers create wireframes, mockups, and interactive prototypes for your mobile app."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We develop your app using agile methodology with continuous testing and quality assurance."
    },
    {
      step: "04",
      title: "Launch & Marketing",
      description: "We handle app store submission and provide marketing support for successful app launch."
    }
  ],
  technologies: [
    { name: "React Native", category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Swift", category: "iOS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { name: "Kotlin", category: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Firebase", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Node.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "AWS", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
  ],
  portfolio: [
    {
      title: "FinTech Mobile App",
      description: "Secure mobile banking application with real-time transactions",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["React Native", "Node.js", "MongoDB"]
    },
    {
      title: "Food Delivery App",
      description: "On-demand food delivery platform with live tracking",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      tech: ["Flutter", "Firebase", "Google Maps"]
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive fitness app with workout plans and progress tracking",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["Swift", "HealthKit", "Core Data"]
    }
  ]
};

export default function MobileDevelopmentPage() {
  return (
    <>
      <Header />
      <ServiceHero service={serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServiceTechnologies technologies={serviceData.technologies} />

      <ServiceCTA 
        title="Ready to Build Your Mobile App?"
        description="Let's turn your mobile app idea into reality with our expert development team."
      />
      <Footer />
    </>
  );
}