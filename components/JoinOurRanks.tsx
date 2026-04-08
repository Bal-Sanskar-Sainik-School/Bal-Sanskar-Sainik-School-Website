"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ShieldAlert, ArrowRight } from "lucide-react";

export default function JoinOurRanks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center" ref={ref}>
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Assembly_Image/Assembly_Image_1.jpeg')",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-navy-dark/80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-navy-dark" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      {/* Content Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-20 h-20 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(201,168,76,0.3)]"
        >
          <ShieldAlert className="w-10 h-10 text-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-[family-name:var(--font-heading)] mb-6 drop-shadow-2xl leading-tight"
        >
          Shape Your Child&apos;s <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">
            Future With Us
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-ivory/90 font-[family-name:var(--font-body)] mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          Admissions are now open. Give them the gift of discipline, rigorous education, and impeccable character.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="#admissions"
            className="group relative flex items-center gap-3 overflow-hidden font-[family-name:var(--font-heading)] bg-gradient-to-r from-gold-dark to-gold-light text-navy-dark font-black text-sm sm:text-base px-10 py-5 rounded-xl tracking-widest w-full sm:w-auto text-center shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:shadow-[0_0_40px_rgba(201,168,76,0.8)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-[-20deg]" />
            <span className="relative z-10">APPLY NOW</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="#contact"
            className="font-[family-name:var(--font-heading)] text-white hover:text-gold border border-white/20 hover:border-gold/50 bg-white/5 backdrop-blur-md px-10 py-5 rounded-xl font-bold tracking-widest transition-all duration-300 w-full sm:w-auto text-center"
          >
            CONTACT DETAILS
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
