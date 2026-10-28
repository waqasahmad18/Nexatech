import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EnquiryCard from "@/components/EnquiryCard";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata = {
  title: "Services — Bravioniyx Technologies",
  description: "Custom software, websites, RDP, servers, networking, IT support, chat room servers, cloud and VPS, and Unity game development.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Services"
        title="Nine ways we can take the work on."
        text="Each service has its own page, with the scope written out and a form if you want to talk about that work specifically."
      />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            {services.map((service, index) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="border border-neutral-200 p-6 hover:border-black">
                <p className="text-xs uppercase tracking-[0.22em] text-[#E10600]">0{index + 1}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">{service.title}</h2>
                <p className="mt-2 text-neutral-600">{service.summary}</p>
                <ul className="mt-4 space-y-1 text-sm text-neutral-800">
                  {service.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <EnquiryCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
