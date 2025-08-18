import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import JobOpenings from "@/components/careers/JobOpenings";
import CompanyCulture from "@/components/careers/CompanyCulture";
import Benefits from "@/components/careers/Benefits";

export const metadata = {
  title: "Careers - Join NexaTech Team | Software Development Jobs in Pakistan",
  description: "Join our team of expert developers, designers, and innovators. Explore exciting career opportunities at NexaTech and help shape Pakistan's digital future.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <CareersHero />
      <CompanyCulture />
      <Benefits />
      <JobOpenings />
      <Footer />
    </>
  );
}