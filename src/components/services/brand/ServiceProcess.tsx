"use client";

import { motion } from "framer-motion";

type Step = { title: string; text: string };

export default function ServiceProcess({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: Step[];
}) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#111] py-16 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(225,6,0,0.1), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">{eyebrow}</p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        </motion.div>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#E10600] text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
