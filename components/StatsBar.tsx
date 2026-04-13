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
  { icon: <Users className="w-8 h-8" />, label: "Total Students", staticValue: "300+" },
  { icon: <GraduationCap className="w-8 h-8" />, label: "Total Teachers", staticValue: "15+" },
  { icon: <Trophy className="w-8 h-8" />, label: "Results", numValue: 100, suffix: "%" },
  { icon: <CalendarDays className="w-8 h-8" />, label: "Established", staticValue: "July 2008" },
  { icon: <BookOpen className="w-8 h-8" />, label: "Classes", staticValue: "1 – 8" },
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
    <section id="stats" ref={ref} className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #A5771E 0%, #C9962B 40%, #DEAF49 70%, #C9962B 100%)" }}>
      <div className="max-w-[1400px] mx-auto">
        {/* subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 relative z-10 text-center">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} direction="up" delay={i * 0.12}>
              <div className="flex flex-col items-center group p-3 sm:p-4 rounded-xl hover:bg-white/15 transition-all duration-300 active:scale-95">
                <div className="mb-2 sm:mb-4 text-white group-hover:-translate-y-1 transition-transform duration-500 will-change-transform scale-75 sm:scale-100">
                  {stat.icon}
                </div>
                <h4 className="font-[family-name:var(--font-heading)] text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 tracking-tight drop-shadow-md">
                  {stat.staticValue ? (
                    <span className="text-base sm:text-2xl md:text-3xl">{stat.staticValue}</span>
                  ) : (
                    <CountUpNumber target={stat.numValue!} suffix={stat.suffix!} inView={inView} />
                  )}
                </h4>
                <p className="font-[family-name:var(--font-body)] text-white/75 text-[10px] sm:text-xs md:text-[13px] tracking-[0.15em] uppercase font-semibold">
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
