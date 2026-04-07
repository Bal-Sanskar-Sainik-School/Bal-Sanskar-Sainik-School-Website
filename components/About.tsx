"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-ivory" ref={ref}>
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
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
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
            <h3 className="font-[family-name:var(--font-heading)] text-navy text-2xl sm:text-3xl font-semibold">
              Shaping Tomorrow&apos;s Leaders in the Heart of the Himalayas
            </h3>
            <p className="font-[family-name:var(--font-body)] text-navy/80 text-lg sm:text-xl leading-relaxed">
              Nestled in the serene hills of Jeolikot, Nainital, Bal Sanskar Sainik School 
              stands as a beacon of excellence in education and character building. Our institution 
              combines outstanding discipline and values with a 
              nurturing environment that allows every child to flourish.
            </p>
            <p className="font-[family-name:var(--font-body)] text-navy/80 text-lg sm:text-xl leading-relaxed">
              We believe that true education goes beyond textbooks. Our CBSE-aligned curriculum 
              for Classes 1 through 8 is enriched with strong discipline, physical fitness, 
              moral education, and leadership training — preparing students not just for exams, 
              but for life.
            </p>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="card-ivory rounded-lg p-5 border-l-4 border-gold">
                <h4 className="font-[family-name:var(--font-heading)] text-navy text-lg font-bold mb-2">
                  Our Vision
                </h4>
                <p className="font-[family-name:var(--font-body)] text-navy/70 text-base leading-relaxed">
                  To nurture disciplined, patriotic, and academically excellent citizens who 
                  serve the nation with pride and integrity.
                </p>
              </div>
              <div className="card-ivory rounded-lg p-5 border-l-4 border-gold">
                <h4 className="font-[family-name:var(--font-heading)] text-navy text-lg font-bold mb-2">
                  Our Mission
                </h4>
                <p className="font-[family-name:var(--font-body)] text-navy/70 text-base leading-relaxed">
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
            className="relative"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-gold/30 rounded-lg" />
              <div className="absolute -inset-2 border border-gold/20 rounded-lg" />
              
              {/* Image container */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-navy via-navy-light to-navy rounded-lg overflow-hidden">
                {/* Placeholder image content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 rounded-full border-2 border-gold/40 bg-gold/10 flex items-center justify-center mb-6">
                    <span className="font-[family-name:var(--font-heading)] text-gold text-3xl font-bold">
                      BS
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-gold text-2xl font-bold mb-2">
                    Bal Sanskar
                  </h3>
                  <p className="font-[family-name:var(--font-heading)] text-navy-dark/60 text-sm tracking-[0.3em] uppercase mb-6">
                    Sainik School
                  </p>
                  <div className="h-px w-20 bg-gold/40 mb-6" />
                  <p className="font-[family-name:var(--font-body)] text-navy-dark/50 text-lg italic">
                    &ldquo;Where discipline meets excellence in the lap of the Himalayas&rdquo;
                  </p>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/40" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/40" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-gold text-navy px-5 py-3 rounded-lg shadow-xl"
            >
              <p className="font-[family-name:var(--font-heading)] text-sm font-bold">Est. Jeolikot</p>
              <p className="font-[family-name:var(--font-body)] text-xs font-semibold">Nainital, Uttarakhand</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
