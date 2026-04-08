"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Trophy, Users, ShieldCheck, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface StatItem {
  icon: React.ReactNode;
  label: string;
  numValue: number;
  suffix: string;
}

const stats: StatItem[] = [
  { icon: <Users className="w-8 h-8" />, label: "Happy Students", numValue: 500, suffix: "+" },
  { icon: <Trophy className="w-8 h-8" />, label: "Awards Won", numValue: 50, suffix: "+" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Years of Excellence", numValue: 10, suffix: "+" },
  { icon: <MapPin className="w-8 h-8" />, label: "Campus Size", numValue: 10, suffix: " Acres" },
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
    <section id="stats" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="bg-navy rounded-2xl p-10 sm:p-14 shadow-lg border border-navy-light/20 relative overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10 text-center">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} direction="up" delay={i * 0.12}>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-navy-light/30 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-300 shadow-md">
                      {stat.icon}
                    </div>
                    <h4 className="font-[family-name:var(--font-heading)] text-white text-4xl sm:text-5xl font-bold mb-2 tracking-tight group-hover:text-gold transition-colors duration-300">
                      <CountUpNumber target={stat.numValue} suffix={stat.suffix} inView={inView} />
                    </h4>
                    <p className="font-[family-name:var(--font-body)] text-white/70 text-sm tracking-wider uppercase font-semibold">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
