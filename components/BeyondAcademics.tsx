"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Target, Trophy, MonitorPlay, Music } from "lucide-react";

const pillars = [
  {
    title: "Drill & Discipline",
    desc: "Rigorous daily routines that instill lifelong punctuality, teamwork, and unparalleled leadership skills.",
    img: "/images/Assembly_Image/Assembly_Image_2.jpeg",
    icon: <Target className="w-8 h-8" />,
    color: "gold"
  },
  {
    title: "Sports & Fitness",
    desc: "Comprehensive physical training to develop stamina, resilience, and agility on our extensive playgrounds.",
    img: "/images/Students_Playing/Students_Playing_3.jpeg",
    icon: <Trophy className="w-8 h-8" />,
    color: "olive"
  },
  {
    title: "Digital & STEM Labs",
    desc: "Modern computer laboratories ensuring students stay technologically adept for the challenges of tomorrow.",
    img: "/images/Students_In_Computer_Lab/Students_In_Computer_Lab.jpeg",
    icon: <MonitorPlay className="w-8 h-8" />,
    color: "navy"
  },
  {
    title: "Performing Arts",
    desc: "Fostering creativity through music, instruments, and cultural programs to ensure holistic growth.",
    img: "/images/Music_Classes/Music_Classes.jpeg",
    icon: <Music className="w-8 h-8" />,
    color: "gold"
  }
];

export default function BeyondAcademics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="beyond-academics" className="section-padding bg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold text-lg tracking-[0.3em] uppercase mb-3">
            Holistic Development
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
            Beyond Academics
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Box */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-left z-10 transition-transform duration-500 hover:translate-y-[-10px]">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300 shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                  {pillar.icon}
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl sm:text-3xl font-bold mb-3 drop-shadow-md">
                  {pillar.title}
                </h3>
                
                {/* Hidden description that fades in/slides up on hover for larger screens, visible on mobile */}
                <div className="overflow-hidden">
                  <p className="font-[family-name:var(--font-body)] text-white/80 text-sm sm:text-base leading-relaxed sm:opacity-0 sm:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Decorative Corner lines */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
