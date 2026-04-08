"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const galleryItems = [
  { label: "Morning Assembly", src: "/images/Assembly_Image/Assembly_Image_1.jpeg" },
  { label: "Classroom Learning", src: "/images/Students_Studying/Students_Studying_1.jpeg" },
  { label: "Physical Training", src: "/images/Students_Playing/Students_Playing.jpeg" },
  { label: "Digital Literacy", src: "/images/Students_In_Computer_Lab/Students_In_Computer_Lab.jpeg" },
  { label: "Safe Transport", src: "/images/School_Bus_Images/Students_In_School_Bus_1.jpeg" },
  { label: "Sports Day", src: "/images/Students_Playing/Students_Playing_2.jpeg" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on Escape key
  if (typeof window !== "undefined") {
    window.onkeydown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
  }

  return (
    <section className="py-24 bg-ivory-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-gold" />
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">
              Campus Gallery
            </span>
            <span className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark font-[family-name:var(--font-heading)] leading-tight mb-6">
            Life at Bal Sansar
          </h2>
        </ScrollReveal>

        {/* Gallery Container: Horizontal scroll on mobile, 3-col on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {galleryItems.map((item, i) => (
            <ScrollReveal key={item.label} direction="up" delay={i * 0.1} className="shrink-0 w-[85vw] sm:w-[60vw] md:w-auto snap-center">
              <div 
                className="group relative h-[350px] sm:h-[400px] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item.src)}
              >
                {/* Image with subtle parallax via large scale down on hover */}
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white font-[family-name:var(--font-heading)] text-2xl font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Image
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-navy-dark/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={36} strokeWidth={1} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative w-full max-w-5xl aspect-video rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged gallery view"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
