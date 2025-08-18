import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTechnologies from "@/components/services/ServiceTechnologies";

import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "AI & Machine Learning Services - Artificial Intelligence Solutions | NexaTech",
  description: "Professional AI and machine learning services in Pakistan. We build intelligent solutions using deep learning, NLP, computer vision, and predictive analytics.",
};

const serviceData = {
  title: "AI & Machine Learning",
  subtitle: "Intelligent Solutions for Modern Business",
  description: "Harness the power of artificial intelligence to transform your business operations. Our expert team develops custom AI solutions that automate processes, enhance decision-making, and unlock new opportunities.",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  features: [
    {
      title: "Machine Learning Models",
      description: "Custom ML models for predictive analytics, classification, and pattern recognition tailored to your data.",
      icon: "Brain"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for chatbots, sentiment analysis, and text processing applications.",
      icon: "MessageCircle"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for object detection, facial recognition, and quality control.",
      icon: "Eye"
    },
    {
      title: "Deep Learning",
      description: "Neural network solutions for complex problems requiring advanced pattern recognition capabilities.",
      icon: "Network"
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline business processes and reduce manual workload.",
      icon: "Cog"
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence solutions to extract insights from your data.",
      icon: "BarChart"
    }
  ],
  process: [
    {
      step: "01",
      title: "Problem Definition",
      description: "We analyze your business challenges and identify opportunities where AI can create value."
    },
    {
      step: "02",
      title: "Data Preparation",
      description: "We collect, clean, and prepare your data for training robust machine learning models."
    },
    {
      step: "03",
      title: "Model Development",
      description: "We develop and train AI models using cutting-edge algorithms and techniques."
    },
    {
      step: "04",
      title: "Deployment & Optimization",
      description: "We deploy models to production and continuously monitor and optimize performance."
    }
  ],
  technologies: [
    { name: "Python", category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", category: "ML Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", category: "ML Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Scikit-learn", category: "ML Library", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "OpenCV", category: "Computer Vision", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Pandas", category: "Data Analysis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "AWS SageMaker", category: "ML Platform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Jupyter", category: "Notebook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" }
  ],
  portfolio: [
    {
      title: "Predictive Analytics Platform",
      description: "ML-powered analytics for business forecasting and decision making",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Python", "TensorFlow", "AWS SageMaker"]
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent customer service chatbot with NLP capabilities",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      tech: ["NLP", "PyTorch", "BERT"]
    },
    {
      title: "Computer Vision System",
      description: "Automated quality control system using computer vision",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tech: ["OpenCV", "Deep Learning", "Python"]
    }
  ]
};

export default function AIMachineLearningPage() {
  return (
    <>
      <Header />
      <ServiceHero service={serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServiceTechnologies technologies={serviceData.technologies} />

      <ServiceCTA 
        title="Ready to Embrace AI Innovation?"
        description="Let's explore how artificial intelligence can transform your business and create new opportunities."
      />
      <Footer />
    </>
  );
}