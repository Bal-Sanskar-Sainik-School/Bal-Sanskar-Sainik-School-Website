"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const bgImages = [
  "/images/Assembly_Image/Assembly_Image_1.jpeg",
  "/images/Students_Studying/Students_Studying_2.jpeg",
  "/images/School_Bus_Images/Students_In_School_Bus_1.jpeg",
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={bgImages[currentBg]}
            alt="School background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={currentBg === 0}
            loading={currentBg === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Unified dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/60 to-navy-dark/90 z-[1]" />

      {/* Subtle gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-gold" />
            <span className="font-[family-name:var(--font-body)] text-gold font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">
              Jeolikot, Nainital
            </span>
            <span className="w-10 h-[2px] bg-gold" />
          </div>

          {/* Main Heading */}
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Bal Sanskar <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Sainik School
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-[family-name:var(--font-body)] text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Nurturing disciplined leaders of tomorrow through academic excellence,
            character building, and the timeless values of courage and integrity —
            in the heart of the Himalayas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="group flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-[family-name:var(--font-body)] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Apply for Admission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/academics"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-[family-name:var(--font-body)] font-semibold px-8 py-3.5 rounded-full transition-all duration-300"
            >
              Explore Academics
            </Link>
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-14">
          {bgImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentBg(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentBg
                  ? "bg-gold w-10"
                  : "bg-white/30 w-4 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
