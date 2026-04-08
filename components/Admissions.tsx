"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneCall, FileEdit, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Enquire & Apply",
    description: "Reach out via phone or visit our campus. Fill out the enquiry form to begin the admission process.",
    icon: <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-navy-dark" strokeWidth={2} />,
  },
  {
    step: "02",
    title: "Entrance Assessment",
    description: "A simple age-appropriate assessment to understand your child's current academic level.",
    icon: <FileEdit className="w-6 h-6 sm:w-7 sm:h-7 text-navy-dark" strokeWidth={2} />,
  },
  {
    step: "03",
    title: "Enrolment & Fee",
    description: "Complete the admission formalities and fee payment to secure your child's place at the school.",
    icon: <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-navy-dark" strokeWidth={2} />,
  },
];

export default function Admissions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="admissions" className="py-24 sm:py-32 bg-navy relative overflow-hidden" ref={ref}>
      
      {/* Cool Background Decor */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none opacity-50" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-28 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs font-[family-name:var(--font-body)]">
              Admission Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight mb-6">
            Your Journey <span className="text-gold italic font-light">Begins Here</span>
          </h2>
          <p className="text-white/60 text-lg sm:text-xl font-[family-name:var(--font-body)]">
            A seamless three-step pathway to securing a premier Sainik education.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative mb-24 max-w-6xl mx-auto">
          
          {/* Glowing Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[16.66%] right-[16.66%] h-[2px]">
             <motion.div 
               initial={{ scaleX: 0 }}
               animate={inView ? { scaleX: 1 } : {}}
               transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
               className="w-full h-full bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_15px_rgba(201,150,43,0.6)] origin-left"
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.2, type: "spring", bounce: 0.4 }}
                className="relative flex flex-col items-center group"
              >
                {/* Connecting vertical line (Mobile only) */}
                {i !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-20 bottom-[-4rem] left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold to-transparent opacity-30 -z-10" />
                )}

                {/* Orb Icon */}
                <div className="mx-auto w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FDE68A] via-gold to-[#926610] mb-8 group-hover:scale-110 transition-all duration-500 z-10 relative shadow-[0_10px_30px_rgba(201,150,43,0.3)] group-hover:shadow-[0_15px_40px_rgba(201,150,43,0.5)]">
                  <div className="absolute inset-1 bg-gradient-to-b from-white/40 to-transparent rounded-full pointer-events-none" />
                  {step.icon}
                </div>

                {/* Card Container */}
                <div className="w-full bg-white/[0.02] border border-white/5 backdrop-blur-md p-8 sm:p-12 rounded-[2rem] relative overflow-hidden group-hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 lg:mt-[-50px] pt-16 sm:pt-20 text-center flex-1 flex flex-col justify-between group-hover:border-gold/30">
                  
                  {/* Huge Watermark Number */}
                  <div className="absolute bottom-[-20%] right-[-5%] font-[family-name:var(--font-heading)] text-[140px] font-black leading-none text-white/[0.03] group-hover:text-gold/[0.08] transition-colors duration-700 pointer-events-none select-none">
                    {step.step}
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl sm:text-3xl font-bold mb-4 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-white/60 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 1 }}
           className="mt-20 flex justify-center w-full"
        >
          <div className="bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 p-[1px] rounded-full max-w-fit mx-auto">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 bg-navy-dark hover:bg-gold text-white hover:text-navy-dark px-10 py-5 rounded-full font-[family-name:var(--font-body)] font-bold uppercase tracking-[0.15em] transition-all duration-500 overflow-hidden relative shadow-[0_0_40px_rgba(201,150,43,0.15)] hover:shadow-[0_0_60px_rgba(201,150,43,0.3)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10 text-[13px] sm:text-[15px]">Secure Your Child's Future</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
