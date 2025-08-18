import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTechnologies from "@/components/services/ServiceTechnologies";

import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "UI/UX Design Services - User Experience & Interface Design | NexaTech",
  description: "Professional UI/UX design services in Pakistan. We create intuitive user interfaces and exceptional user experiences for web and mobile applications.",
};

const serviceData = {
  title: "UI/UX Design",
  subtitle: "Crafting Exceptional User Experiences",
  description: "Transform your digital products with user-centered design that delights users and drives conversions. Our expert designers create intuitive interfaces that balance aesthetics with functionality.",
  image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
  features: [
    {
      title: "User Research & Analysis",
      description: "In-depth user research to understand your audience and create personas for targeted design solutions.",
      icon: "Users"
    },
    {
      title: "Wireframing & Prototyping",
      description: "Interactive wireframes and prototypes to visualize user flows and test design concepts.",
      icon: "Layers"
    },
    {
      title: "Visual Design",
      description: "Beautiful, modern interfaces that align with your brand identity and captivate users.",
      icon: "Palette"
    },
    {
      title: "Responsive Design",
      description: "Seamless experiences across all devices and screen sizes with mobile-first approach.",
      icon: "Smartphone"
    },
    {
      title: "Usability Testing",
      description: "Comprehensive testing to identify pain points and optimize user experience.",
      icon: "TestTube"
    },
    {
      title: "Design Systems",
      description: "Scalable design systems and style guides for consistent brand experiences.",
      icon: "Grid"
    }
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We conduct user research, competitor analysis, and define project requirements and goals."
    },
    {
      step: "02",
      title: "Ideation & Wireframing",
      description: "We create user journeys, wireframes, and information architecture for optimal user flow."
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description: "We design high-fidelity mockups and create interactive prototypes for testing."
    },
    {
      step: "04",
      title: "Testing & Refinement",
      description: "We conduct usability testing and refine designs based on user feedback and data."
    }
  ],
  technologies: [
    { name: "Figma", category: "Design Tool", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Adobe XD", category: "Design Tool", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
    { name: "Sketch", category: "Design Tool", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
    { name: "Adobe Photoshop", category: "Graphics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "Adobe Illustrator", category: "Graphics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
    { name: "InVision", category: "Prototyping", logo: "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg" },
    { name: "Principle", category: "Animation", logo: "https://www.vectorlogo.zone/logos/principleformac/principleformac-icon.svg" },
    { name: "Framer", category: "Prototyping", logo: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" }
  ],
  portfolio: [
    {
      title: "E-commerce Platform Design",
      description: "Complete UI/UX redesign that increased conversion by 40%",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Figma", "User Research", "A/B Testing"]
    },
    {
      title: "Mobile Banking App",
      description: "Intuitive mobile app design for seamless banking experience",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["Sketch", "Prototyping", "Usability Testing"]
    },
    {
      title: "SaaS Dashboard Design",
      description: "Data-driven dashboard design for business analytics platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Adobe XD", "Data Visualization", "User Testing"]
    }
  ]
};

export default function UIUXDesignPage() {
  return (
    <>
      <Header />
      <ServiceHero service={serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServiceTechnologies technologies={serviceData.technologies} />

      <ServiceCTA 
        title="Ready to Transform Your User Experience?"
        description="Let's create beautiful, user-centered designs that drive engagement and conversions."
      />
      <Footer />
    </>
  );
}