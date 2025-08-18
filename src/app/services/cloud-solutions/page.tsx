import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTechnologies from "@/components/services/ServiceTechnologies";

import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "Cloud Solutions - AWS, Azure & Google Cloud Services | NexaTech",
  description: "Professional cloud solutions and migration services in Pakistan. We help businesses leverage AWS, Azure, and Google Cloud for scalability, security, and cost optimization.",
};

const serviceData = {
  title: "Cloud Solutions",
  subtitle: "Scalable, Secure Cloud Infrastructure",
  description: "Modernize your business with our comprehensive cloud solutions. We help you migrate, deploy, and manage applications on leading cloud platforms for enhanced scalability, security, and cost-efficiency.",
  image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
  features: [
    {
      title: "Cloud Migration",
      description: "Seamless migration of your existing applications and data to cloud platforms with minimal downtime.",
      icon: "Upload"
    },
    {
      title: "Infrastructure as Code", 
      description: "Automated infrastructure provisioning and management using Terraform and CloudFormation.",
      icon: "Code"
    },
    {
      title: "Auto-Scaling Solutions",
      description: "Dynamic scaling of resources based on demand to optimize performance and costs.",
      icon: "TrendingUp"
    },
    {
      title: "Security & Compliance",
      description: "Robust security measures and compliance frameworks to protect your data and applications.",
      icon: "Shield"
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions to ensure business continuity.",
      icon: "LifeBuoy"
    },
    {
      title: "Cost Optimization",
      description: "Continuous monitoring and optimization to reduce cloud costs while maintaining performance.",
      icon: "DollarSign"
    }
  ],
  process: [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "We analyze your current infrastructure and create a comprehensive cloud adoption strategy."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Our architects design scalable, secure cloud infrastructure tailored to your needs."
    },
    {
      step: "03",
      title: "Migration & Deployment",
      description: "We execute the migration plan with minimal disruption to your business operations."
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and 24/7 support for your cloud infrastructure."
    }
  ],
  technologies: [
    { name: "AWS", category: "Cloud Platform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Microsoft Azure", category: "Cloud Platform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Google Cloud", category: "Cloud Platform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", category: "Containerization", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", category: "Orchestration", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Terraform", category: "IaC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "Jenkins", category: "CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "Prometheus", category: "Monitoring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" }
  ],
  portfolio: [
    {
      title: "E-commerce Cloud Migration",
      description: "Migrated large e-commerce platform to AWS with 99.9% uptime",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tech: ["AWS", "Kubernetes", "Terraform"]
    },
    {
      title: "Healthcare Data Platform",
      description: "HIPAA-compliant cloud infrastructure for medical data processing",
      image: "https://via.placeholder.com/600x400/059669/FFFFFF?text=Healthcare+Cloud",
      tech: ["Azure", "Docker", "MongoDB"]
    },
    {
      title: "Financial Services Cloud",
      description: "Secure cloud infrastructure for fintech applications",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["Google Cloud", "Kubernetes", "PostgreSQL"]
    }
  ]
};

export default function CloudSolutionsPage() {
  return (
    <>
      <Header />
      <ServiceHero service={serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServiceTechnologies technologies={serviceData.technologies} />

      <ServiceCTA 
        title="Ready to Move to the Cloud?"
        description="Let's discuss your cloud strategy and help you leverage the power of cloud computing."
      />
      <Footer />
    </>
  );
}