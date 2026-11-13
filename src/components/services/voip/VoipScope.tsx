"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "SIP trunk & PBX",
    text: "Connect business numbers to a voice system that runs over IP, so calls are not locked to one desk handset.",
  },
  {
    title: "Softphones & extensions",
    text: "Give each person a login and an extension they can use from a headset, laptop, or desk phone.",
  },
  {
    title: "Routing, IVR & numbers",
    text: "Send callers to the right queue, menu, or person, and keep inbound numbers under your control.",
  },
];

export default function VoipScope({ body }: { body: string[] }) {
  return (
    <section className="bg-[#04141c] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-[family-name:var(--font-voip-display)] text-[11px] font-semibold uppercase tracking-[0.36em] text-cyan-300">
            Scope
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-voip-display)] text-3xl font-bold tracking-tight md:text-4xl">
            What VoIP services include
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border border-cyan-400/15 bg-cyan-400/[0.04] p-6"
            >
              <p className="font-[family-name:var(--font-voip-display)] text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
              {body[index] ? (
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/50">
                  {body[index]}
                </p>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
