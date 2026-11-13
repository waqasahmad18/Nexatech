"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VoipSignalStrip() {
  return (
    <section className="relative overflow-hidden bg-[#020b10] text-white">
      <div className="relative min-h-[52vh] md:min-h-[62vh]">
        <Image
          src="/services/voip/network.jpg"
          alt="SIP servers and VoIP network infrastructure"
          fill
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#020b10]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b10] via-[#020b10]/55 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-7xl items-end px-6 py-16 md:min-h-[62vh] md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            className="max-w-xl"
          >
            <p className="font-[family-name:var(--font-voip-display)] text-[11px] font-semibold uppercase tracking-[0.36em] text-cyan-300">
              Voice over IP
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-voip-display)] text-3xl font-bold tracking-tight md:text-5xl">
              Numbers, trunks, and queues on infrastructure you control
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
              SIP trunks feed the PBX. Softphones and extensions sit on top. Callers reach the right
              person through routing and IVR — not a single desk handset.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
