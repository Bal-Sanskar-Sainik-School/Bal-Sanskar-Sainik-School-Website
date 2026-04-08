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

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academics.map((feature, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.08}>
              <div className="bg-ivory-dark relative overflow-hidden p-10 group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(201,150,43,0.15)] flex flex-col h-full border-t-[3px] border-transparent hover:border-gold">
                <div className="w-14 h-14 bg-white shadow-sm rounded-sm flex items-center justify-center text-gold mb-8 transition-transform duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-dark font-[family-name:var(--font-heading)] mb-4 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-navy-light text-[15px] font-[family-name:var(--font-body)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
