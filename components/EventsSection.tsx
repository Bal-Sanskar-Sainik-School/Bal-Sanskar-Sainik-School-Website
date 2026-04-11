"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Calendar, ImageIcon } from "lucide-react";

// Empty placeholder cards — content will be added later
const placeholderCount = 6;

export default function EventsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="events"
      className="py-20 sm:py-28 bg-navy-dark relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/[0.03] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 mb-6">
            <Calendar className="h-3.5 w-3.5 text-gold" />
            <span className="text-gold font-semibold tracking-[0.18em] uppercase text-[11px] font-[family-name:var(--font-body)]">
              School Life & Celebrations
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Our{" "}
            <span className="text-gold-gradient">Events & Activities</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-[family-name:var(--font-body)] max-w-2xl mx-auto leading-relaxed">
            From sports days to cultural fests, every event at Bal Sansar Sainik
            School is a celebration of growth, talent, and togetherness.
          </p>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {Array.from({ length: placeholderCount }).map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * idx }}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Placeholder Image Area */}
              <div className="relative h-32 sm:h-52 lg:h-56 overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01] flex flex-col items-center justify-center gap-2">
                <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white/10" />
                <span className="text-white/15 text-[9px] sm:text-xs font-[family-name:var(--font-body)] uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>

              {/* Placeholder Content */}
              <div className="p-3 sm:p-5 lg:p-6">
                <div className="h-3 sm:h-5 w-3/4 bg-white/[0.06] rounded-full mb-2 sm:mb-3" />
                <div className="h-2 sm:h-3 w-full bg-white/[0.04] rounded-full mb-1.5" />
                <div className="h-2 sm:h-3 w-2/3 bg-white/[0.04] rounded-full" />
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Info Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-full px-5 py-2.5 sm:px-6 sm:py-3">
            <ImageIcon className="w-4 h-4 text-gold/60" />
            <span className="text-white/40 text-xs sm:text-sm font-[family-name:var(--font-body)]">
              Event details & photos coming soon — Stay tuned!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
