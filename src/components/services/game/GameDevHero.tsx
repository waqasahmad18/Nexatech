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
          src="/services/game-development/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-r from-[#E10600]/25 to-transparent"
          animate={{ opacity: [0.35, 0.7, 0.35], x: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:justify-center md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="font-[family-name:var(--font-game-display)] text-[11px] font-semibold uppercase tracking-[0.42em] text-[#E10600]">
            Bravioniyx · Unity
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-game-display)] text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            Unity Game
            <span className="block text-white">Development</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Games built in Unity — from the first playable scene to builds people can actually play.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/get-a-quote?service=Game%20Development"
              className="inline-flex min-h-12 items-center bg-[#E10600] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
            >
              Start a game brief
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center border border-white/35 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E10600]/80 to-transparent" />
    </section>
  );
}
