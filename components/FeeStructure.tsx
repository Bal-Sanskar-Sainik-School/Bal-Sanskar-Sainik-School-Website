"use client";

import { motion, useInView } from "framer-motion";
import { Bus, Phone, Sparkles, GraduationCap, BookOpen, School } from "lucide-react";
import { useRef } from "react";

const groups = [
  {
    label: "Pre-Primary",
    icon: Sparkles,
    color: "from-amber-400/20 to-yellow-300/10",
    border: "border-amber-400/30",
    iconBg: "bg-amber-400/20",
    iconColor: "text-amber-300",
    rows: [
      { class: "Play", monthly: "₹1,300", annual: "₹15,600" },
      { class: "L.K.G", monthly: "₹1,300", annual: "₹15,600" },
      { class: "U.K.G", monthly: "₹1,300", annual: "₹15,600" },
    ],
  },
  {
    label: "Primary",
    icon: BookOpen,
    color: "from-sky-400/20 to-blue-300/10",
    border: "border-sky-400/30",
    iconBg: "bg-sky-400/20",
    iconColor: "text-sky-300",
    rows: [
      { class: "Class 1st", monthly: "₹1,400", annual: "₹16,800" },
      { class: "Class 2nd", monthly: "₹1,500", annual: "₹18,000" },
      { class: "Class 3rd", monthly: "₹1,500", annual: "₹18,000" },
      { class: "Class 4th", monthly: "₹1,550", annual: "₹18,600" },
      { class: "Class 5th", monthly: "₹1,550", annual: "₹18,600" },
    ],
  },
  {
    label: "Middle School",
    icon: GraduationCap,
    color: "from-emerald-400/20 to-green-300/10",
    border: "border-emerald-400/30",
    iconBg: "bg-emerald-400/20",
    iconColor: "text-emerald-300",
    rows: [
      { class: "Class 6th", monthly: "₹1,600", annual: "₹19,200" },
      { class: "Class 7th", monthly: "₹1,600", annual: "₹19,200" },
      { class: "Class 8th", monthly: "₹1,600", annual: "₹19,200" },
    ],
  },
];

export default function FeeStructure() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fees" className="py-24 sm:py-32 bg-navy relative overflow-hidden" ref={ref}>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-[100px] -translate-x-1/3 translate-y-1/3" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 mb-6">
            <School className="h-3.5 w-3.5 text-gold" />
            <span className="text-gold font-semibold tracking-[0.18em] uppercase text-[11px] font-[family-name:var(--font-body)]">
              Transparent &amp; Affordable
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[family-name:var(--font-heading)] mb-5 leading-tight">
            Investment in{" "}
            <span className="text-gold-gradient">Excellence</span>
          </h2>
          <p className="text-white/60 text-[16px] font-[family-name:var(--font-body)] leading-[1.8]">
            Discipline, courage, and knowledge — built from the very first day. Academic Session{" "}
            <span className="text-white/90 font-semibold">2025–26 &amp; 2026–27</span>
          </p>
        </motion.div>

        {/* Grade Group Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {groups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + gi * 0.12 }}
                className={`relative rounded-2xl border ${group.border} bg-gradient-to-br ${group.color} backdrop-blur-sm overflow-hidden group`}
              >
                {/* Subtle top glow line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent ${group.iconColor} opacity-60`} />

                {/* Card Header */}
                <div className="px-6 pt-6 pb-4 flex items-center gap-4 border-b border-white/5">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${group.iconBg} flex-shrink-0`}>
                    <Icon className={`h-5 w-5 ${group.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-[family-name:var(--font-body)] font-semibold mb-0.5">
                      Grade Group
                    </p>
                    <h3 className={`font-[family-name:var(--font-heading)] font-bold text-lg text-white`}>
                      {group.label}
                    </h3>
                  </div>
                </div>

                {/* Rows */}
                <div className="px-4 py-3 space-y-1">
                  {group.rows.map((row, ri) => (
                    <motion.div
                      key={row.class}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.3 + gi * 0.12 + ri * 0.06 }}
                      className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group/row cursor-default"
                    >
                      <span className="font-[family-name:var(--font-heading)] font-bold text-white/90 text-[15px] group-hover/row:text-white transition-colors">
                        {row.class}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                          <p className="text-white/30 text-[9px] uppercase tracking-widest font-[family-name:var(--font-body)]">Annual</p>
                          <p className="text-white/50 text-xs font-semibold font-[family-name:var(--font-body)]">{row.annual}</p>
                        </div>
                        <div className={`px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 group-hover/row:border-white/20 transition-colors`}>
                          <p className="text-white/30 text-[9px] uppercase tracking-widest font-[family-name:var(--font-body)] text-center">/ mo</p>
                          <p className={`font-bold text-sm font-[family-name:var(--font-body)] ${group.iconColor}`}>{row.monthly}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Card Footer — fee range */}
                <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-white/30 text-xs font-[family-name:var(--font-body)]">{group.rows.length} classes</span>
                  <span className={`text-xs font-bold font-[family-name:var(--font-body)] ${group.iconColor}`}>
                    {group.rows[0].monthly}
                    {group.rows[0].monthly !== group.rows[group.rows.length - 1].monthly
                      ? ` – ${group.rows[group.rows.length - 1].monthly}`
                      : ""}{" "}
                    <span className="font-normal text-white/30">/ mo</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transport + Contact row */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">

          {/* Transport */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex items-center gap-5 group hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-400 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 flex-shrink-0 shadow-lg shadow-gold/10 group-hover:bg-gold/25 transition-colors">
              <Bus className="h-7 w-7 text-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-1">
                Transport Service
              </h3>
              <p className="text-white/50 text-sm font-[family-name:var(--font-body)] leading-snug">
                Based on distance from campus
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-[family-name:var(--font-body)]">Range</p>
              <p className="text-gold font-black text-lg font-[family-name:var(--font-body)] whitespace-nowrap">
                ₹500–1,500
              </p>
              <p className="text-white/30 text-[10px] font-[family-name:var(--font-body)]">per month</p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.a
            href="tel:+919927289673"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="relative rounded-2xl border border-gold/20 bg-gold/5 p-6 flex items-center gap-5 group hover:bg-gold hover:border-gold transition-all duration-400 overflow-hidden cursor-pointer"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20 flex-shrink-0 group-hover:bg-navy/20 transition-colors">
              <Phone className="h-6 w-6 text-gold group-hover:text-navy-dark transition-colors" />
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-[family-name:var(--font-body)] mb-1 group-hover:text-navy/60 transition-colors">
                Fee Enquiries
              </p>
              <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-gold group-hover:text-navy-dark transition-colors">
                +91 99272 89673
              </p>
              <p className="text-white/40 text-sm font-[family-name:var(--font-body)] group-hover:text-navy/50 transition-colors">
                Tap to call us directly
              </p>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
