"use client";

import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const events = [
  {
    title: "Annual Sports Day",
    date: "March 15, 2026",
    description: "A grand display of physical prowess, discipline, and teamwork by our cadets.",
    image: "/images/Students_Playing/Students_Playing_2.jpeg",
  },
  {
    title: "Republic Day Parade",
    date: "January 26, 2026",
    description: "Flag hoisting ceremonies and March Past showcasing absolute coordination.",
    image: "/images/Assembly_Image/Assembly_Image_2.jpeg",
  },
  {
    title: "Farewell Ceremony",
    date: "February 10, 2026",
    description: "Wishing our passing out batch a glorious future in the armed forces and beyond.",
    image: "/images/Assembly_Image/Assembly_Image_1.jpeg",
  },
];

export default function EventsPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white border-t border-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col md:flex-row justify-between items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-1 bg-gold rounded-full" />
              <span className="text-navy font-bold tracking-widest uppercase text-sm font-[family-name:var(--font-body)]">
                Campus Life
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-dark font-[family-name:var(--font-heading)] leading-tight">
              Upcoming Events
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2 text-navy-light hover:text-navy font-bold transition-colors font-[family-name:var(--font-body)]"
            >
              View All Events
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {events.map((event, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-ivory-dark rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-navy/5 group h-full active:scale-95">
                <div className="relative h-32 sm:h-60 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-1.5 sm:top-4 left-1.5 sm:left-4 bg-white/90 backdrop-blur px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded text-[10px] sm:text-sm font-bold text-navy-dark flex items-center gap-1 sm:gap-2 shadow-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                    {event.date}
                  </div>
                </div>
                <div className="p-2.5 sm:p-6">
                  <h3 className="text-sm sm:text-xl font-bold text-navy-dark font-[family-name:var(--font-heading)] mb-1.5 sm:mb-3 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-navy-light font-[family-name:var(--font-body)] leading-relaxed text-[11px] sm:text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
