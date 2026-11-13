"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GameWorldStrip() {
  return (
    <section className="relative overflow-hidden bg-[#070707] text-white">
      <div className="relative min-h-[44vh] md:min-h-[52vh]">
        <Image
          src="/services/game-development/players.webp"
          alt="Unity game world with player character"
          fill
          quality={65}
          loading="lazy"
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[44vh] max-w-7xl items-end px-6 py-14 md:min-h-[52vh] md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="max-w-lg"
          >
            <p className="font-[family-name:var(--font-game-display)] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">
              Inside the build
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-game-display)] text-3xl font-bold tracking-tight md:text-4xl">
              One project. Players, levels, UI.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Gameplay, characters, and interface ship together — then we fix what only shows up in play.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
