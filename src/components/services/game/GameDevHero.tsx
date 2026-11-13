"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/data/site";

export default function GameDevHero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/services/game-development/hero.webp"
          alt="Unity game world environment"
          fill
          priority
          quality={70}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/45" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 15% 80%, rgba(225,6,0,0.28), transparent 45%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:justify-center md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-[family-name:var(--font-game-display)] text-sm font-bold tracking-tight text-white md:text-base">
              Bravioniyx
            </p>
            <span className="h-1 w-1 rounded-full bg-[#E10600]" aria-hidden />
            <span className="border border-white/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
              Unity
            </span>
          </div>

          <h1 className="mt-5 font-[family-name:var(--font-game-display)] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Game
            <span className="text-[#E10600]"> Development</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
            Playable Unity builds — scenes, systems, and the feel players actually touch.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/get-a-quote?service=Game%20Development"
              className="inline-flex min-h-11 items-center bg-[#E10600] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
            >
              Start a game brief
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center border border-white/30 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E10600]/70 to-transparent" />
    </section>
  );
}
