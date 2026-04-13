"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { Lightbulb, BookOpen, Zap, Trophy, Droplets, FlaskConical, Stethoscope, Wifi, Accessibility } from "lucide-react";

const facilities = [
  { label: "Morning Assembly", category: "Discipline", src: "/images/Assembly_Image/Assembly_Image_1.jpeg", gridClass: "col-span-1 sm:col-span-2 row-span-2" },
  { label: "Computer Lab", category: "Technology", src: "/images/Students_In_Computer_Lab/Students_In_Computer_Lab.jpeg", gridClass: "col-span-1 row-span-1" },
  { label: "Classroom Learning", category: "Academics", src: "/images/Students_Studying/Students_Studying_2.jpeg", gridClass: "col-span-1 row-span-1" },
  { label: "Playground", category: "Sports", src: "/images/Students_Playing/Students_Playing.jpeg", gridClass: "col-span-1 sm:col-span-2 row-span-1" },
  { label: "Music & Arts", category: "Co-curricular", src: "/images/Music_Classes/Music_Classes.jpeg", gridClass: "col-span-1 row-span-1" },
  { label: "School Bus", category: "Transport", src: "/images/School_Bus_Images/Students_In_School_Bus_1.jpeg", gridClass: "col-span-1 row-span-1" },
];

const facilityCards = [
  { label: "Tinkering Lab",    icon: Lightbulb,     desc: "Hands-on innovation & STEM exploration" },
  { label: "Library",          icon: BookOpen,      desc: "Curated collection for every grade" },
  { label: "Electric Power",   icon: Zap,           desc: "Uninterrupted power supply on campus" },
  { label: "Playground",       icon: Trophy,        desc: "Open grounds for sports & fitness" },
  { label: "Drinking Water",   icon: Droplets,      desc: "Clean & safe drinking water facility" },
  { label: "Laboratories",     icon: FlaskConical,  desc: "Science labs for practical learning" },
  { label: "Medical Check-up", icon: Stethoscope,   desc: "Regular health screening for students" },
  { label: "Internet",         icon: Wifi,          desc: "High-speed connectivity across campus" },
  { label: "Ramp",             icon: Accessibility, desc: "Fully accessible infrastructure" },
];

export default function FacilitiesPreview() {
  return (
    <section className="bg-ivory overflow-hidden">
      {/* ── Photo Bento Grid ── */}
      <div className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <ScrollReveal direction="up" className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-gold" />
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">Infrastructure</span>
              <span className="w-8 h-[2px] bg-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-dark font-[family-name:var(--font-heading)] leading-tight">
              World-Class Facilities
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[250px] gap-2 sm:gap-4">
            {facilities.map((item, i) => (
              <ScrollReveal key={item.label} direction="up" delay={i * 0.1} className={item.gridClass}>
                <div className="group relative w-full h-full overflow-hidden bg-navy rounded-lg sm:rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 active:scale-95">
                  <Image src={item.src} alt={item.label} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent md:bg-navy-dark/0 md:group-hover:bg-navy-dark/60 transition-colors duration-500 flex flex-col justify-end p-3 sm:p-6">
                    <h3 className="text-white font-[family-name:var(--font-heading)] text-xs sm:text-base md:text-2xl font-bold md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 mb-1.5 sm:mb-2 md:mb-4 leading-tight">{item.label}</h3>
                    <div className="inline-flex w-fit items-center bg-gold text-navy-dark text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full z-10 transition-transform duration-500 md:group-hover:-translate-y-2">{item.category}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Available Facilities ── */}
      <div className="bg-navy py-20 sm:py-28 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          {/* Section header */}
          <ScrollReveal direction="up" className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-gold/60" />
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">On Campus</span>
              <span className="w-8 h-[2px] bg-gold/60" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight mb-4">
              Available Facilities
            </h2>
            <p className="text-white/50 font-[family-name:var(--font-body)] text-base max-w-xl mx-auto">
              Every resource a student needs — right here on campus.
            </p>
          </ScrollReveal>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facilityCards.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.label} direction="up" delay={i * 0.07}>
                  <div className="group relative flex items-start gap-5 p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-gold/30 transition-all duration-400 cursor-default overflow-hidden">
                    {/* Gold line accent on hover */}
                    <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-2xl" />

                    {/* Icon */}
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/40 group-hover:scale-110 transition-all duration-400">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.8} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-heading)] text-white text-lg font-semibold mb-1 group-hover:text-gold transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="font-[family-name:var(--font-body)] text-white/45 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
