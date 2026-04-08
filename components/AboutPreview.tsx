"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="w-full py-24 sm:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Clean Image Section */}
          <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
             <Image 
                src="/images/Students_Studying/Students_Studying_1.jpeg" 
                alt="Students Studying" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
             />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-1 bg-gold rounded-full" />
                <span className="text-gold-dark font-bold tracking-[0.2em] uppercase text-sm font-[family-name:var(--font-body)]">
                  The Genesis of Greatness
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-navy-dark leading-tight mb-8">
                Shaping Leaders for Tomorrow's India
              </h2>

              <p className="text-navy-light text-lg leading-relaxed mb-10 font-[family-name:var(--font-body)]">
                Nestled in the serene surroundings of Jeolikot, Nainital, Bal Sanskar Sainik School 
                blends an exceptional academic curriculum with structural discipline, creating an 
                environment where potential meets preparation. We believe in nurturing minds that are ready for future challenges.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-ivory-dark flex items-center justify-center shrink-0 border border-gold/20">
                    <Target className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="font-bold text-navy-dark font-[family-name:var(--font-heading)] text-xl">Our Mission</h4>
                  <p className="text-navy-light text-base leading-relaxed">To empower young minds with profound knowledge and unshakable character.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-ivory-dark flex items-center justify-center shrink-0 border border-navy/20">
                    <Compass className="w-6 h-6 text-navy" />
                  </div>
                  <h4 className="font-bold text-navy-dark font-[family-name:var(--font-heading)] text-xl">Our Vision</h4>
                  <p className="text-navy-light text-base leading-relaxed">To be the foundation and nursery of the nation's finest and most disciplined youth.</p>
                </div>
              </div>

              <Link 
                href="/about"
                className="group inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded font-medium hover:bg-navy-light transition-colors duration-300 font-[family-name:var(--font-body)]"
              >
                Discover Our Heritage
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
