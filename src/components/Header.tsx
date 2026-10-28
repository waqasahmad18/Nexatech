"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { navItems } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 24);
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-black/92" : "bg-transparent"
      }`}
    >
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full md:max-w-7xl md:mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="transition-transform duration-300 ease-out hover:scale-[1.03]">
              <Logo />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm text-white/70 transition-colors duration-300 hover:text-white group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#E10600] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="hidden rounded-full bg-[#E10600] px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#ff2a22] sm:px-6 sm:py-3 sm:text-base md:inline-flex"
            >
              Let's Talk
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex-shrink-0 rounded-lg border border-white/10 bg-black/40 p-2 text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <nav className="mt-2 flex flex-col space-y-3 rounded-lg border border-white/10 bg-black/95 p-4 shadow-xl sm:p-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base font-medium text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 block rounded-full bg-[#E10600] px-6 py-3 text-center text-base font-semibold text-white"
                >
                  Let's Talk
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
