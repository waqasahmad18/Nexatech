import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EnquiryCard from "@/components/EnquiryCard";
import ServiceFaq from "@/components/ServiceFaq";
import { getService, services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} — Bravioniyx Technologies`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Header />
      <PageHero eyebrow="Service" title={service.title} text={service.summary} />

      <section className="bg-white py-16 text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E10600]">Why use this</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Why clients take this on
            </h2>
            <div className="mt-8 grid gap-4">
              {service.why.map((point, index) => (
                <article key={point.title} className="border border-neutral-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E10600]">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{point.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <EnquiryCard serviceTitle={service.title} />
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E10600]">Growth</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            How the business scales with this
          </h2>
          <div className="mt-10 grid gap-px bg-white/15 md:grid-cols-3">
            {service.scale.map((step, index) => (
              <article key={step.title} className="bg-black p-6">
                <p className="text-3xl font-semibold tracking-tight text-[#E10600]">0{index + 1}</p>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-16 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E10600]">Scope</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What the work includes</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.details.map((item, index) => (
              <article key={item} className="border border-neutral-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E10600]">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{item}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{service.body[index]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E10600]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Questions clients ask</h2>
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
            <Link href="/services" className="text-xs font-semibold uppercase tracking-[0.16em] hover:text-[#E10600]">
              All services
            </Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="border border-neutral-200 p-4 hover:border-black">
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
