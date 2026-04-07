"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax-like gradient overlay */}
      <motion.div
        animate={{ scale: [1.05, 1.1, 1.05] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/30 to-navy-dark/95 border-b border-gold/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-navy/50 mix-blend-multiply" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Floating decorative particles */}
      <motion.div
        animate={{ y: [-20, 20, -20], opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold/50 rounded-full blur-[2px]"
      />
      <motion.div
        animate={{ y: [20, -20, 20], opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-gold/30 rounded-full blur-[2px]"
      />
      <motion.div
        animate={{ y: [-15, 25, -15], opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-gold/60 rounded-full blur-[1px]"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 mt-24 max-w-5xl mx-auto">
        {/* Crest / Shield icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-8 w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-gold/50 bg-ivory-dark/40 backdrop-blur-md flex items-center justify-center relative group shadow-[0_0_40px_rgba(201,168,76,0.3)]"
        >
          {/* Rotating halo ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border border-dashed border-gold/30 mix-blend-screen"
          />
          <span className="text-gold text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] group-hover:scale-110 transition-transform duration-500">
            BS
          </span>
        </motion.div>

        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-[family-name:var(--font-body)] text-gold-light text-lg sm:text-xl tracking-[0.3em] uppercase mb-4"
        >
          Welcome to
        </motion.p>

        {/* School Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4 drop-shadow-2xl"
        >
          Bal Sanskar
          <br />
          <span className="text-gold-gradient text-glow-gold">Sainik School</span>
        </motion.h1>

        {/* Gold underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
        />

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="font-[family-name:var(--font-body)] text-navy-dark/60 text-base sm:text-lg tracking-[0.15em] uppercase mb-6"
        >
          Jeolikot, Nainital &bull; Uttarakhand
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl md:text-3xl text-gold tracking-[0.2em] font-medium mb-10"
        >
          Discipline. Excellence. Nation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#about"
            className="font-[family-name:var(--font-heading)] btn-primary font-bold text-sm sm:text-base px-8 py-3.5 rounded tracking-wider w-full sm:w-auto text-center"
          >
            EXPLORE SCHOOL
          </Link>
          <Link
            href="#admissions"
            className="font-[family-name:var(--font-heading)] btn-secondary font-bold text-sm sm:text-base px-8 py-3.5 rounded tracking-wider w-full sm:w-auto text-center"
          >
            ADMISSIONS 2026–27
          </Link>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#stats" className="flex flex-col items-center gap-2 group">
          <span className="font-[family-name:var(--font-body)] text-navy-dark/40 text-sm tracking-widest uppercase group-hover:text-gold/60 transition-colors">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 text-gold/50 group-hover:text-gold transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}
