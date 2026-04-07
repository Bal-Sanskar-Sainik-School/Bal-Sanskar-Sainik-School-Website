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
    accentColor: "gold",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Academic Excellence",
    description:
      "Comprehensive education from Class 1 to 8 with experienced faculty, modern teaching methods, and a focus on conceptual understanding.",
    accentColor: "olive",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "CBSE-Aligned Curriculum",
    description:
      "Our curriculum follows CBSE standards, ensuring students are well-prepared for future academic pursuits and competitive examinations.",
    accentColor: "gold",
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Himalayan Campus",
    description:
      "Located in the pristine hills of Jeolikot, Nainital, our campus offers a pollution-free environment ideal for focused learning and growth.",
    accentColor: "olive",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Holistic Development",
    description:
      "Beyond academics — sports, arts, music, yoga, and adventure activities ensure the all-round development of every student.",
    accentColor: "gold",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Safe & Nurturing",
    description:
      "A secure campus with caring staff, balanced nutrition, regular health check-ups, and a family-like atmosphere for young learners.",
    accentColor: "olive",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-ivory-dark relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-olive/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold-dark font-bold tracking-[0.2em] uppercase mb-3">
            Excellence in Every Aspect
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy-dark text-4xl sm:text-5xl font-black gold-underline flex flex-col sm:inline-block items-center">
            Why Choose Us
          </h2>
          <div className="star-divider mt-10">
            <Star className="w-5 h-5 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-panel rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-gold/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background shape on hover */}
              <div 
                className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none 
                ${feature.accentColor === 'gold' ? 'bg-gold' : 'bg-olive'}`} 
              />

              {/* Icon Container */}
              <div 
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300
                ${feature.accentColor === 'gold' 
                  ? 'bg-gold/10 text-gold border border-gold/20' 
                  : 'bg-olive/10 text-olive border border-olive/20'}`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-heading)] text-navy-dark text-xl font-bold mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-[family-name:var(--font-body)] text-navy-light text-base leading-relaxed tracking-wide">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
