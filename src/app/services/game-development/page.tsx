import type { Metadata } from "next";
import { Syne } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryCard from "@/components/EnquiryCard";
import ServiceFaq from "@/components/ServiceFaq";
import GameDevHero from "@/components/services/game/GameDevHero";
import GameWorldStrip from "@/components/services/game/GameWorldStrip";
import GameFeel from "@/components/services/game/GameFeel";
import ShipTargets from "@/components/services/game/ShipTargets";
import PlayLoop from "@/components/services/game/PlayLoop";
import UnityScope from "@/components/services/game/UnityScope";
import BuildPath from "@/components/services/game/BuildPath";
import { getService, services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";

const gameDisplay = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-game-display",
  display: "swap",
  preload: true,
});

const service = getService("game-development");

export const metadata: Metadata = {
  title: "Unity Game Development — Bravioniyx Technologies",
  description:
    service?.summary ||
    "Games built in Unity at Bravioniyx — from the first playable scene to builds players can actually play.",
};

export default function GameDevelopmentPage() {
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 8);

  return (
    <div className={gameDisplay.variable}>
      <Header />
      <GameDevHero />
      <GameWorldStrip />
      <GameFeel />
      <ShipTargets />
      <PlayLoop />
      <UnityScope body={service.body} />
      <BuildPath steps={service.scale} />

      <section className="bg-neutral-100 py-16 text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E10600]">Brief</p>
            <h2 className="mt-3 font-[family-name:var(--font-game-display)] text-3xl font-bold tracking-tight md:text-4xl">
              Tell us what you want to build
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
              Share the idea, platform, and how far you want the first playable to go. We reply with a
              clear next step for your Unity project.
            </p>
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
            <h2 className="mt-3 font-[family-name:var(--font-game-display)] text-3xl font-bold tracking-tight">
              Questions clients ask
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Short answers for Unity game development. If yours is different, send it with the form.
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
