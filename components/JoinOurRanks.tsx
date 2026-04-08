"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function JoinOurRanks() {
  return (
    <section className="py-24 sm:py-32 bg-navy-dark text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-16 h-16 bg-navy-light/30 border border-gold/30 rounded-full flex items-center justify-center mb-8"
        >
          <ShieldCheck className="w-8 h-8 text-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[family-name:var(--font-heading)] mb-6 leading-tight"
        >
          Shape Your Child&apos;s Future
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 font-[family-name:var(--font-body)] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Admissions are now open. Give them the gift of discipline, rigorous education, and impeccable character at Bal Sanskar Sainik School.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/admissions"
            className="group flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-[family-name:var(--font-body)] font-bold px-8 py-4 rounded transition-colors w-full sm:w-auto"
          >
            Apply for Admission
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="flex items-center justify-center text-white hover:text-white bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 font-[family-name:var(--font-body)] font-medium px-8 py-4 rounded transition-colors w-full sm:w-auto"
          >
            Contact Information
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
