"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import WhatsAppLink from "@/components/WhatsAppLink";
import { brand, navItems } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-white/45">{brand.tagline}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            We design, develop, and support technology for businesses that need software, websites, servers, and IT help in one place.
          </p>
          <div className="mt-8 space-y-4">
            <WhatsAppLink />
            <a href={`mailto:${brand.email}`} className="block text-sm text-white/80 hover:text-white">
              Email us for inquiries
              <span className="mt-1 block text-white">{brand.email}</span>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff4d4d]">Pages</h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff4d4d]">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-sm text-white/75 hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.legal}</p>
          <p>{brand.location}</p>
        </div>
      </div>
    </footer>
  );
}
