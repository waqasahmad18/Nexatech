"use client";

import { motion } from "framer-motion";

const stages = [
  {
    title: "Prototype the loop",
    text: "One scene that proves the core action. If it is not fun here, we do not dress it up yet.",
  },
  {
    title: "Playtest hard",
    text: "Fresh hands on the build. We watch where people get stuck, bored, or lost — then cut or tighten.",
  },
  {
    title: "Polish the handoff",
    text: "UI, feedback, and a build you can share. Follow-up fixes for what only real play reveals.",
  },
];

export default function PlayLoop() {
  return (
    <section className="border-y border-white/10 bg-[#111] py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-[family-name:var(--font-game-display)] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">
            Play loop
          </p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-game-display)] text-3xl font-bold tracking-tight md:text-4xl">
            How a Unity game actually gets good
          </h2>
        </motion.div>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {stages.map((stage, index) => (
            <motion.li
              key={stage.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#E10600] font-[family-name:var(--font-game-display)] text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{stage.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
