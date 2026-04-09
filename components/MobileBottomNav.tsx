"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Info, BookOpen, Phone, DollarSign, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/academics", label: "Academics", icon: BookOpen },
  { href: "/fee-structure", label: "Fees", icon: DollarSign },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-navy-dark via-navy-dark to-navy-dark/95 backdrop-blur-xl border-t border-gold/30 shadow-[0_-8px_32px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-around px-1 py-2.5 pb-safe">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center gap-1 px-2.5 py-2 rounded-2xl transition-all duration-300 active:scale-90 min-w-[56px] ${
                  isActive
                    ? "bg-gradient-to-br from-gold/30 to-gold/10 text-gold scale-105 shadow-[0_0_20px_rgba(201,150,43,0.3)]"
                    : "text-white/60 hover:text-white hover:bg-white/5 active:bg-white/10"
                }`}
              >
                {isActive && (
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gold shadow-[0_0_10px_rgba(201,150,43,0.8)]" />
                )}
                <Icon 
                  className={`transition-all duration-300 ${
                    isActive ? "w-6 h-6 drop-shadow-[0_0_8px_rgba(201,150,43,0.6)]" : "w-5 h-5"
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={`text-[9px] font-bold tracking-wider font-[family-name:var(--font-body)] uppercase ${
                  isActive ? "text-gold" : ""
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind bottom nav on mobile */}
      <div className="md:hidden h-20" />
    </>
  );
}
