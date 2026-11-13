"use client";

import { motion } from "framer-motion";

type Step = { title: string; text: string };

export default function ServiceScale({ steps }: { steps: Step[] }) {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #111 0%, transparent 14%), radial-gradient(ellipse at 70% 30%, rgba(225,6,0,0.16), transparent 48%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">Growth</p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            How this scales with the business
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-px bg-white/15 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-black p-7"
            >
              <p className="text-3xl font-bold tracking-tight text-[#E10600]">0{index + 1}</p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
