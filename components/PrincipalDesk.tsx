"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function PrincipalDesk() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="principal" className="section-padding bg-navy-dark relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm sm:text-base">
            Message From Our Leadership
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-3xl sm:text-4xl md:text-5xl font-black flex flex-col sm:inline-block items-center mb-4">
            From the Manager&apos;s Desk
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-5 h-5 text-gold fill-gold" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/School_Principle_Image/School_Principle.jpeg"
                alt="School Manager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl font-bold mb-1 shadow-black drop-shadow-lg">
                  Savita Arya
                </h3>
                <p className="font-[family-name:var(--font-body)] text-gold text-sm tracking-[0.1em] uppercase font-semibold">
                  Manager
                </p>
              </div>
            </div>
            {/* Decors */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-gold/30 rounded-2xl" />
            <div className="absolute -z-10 -top-6 -right-6 w-3/4 h-3/4 bg-gold/10 rounded-2xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 relative"
          >
            <Quote className="absolute -top-10 -left-8 w-24 h-24 text-gold/20 -z-10 rotate-[-10deg]" />
            <div className="space-y-6">
              <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl sm:text-3xl font-bold leading-tight relative z-10">
                &quot;Empowering young minds with discipline, courage, and excellence to lead tomorrow&apos;s world.&quot;
              </h3>
              
              <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed font-[family-name:var(--font-body)] relative z-10">
                <p>
                  Welcome to Bal Sansar Sainik School. As the Manager, it is my absolute honour to lead an institution where education goes beyond the pages of a textbook. Our mission is deeply rooted in the belief that true excellence requires a foundation of strong moral values, uncompromising discipline, and an active pursuit of knowledge.
                </p>
                <p>
                  We are situated in the lap of the Himalayas, which provides our students not only with a serene and focused learning environment but also teaches them to be as resolute and steadfast as the mountains surrounding us. 
                </p>
                <p>
                  Here at Bal Sansar, our dedicated faculty works tirelessly to cultivate an environment that nurtures intellectual curiosity while enforcing the rigour of a Sainik school. We focus on holistic development—ensuring every student is physically fit, mentally alert, and morally upright.
                </p>
                <p>
                  We welcome you to be a part of our extraordinary journey and witness the transformation of young children into confident, capable, and patriotic leaders of the future.
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/10 mt-8 relative z-10">
                <h4 className="font-[family-name:var(--font-heading)] text-white text-xl font-bold">Savita Arya</h4>
                <p className="font-[family-name:var(--font-body)] text-gold tracking-widest uppercase mt-1 text-[13px] font-bold">Manager, Bal Sansar Sainik School</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
