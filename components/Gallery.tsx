"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const galleryItems = [
  { label: "Morning Assembly", src: "/images/Assembly_Image/Assembly_Image_1.jpeg" },
  { label: "Classroom Learning", src: "/images/Students_Studying/Students_Studying_1.jpeg" },
  { label: "Physical Training", src: "/images/Students_Playing/Students_Playing.jpeg" },
  { label: "Computer Laboratory", src: "/images/Students_In_Computer_Lab/Students_In_Computer_Lab.jpeg" },
  { label: "School Transport", src: "/images/School_Bus_Images/Students_In_School_Bus_1.jpeg" },
  { label: "Annual Sports Day", src: "/images/Students_Playing/Students_Playing_2.jpeg" },
  { label: "Music & Performing Arts", src: "/images/Music_Classes/Music_Classes.jpeg" },
  { label: "Library Hour", src: "/images/Students_Studying/Students_Studying_2.jpeg" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-1 bg-gold rounded-full" />
            <span className="text-navy font-bold tracking-widest uppercase text-sm font-[family-name:var(--font-body)]">
              Campus Gallery
            </span>
            <span className="w-8 h-1 bg-gold rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark font-[family-name:var(--font-heading)] leading-tight mb-6">
            Life at Bal Sanskar
          </h2>
          <p className="text-navy-light text-lg font-[family-name:var(--font-body)]">
            A glimpse into the daily life, activities, and infrastructure that shapes our students into future leaders.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, i) => (
            <ScrollReveal key={item.label} direction="up" delay={i * 0.07}>
              <div className="group relative h-64 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold font-[family-name:var(--font-heading)] text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
