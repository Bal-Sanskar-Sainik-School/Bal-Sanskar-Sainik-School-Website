"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, IndianRupee, Phone } from "lucide-react";

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
    icon: <GraduationCap className="w-7 h-7" />,
    label: "Classes Offered",
    value: "1–8",
  },
  {
    icon: <Calendar className="w-7 h-7" />,
    label: "Current Session",
    value: "2026–27",
  },
  {
    icon: <IndianRupee className="w-7 h-7" />,
    label: "Tuition From",
    value: "₹800/mo",
    isNumber: true,
    prefix: "₹",
    suffix: "/mo",
    numValue: 800,
  },
  {
    icon: <Phone className="w-7 h-7" />,
    label: "Call Us",
    value: "+91 99272 89673",
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
    const duration = 2000;
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
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="stats" ref={ref} className="relative bg-navy-dark">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center gap-3 py-4"
            >
              <div className="text-gold">{stat.icon}</div>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-ivory text-xl sm:text-2xl font-bold">
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
                </p>
                <p className="font-[family-name:var(--font-body)] text-ivory/50 text-sm sm:text-base mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
