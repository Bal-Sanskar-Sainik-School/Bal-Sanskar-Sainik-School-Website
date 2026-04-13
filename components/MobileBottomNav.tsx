"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Info, CalendarDays, Phone, DollarSign, GraduationCap, FileText } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/fee-structure", label: "Fees", icon: DollarSign },
  { href: "/documents", label: "Docs", icon: FileText },
  { href: "/admissions", label: "Admit", icon: GraduationCap },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="md:hidden fixed bottom-4 left-3 right-3 z-50 bg-navy-dark/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.5)] safe-area-bottom">
        <div className="flex items-center justify-between px-2 py-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center gap-1 p-2 rounded-full transition-all duration-300 active:scale-95 flex-1 ${
                  isActive
                    ? "bg-white/10"
                    : "hover:bg-white/5"
                }`}
              >
                <div className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
                  isActive ? "bg-gold text-navy-dark shadow-[0_0_15px_rgba(201,150,43,0.5)]" : "text-white/60"
                }`}>
                  <Icon 
                    className={`transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </div>
                <span className={`text-[8px] sm:text-[9px] font-bold tracking-wider font-[family-name:var(--font-body)] uppercase transition-colors duration-300 ${
                  isActive ? "text-gold" : "text-white/50"
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
