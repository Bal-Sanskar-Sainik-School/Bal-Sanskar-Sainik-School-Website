"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  GraduationCap,
  BookOpen,
  Mountain,
  Heart,
  Lock,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Strong Discipline & Values",
    description:
      "Instilling discipline, punctuality, and strong values through a structured daily routine that builds character from a young age.",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Academic Excellence (Class 1–8)",
    description:
      "Comprehensive education from Class 1 to 8 with experienced faculty, modern teaching methods, and a focus on conceptual understanding.",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "CBSE-Aligned Curriculum",
    description:
      "Our curriculum follows CBSE standards, ensuring students are well-prepared for future academic pursuits and competitive examinations.",
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Himalayan Campus, Nainital",
    description:
      "Located in the pristine hills of Jeolikot, Nainital, our campus offers a pollution-free environment ideal for focused learning and growth.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Holistic Child Development",
    description:
      "Beyond academics — sports, arts, music, yoga, and adventure activities ensure the all-round development of every student.",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Safe & Nurturing Environment",
    description:
      "A secure campus with caring staff, balanced nutrition, regular health check-ups, and a family-like atmosphere for young learners.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-navy relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold-light text-lg tracking-[0.3em] uppercase mb-3">
            Excellence in Every Aspect
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
            Why Choose Us
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-card-navy rounded-2xl p-7 sm:p-8 cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 text-gold group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-400">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-heading)] text-ivory text-lg sm:text-xl font-bold mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-[family-name:var(--font-body)] text-ivory/70 text-base sm:text-lg leading-relaxed font-light tracking-wide">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
