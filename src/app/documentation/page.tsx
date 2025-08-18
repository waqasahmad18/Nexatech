import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DocumentationHero from "@/components/documentation/DocumentationHero";
import DocumentationSidebar from "@/components/documentation/DocumentationSidebar";
import DocumentationContent from "@/components/documentation/DocumentationContent";

export const metadata = {
  title: "Documentation - Developer Resources | NexaTech API & SDKs",
  description: "Comprehensive documentation for NexaTech APIs, SDKs, and development tools. Get started with our technical guides, code examples, and integration resources.",
};

export default function DocumentationPage() {
  return (
    <>
      <Header />
      <DocumentationHero />
      <div className="flex min-h-screen bg-white dark:bg-slate-900">
        <DocumentationSidebar />
        <DocumentationContent />
      </div>
      <Footer />
    </>
  );
}