import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EnquiryCard from "@/components/EnquiryCard";

export const metadata = {
  title: "Get a quote — Bravioniyx Technologies",
  description: "Request a quotation from Bravioniyx Technologies for software, websites, servers, IT support, or Unity game development.",
};

export default function GetAQuotePage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Get a quote"
        title="Tell us the work. We will price it."
        text="Send the service, the contact details, and what the job needs to do. The reply goes to the email on the form, with the Bravioniyx name and logo."
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="text-neutral-950">
            <h2 className="text-2xl font-semibold tracking-tight">What happens next</h2>
            <ol className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-700">
              <li><span className="font-semibold text-[#E10600]">01</span> We receive the request in the company inbox.</li>
              <li><span className="font-semibold text-[#E10600]">02</span> You get a branded copy of what you sent.</li>
              <li><span className="font-semibold text-[#E10600]">03</span> The quotation itself is emailed to you when it is ready.</li>
            </ol>
          </div>
          <EnquiryCard />
        </div>
      </section>
      <Footer />
    </>
  );
}
