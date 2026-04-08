"use client";

import { motion, useInView } from "framer-motion";
import { Bus, Phone, Star } from "lucide-react";
import { useRef } from "react";

const feeData = [
  { class: "Class 1", fee: "Rs 800" },
  { class: "Class 2", fee: "Rs 800" },
  { class: "Class 3", fee: "Rs 800" },
  { class: "Class 4", fee: "Rs 800" },
  { class: "Class 5", fee: "Rs 800" },
  { class: "Class 6", fee: "Rs 900" },
  { class: "Class 7", fee: "Rs 900" },
  { class: "Class 8", fee: "Rs 900" },
];

export default function FeeStructure() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fees" className="py-24 sm:py-32 bg-navy relative overflow-hidden" ref={ref}>
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-50 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-white/5 via-transparent to-transparent opacity-50 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-gold" />
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">
              Transparent & Affordable
            </span>
            <span className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
            Investment in Excellence
          </h2>
          <p className="text-white/70 text-[17px] font-[family-name:var(--font-body)] leading-[1.7]">
            We provide world-class Sainik school education and holistic development at accessible fees, ensuring more families can grant their children the strongest foundation.
          </p>
        </motion.div>

        {/* Pricing Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-ivory-dark rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto border-t-[4px] border-gold"
        >
          {/* Table Header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-navy/10 bg-white">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl text-navy-dark tracking-wide">
              Academic Year 2026–27
            </h3>
          </div>

          {/* Table Body */}
          <div className="bg-ivory-dark px-2 sm:px-4 py-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold tracking-widest uppercase text-navy-light font-[family-name:var(--font-body)]">
                    Grade Level
                  </th>
                  <th className="px-6 py-4 text-right text-xs sm:text-sm font-bold tracking-widest uppercase text-navy-light font-[family-name:var(--font-body)]">
                    Monthly Tuition
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((item, i) => (
                  <motion.tr
                    key={item.class}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className="border-b border-navy/5 transition-colors duration-300 hover:bg-white group"
                  >
                    <td className="px-6 py-5 text-base sm:text-lg font-bold text-navy-dark font-[family-name:var(--font-heading)] group-hover:text-gold transition-colors">
                      {item.class}
                    </td>
                    <td className="px-6 py-5 text-right text-base sm:text-lg font-bold text-navy font-[family-name:var(--font-body)]">
                      {item.fee}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Transport Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:justify-between group hover:bg-white/10 transition-colors duration-500"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-gold flex-shrink-0 shadow-lg shadow-gold/20">
              <Bus className="h-7 w-7 text-navy-dark" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white tracking-wide mb-1">
                Safe Transport Service
              </h3>
              <p className="text-sm sm:text-base text-white/60 font-[family-name:var(--font-body)]">
                Depending on geographical distance from the school campus.
              </p>
            </div>
          </div>
          <div className="font-[family-name:var(--font-body)] text-2xl font-black text-gold whitespace-nowrap px-4 py-2 border border-gold/30 rounded-full inline-block">
            Rs 500 - 1,500 <span className="text-sm font-normal text-white/60 uppercase tracking-widest ml-1">/ mo</span>
          </div>
        </motion.div>

        {/* Contact Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 border border-gold/20 bg-gold/10 px-6 py-3 rounded-sm group hover:bg-gold transition-colors duration-300">
            <Phone className="h-4 w-4 text-gold group-hover:text-navy-dark transition-colors" />
            <p className="text-sm sm:text-base text-white/80 font-[family-name:var(--font-body)] group-hover:text-navy-dark transition-colors">
              For detailed fee structures & enquiries, contact {" "}
              <a
                href="tel:+919927289673"
                className="font-bold text-gold group-hover:text-navy-dark transition-colors"
              >
                +91 99272 89673
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
