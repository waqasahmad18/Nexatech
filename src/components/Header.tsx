"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { navItems } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/admin/session", { credentials: "include" })
      .then((response) => (response.ok ? response.json() : { admin: false }))
      .then((data: { admin?: boolean }) => {
        if (!cancelled) setAdmin(Boolean(data.admin));
      })
      .catch(() => {
        if (!cancelled) setAdmin(false);
      });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  const signOut = async () => {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    setAdmin(false);
    setIsOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full md:max-w-7xl md:mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div whileHover={{ scale: 1.03 }} className="cursor-pointer">
                <Logo />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-sm text-white/70 transition-colors duration-300 hover:text-white group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#E10600] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              {admin ? (
                <>
                  <Link href="/quote" className="text-sm font-semibold text-white">
                    Send quotation
                  </Link>
                  <button type="button" onClick={signOut} className="text-sm text-white/60 hover:text-white">
                    Sign out
                  </button>
                </>
              ) : null}
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Link
                href="/contact"
                className="rounded-full bg-[#E10600] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#ff2a22] sm:px-6 sm:py-3 sm:text-base"
              >
                Let's Talk
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex-shrink-0 rounded-lg border border-white/10 bg-black/40 p-2 text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mt-2 overflow-hidden rounded-lg border border-white/10 bg-black/95 shadow-xl backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col space-y-3 p-4 sm:p-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 block text-base font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              {admin ? (
                <>
                  <Link href="/quote" onClick={() => setIsOpen(false)} className="block py-2 text-base font-semibold text-white">
                    Send quotation
                  </Link>
                  <button type="button" onClick={signOut} className="py-2 text-left text-base text-white/70">
                    Sign out
                  </button>
                </>
              ) : null}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 block rounded-full bg-[#E10600] px-6 py-3 text-center text-base font-semibold text-white"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}