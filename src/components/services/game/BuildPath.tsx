"use client";

import { motion } from "framer-motion";

type Step = { title: string; text: string };

export default function BuildPath({ steps }: { steps: Step[] }) {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(225,6,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(225,6,0,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-[family-name:var(--font-game-display)] text-[11px] font-semibold uppercase tracking-[0.36em] text-[#E10600]">
            Build path
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-game-display)] text-3xl font-bold tracking-tight md:text-4xl">
            From first playable to a growing game
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-px bg-white/15 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-7"
            >
              <p className="font-[family-name:var(--font-game-display)] text-4xl font-bold tracking-tight text-[#E10600]">
                0{index + 1}
              </p>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
