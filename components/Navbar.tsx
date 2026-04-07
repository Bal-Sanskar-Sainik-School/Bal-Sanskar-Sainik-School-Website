"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Fee Structure", href: "#fees" },
  { name: "Admissions", href: "#admissions" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-dark/70 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center group-hover:bg-gold/30 transition-all duration-300">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-[family-name:var(--font-heading)] text-gold text-sm sm:text-base font-bold leading-tight tracking-wide">
              Bal Sanskar
            </h1>
            <p className="font-[family-name:var(--font-heading)] text-ivory/70 text-[10px] sm:text-xs tracking-[0.2em] uppercase">
              Sainik School
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-[family-name:var(--font-body)] text-ivory/80 hover:text-gold px-4 py-2 text-lg font-medium tracking-wide transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-3/4" />
            </Link>
          ))}
        </div>

        {/* Apply Now Button (Desktop) */}
        <Link
          href="#admissions"
          className="hidden lg:block font-[family-name:var(--font-heading)] btn-primary font-bold text-sm px-6 py-2.5 rounded tracking-wider"
        >
          APPLY NOW
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-ivory p-2 hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-navy-dark/80 backdrop-blur-2xl border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-[family-name:var(--font-body)] text-ivory/80 hover:text-gold text-xl font-medium py-3 block border-b border-ivory/10 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <Link
                  href="#admissions"
                  onClick={() => setMobileOpen(false)}
                  className="font-[family-name:var(--font-heading)] btn-primary font-bold text-center text-sm px-6 py-3 rounded block tracking-wider"
                >
                  APPLY NOW
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
