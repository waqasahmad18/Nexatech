"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Built in Unity",
    text: "Made in the Unity editor — not a normal app with a game laid over the top.",
  },
  {
    title: "Play, scenes, UI",
    text: "Gameplay, levels, characters or objects, and the player interface in one project.",
  },
  {
    title: "A build you can play",
    text: "Handover is a playable build, then fixes for what shows up when someone plays it.",
  },
];

export default function UnityScope({ body }: { body: string[] }) {
  return (
    <section className="bg-[#0b0b0b] py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-[family-name:var(--font-game-display)] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">
            Scope
          </p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-game-display)] text-3xl font-bold tracking-tight md:text-4xl">
            What the Unity work covers
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="font-[family-name:var(--font-game-display)] text-xs font-semibold uppercase tracking-[0.22em] text-[#E10600]">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.text}</p>
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
