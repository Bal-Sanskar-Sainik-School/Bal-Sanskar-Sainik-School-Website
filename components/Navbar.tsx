"use client";

import { useState, useEffect } from "react";
import { Shield, ArrowRight } from "lucide-react";
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
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Logo Bar - Only on Home Page */}
      {isHomePage && (
        <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-navy-dark/95 to-navy-dark/85 backdrop-blur-xl border-b border-gold/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-gold/15 rounded-full p-1.5 shadow-[0_0_15px_rgba(201,150,43,0.3)]">
                <Shield className="w-full h-full text-gold drop-shadow-[0_0_10px_rgba(201,150,43,0.8)]" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-[family-name:var(--font-heading)] text-base font-black leading-none tracking-wide text-white drop-shadow-lg">
                  Bal Sansar
                </h1>
                <p className="font-[family-name:var(--font-body)] text-[9px] uppercase tracking-[0.15em] font-bold mt-0.5 text-gold drop-shadow-md">
                  Sainik School
                </p>
              </div>
            </Link>
          </div>
        </nav>
      )}

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md py-3" : "py-5 border-b border-gray-200"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          
          {/* Brand Logo - Desktop */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-navy-dark" />
            </div>
            <div className="flex flex-col justify-center translate-y-0.5">
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
        </div>
      </nav>
    </>
  );
}
