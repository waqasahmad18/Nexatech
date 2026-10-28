"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const words = ["Custom Software", "Websites", "RDP & Servers", "IT Support", "Unity Games"];

const marquee = [
  "Custom Software",
  "Website Development",
  "RDP Setup",
  "Server Management",
  "Networking",
  "IT Support",
  "Chat Room Servers",
  "Cloud & VPS",
  "Unity Game Development",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">
      <div className="bx-grid absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_70%,#000_100%)]" />
      <div className="pointer-events-none absolute bottom-[18%] right-[12%] h-64 w-64 rounded-full bg-[#E10600]/15 blur-2xl" />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(88vw,720px)] w-[min(88vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#E10600] shadow-[0_0_18px_#E10600]" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(68vw,520px)] w-[min(68vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 -right-1 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_white]" />
      </motion.div>

      <motion.div
        className="bx-scan pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{ top: ["8%", "88%"] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-28 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.32em] text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#E10600] shadow-[0_0_10px_#E10600]" />
          Custom software and IT services
        </motion.div>

        <h1 className="font-semibold leading-[0.88] tracking-[-0.06em]">
          <span className="block overflow-hidden whitespace-nowrap text-[clamp(2.15rem,8.6vw,6.4rem)] leading-[0.9] text-white">
            {"BRAVIONIYX".split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                className="inline-block"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.12 + index * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.42em" }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-4 block text-xs font-medium text-white/70 sm:text-sm"
          >
            TECHNOLOGIES
          </motion.span>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.85, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-[3px] w-40 origin-left bg-[#E10600]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
        >
          We design, develop, and support technology that helps your business run.
          <span className="mt-3 flex h-8 items-center justify-center text-white">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[wordIndex]}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="font-semibold text-[#ff3b30]"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {["Ideas", "Solutions", "Growth"].map((region) => (
            <span
              key={region}
              className="rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80"
            >
              {region}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.6 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.18)]"
            >
              Start a project
              <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#E10600] hover:text-white"
            >
              View services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center text-white/50 sm:flex"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-20 border-y border-white/10 bg-black/70 backdrop-blur-md">
        <div className="bx-marquee-mask overflow-hidden py-3">
          <div className="bx-marquee flex w-max gap-10">
            {[...marquee, ...marquee].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10 text-xs uppercase tracking-[0.28em] text-white/70">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-[#E10600]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
