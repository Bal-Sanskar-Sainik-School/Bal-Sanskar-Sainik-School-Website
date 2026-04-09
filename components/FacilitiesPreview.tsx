"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const facilities = [
  { label: "Morning Assembly", category: "Discipline", src: "/images/Assembly_Image/Assembly_Image_1.jpeg", gridClass: "col-span-1 sm:col-span-2 row-span-2" },
  { label: "Computer Lab", category: "Technology", src: "/images/Students_In_Computer_Lab/Students_In_Computer_Lab.jpeg", gridClass: "col-span-1 row-span-1" },
  { label: "Classroom Learning", category: "Academics", src: "/images/Students_Studying/Students_Studying_2.jpeg", gridClass: "col-span-1 row-span-1" },
  { label: "Playground", category: "Sports", src: "/images/Students_Playing/Students_Playing.jpeg", gridClass: "col-span-1 sm:col-span-2 row-span-1" },
  { label: "Music & Arts", category: "Co-curricular", src: "/images/Music_Classes/Music_Classes.jpeg", gridClass: "col-span-1 row-span-1" },
  { label: "School Bus", category: "Transport", src: "/images/School_Bus_Images/Students_In_School_Bus_1.jpeg", gridClass: "col-span-1 row-span-1" },
];

export default function FacilitiesPreview() {
  return (
    <section className="py-16 sm:py-24 bg-ivory overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-gold" />
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">
              Infrastructure
            </span>
            <span className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-dark font-[family-name:var(--font-heading)] leading-tight mb-4 sm:mb-6">
            World-Class Facilities
          </h2>
        </ScrollReveal>

        {/* Bento Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[250px] gap-2 sm:gap-4">
          {facilities.map((item, i) => (
            <ScrollReveal key={item.label} direction="up" delay={i * 0.1} className={item.gridClass}>
              <div className="group relative w-full h-full overflow-hidden bg-navy rounded-lg sm:rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 active:scale-95">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent md:bg-navy-dark/0 md:group-hover:bg-navy-dark/60 transition-colors duration-500 flex flex-col justify-end p-3 sm:p-6">
                  {/* Hover Title */}
                  <h3 className="text-white font-[family-name:var(--font-heading)] text-xs sm:text-base md:text-2xl font-bold md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 mb-1.5 sm:mb-2 md:mb-4 leading-tight">
                    {item.label}
                  </h3>
                  
                  {/* Static Category Pill */}
                  <div className="inline-flex w-fit items-center bg-gold text-navy-dark text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full z-10 transition-transform duration-500 md:group-hover:-translate-y-2">
                    {item.category}
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
