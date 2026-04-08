"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function JoinOurRanks() {
  return (
    <section className="relative py-28 bg-gold overflow-hidden text-center z-10">
      {/* Subtle Diagonal Stripe Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)`
        }}
      />
      
      {/* Top/Bottom Border Accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-navy/20 z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-navy/20 z-0" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-[family-name:var(--font-heading)] mb-6 leading-tight drop-shadow-sm">
            Admissions Open for 2025–26
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-lg sm:text-xl text-white/95 font-[family-name:var(--font-body)] mb-12 max-w-2xl mx-auto leading-relaxed font-medium text-shadow-sm">
            Shape your child's future with military discipline, rigorous academics, and a world-class environment in the Himalayas. limited seats available.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/admissions"
              className="group flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-[family-name:var(--font-body)] font-bold uppercase tracking-[0.1em] px-10 py-5 rounded-sm transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 shadow-2xl shadow-navy/30"
            >
              Apply Online
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 bg-white/20 hover:bg-white text-navy-dark font-[family-name:var(--font-body)] border border-transparent hover:border-white font-bold uppercase tracking-[0.1em] px-10 py-5 rounded-sm transition-all duration-300 w-full sm:w-auto shadow-lg backdrop-blur-md"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
