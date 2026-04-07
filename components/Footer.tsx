"use client";

import { MapPin, Phone, Shield } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Fee Structure", href: "#fees" },
  { name: "Admissions", href: "#admissions" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ivory-dark border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/15">
                <Shield className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gold">
                  Bal Sanskar
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.2em] text-navy-dark/80">
                  Sainik School
                </p>
              </div>
            </div>
            <p className="mb-4 text-base leading-relaxed text-navy-dark/80">
              A premier educational institution in the heart of the Himalayas, nurturing
              disciplined leaders of tomorrow through academic excellence and core values.
            </p>
            <p className="font-[family-name:var(--font-heading)] text-xs italic tracking-[0.15em] text-gold">
              &ldquo;Discipline. Excellence. Nation.&rdquo;
            </p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-navy-dark mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-base text-navy-dark/80 transition-colors duration-300 hover:text-gold"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold/30 transition-colors group-hover:bg-gold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-navy-dark mb-5">
              Connect With Us
            </h3>
            <div className="mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                <p className="text-base text-navy-dark/80">
                  Jeolikot, Nainital,
                  <br />
                  Uttarakhand, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gold" />
                <a
                  href="tel:+919927289673"
                  className="text-base text-navy-dark/80 transition-colors hover:text-gold"
                >
                  +91 99272 89673
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/bal.sansar.sainik.school"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all duration-300 hover:bg-gold hover:text-navy"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1CAbyUUs2R/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all duration-300 hover:bg-gold hover:text-navy"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 text-sm sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-navy-dark/70 sm:text-left">
            Copyright 2026 Bal Sanskar Sainik School, Jeolikot Nainital. All rights reserved.
          </p>
          <p className="text-gold font-semibold text-xs tracking-wider uppercase">Discipline. Excellence. Nation.</p>
        </div>
      </div>
    </footer>
  );
}
