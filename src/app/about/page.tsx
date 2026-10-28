import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EnquiryCard from "@/components/EnquiryCard";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata = {
  title: "About — Bravioniyx Technologies",
  description: "Bravioniyx Technologies designs, develops, and supports custom software, websites, servers, networks, and Unity games.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="About"
        title="Your IT partner for software, systems, and support."
        text="Bravioniyx Technologies designs, develops, and supports technology that helps a business operate. Ideas, solutions, and growth — in that order."
      />
      <section className="bg-white py-20 text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">What the company does</h2>
            <p className="mt-5 leading-relaxed text-neutral-600">
              The work covers custom software, business and e-commerce websites, remote desktop and VPS access, server setup, networking, IT support, chat room servers, cloud servers, and Unity game development.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-600">
              This website is the public face of the company. Project enquiries start here, through the form or WhatsApp. Internal tools stay separate from this site.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="border border-neutral-200 px-4 py-4 text-sm font-semibold hover:border-black">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <EnquiryCard />
        </div>
      </section>
      <Footer />
    </>
  );
}
