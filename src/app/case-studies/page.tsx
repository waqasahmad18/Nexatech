import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesList from "@/components/case-studies/CaseStudiesList";
import CaseStudiesStats from "@/components/case-studies/CaseStudiesStats";

export const metadata = {
  title: "Case Studies - Success Stories | NexaTech Client Projects",
  description: "Explore detailed case studies of our successful projects. See how NexaTech has helped businesses transform digitally with innovative technology solutions.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <CaseStudiesHero />
      <CaseStudiesStats />
      <CaseStudiesList />
      <Footer />
    </>
  );
}