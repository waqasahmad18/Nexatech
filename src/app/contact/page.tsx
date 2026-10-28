import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EnquiryCard from "@/components/EnquiryCard";
import WhatsAppLink from "@/components/WhatsAppLink";
import EmailLink from "@/components/EmailLink";
import { brand } from "@/data/site";

export const metadata = {
  title: "Contact — Bravioniyx Technologies",
  description: "Contact Bravioniyx Technologies about software, websites, servers, IT support, or Unity game development.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Contact"
        title="Start with a message or a WhatsApp chat."
        text="Tell us the service and what the work needs to do. Send the form, or open the conversation on WhatsApp."
      />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div className="text-neutral-950">
            <h2 className="text-3xl font-semibold tracking-tight">Reach the team</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-neutral-500">Email us</dt>
                <dd className="mt-3">
                  <EmailLink onLight />
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-neutral-500">WhatsApp</dt>
                <dd className="mt-3">
                  <WhatsAppLink onLight />
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-neutral-500">Location</dt>
                <dd className="mt-1 text-lg">{brand.location}</dd>
              </div>
            </dl>
          </div>
          <EnquiryCard />
        </div>
      </section>
      <Footer />
    </>
  );
}
