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
    <section className="py-24 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-gold" />
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">
              Infrastructure
            </span>
            <span className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark font-[family-name:var(--font-heading)] leading-tight mb-6">
            World-Class Facilities
          </h2>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4">
          {facilities.map((item, i) => (
            <ScrollReveal key={item.label} direction="up" delay={i * 0.1} className={item.gridClass}>
              <div className="group relative w-full h-full overflow-hidden bg-navy">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/60 transition-colors duration-500 flex flex-col justify-end p-6">
                  {/* Hover Title */}
                  <h3 className="text-white font-[family-name:var(--font-heading)] text-2xl font-bold translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mb-4">
                    {item.label}
                  </h3>
                  
                  {/* Static Category Pill */}
                  <div className="inline-flex w-fit items-center bg-gold text-navy-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 transition-transform duration-500 group-hover:-translate-y-2">
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
