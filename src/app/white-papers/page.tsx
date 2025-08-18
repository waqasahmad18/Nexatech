import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhitePapersHero from "@/components/white-papers/WhitePapersHero";
import WhitePapersList from "@/components/white-papers/WhitePapersList";
import WhitePapersNewsletter from "@/components/white-papers/WhitePapersNewsletter";

export const metadata = {
  title: "White Papers - Research & Insights | NexaTech Technology Trends",
  description: "Download our comprehensive white papers on technology trends, digital transformation, and industry insights. Expert research from NexaTech's technical team.",
};

export default function WhitePapersPage() {
  return (
    <>
      <Header />
      <WhitePapersHero />
      <WhitePapersList />
      <WhitePapersNewsletter />
      <Footer />
    </>
  );
}