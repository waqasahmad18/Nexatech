import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTechnologies from "@/components/services/ServiceTechnologies";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "Data Analytics Services - Business Intelligence & Data Science | NexaTech",
  description: "Professional data analytics and business intelligence services in Pakistan. Transform your data into actionable insights with advanced analytics, visualization, and machine learning.",
};

const serviceData = {
  title: "Data Analytics",
  subtitle: "Transform Data into Actionable Business Intelligence",
  description: "Unlock the power of your data with our comprehensive analytics solutions. From data visualization to predictive modeling, we help businesses make informed decisions through advanced analytics and business intelligence.",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%2306B6D4'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='white' font-family='Arial'%3EData Analytics%3C/text%3E%3C/svg%3E",
  features: [
    {
      title: "Data Visualization",
      description: "Interactive dashboards and charts that make complex data easy to understand and actionable.",
      icon: "📊"
    },
    {
      title: "Business Intelligence",
      description: "Comprehensive BI solutions that provide real-time insights into your business performance.",
      icon: "🧠"
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends and help you stay ahead of the competition.",
      icon: "🔮"
    },
    {
      title: "Data Warehousing",
      description: "Scalable data storage solutions that centralize your data for better analysis and reporting.",
      icon: "🏢"
    },
    {
      title: "Real-time Analytics",
      description: "Live data processing and monitoring systems for immediate insights and quick decision making.",
      icon: "⚡"
    },
    {
      title: "Custom Reports",
      description: "Tailored reporting solutions that deliver the exact insights your business needs.",
      icon: "📈"
    }
  ],
  process: [
    {
      step: "1",
      title: "Data Assessment",
      description: "We analyze your current data sources, quality, and infrastructure to understand your analytics needs."
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Create a comprehensive data analytics strategy aligned with your business objectives and goals."
    },
    {
      step: "3",
      title: "Implementation",
      description: "Deploy analytics tools, dashboards, and reporting systems with proper data integration."
    },
    {
      step: "4",
      title: "Training & Support",
      description: "Provide training to your team and ongoing support to ensure maximum value from your analytics."
    }
  ],
  technologies: [
    { name: "Power BI", category: "Business Intelligence", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23F2C811'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white'%3EBI%3C/text%3E%3C/svg%3E" },
    { name: "Tableau", category: "Data Visualization", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23E97627'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white'%3ET%3C/text%3E%3C/svg%3E" },
    { name: "Python", category: "Programming", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%233776AB'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white'%3EPy%3C/text%3E%3C/svg%3E" },
    { name: "R", category: "Statistics", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23276DC3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='white'%3ER%3C/text%3E%3C/svg%3E" },
    { name: "SQL", category: "Database", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23336791'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='white'%3ESQL%3C/text%3E%3C/svg%3E" },
    { name: "Apache Spark", category: "Big Data", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23E25A1C'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='white'%3ESP%3C/text%3E%3C/svg%3E" }
  ]
};

export default function DataAnalyticsPage() {
  return (
    <>
      <Header />
      <ServiceHero service={serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServiceTechnologies technologies={serviceData.technologies} />
      <ServiceCTA 
        title="Ready to Unlock Your Data's Potential?"
        description="Let's transform your data into powerful business insights that drive growth and success."
      />
      <Footer />
    </>
  );
}