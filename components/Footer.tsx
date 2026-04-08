"use client";

import { MapPin, Phone, Shield, Mail } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Admissions", href: "/admissions" },
  { name: "Fee Structure", href: "/fee-structure" },
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
    <footer className="bg-navy border-t-[4px] border-gold text-white relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          
          {/* Column 1: Logo & Tagline */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-transparent">
                <Shield className="h-6 w-6 text-gold" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white tracking-wide">
                  Bal Sansar
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Sainik School
                </p>
              </div>
            </div>
            <p className="mb-6 text-[15px] leading-relaxed text-white/70 font-[family-name:var(--font-body)]">
              A premier educational institution in the heart of the Himalayas, nurturing
              disciplined leaders of tomorrow.
            </p>
            <p className="font-[family-name:var(--font-heading)] text-sm italic tracking-[0.1em] text-gold font-medium">
              &ldquo;Discipline. Excellence. Nation.&rdquo;
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-[17px] font-bold text-white mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] text-white/70 transition-colors duration-300 hover:text-gold font-[family-name:var(--font-body)]"
                  >
                    <span className="h-[1px] w-2 bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-[17px] font-bold text-white mb-6 tracking-wide">
              Academics
            </h3>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] text-white/70 transition-colors duration-300 hover:text-gold font-[family-name:var(--font-body)]"
                  >
                    <span className="h-[1px] w-2 bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-[17px] font-bold text-white mb-6 tracking-wide">
              Contact Us
            </h3>
            <div className="mb-8 space-y-4 font-[family-name:var(--font-body)]">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                <p className="text-[15px] text-white/70 leading-relaxed">
                  Jeolikot, Nainital,<br />
                  Uttarakhand, India
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 flex-shrink-0 text-gold" />
                <a
                  href="tel:+919927289673"
                  className="text-[15px] text-white/70 transition-colors hover:text-gold"
                >
                  +91 99272 89673
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 flex-shrink-0 text-gold" />
                <a
                  href="mailto:balsansars@gmail.com"
                  className="text-[15px] text-white/70 transition-colors hover:text-gold"
                >
                  balsansars@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons (Outlined Circle Style) */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/919927289673"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110 object-contain group"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp size={18} className="group-hover:drop-shadow-[0_0_8px_rgba(201,150,43,0.8)]" />
              </a>
              <a
                href="https://www.instagram.com/bal.sansar.sainik.school"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110 object-contain group"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={18} className="group-hover:drop-shadow-[0_0_8px_rgba(201,150,43,0.8)]" />
              </a>
              <a
                href="https://www.facebook.com/deepideeksha110/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110 object-contain group"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF size={16} className="group-hover:drop-shadow-[0_0_8px_rgba(201,150,43,0.8)]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gold/20 bg-navy-dark px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-between gap-3 py-6 text-sm sm:flex-row sm:px-10 lg:px-16">
          <p className="text-center text-white/50 font-[family-name:var(--font-body)] font-medium">
            &copy; {new Date().getFullYear()} Bal Sansar Sainik School &middot; Jeolikot, Nainital
          </p>
        </div>
      </div>
    </footer>
  );
}
