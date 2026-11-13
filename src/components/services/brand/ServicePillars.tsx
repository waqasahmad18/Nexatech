"use client";

import { motion } from "framer-motion";

type Pillar = { title: string; text: string };

export default function ServicePillars({
  eyebrow,
  title,
  pillars,
}: {
  eyebrow: string;
  title: string;
  pillars: Pillar[];
}) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 10% 0%, rgba(225,6,0,0.12), transparent 40%), linear-gradient(to bottom, #050505, transparent 18%)",
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pillars.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="border border-white/10 bg-white/[0.02] p-6 transition hover:border-[#E10600]/45"
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
