import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";

export const metadata = {
  title: "Terms of Service - Legal Agreement | NexaTech Terms & Conditions",
  description: "Read NexaTech's Terms of Service including user obligations, service availability, privacy policies, and legal agreements for using our software solutions.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <TermsHero />
      <TermsContent />
      <Footer />
    </>
  );
}