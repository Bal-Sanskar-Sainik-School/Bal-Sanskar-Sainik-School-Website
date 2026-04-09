"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Trophy, Users, ShieldCheck, GraduationCap, Clock, BookOpen, CalendarDays } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface StatItem {
  icon: React.ReactNode;
  label: string;
  numValue?: number;
  suffix?: string;
  staticValue?: string;
}

const stats: StatItem[] = [
  { icon: <Users className="w-8 h-8" />, label: "Happy Students", numValue: 500, suffix: "+" },
  { icon: <GraduationCap className="w-8 h-8" />, label: "Staff", numValue: 20, suffix: "+" },
  { icon: <Trophy className="w-8 h-8" />, label: "Results", numValue: 100, suffix: "%" },
  { icon: <CalendarDays className="w-8 h-8" />, label: "Established", staticValue: "July 2008" },
  { icon: <BookOpen className="w-8 h-8" />, label: "Board & Medium", staticValue: "UK Board · English" },
  { icon: <Clock className="w-8 h-8" />, label: "School Hours", staticValue: "9 AM – 3 PM" },
];

function CountUpNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" ref={ref} className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-navy border-y border-gold/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 relative z-10 text-center">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} direction="up" delay={i * 0.12}>
              <div className="flex flex-col items-center group">
                <div className="mb-4 text-gold group-hover:-translate-y-1 transition-transform duration-500 will-change-transform">
                  {stat.icon}
                </div>
                <h4 className="font-[family-name:var(--font-heading)] text-white text-4xl sm:text-5xl font-bold mb-2 tracking-tight">
                  {stat.staticValue ? (
                    <span className="text-2xl sm:text-3xl">{stat.staticValue}</span>
                  ) : (
                    <CountUpNumber target={stat.numValue!} suffix={stat.suffix!} inView={inView} />
                  )}
                </h4>
                <p className="font-[family-name:var(--font-body)] text-white/70 text-xs sm:text-[13px] tracking-[0.15em] uppercase font-semibold">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
