import ServiceShowcase from "@/components/services/brand/ServiceShowcase";
import { getService, services } from "@/data/services";
import { getServicePage } from "@/data/servicePages";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  // Dedicated rich page for game-development lives at /services/game-development
  return services
    .filter((service) => service.slug !== "game-development")
    .map((service) => ({ slug: service.slug }));
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
  const page = getServicePage(slug);
  if (!service || !page) notFound();

  return <ServiceShowcase service={service} page={page} />;
}
