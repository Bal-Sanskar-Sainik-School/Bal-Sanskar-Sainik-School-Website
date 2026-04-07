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
    <section id="fees" className="section-padding bg-ivory" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold text-lg tracking-[0.3em] uppercase mb-3">
            Transparent and Affordable
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
            Fee Structure
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-navy/60 sm:text-xl">
            Quality education at accessible fees, helping more families give their child a strong
            Sainik school foundation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="card-ivory overflow-hidden rounded-[1.75rem]"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark">
                <th className="px-6 py-4 text-left text-sm font-bold tracking-wider text-navy sm:px-8 sm:text-base">
                  Class
                </th>
                <th className="px-6 py-4 text-right text-sm font-bold tracking-wider text-navy sm:px-8 sm:text-base">
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
                  className={`border-b border-navy/5 transition-colors duration-200 hover:bg-gold/5 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-navy/[0.02]"
                  }`}
                >
                  <td className="px-6 py-4 text-base font-semibold text-navy/80 sm:px-8 sm:text-lg">
                    {item.class}
                  </td>
                  <td className="px-6 py-4 text-right text-base font-bold text-navy sm:px-8 sm:text-lg">
                    {item.fee}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 glass-card-navy flex flex-col items-start gap-4 rounded-[1.75rem] p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/20 bg-gold/15 flex-shrink-0">
            <Bus className="h-6 w-6 text-gold" />
          </div>
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-ivory mb-1">
              Transportation Fee
            </h3>
            <p className="text-base text-ivory/60 sm:text-lg">
              Rs 500 - Rs 1,500 per month depending on distance from school.
            </p>
          </div>
          <div className="font-[family-name:var(--font-heading)] text-xl font-bold text-gold sm:text-2xl whitespace-nowrap">
            Rs 500 - Rs 1,500
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-6 py-3">
            <Phone className="h-4 w-4 text-gold" />
            <p className="text-base text-navy/70 sm:text-lg">
              For fee enquiries, contact {" "}
              <a
                href="tel:+919927289673"
                className="font-semibold text-gold-dark transition-colors hover:text-gold"
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
