import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTechnologies from "@/components/services/ServiceTechnologies";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "Digital Transformation Services - Modernize Your Business | NexaTech",
  description: "Comprehensive digital transformation consulting services in Pakistan. Modernize your business operations, embrace digital technologies, and drive innovation with our expert guidance.",
};

const serviceData = {
  title: "Digital Transformation",
  subtitle: "Modernize Your Business for the Digital Age",
  description: "Navigate the digital landscape with confidence. Our digital transformation services help organizations modernize their operations, embrace new technologies, and create competitive advantages in today's digital economy.",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23EC4899'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='20' fill='white' font-family='Arial'%3EDigital Transformation%3C/text%3E%3C/svg%3E",
  features: [
    {
      title: "Digital Strategy",
      description: "Comprehensive digital roadmap that aligns technology initiatives with your business objectives.",
      icon: "🎯"
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that improve efficiency and reduce costs.",
      icon: "🤖"
    },
    {
      title: "Legacy Modernization",
      description: "Transform outdated systems into modern, scalable, and efficient digital platforms.",
      icon: "🔄"
    },
    {
      title: "Technology Consulting",
      description: "Expert guidance on selecting and implementing the right technologies for your business needs.",
      icon: "💡"
    },
    {
      title: "Change Management",
      description: "Support your team through digital transformation with comprehensive change management strategies.",
      icon: "👥"
    },
    {
      title: "Digital Culture",
      description: "Foster a digital-first mindset across your organization for sustained transformation success.",
      icon: "🌟"
    }
  ],
  process: [
    {
      step: "1",
      title: "Current State Analysis",
      description: "Comprehensive assessment of your existing processes, technologies, and digital maturity level."
    },
    {
      step: "2",
      title: "Vision & Strategy",
      description: "Define your digital vision and create a strategic roadmap for transformation initiatives."
    },
    {
      step: "3",
      title: "Implementation Planning",
      description: "Develop detailed implementation plans with timelines, resources, and success metrics."
    },
    {
      step: "4",
      title: "Execution & Support",
      description: "Execute transformation initiatives with ongoing support and continuous optimization."
    }
  ],
  technologies: [
    { name: "Cloud Platforms", category: "Infrastructure", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%230EA5E9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='white'%3ECP%3C/text%3E%3C/svg%3E" },
    { name: "Microsoft 365", category: "Productivity", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23FF6B35'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='white'%3EM365%3C/text%3E%3C/svg%3E" },
    { name: "Salesforce", category: "CRM", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%2300A1E0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='white'%3ESF%3C/text%3E%3C/svg%3E" },
    { name: "ServiceNow", category: "ITSM", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%2362D84E'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='white'%3ESN%3C/text%3E%3C/svg%3E" },
    { name: "Docker", category: "Containerization", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%232496ED'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='white'%3EDK%3C/text%3E%3C/svg%3E" },
    { name: "Kubernetes", category: "Orchestration", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23326CE5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='white'%3EK8s%3C/text%3E%3C/svg%3E" }
  ]
};

export default function DigitalTransformationPage() {
  return (
    <>
      <Header />
      <ServiceHero service={serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServiceTechnologies technologies={serviceData.technologies} />
      <ServiceCTA 
        title="Ready to Transform Your Business?"
        description="Start your digital transformation journey with our expert guidance and proven methodologies."
      />
      <Footer />
    </>
  );
}