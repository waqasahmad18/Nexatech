"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Controls that respond",
    text: "Input, camera, and character movement tuned so the game feels sharp in the first minutes of play.",
  },
  {
    title: "Worlds you can move through",
    text: "Scenes and levels built for flow — spawn points, paths, hazards, and the props that sell the space.",
  },
  {
    title: "Feedback you can feel",
    text: "Hits, pickups, UI cues, and sound hooks that tell the player what just happened without a tutorial wall.",
  },
  {
    title: "A loop worth repeating",
    text: "Objectives and pacing that make another run make sense — not a hollow menu with a game skin.",
  },
];

export default function GameFeel() {
  return (
    <section className="bg-[#0a0a0a] py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-[family-name:var(--font-game-display)] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">
            Game feel
          </p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-game-display)] text-3xl font-bold tracking-tight md:text-4xl">
            What players notice before they read a feature list
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pillars.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-white/10 p-6 transition hover:border-[#E10600]/50"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E10600]">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
