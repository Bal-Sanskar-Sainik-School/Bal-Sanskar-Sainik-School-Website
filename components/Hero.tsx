"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const bgImages = [
  "/images/Assembly_Image/Assembly_Image_1.jpeg",
  "/images/Students_Playing/Students_Playing_4.jpeg",
  "/images/School_Bus_Images/Students_In_School_Bus_1.jpeg",
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark"
    >
      {/* Dynamic Background Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url('${bgImages[currentBg]}')`,
          }}
        />
      </AnimatePresence>

      {/* Layered overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/60 to-navy-dark/95 border-b border-gold/10 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-transparent to-navy-dark/80 mix-blend-multiply z-[1]" />

      {/* Decorative top/bottom glowing lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 z-[2]" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent z-[2]" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [Math.random() * -20, Math.random() * 40, Math.random() * -20],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, Math.random() * 1.5 + 1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-gold blur-[2px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 pt-20 pb-28 sm:pb-32 max-w-6xl mx-auto flex flex-col items-center w-full">
        
        {/* Animated Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.4 }}
          className="mx-auto mb-6 w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-gold/40 bg-navy/40 backdrop-blur-md flex items-center justify-center relative group shadow-[0_0_50px_rgba(201,168,76,0.2)]"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full border-2 border-dashed border-gold/30 mix-blend-screen"
          />
          <div className="absolute inset-2 border border-gold/20 rounded-full" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold-light via-gold to-gold-dark text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
            BS
          </span>
        </motion.div>

        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-[family-name:var(--font-body)] flex items-center gap-2 sm:gap-4 text-gold-light text-xs sm:text-base tracking-[0.4em] uppercase mb-4"
        >
          <span className="w-8 sm:w-12 h-[1px] bg-gold/50" />
          Welcome To
          <span className="w-8 sm:w-12 h-[1px] bg-gold/50" />
        </motion.p>

        {/* School Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.1] mb-4 sm:mb-6 drop-shadow-2xl"
        >
          Bal Sanskar
          <br />
          <span className="text-gold-gradient text-glow-gold relative inline-block mt-1 sm:mt-2">
            Sainik School
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute -bottom-2 left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
            />
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="font-[family-name:var(--font-heading)] text-lg sm:text-2xl text-ivory/90 tracking-[0.10em] sm:tracking-[0.15em] font-light mb-8 sm:mb-10 drop-shadow-md"
        >
          Discipline &bull; Excellence &bull; Nation
        </motion.p>

        {/* Glassmorphism Quick Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-12 mb-8 sm:mb-10 px-4 sm:px-8 py-4 sm:py-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-full max-w-4xl"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Shield className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
            <div className="text-left">
              <p className="text-white/60 text-[10px] sm:text-xs tracking-wider uppercase font-[family-name:var(--font-body)]">Curriculum</p>
              <p className="text-white font-semibold text-xs sm:text-sm">CBSE Aligned</p>
            </div>
          </div>
          <div className="hidden sm:block w-[1px] h-10 bg-white/10" />
          <div className="flex items-center gap-2 sm:gap-3">
            <Trophy className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
            <div className="text-left">
              <p className="text-white/60 text-[10px] sm:text-xs tracking-wider uppercase font-[family-name:var(--font-body)]">Classes</p>
              <p className="text-white font-semibold text-xs sm:text-sm">Class 1 to 8</p>
            </div>
          </div>
          <div className="hidden sm:block w-[1px] h-10 bg-white/10" />
          <div className="flex items-center gap-2 sm:gap-3">
            <Users className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
            <div className="text-left">
              <p className="text-white/60 text-[10px] sm:text-xs tracking-wider uppercase font-[family-name:var(--font-body)]">Location</p>
              <p className="text-white font-semibold text-xs sm:text-sm">Jeolikot, Nainital</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full"
        >
          <Link
            href="#about"
            className="group relative overflow-hidden font-[family-name:var(--font-heading)] bg-gradient-to-r from-gold-dark via-gold to-gold-light text-navy-dark font-bold text-sm sm:text-base px-10 py-4 rounded-lg tracking-wider w-full sm:w-auto text-center shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.6)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-[-20deg]" />
            <span className="relative z-10">EXPLORE SCHOOL</span>
          </Link>
          <Link
            href="#admissions"
            className="group font-[family-name:var(--font-heading)] bg-transparent border-2 border-gold/70 text-gold hover:bg-gold/10 font-bold text-sm sm:text-base px-10 py-4 rounded-lg tracking-wider w-full sm:w-auto text-center transition-all duration-300 backdrop-blur-sm"
          >
            ADMISSIONS 2026–27
          </Link>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <Link href="#stats" className="flex flex-col items-center gap-2 group">
          <span className="font-[family-name:var(--font-body)] text-white/40 text-xs tracking-[0.2em] uppercase group-hover:text-gold transition-colors">
            Discover
          </span>
          <ChevronDown className="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}
