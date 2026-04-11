"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Deeksha Bharti",
    initials: "DB",
    childClass: "Google Review",
    rating: 5,
    quote:
      "Very good school, faculty and management is encouraged the all students, education is very high.",
  },
  {
    name: "Priya Negi",
    initials: "PN",
    childClass: "Parent — Class 6",
    rating: 5,
    quote:
      "We chose this school for its renowned discipline and we are completely amazed. My daughter has become exceptionally confident and focused. The environment they build is truly outstanding.",
  },
  {
    name: "Udit Zina",
    initials: "UZ",
    childClass: "Google Review",
    rating: 5,
    quote:
      "Amazing school with great values and dedicated teachers. Highly recommended for every parent who wants the best for their child. ❤️❤️",
  },
  {
    name: "Mayank Kumar",
    initials: "MK",
    childClass: "Google Review",
    rating: 5,
    quote:
      "A wonderful school with a great learning environment. The teachers are very supportive and the campus is beautiful in the heart of the Himalayas.",
  },
  {
    name: "Neelam Arya",
    initials: "NA",
    childClass: "Google Review",
    rating: 5,
    quote:
      "Excellent school with strong values and a caring environment. My child has grown so much since joining. The management truly cares about each student.",
  },
  {
    name: "Shobha Negi",
    initials: "SN",
    childClass: "Google Review",
    rating: 5,
    quote:
      "One of the best schools in Jeolikot. Great discipline, dedicated teachers, and a peaceful campus surrounded by nature. Very happy with our decision.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent(
      ((index % testimonials.length) + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 sm:py-32 bg-navy-dark relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-gold/10 via-transparent to-transparent opacity-30 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-olive/10 via-transparent to-transparent opacity-30 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-24"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-gold" />
            <span className="text-gold tracking-[0.3em] uppercase text-sm font-bold font-[family-name:var(--font-body)]">
              Legacy of Trust
            </span>
            <span className="w-12 h-[2px] bg-gold" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-[family-name:var(--font-heading)]">
            Parent <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-white">Voices</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Controls */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-gold hover:border-gold hover:scale-110 flex items-center justify-center text-white transition-all duration-300 shadow-xl backdrop-blur-md hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-gold hover:border-gold hover:scale-110 flex items-center justify-center text-white transition-all duration-300 shadow-xl backdrop-blur-md hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Testimonial Card */}
          <div className="relative px-2 sm:px-8">
            <AnimatePresence mode="wait">
                <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                className="bg-navy rounded-2xl sm:rounded-[3rem] p-6 sm:p-16 border border-white/10 relative overflow-hidden shadow-2xl"
              >
                {/* Huge Watermark Quote */}
                <Quote className="absolute -top-10 -left-10 w-64 h-64 text-white/5 rotate-12 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Rating */}
                  <div className="flex gap-1.5 sm:gap-2 mb-6 sm:mb-10">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 sm:w-8 sm:h-8 text-gold fill-gold drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="font-[family-name:var(--font-heading)] text-white text-base sm:text-2xl md:text-3xl lg:text-4xl text-center leading-snug sm:leading-tight md:leading-snug mb-8 sm:mb-12 italic font-light tracking-wide max-w-4xl">
                    "{testimonials[current].quote}"
                  </p>

                  <div className="w-16 sm:w-24 h-[1px] bg-gold/30 mb-6 sm:mb-10" />

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-6">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                      <span className="font-[family-name:var(--font-heading)] text-gold text-lg sm:text-2xl font-black tracking-widest">
                        {testimonials[current].initials}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-[family-name:var(--font-heading)] text-white text-base sm:text-2xl font-bold tracking-wide">
                        {testimonials[current].name}
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-gold text-xs sm:text-sm tracking-widest uppercase mt-1">
                        Parent — {testimonials[current].childClass}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator (Mobile friendly) */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                  i === current
                    ? "bg-gold scale-150 w-6 sm:w-8"
                    : "bg-white/20 hover:bg-white/40 active:scale-90"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
