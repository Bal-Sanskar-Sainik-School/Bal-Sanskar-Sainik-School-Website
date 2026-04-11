"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-navy relative overflow-hidden" ref={ref}>
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold text-lg tracking-[0.3em] uppercase mb-3">
            Discover
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About Our School
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl sm:text-3xl font-semibold">
              Shaping Tomorrow&apos;s Leaders in the Heart of the Himalayas
            </h3>
            <p className="font-[family-name:var(--font-body)] text-white/80 text-lg sm:text-xl leading-relaxed">
              Nestled in the serene hills of Jeolikot, Nainital, Bal Sansar Sainik School 
              stands as a beacon of excellence in education and character building. Our institution 
              combines outstanding discipline and values with a 
              nurturing environment that allows every child to flourish.
            </p>
            <p className="font-[family-name:var(--font-body)] text-white/80 text-lg sm:text-xl leading-relaxed">
              We believe that true education goes beyond textbooks. Our U.K Board-aligned curriculum 
              for Classes 1 through 8 is enriched with strong discipline, physical fitness, 
              moral education, and leadership training — preparing students not just for exams, 
              but for life.
            </p>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 border-l-4 border-l-gold hover:bg-white/10 transition-colors duration-300">
                <h4 className="font-[family-name:var(--font-heading)] text-white text-xl font-bold mb-3">
                  Our Vision
                </h4>
                <p className="font-[family-name:var(--font-body)] text-white/70 text-base leading-relaxed">
                  To nurture disciplined, patriotic, and academically excellent citizens who 
                  serve the nation with pride and integrity.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 border-l-4 border-l-gold hover:bg-white/10 transition-colors duration-300">
                <h4 className="font-[family-name:var(--font-heading)] text-white text-xl font-bold mb-3">
                  Our Mission
                </h4>
                <p className="font-[family-name:var(--font-body)] text-white/70 text-base leading-relaxed">
                  To provide holistic education blending academic rigour with 
                  excellent discipline, sports, and values in a Himalayan setting.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["Discipline", "Integrity", "Excellence", "Patriotism", "Leadership"].map(
                (value) => (
                  <span
                    key={value}
                    className="font-[family-name:var(--font-body)] bg-gold/10 text-gold-dark border border-gold/30 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
                  >
                    {value}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-12 lg:mt-0 sm:mx-8 lg:mx-0"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-2 sm:-inset-4 border-2 border-gold/30 rounded-lg" />
              <div className="absolute inset-0 sm:-inset-2 border border-gold/20 rounded-lg" />
              
              {/* Image container */}
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/Students_Studying/Students_Studying_2.jpeg" 
                  alt="Students studying" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy/20 to-transparent" />

                {/* Text on Image */}
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h3 className="font-[family-name:var(--font-heading)] text-gold text-2xl font-bold mb-1 shadow-black drop-shadow-md">
                    Bal Sansar
                  </h3>
                  <p className="font-[family-name:var(--font-heading)] text-white/90 text-sm tracking-[0.3em] uppercase drop-shadow-md">
                    Sainik School
                  </p>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-gold/40" />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-gold/40" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-gold/40" />
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-gold/40" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-5 left-4 sm:-bottom-6 sm:-left-6 bg-gold text-navy px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-xl z-10"
            >
              <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm font-bold">Est. July 2008</p>
              <p className="font-[family-name:var(--font-body)] text-[10px] sm:text-xs font-semibold">Jeolikot, Nainital</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
