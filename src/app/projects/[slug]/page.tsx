import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { notFound } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Complete e-commerce solution with advanced inventory management, payment integration, and analytics dashboard",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    category: "Web Development",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    color: "from-blue-500 to-cyan-500",
    slug: "ecommerce-platform",
    client: "RetailMax Pakistan",
    duration: "4 months",
    year: "2024",
    features: [
      "Multi-vendor marketplace functionality",
      "Advanced inventory management system", 
      "Integrated payment gateway with multiple options",
      "Real-time analytics and reporting dashboard",
      "Mobile-responsive design",
      "SEO optimized product pages"
    ],
    challenge: "The client needed a comprehensive e-commerce solution that could handle multiple vendors, complex inventory management, and provide detailed analytics while maintaining excellent performance.",
    solution: "We developed a scalable Next.js application with a microservices architecture, enabling seamless vendor management and real-time inventory tracking. The platform integrates multiple payment gateways and provides comprehensive analytics.",
    results: [
      "300% increase in online sales",
      "50+ vendors successfully onboarded",
      "99.9% uptime achieved",
      "40% improvement in page load speeds"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Digital transformation solution for healthcare providers with patient management and telemedicine features",
    image: "https://via.placeholder.com/800x500/10B981/FFFFFF?text=Healthcare+Management",
    category: "Digital Transformation",
    tech: ["React", "Python", "PostgreSQL", "AWS"],
    color: "from-green-500 to-emerald-500",
    slug: "healthcare-management",
    client: "HealthCare Plus",
    duration: "6 months",
    year: "2024",
    features: [
      "Patient management system",
      "Telemedicine video consultation",
      "Electronic health records (EHR)",
      "Appointment scheduling system",
      "Prescription management",
      "Medical billing integration"
    ],
    challenge: "Healthcare providers needed a comprehensive digital solution to manage patient records, enable remote consultations, and streamline administrative processes while ensuring HIPAA compliance.",
    solution: "We built a secure, cloud-based healthcare management platform with integrated telemedicine capabilities, automated appointment scheduling, and comprehensive patient record management.",
    results: [
      "200% increase in patient consultations",
      "60% reduction in administrative workload",
      "100% HIPAA compliance achieved",
      "95% patient satisfaction rate"
    ],
    gallery: [
      "https://via.placeholder.com/800x500/10B981/FFFFFF?text=Healthcare+Dashboard",
      "https://via.placeholder.com/800x500/059669/FFFFFF?text=Patient+Management",
      "https://via.placeholder.com/800x500/047857/FFFFFF?text=Telemedicine+App"
    ]
  },
  {
    id: 3,
    title: "FinTech Mobile App",
    description: "Secure mobile banking application with real-time transactions and advanced security features",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    category: "Mobile Development",
    tech: ["React Native", "Node.js", "Redis", "Blockchain"],
    color: "from-purple-500 to-pink-500",
    slug: "fintech-mobile-app",
    client: "PaySecure Bank",
    duration: "8 months",
    year: "2023",
    features: [
      "Real-time money transfers",
      "Biometric authentication",
      "Cryptocurrency wallet integration",
      "Bill payment system",
      "Investment portfolio tracking",
      "Advanced fraud detection"
    ],
    challenge: "The bank required a secure mobile banking solution with advanced security features, real-time transaction processing, and support for modern payment methods including cryptocurrency.",
    solution: "We developed a React Native mobile application with blockchain integration, biometric security, and real-time transaction processing capabilities using modern FinTech infrastructure.",
    results: [
      "500,000+ app downloads",
      "Zero security breaches",
      "99.99% transaction success rate",
      "4.8/5 app store rating"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop"
    ]
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - NexaTech Portfolio`,
    description: project.description,
  };
}