"use client";

import { motion } from "framer-motion";

type Props = {
  details: string[];
  body: string[];
};

export default function ServiceScope({ details, body }: Props) {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0a0a0a, transparent 12%), radial-gradient(ellipse at 90% 100%, rgba(225,6,0,0.14), transparent 42%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">Scope</p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            What the work includes
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {details.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E10600]">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{item}</h3>
              {body[index] ? (
                <p className="mt-3 text-sm leading-relaxed text-white/65">{body[index]}</p>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
