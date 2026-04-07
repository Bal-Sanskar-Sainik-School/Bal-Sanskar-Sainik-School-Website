"use client";

import Link from "next/link";
import { Shield, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

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
    <footer className="bg-navy border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1 - School Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gold/15 border-2 border-gold/30 flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-gold text-lg font-bold">
                  Bal Sanskar
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-ivory/50 text-xs tracking-[0.2em] uppercase">
                  Sainik School
                </p>
              </div>
            </div>
            <p className="font-[family-name:var(--font-body)] text-ivory/50 text-base leading-relaxed mb-4">
              A premier military-style school in the heart of the Himalayas, nurturing 
              disciplined leaders of tomorrow through academic excellence and Sainik values.
            </p>
            <p className="font-[family-name:var(--font-heading)] text-gold/50 text-xs tracking-[0.15em] italic">
              &ldquo;Discipline. Excellence. Nation.&rdquo;
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-ivory text-lg font-bold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-ivory/50 hover:text-gold text-base transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/30 rounded-full group-hover:bg-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social & Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-ivory text-lg font-bold mb-5">
              Connect With Us
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="font-[family-name:var(--font-body)] text-ivory/50 text-base">
                  Jeolikot, Nainital,
                  <br />
                  Uttarakhand, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+919927289673"
                  className="font-[family-name:var(--font-body)] text-ivory/50 hover:text-gold text-base transition-colors"
                >
                  +91 99272 89673
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/bal.sansar.sainik.school"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1CAbyUUs2R/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-body)] text-ivory/30 text-sm text-center sm:text-left">
            © 2025 Bal Sanskar Sainik School, Jeolikot Nainital. All Rights Reserved.
          </p>
          <p className="font-[family-name:var(--font-body)] text-ivory/20 text-sm">
            Discipline. Excellence. Nation.
          </p>
        </div>
      </div>
    </footer>
  );
}
