import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryCard from "@/components/EnquiryCard";
import ServiceFaq from "@/components/ServiceFaq";
import VoipHero from "@/components/services/voip/VoipHero";
import VoipSignalStrip from "@/components/services/voip/VoipSignalStrip";
import VoipScope from "@/components/services/voip/VoipScope";
import VoipPath from "@/components/services/voip/VoipPath";
import { getService, services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";

const voipDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-voip-display",
  display: "swap",
});

const service = getService("voip");

export const metadata: Metadata = {
  title: "VoIP Services — Bravioniyx Technologies",
  description:
    service?.summary ||
    "Business VoIP at Bravioniyx — SIP trunks, softphones, extensions, and call routing over IP.",
};

export default function VoipServicesPage() {
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 8);

  return (
    <div className={voipDisplay.variable}>
      <Header />
      <VoipHero />
      <VoipSignalStrip />
      <VoipScope body={service.body} />
      <VoipPath steps={service.scale} />

      <section className="bg-[#e8f4f7] py-16 text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Brief</p>
            <h2 className="mt-3 font-[family-name:var(--font-voip-display)] text-3xl font-bold tracking-tight md:text-4xl">
              Tell us how your calls should work
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
              Share numbers, seats, and whether you need softphones, IVR, or a full SIP and PBX
              stack. We reply with a clear next step for your VoIP setup.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-700">
              {service.details.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-cyan-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <EnquiryCard serviceTitle={service.title} />
        </div>
      </section>

      <section className="bg-white py-16 text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">FAQ</p>
            <h2 className="mt-3 font-[family-name:var(--font-voip-display)] text-3xl font-bold tracking-tight">
              Questions clients ask
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Short answers for VoIP services. If yours is different, send it with the form.
            </p>
          </div>
          <ServiceFaq faqs={service.faqs} />
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-14 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-xl font-semibold tracking-tight">Other services</h2>
            <Link href="/services" className="text-xs font-semibold uppercase tracking-[0.16em] hover:text-cyan-700">
              All services
            </Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="border border-neutral-200 p-4 hover:border-black"
              >
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
