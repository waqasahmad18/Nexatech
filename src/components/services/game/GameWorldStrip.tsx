"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GameWorldStrip() {
  return (
    <section className="relative overflow-hidden bg-[#070707] text-white">
      <div className="relative min-h-[52vh] md:min-h-[62vh]">
        <Image
          src="/services/game-development/players.jpg"
          alt="Unity game world with player character"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-7xl items-end px-6 py-16 md:min-h-[62vh] md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            className="max-w-xl"
          >
            <p className="font-[family-name:var(--font-game-display)] text-[11px] font-semibold uppercase tracking-[0.36em] text-[#E10600]">
              Inside the build
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-game-display)] text-3xl font-bold tracking-tight md:text-5xl">
              Players, scenes, and systems — one Unity project
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
              Gameplay logic, characters, levels, and the interface live together. You get a playable
              build, then fixes for what only shows up when someone plays.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
