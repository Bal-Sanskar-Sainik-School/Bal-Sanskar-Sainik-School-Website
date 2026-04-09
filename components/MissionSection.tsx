"use client";

import { motion } from "framer-motion";
import { Target, BookOpen, Users, Heart, Award } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const missionPoints = [
  {
    icon: Award,
    text: "Strive for excellence in all you do, including work, sports, hobbies, and skills.",
  },
  {
    icon: BookOpen,
    text: "To offer the best tools and technologies for new areas of research and learning.",
  },
  {
    icon: Target,
    text: "To enhance our standards consistently, in order to combine our culture and heritage with the best education available.",
  },
  {
    icon: Users,
    text: "To give our teachers the optimal resources and training possible.",
  },
  {
    icon: Heart,
    text: "By involving everyone in academic and socially relevant programs that uphold fundamental human values and practice inclusivity and compassion.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-navy via-navy-dark to-navy overflow-hidden relative pt-20 md:pt-28">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 overflow-hidden">
        
        {/* School Name - Big and Bold */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white/10 border-4 border-gold shadow-[0_0_40px_rgba(201,150,43,0.5)] p-2">
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="Bal Sansar Sainik School Logo"
                  fill
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 break-words">
              Bal Sansar Sainik School
            </h1>
            <p className="font-[family-name:var(--font-body)] text-gold text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] font-bold">
              Jeolikot, Nainital · Uttarakhand
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="w-16 h-[2px] bg-gold" />
              <span className="text-gold text-xs sm:text-sm font-bold tracking-widest">EST. 2008</span>
              <span className="w-16 h-[2px] bg-gold" />
            </div>
          </div>
        </ScrollReveal>

        {/* Mission Header */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm font-[family-name:var(--font-body)]">
                Our Mission
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Shaping Tomorrow's Leaders
            </h2>
          </div>
        </ScrollReveal>

        {/* Mission Points */}
        <div className="grid gap-4 sm:gap-6 max-w-5xl mx-auto">
          {missionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <ScrollReveal key={index} direction="up" delay={0.3 + index * 0.1}>
                <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 active:scale-95">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                    </div>
                    <p className="font-[family-name:var(--font-body)] text-white/80 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-white transition-colors">
                      {point.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="text-center mt-12 sm:mt-16">
            <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl md:text-3xl italic text-gold font-medium">
              "Discipline. Excellence. Nation."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
