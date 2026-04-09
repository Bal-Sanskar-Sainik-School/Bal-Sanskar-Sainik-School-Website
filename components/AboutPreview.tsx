"use client";

import { ArrowRight, Compass, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function AboutPreview() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <ScrollReveal direction="right" duration={0.8}>
            <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden shadow-2xl">
              <Image
                src="/images/Students_Studying/Students_Studying_1.jpeg"
                alt="Students Studying"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="flex flex-col justify-center relative">
            {/* Gold vertical line accent */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold hidden sm:block -ml-8 lg:-ml-12" />

            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold font-bold tracking-[0.12em] uppercase text-[11px] font-[family-name:var(--font-body)]">
                  The Genesis of Greatness
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-[family-name:var(--font-heading)] text-navy leading-[1.1] mb-6 sm:mb-8">
                Shaping Leaders for Tomorrow&apos;s India
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-navy-light text-base sm:text-[17px] leading-[1.7] mb-8 sm:mb-12 font-[family-name:var(--font-body)]">
                Nestled in the serene surroundings of Jeolikot, Nainital, Bal Sansar Sainik School
                blends an exceptional academic curriculum with structural discipline, creating an
                environment where potential meets preparation. We believe in nurturing minds that are ready for future challenges.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35}>
              <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-12">
                <div className="flex flex-col gap-2 sm:gap-4 p-3 sm:p-8 bg-ivory-dark border border-navy/5 hover:border-gold/30 transition-all duration-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md active:scale-95">
                  <Target className="w-5 h-5 sm:w-8 sm:h-8 text-gold" />
                  <h4 className="font-bold text-navy font-[family-name:var(--font-heading)] text-sm sm:text-2xl leading-tight">Our Mission</h4>
                  <p className="text-navy-light text-[11px] sm:text-[15px] leading-relaxed">To empower young minds with profound knowledge and unshakable character.</p>
                </div>
                <div className="flex flex-col gap-2 sm:gap-4 p-3 sm:p-8 bg-ivory-dark border border-navy/5 hover:border-gold/30 transition-all duration-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md active:scale-95">
                  <Compass className="w-5 h-5 sm:w-8 sm:h-8 text-gold" />
                  <h4 className="font-bold text-navy font-[family-name:var(--font-heading)] text-sm sm:text-2xl leading-tight">Our Vision</h4>
                  <p className="text-navy-light text-[11px] sm:text-[15px] leading-relaxed">To be the foundation and nursery of the nation&apos;s finest and most disciplined youth.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.45}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-navy hover:text-gold font-bold uppercase tracking-[0.1em] text-[13px] transition-colors font-[family-name:var(--font-body)] relative"
              >
                Discover Our Heritage
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
