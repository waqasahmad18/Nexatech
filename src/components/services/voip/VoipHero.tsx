"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/data/site";

export default function VoipHero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#031018] text-white">
      <div className="absolute inset-0">
        <Image
          src="/services/voip/hero.jpg"
          alt="VoIP softphone workstation with headset and live call screens"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031018] via-[#031018]/88 to-[#031018]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031018] via-transparent to-[#031018]/55" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[18%] h-px origin-left bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
          animate={{ scaleX: [0.35, 1, 0.45], opacity: [0.25, 0.85, 0.3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-1/4 top-1/4 h-[55%] w-1/2 rounded-full bg-cyan-400/15 blur-3xl"
          animate={{ opacity: [0.2, 0.45, 0.2], x: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:justify-center md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="font-[family-name:var(--font-voip-display)] text-[11px] font-semibold uppercase tracking-[0.42em] text-cyan-300">
            Bravioniyx · VoIP
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-voip-display)] text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            VoIP
            <span className="block text-white">Services</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Business phone systems over the internet — SIP trunks, softphones, extensions, and call
            routing that travel with your team.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/get-a-quote?service=VoIP%20Services"
              className="inline-flex min-h-12 items-center bg-cyan-400 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#031018] transition hover:bg-white"
            >
              Plan a VoIP setup
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

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
    </section>
  );
}
