"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "500+", label: "Students" },
  { value: "20+", label: "Faculty" },
  { value: "15 Acres", label: "Campus" },
  { value: "100%", label: "Results" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Assembly_Image/Assembly_Image_1.jpeg"
          alt="School Assembly"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-navy-dark/40 mix-blend-multiply z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center h-full pt-16">
        <div className="max-w-4xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-gold" />
            <span className="font-[family-name:var(--font-body)] text-gold font-bold tracking-[0.15em] uppercase text-xs sm:text-[13px]">
              EST. 2003 · JEOLIKOT, NAINITAL
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-[80px] font-bold text-white leading-[1.1] mb-8"
          >
            Nurturing India's <br />
            <span className="text-gold">Future Leaders</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-[family-name:var(--font-body)] text-white/90 text-lg sm:text-xl font-light leading-[1.7] mb-12 max-w-2xl"
          >
            A premier Sainik school in the heart of the Himalayas — where discipline meets excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <Link
              href="/admissions"
              className="group flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-[family-name:var(--font-body)] font-bold uppercase tracking-[0.1em] px-9 py-4 rounded-full transition-all duration-300 w-full sm:w-auto shadow-lg hover:-translate-y-0.5"
            >
              Apply for Admission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/academics"
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-gold font-[family-name:var(--font-body)] font-bold uppercase tracking-[0.1em] px-9 py-4 rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              Explore Academics
            </Link>
          </motion.div>
        </div>
      </div>



      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-[family-name:var(--font-body)] text-white/50 text-[10px] tracking-[0.2em] uppercase origin-left rotate-90 translate-x-3 -translate-y-10">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
