"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Phone, Bus } from "lucide-react";

const feeData = [
  { class: "Class 1", fee: "₹800" },
  { class: "Class 2", fee: "₹800" },
  { class: "Class 3", fee: "₹800" },
  { class: "Class 4", fee: "₹800" },
  { class: "Class 5", fee: "₹800" },
  { class: "Class 6", fee: "₹900" },
  { class: "Class 7", fee: "₹900" },
  { class: "Class 8", fee: "₹900" },
];

export default function FeeStructure() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fees" className="section-padding bg-ivory" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold text-lg tracking-[0.3em] uppercase mb-3">
            Transparent & Affordable
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
            Fee Structure
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
          <p className="font-[family-name:var(--font-body)] text-navy/60 text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
            Quality education at accessible fees — empowering every family to give their 
            child a world-class Sainik school experience.
          </p>
        </motion.div>

        {/* Fee Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gold/10"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark">
                <th className="font-[family-name:var(--font-heading)] text-navy text-left px-6 sm:px-8 py-4 text-sm sm:text-base font-bold tracking-wider">
                  Class
                </th>
                <th className="font-[family-name:var(--font-heading)] text-navy text-right px-6 sm:px-8 py-4 text-sm sm:text-base font-bold tracking-wider">
                  Monthly Tuition Fee
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
                  className={`border-b border-navy/5 ${
                    i % 2 === 0 ? "bg-white" : "bg-navy/[0.02]"
                  } hover:bg-gold/5 transition-colors duration-200`}
                >
                  <td className="font-[family-name:var(--font-body)] text-navy/80 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold">
                    {item.class}
                  </td>
                  <td className="font-[family-name:var(--font-heading)] text-navy text-right px-6 sm:px-8 py-4 text-base sm:text-lg font-bold">
                    {item.fee}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Transportation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 glass-card-navy rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
        >
          <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/20 flex items-center justify-center flex-shrink-0">
            <Bus className="w-6 h-6 text-gold" />
          </div>
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-heading)] text-ivory text-lg font-bold mb-1">
              Transportation Fee
            </h3>
            <p className="font-[family-name:var(--font-body)] text-ivory/60 text-base sm:text-lg">
              ₹500 – ₹1,500 per month (based on distance from school)
            </p>
          </div>
          <div className="font-[family-name:var(--font-heading)] text-gold text-xl sm:text-2xl font-bold whitespace-nowrap">
            ₹500 – ₹1,500
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-6 py-3">
            <Phone className="w-4 h-4 text-gold" />
            <p className="font-[family-name:var(--font-body)] text-navy/70 text-base sm:text-lg">
              For fee enquiries, contact:{" "}
              <a
                href="tel:+919927289673"
                className="text-gold-dark font-semibold hover:text-gold transition-colors"
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
