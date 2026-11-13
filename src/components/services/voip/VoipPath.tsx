"use client";

import { motion } from "framer-motion";

type Step = { title: string; text: string };

export default function VoipPath({ steps }: { steps: Step[] }) {
  return (
    <section className="relative overflow-hidden bg-[#020b10] py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(34,211,238,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.08), transparent 35%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        animate={{ opacity: [0.25, 0.7, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-[family-name:var(--font-voip-display)] text-[11px] font-semibold uppercase tracking-[0.36em] text-cyan-300">
            Rollout path
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-voip-display)] text-3xl font-bold tracking-tight md:text-4xl">
            From first working line to a growing voice stack
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-px bg-cyan-400/20 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#020b10] p-7"
            >
              <p className="font-[family-name:var(--font-voip-display)] text-4xl font-bold tracking-tight text-cyan-300">
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
