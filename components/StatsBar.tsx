"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, IndianRupee, Phone, Trophy, Users, ShieldCheck, MapPin } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  isNumber?: boolean;
  prefix?: string;
  suffix?: string;
  numValue?: number;
}

const stats: StatItem[] = [
  {
    icon: <Users className="w-8 h-8" />,
    label: "Happy Students",
    value: "500+",
    isNumber: true,
    numValue: 500,
    suffix: "+",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    label: "Awards Won",
    value: "50+",
    isNumber: true,
    numValue: 50,
    suffix: "+",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    label: "Years of Excellence",
    value: "10+",
    isNumber: true,
    numValue: 10,
    suffix: "+",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    label: "Campus Size",
    value: "10 Acres",
    isNumber: true,
    numValue: 10,
    suffix: " Acres",
  },
];

function CountUpNumber({
  target,
  prefix = "",
  suffix = "",
  inView,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const duration = 2500;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  return (
    <section id="stats" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-navy rounded-2xl p-10 sm:p-14 shadow-lg border border-navy-light/20 relative overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10 text-center">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full bg-navy-light/30 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-300 shadow-md">
                  {stat.icon}
                </div>
                
                <h4 className="font-[family-name:var(--font-heading)] text-white text-4xl sm:text-5xl font-bold mb-2 tracking-tight group-hover:text-gold transition-colors duration-300">
                  {stat.isNumber ? (
                    <CountUpNumber
                      target={stat.numValue!}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      inView={inView}
                    />
                  ) : (
                    stat.value
                  )}
                </h4>
                
                <p className="font-[family-name:var(--font-body)] text-white/70 text-sm tracking-wider uppercase font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
