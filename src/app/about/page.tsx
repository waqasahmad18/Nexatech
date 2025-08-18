import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import TeamSection from "@/components/about/TeamSection";
import CompanyStats from "@/components/about/CompanyStats";

export const metadata = {
  title: "About Us - NexaTech | Leading Software Company in Pakistan",
  description: "Learn about NexaTech's journey, our mission to transform businesses through technology, and meet our expert team of developers and designers.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutContent />
      <CompanyStats />
      <TeamSection />
      <Footer />
    </>
  );
}