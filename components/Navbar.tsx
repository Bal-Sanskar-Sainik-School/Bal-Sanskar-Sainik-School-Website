"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Fee Structure", href: "/fee-structure" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md py-3" : "py-5 border-b border-gray-200"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-navy-dark" />
          </div>
          <div className="hidden sm:flex flex-col justify-center translate-y-0.5">
            <h1 className="font-[family-name:var(--font-heading)] text-lg sm:text-[22px] font-black leading-none tracking-wide text-navy-dark">
              Bal Sansar
            </h1>
            <p className="font-[family-name:var(--font-body)] text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-medium mt-1 text-gold">
              Sainik School
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-[family-name:var(--font-body)] text-[15px] font-semibold tracking-wide transition-all duration-300 relative group ${
                  isActive ? "text-gold" : "text-navy-light hover:text-gold"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-gold transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                }`} />
              </Link>
            );
          })}
        </div>

        {/* Right Side CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/admissions"
            className="group flex items-center gap-2 font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-[0.1em] px-7 py-3 rounded-full transition-all duration-300 bg-gold text-white hover:bg-navy-dark hover:-translate-y-0.5"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 transition-colors relative z-50 text-navy-dark hover:bg-gray-100 rounded-md"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={30} strokeWidth={1.5} /> : <Menu size={30} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center px-6"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-[family-name:var(--font-heading)] text-navy-dark hover:text-gold text-4xl sm:text-5xl font-medium block py-2 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="w-full mt-8"
              >
                <Link
                  href="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="font-[family-name:var(--font-heading)] bg-gold text-white hover:bg-navy-dark font-bold text-center text-sm px-6 py-4 rounded-full block tracking-wider transition-colors"
                >
                  APPLY NOW
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
