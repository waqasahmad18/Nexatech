import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

export const metadata = {
  title: "Our Services - NexaTech",
  description: "Comprehensive technology services including web development, mobile apps, cloud solutions, UI/UX design, cybersecurity, and AI solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </>
  );
}