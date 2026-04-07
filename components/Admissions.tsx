"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Search, ClipboardCheck, Users, CreditCard } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    step: "01",
    title: "Enquire & Apply",
    description:
      "Reach out via phone or visit our campus. Fill out the enquiry form to begin the admission process.",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    step: "02",
    title: "Entrance Assessment",
    description:
      "A simple age-appropriate assessment to understand your child's current academic level.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    step: "03",
    title: "Parent Interview",
    description:
      "A brief interaction with parents to understand the child's background, interests, and expectations.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    step: "04",
    title: "Enrolment & Fee Payment",
    description:
      "Complete the admission formalities and fee payment to secure your child's place at the school.",
  },
];

export default function Admissions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="admissions" className="section-padding bg-navy relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold-light text-lg tracking-[0.3em] uppercase mb-3">
            Join Us
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
            Admissions
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Timeline - Desktop Horizontal */}
        <div className="hidden lg:block mb-16">
          <div className="relative mt-8">
            {/* Connecting Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-gold/20 via-gold to-gold/20 origin-left"
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-navy border-2 border-gold/30 flex flex-col items-center justify-center mb-6 group-hover:border-gold group-hover:bg-navy-light transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]">
                    <div className="text-gold mb-1 group-hover:scale-110 transition-transform duration-500">
                      {step.icon}
                    </div>
                    <span className="font-[family-name:var(--font-heading)] text-gold/60 text-xs font-bold group-hover:text-gold transition-colors duration-300">
                      STEP {step.step}
                    </span>
                  </div>

                  {/* Text Card Component */}
                  <div className="bg-navy-light/30 border border-gold/10 p-6 rounded-2xl flex-1 group-hover:bg-navy-light/60 group-hover:border-gold/30 transition-all duration-500 w-full relative shadow-lg group-hover:shadow-[0_10px_40px_-10px_rgba(201,168,76,0.15)] group-hover:-translate-y-1">
                    {/* Floating tooltip arrow */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-navy-light/30 border-t border-l border-gold/10 rotate-45 group-hover:bg-navy-light/60 group-hover:border-gold/30 transition-all duration-500" />
                    
                    <h3 className="relative z-10 font-[family-name:var(--font-heading)] text-ivory text-lg font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="relative z-10 font-[family-name:var(--font-body)] text-ivory/60 text-sm xl:text-base leading-relaxed group-hover:text-ivory/80 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile Vertical */}
        <div className="lg:hidden mb-16">
          <div className="relative pl-8 mt-6">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-4 w-[2px] bg-gradient-to-b from-gold/20 via-gold to-gold/20" />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex gap-5 group"
                >
                  {/* Dot Tracker */}
                  <div className="absolute -left-8 top-5 w-8 h-8 rounded-full bg-navy border-2 border-gold/30 flex items-center justify-center z-10 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-500">
                    <div className="w-2.5 h-2.5 bg-gold/50 rounded-full group-hover:bg-gold transition-colors duration-300" />
                  </div>

                  {/* Glass Card */}
                  <div className="glass-card-navy rounded-2xl p-6 sm:p-8 flex-1 ml-2 border border-gold/10 group-hover:border-gold/40 group-hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="text-gold/80 p-2.5 bg-gold/10 rounded-xl group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                        {step.icon}
                      </div>
                      <span className="font-[family-name:var(--font-heading)] text-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                        STEP {step.step}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-ivory text-xl font-bold mb-2.5">
                      {step.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-ivory/60 group-hover:text-ivory/80 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card-navy rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5" />
            <h3 className="relative z-10 font-[family-name:var(--font-heading)] text-ivory text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              Admissions Open — Session 2026–27
            </h3>
            <p className="font-[family-name:var(--font-body)] text-ivory/60 text-lg sm:text-xl mb-6">
              Class 1 to 8 | Limited Seats Available
            </p>
            <Link
              href="#contact"
              className="font-[family-name:var(--font-heading)] inline-block btn-primary font-bold text-sm sm:text-base px-10 py-4 rounded tracking-wider mt-4"
            >
              CONTACT TO APPLY
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
