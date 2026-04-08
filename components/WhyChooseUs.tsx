"use client";

import {
  Shield,
  BookOpen,
  MonitorPlay,
  HeartPulse,
  Bus,
  Library,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const facilities = [
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: "Smart Classrooms",
    description: "Technology-enabled learning spaces for interactive and conceptual education.",
  },
  {
    icon: <Library className="w-8 h-8" />,
    title: "Resourceful Library",
    description: "Extensive collection of books, journals, and digital media to encourage reading.",
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Sports & Fitness",
    description: "Expansive playgrounds and daily PT sessions to foster physical resilience.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Campus",
    description: "24/7 CCTV surveillance and guarded premises for complete peace of mind.",
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: "Transport Facility",
    description: "Safe and widespread transport network covering major routes in the region.",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Modern Labs",
    description: "Fully-equipped science and computer laboratories for practical exposure.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-1 bg-gold rounded-full" />
            <span className="text-navy font-bold tracking-widest uppercase text-sm font-[family-name:var(--font-body)]">
              Our Infrastructure
            </span>
            <span className="w-8 h-1 bg-gold rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark font-[family-name:var(--font-heading)] leading-tight mb-6">
            World-Class Facilities
          </h2>
          <p className="text-navy-light text-lg font-[family-name:var(--font-body)]">
            We provide a nurturing environment equipped with premium modern amenities
            that support both the academic and extracurricular development of your child.
          </p>
        </ScrollReveal>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((feature, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.08}>
              <div className="bg-white border border-navy/10 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group h-full">
                <div className="w-16 h-16 bg-ivory-dark rounded-full flex items-center justify-center text-navy group-hover:text-gold group-hover:bg-navy transition-colors duration-300 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-dark font-[family-name:var(--font-heading)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-light font-[family-name:var(--font-body)] leading-relaxed">
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
