import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTechnologies from "@/components/services/ServiceTechnologies";

import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "Cybersecurity Services - Security Consulting & Solutions | NexaTech",
  description: "Professional cybersecurity services in Pakistan. We provide security consulting, penetration testing, and comprehensive security solutions to protect your business.",
};

const serviceData = {
  title: "Cybersecurity",
  subtitle: "Protecting Your Digital Assets",
  description: "Safeguard your business with our comprehensive cybersecurity solutions. We provide advanced threat protection, security assessments, and incident response to keep your data and systems secure.",
  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
  features: [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and assess your current security posture.",
      icon: "Shield"
    },
    {
      title: "Penetration Testing",
      description: "Ethical hacking and penetration testing to discover security weaknesses before attackers do.",
      icon: "Search"
    },
    {
      title: "Security Consulting",
      description: "Expert guidance on security strategy, compliance, and best practices for your organization.",
      icon: "Users"
    },
    {
      title: "Incident Response",
      description: "24/7 incident response services to quickly contain and mitigate security breaches.",
      icon: "AlertTriangle"
    },
    {
      title: "Security Training",
      description: "Employee security awareness training to build a human firewall against cyber threats.",
      icon: "GraduationCap"
    },
    {
      title: "Compliance Management",
      description: "Help achieve and maintain compliance with industry standards like ISO 27001, SOC 2, and GDPR.",
      icon: "CheckCircle"
    }
  ],
  process: [
    {
      step: "01",
      title: "Risk Assessment",
      description: "We evaluate your current security posture and identify potential vulnerabilities and threats."
    },
    {
      step: "02",
      title: "Security Strategy",
      description: "We develop a comprehensive security strategy tailored to your business needs and risk profile."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We implement security controls, tools, and processes to protect your digital assets."
    },
    {
      step: "04",
      title: "Monitoring & Response",
      description: "Continuous monitoring and rapid response to security incidents and emerging threats."
    }
  ],
  technologies: [
    { name: "Nessus", category: "Vulnerability Scanner", logo: "https://www.vectorlogo.zone/logos/tenable/tenable-icon.svg" },
    { name: "Metasploit", category: "Penetration Testing", logo: "https://www.vectorlogo.zone/logos/metasploit/metasploit-icon.svg" },
    { name: "Wireshark", category: "Network Analysis", logo: "https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg" },
    { name: "Burp Suite", category: "Web Security", logo: "https://www.vectorlogo.zone/logos/portswigger/portswigger-icon.svg" },
    { name: "Splunk", category: "SIEM", logo: "https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg" },
    { name: "CrowdStrike", category: "Endpoint Security", logo: "https://www.vectorlogo.zone/logos/crowdstrike/crowdstrike-icon.svg" },
    { name: "Cloudflare", category: "DDoS Protection", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
    { name: "AWS Security", category: "Cloud Security", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
  ],
  portfolio: [
    {
      title: "Financial Institution Security",
      description: "Comprehensive security overhaul for banking infrastructure",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["Penetration Testing", "SOC 2", "Multi-factor Auth"]
    },
    {
      title: "Healthcare Data Protection",
      description: "HIPAA-compliant security framework for medical records",
      image: "https://via.placeholder.com/600x400/059669/FFFFFF?text=Healthcare+Security",
      tech: ["HIPAA Compliance", "Encryption", "Access Control"]
    },
    {
      title: "E-commerce Security Platform",
      description: "Multi-layered security solution for online retail platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["WAF", "DDoS Protection", "PCI Compliance"]
    }
  ]
};

export default function CybersecurityPage() {
  return (
    <>
      <Header />
      <ServiceHero service={serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServiceTechnologies technologies={serviceData.technologies} />

      <ServiceCTA 
        title="Ready to Secure Your Business?"
        description="Protect your organization with our comprehensive cybersecurity solutions and expert guidance."
      />
      <Footer />
    </>
  );
}