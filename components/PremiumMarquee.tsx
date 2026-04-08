"use client";

import { Star } from "lucide-react";

const textPhrases = [
  "DISCIPLINE",
  "EXCELLENCE",
  "NATION BUILDING",
  "LEADERSHIP",
  "HONOUR",
  "INTEGRITY",
  "COURAGE",
  "COMMITMENT",
];

export default function PremiumMarquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-navy-dark text-gold py-5 select-none">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-dark to-transparent z-10" />
      
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...textPhrases, ...textPhrases, ...textPhrases].map((phrase, index) => (
          <div key={index} className="flex items-center mx-6 sm:mx-10">
            <span className="text-xl sm:text-2xl md:text-3xl font-black font-[family-name:var(--font-heading)] uppercase tracking-[0.15em] text-gold/60">
              {phrase}
            </span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 ml-6 sm:ml-10 text-gold/30 fill-gold/30" />
          </div>
        ))}
      </div>
      <div className="animate-marquee whitespace-nowrap flex items-center absolute top-5">
        {[...textPhrases, ...textPhrases, ...textPhrases].map((phrase, index) => (
          <div key={`dup-${index}`} className="flex items-center mx-6 sm:mx-10">
            <span className="text-xl sm:text-2xl md:text-3xl font-black font-[family-name:var(--font-heading)] uppercase tracking-[0.15em] text-gold/60">
              {phrase}
            </span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 ml-6 sm:ml-10 text-gold/30 fill-gold/30" />
          </div>
        ))}
      </div>
    </div>
  );
}
