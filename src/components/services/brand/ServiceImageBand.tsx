"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

export default function ServiceImageBand({ eyebrow, title, text, image, imageAlt }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      <div className="relative min-h-[44vh] md:min-h-[52vh]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          quality={65}
          loading="lazy"
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #050505 0%, transparent 28%), radial-gradient(ellipse at 80% 20%, rgba(225,6,0,0.18), transparent 40%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[44vh] max-w-7xl items-end px-6 py-14 md:min-h-[52vh] md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="max-w-lg"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
