"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-white py-24 text-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#E10600]">Services</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">What we do</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold uppercase tracking-[0.16em] hover:text-[#E10600]">
            All services
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col border border-neutral-200 p-6 transition-colors hover:border-black hover:bg-black hover:text-white"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#E10600]">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 group-hover:text-white/70">{service.summary}</p>
                <ul className="mt-5 space-y-1 text-sm text-neutral-700 group-hover:text-white/80">
                  {service.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
