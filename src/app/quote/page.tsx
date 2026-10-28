import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import QuoteDesk from "@/components/QuoteDesk";

export const metadata = {
  title: "Quotation desk — Bravioniyx Technologies",
  description: "Send a Bravioniyx Technologies quotation to a client email.",
};

export default function QuotePage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Quotation"
        title="Build the quote here. It leaves with the brand."
        text="The client receives a header, the logo, the company name, the line items, and a footer. A copy also lands in the company inbox."
      />
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <QuoteDesk />
        </div>
      </section>
      <Footer />
    </>
  );
}
