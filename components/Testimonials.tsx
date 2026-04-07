"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar Sharma",
    initials: "RS",
    childClass: "Class 3",
    rating: 5,
    quote:
      "Bal Sanskar Sainik School has transformed my son. The discipline, values, and academic focus here are exceptional. The teachers are dedicated and the Himalayan campus is a blessing for young minds.",
  },
  {
    name: "Priya Negi",
    initials: "PN",
    childClass: "Class 6",
    rating: 5,
    quote:
      "We chose this school for its excellent discipline and we are not disappointed. My daughter has become more confident, disciplined and focused. The fee structure is very reasonable for the quality they provide.",
  },
  {
    name: "Amit Bisht",
    initials: "AB",
    childClass: "Class 5",
    rating: 5,
    quote:
      "The holistic development approach is what sets this school apart. My child excels not just in academics but in sports, arts, and has developed strong moral values. Highly recommended!",
  },
  {
    name: "Sunita Rawat",
    initials: "SR",
    childClass: "Class 2",
    rating: 5,
    quote:
      "As a parent, safety was my top concern. The school provides a very secure and nurturing environment. The morning assembly and daily activities instill amazing discipline in children from a young age.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent(
      ((index % testimonials.length) + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-ivory" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold text-lg tracking-[0.3em] uppercase mb-3">
            Parent Voices
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
            Testimonials
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy/10 hover:bg-navy/20 flex items-center justify-center text-navy/60 hover:text-navy transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy/10 hover:bg-navy/20 flex items-center justify-center text-navy/60 hover:text-navy transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Card */}
          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="glass-card-navy rounded-3xl p-8 sm:p-10 md:p-12 text-center relative z-10"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-gold" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold fill-gold"
                      />
                    )
                  )}
                </div>

                {/* Quote Text */}
                <p className="font-[family-name:var(--font-body)] text-ivory/80 text-lg sm:text-xl md:text-2xl leading-relaxed italic mb-8 max-w-3xl mx-auto">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                {/* Avatar & Name */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-heading)] text-gold text-lg font-bold">
                      {testimonials[current].initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-heading)] text-ivory text-lg font-bold">
                      {testimonials[current].name}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-gold/60 text-base">
                      Parent — {testimonials[current].childClass}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-gold w-8"
                    : "bg-navy/20 hover:bg-navy/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
