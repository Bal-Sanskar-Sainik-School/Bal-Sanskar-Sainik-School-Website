"use client";

import {
  BookOpen,
  Microscope,
  Calculator,
  Languages,
  Globe,
  Palette,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const academics = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "English Literature",
    description: "Developing comprehensive proficiency in writing, comprehension, and eloquence.",
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Mathematics",
    description: "Building analytical thinking, problem-solving skills, and numerical logic.",
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Applied Sciences",
    description: "Hands-on experiments in physics, chemistry, and biology to spark curiosity.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Social Studies",
    description: "Understanding geography, history, and the socio-political dynamics of our world.",
  },
  {
    icon: <Languages className="w-8 h-8" />,
    title: "Hindi & Sanskrit",
    description: "Rooting our students deeply in Indian heritage, culture, and ancient languages.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Arts & Humanities",
    description: "Fostering creativity, painting, music, and an appreciation for aesthetics.",
  },
];

export default function AcademicsPreview() {
  return (
    <section className="py-24 sm:py-32 bg-navy">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-gold" />
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">
              Academic Excellence
            </span>
            <span className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight mb-6">
            Curriculum & Pedagogy
          </h2>
          <p className="text-white/70 text-[17px] font-[family-name:var(--font-body)] leading-[1.7]">
            A meticulously designed framework that balances military discipline with
            progressive holistic education to shape global citizens deeply connected to Indian values.
          </p>
        </ScrollReveal>

        {/* Feature Grid - 2 columns on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {academics.map((feature, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.08}>
              <div className="relative p-[1px] rounded-2xl sm:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(201,150,43,0.15)] h-full">
                {/* Gradient Border Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-gold/40 group-hover:to-gold/5 transition-colors duration-500" />
                
                {/* Inner Card content */}
                <div className="relative h-full bg-navy-dark rounded-2xl sm:rounded-[2rem] p-4 sm:p-8 md:p-10 flex flex-col overflow-hidden">
                  
                  {/* Ambient Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/5 blur-[50px] rounded-full group-hover:bg-gold/20 transition-all duration-700 pointer-events-none" />
                  
                  {/* Index Number */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-8 font-[family-name:var(--font-heading)] text-3xl sm:text-5xl text-white/[0.03] font-black group-hover:text-gold/10 transition-colors duration-500 select-none">
                    0{idx + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold mb-4 sm:mb-8 group-hover:scale-110 group-hover:border-gold/40 group-hover:bg-gold/10 transition-all duration-500 relative z-10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] group-hover:shadow-[inset_0_0_20px_rgba(201,150,43,0.2)]">
                    <div className="scale-75 sm:scale-100">{feature.icon}</div>
                  </div>
                  
                  <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white font-[family-name:var(--font-heading)] mb-2 sm:mb-4 transition-colors relative z-10 group-hover:text-gold">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/60 text-xs sm:text-sm md:text-[15px] font-[family-name:var(--font-body)] leading-relaxed relative z-10 group-hover:text-white/80 transition-colors mb-2 sm:mb-4 flex-1">
                    {feature.description}
                  </p>

                  {/* Hover interactive element */}
                  <div className="mt-4 sm:mt-8 pt-3 sm:pt-6 border-t border-white/5 flex items-center gap-2 sm:gap-4 group-hover:border-gold/20 transition-colors duration-500 relative z-10">
                    <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold group-hover:text-gold transition-colors">Explore</span>
                    <div className="flex-1 h-[1px] bg-white/5 group-hover:bg-gradient-to-r group-hover:from-gold/50 group-hover:to-transparent transition-all duration-500" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
