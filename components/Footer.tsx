"use client";

import { MapPin, Phone, Shield, Mail } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Admissions", href: "/admissions" },
  { name: "Fee Structure", href: "/fee-structure" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const academicLinks = [
  { name: "Primary Classes (1-5)", href: "#" },
  { name: "Middle Classes (6-8)", href: "#" },
  { name: "Physical Training", href: "#" },
  { name: "Library & Labs", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t-[4px] border-gold text-white relative z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16 md:pb-8">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          
          {/* Column 1: Logo & Tagline */}
          <div className="text-center sm:text-left">
            <div className="mb-4 sm:mb-6 flex items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gold bg-transparent">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-white tracking-wide">
                  Bal Sansar
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Sainik School
                </p>
              </div>
            </div>
            <p className="mb-4 sm:mb-6 text-sm sm:text-[15px] leading-relaxed text-white/70 font-[family-name:var(--font-body)]">
              A premier educational institution in the heart of the Himalayas, nurturing
              disciplined leaders of tomorrow.
            </p>
            <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm italic tracking-[0.1em] text-gold font-medium">
              &ldquo;Nurturing Minds, Inspiring Excellence&rdquo;
            </p>
          </div>

          {/* Column 2: Quick Links - Hidden on mobile */}
          <div className="hidden sm:block text-center sm:text-left">
            <h3 className="font-[family-name:var(--font-heading)] text-base sm:text-[17px] font-bold text-white mb-4 sm:mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm sm:text-[15px] text-white/70 transition-colors duration-300 hover:text-gold font-[family-name:var(--font-body)] active:scale-95"
                  >
                    <span className="h-[1px] w-2 bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics - Hidden on mobile */}
          <div className="hidden sm:block text-center sm:text-left">
            <h3 className="font-[family-name:var(--font-heading)] text-base sm:text-[17px] font-bold text-white mb-4 sm:mb-6 tracking-wide">
              Academics
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm sm:text-[15px] text-white/70 transition-colors duration-300 hover:text-gold font-[family-name:var(--font-body)] active:scale-95"
                  >
                    <span className="h-[1px] w-2 bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-[family-name:var(--font-heading)] text-base sm:text-[17px] font-bold text-white mb-4 sm:mb-6 tracking-wide">
              Contact Us
            </h3>
            <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 font-[family-name:var(--font-body)]">
              <div className="flex items-start gap-3 sm:gap-4 justify-center sm:justify-start">
                <MapPin className="mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-gold" />
                <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed">
                  Jeolikot, Nainital,<br />
                  Uttarakhand, India
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-gold" />
                <a
                  href="tel:+919927289673"
                  className="text-sm sm:text-[15px] text-white/70 transition-colors hover:text-gold active:scale-95"
                >
                  +91 99272 89673
                </a>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-gold" />
                <a
                  href="mailto:balsansars@gmail.com"
                  className="text-sm sm:text-[15px] text-white/70 transition-colors hover:text-gold active:scale-95"
                >
                  balsansars@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="https://wa.me/919927289673"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110 active:scale-95 group"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:drop-shadow-[0_0_8px_rgba(201,150,43,0.8)]" />
              </a>
              <a
                href="https://www.instagram.com/bal.sansar.sainik.school"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110 active:scale-95 group"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:drop-shadow-[0_0_8px_rgba(201,150,43,0.8)]" />
              </a>
              <a
                href="https://www.facebook.com/deepideeksha110/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110 active:scale-95 group"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:drop-shadow-[0_0_8px_rgba(201,150,43,0.8)]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gold/20 bg-navy-dark px-4 sm:px-6 pb-24 md:pb-6">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-between gap-2 sm:gap-3 py-4 sm:py-6 text-xs sm:text-sm sm:flex-row sm:px-10 lg:px-16">
          <p className="text-center text-white/50 font-[family-name:var(--font-body)] font-medium">
            &copy; {new Date().getFullYear()} Bal Sansar Sainik School &middot; Jeolikot, Nainital
          </p>
        </div>
      </div>
    </footer>
  );
}
