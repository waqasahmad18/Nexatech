import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/services/ServiceDetail";
import { notFound } from "next/navigation";

const services = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies like React, Next.js, Vue.js, and Node.js",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    icon: "Code",
    color: "from-blue-500 to-cyan-500",
    overview: "Transform your digital presence with our comprehensive web development services. We create scalable, performant, and user-friendly web applications that drive business growth and enhance user experience.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions", 
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "Database Design & Management",
      "Performance Optimization",
      "SEO Optimization",
      "Responsive Design"
    ],
    technologies: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 85 }
    ],
    process: [
      {
        step: "1",
        title: "Discovery & Planning",
        description: "We analyze your requirements, define project scope, and create a detailed development roadmap."
      },
      {
        step: "2", 
        title: "Design & Prototyping",
        description: "Our team creates wireframes, mockups, and interactive prototypes to visualize the final product."
      },
      {
        step: "3",
        title: "Development & Testing",
        description: "We build your application using best practices, with continuous testing and quality assurance."
      },
      {
        step: "4",
        title: "Deployment & Support",
        description: "We deploy your application and provide ongoing maintenance and support services."
      }
    ],
    portfolio: [
      {
        title: "E-Commerce Platform",
        description: "Multi-vendor marketplace with advanced features",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
      },
      {
        title: "Healthcare Portal",
        description: "Patient management and telemedicine platform",
        image: "https://via.placeholder.com/400x300/059669/FFFFFF?text=Healthcare+Portal"
      }
    ],
    pricing: [
      {
        name: "Basic",
        price: "₨150,000",
        features: ["5-10 Pages", "Responsive Design", "Basic SEO", "Contact Forms"]
      },
      {
        name: "Professional", 
        price: "₨300,000",
        features: ["Custom Features", "CMS Integration", "Advanced SEO", "Performance Optimization"]
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        features: ["Complex Applications", "Third-party Integrations", "Scalable Architecture", "24/7 Support"]
      }
    ]
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native technologies",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    icon: "Smartphone",
    color: "from-purple-500 to-pink-500",
    overview: "Reach your customers on any device with our mobile app development services. We create engaging, high-performance mobile applications that provide seamless user experiences across all platforms.",
    features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-platform Development",
      "UI/UX Design for Mobile",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Performance Optimization"
    ],
    technologies: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "Swift", level: 80 },
      { name: "Kotlin", level: 85 },
      { name: "Firebase", level: 90 },
      { name: "Redux", level: 85 }
    ],
    process: [
      {
        step: "1",
        title: "Requirement Analysis",
        description: "We understand your mobile app requirements, target audience, and platform preferences."
      },
      {
        step: "2",
        title: "UI/UX Design",
        description: "Create intuitive and engaging mobile interfaces following platform-specific guidelines."
      },
      {
        step: "3",
        title: "Development & Testing",
        description: "Build and rigorously test your app across different devices and operating systems."
      },
      {
        step: "4",
        title: "Launch & Maintenance",
        description: "Deploy to app stores and provide ongoing updates and maintenance support."
      }
    ],
    portfolio: [
      {
        title: "FinTech Mobile App",
        description: "Secure banking and payment solution",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
      },
      {
        title: "Food Delivery App",
        description: "On-demand food ordering platform",
        image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=300&fit=crop"
      }
    ],
    pricing: [
      {
        name: "Basic",
        price: "₨200,000",
        features: ["Single Platform", "Basic Features", "Simple UI", "App Store Submission"]
      },
      {
        name: "Professional",
        price: "₨400,000", 
        features: ["Cross-platform", "Advanced Features", "Custom UI", "Push Notifications"]
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        features: ["Complex Features", "Backend Integration", "Advanced Security", "24/7 Support"]
      }
    ]
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <ServiceDetail service={service} />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - NexaTech Services`,
    description: service.description,
  };
}