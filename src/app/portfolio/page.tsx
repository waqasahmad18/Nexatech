import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioStats from "@/components/portfolio/PortfolioStats";

export const metadata = {
  title: "Portfolio - Our Work | NexaTech Projects & Case Studies",
  description: "Explore NexaTech's portfolio of successful projects. See our web development, mobile apps, and digital transformation solutions that have helped businesses grow.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioGrid />
      <Footer />
    </>
  );
}