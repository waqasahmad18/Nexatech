"use client";

import { motion } from "framer-motion";

const targets = [
  {
    label: "PC",
    title: "Desktop builds",
    text: "Keyboard, mouse, or controller — a playable Unity build for Windows-first playtests and releases.",
  },
  {
    label: "Mobile",
    title: "Touch-ready play",
    text: "Touch controls, UI scale, and performance targets shaped for phones without drowning the core loop.",
  },
  {
    label: "Web",
    title: "Browser demos",
    text: "WebGL builds when you need a shareable demo link before a store or installable build is ready.",
  },
];

export default function ShipTargets() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(225,6,0,0.18), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-[family-name:var(--font-game-display)] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">
              Where it runs
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-game-display)] text-3xl font-bold tracking-tight md:text-4xl">
              Platforms we build toward
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Pick the first target. The same Unity project can grow into more platforms once the loop holds.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-3">
          {targets.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-black p-7"
            >
              <p className="font-[family-name:var(--font-game-display)] text-xs font-semibold uppercase tracking-[0.24em] text-[#E10600]">
                {item.label}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
