import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportHero from "@/components/support/SupportHero";
import SupportOptions from "@/components/support/SupportOptions";
import SupportFAQ from "@/components/support/SupportFAQ";
import SupportContact from "@/components/support/SupportContact";

export const metadata = {
  title: "Support Center - Get Help | NexaTech Customer Support",
  description: "Get help with NexaTech services. Find answers in our FAQ, contact support, or access our knowledge base. 24/7 support available for enterprise customers.",
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <SupportHero />
      <SupportOptions />
      <SupportFAQ />
      <SupportContact />
      <Footer />
    </>
  );
}