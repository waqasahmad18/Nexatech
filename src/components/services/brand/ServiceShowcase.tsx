import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryCard from "@/components/EnquiryCard";
import ServiceFaq from "@/components/ServiceFaq";
import ServiceBrandHero from "@/components/services/brand/ServiceBrandHero";
import ServiceImageBand from "@/components/services/brand/ServiceImageBand";
import ServicePillars from "@/components/services/brand/ServicePillars";
import ServiceScope from "@/components/services/brand/ServiceScope";
import ServiceProcess from "@/components/services/brand/ServiceProcess";
import ServiceScale from "@/components/services/brand/ServiceScale";
import type { Service } from "@/data/services";
import type { ServicePageExtras } from "@/data/servicePages";
import { services } from "@/data/services";
import Link from "next/link";

type Props = {
  service: Service;
  page: ServicePageExtras;
};

export default function ServiceShowcase({ service, page }: Props) {
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 8);

  return (
    <>
      <Header />
      <ServiceBrandHero
        badge={page.badge}
        headline={page.headline}
        headlineAccent={page.headlineAccent}
        summary={service.summary}
        serviceTitle={service.title}
        image={page.heroImage}
        imageAlt={page.heroAlt}
      />
      <ServiceImageBand
        eyebrow={page.stripEyebrow}
        title={page.stripTitle}
        text={page.stripText}
        image={page.stripImage}
        imageAlt={page.stripAlt}
      />
      <ServicePillars eyebrow={page.pillarsEyebrow} title={page.pillarsTitle} pillars={page.pillars} />
      <ServiceScope details={service.details} body={service.body} />
      <ServiceProcess eyebrow={page.processEyebrow} title={page.processTitle} steps={page.process} />
      <ServiceScale steps={service.scale} />

      <section className="relative overflow-hidden bg-neutral-100 py-16 text-neutral-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "linear-gradient(to bottom, #000 0%, transparent 10%), radial-gradient(ellipse at 20% 0%, rgba(225,6,0,0.08), transparent 40%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E10600]">Brief</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Tell us what you need
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">{page.briefLead}</p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-700">
              {service.details.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-[#E10600]" />
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E10600]">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Questions clients ask</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Short answers for this service. If yours is different, send it with the form.
            </p>
          </div>
          <ServiceFaq faqs={service.faqs} />
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-14 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-xl font-semibold tracking-tight">Other services</h2>
            <Link
              href="/services"
              className="text-xs font-semibold uppercase tracking-[0.16em] hover:text-[#E10600]"
            >
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
    </>
  );
}
