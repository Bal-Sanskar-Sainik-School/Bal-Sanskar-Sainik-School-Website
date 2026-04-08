"use client";

import { motion } from "framer-motion";
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
    <div className="relative flex overflow-x-hidden bg-navy text-gold py-6 border-y border-gold/20 select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10" />
      
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...textPhrases, ...textPhrases, ...textPhrases].map((phrase, index) => (
          <div key={index} className="flex items-center mx-6 sm:mx-10 group">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold/50 via-gold to-gold/50 group-hover:from-gold group-hover:via-gold-light group-hover:to-gold transition-all duration-300">
              {phrase}
            </span>
            <Star className="w-5 h-5 sm:w-8 sm:h-8 ml-6 sm:ml-10 text-gold/40 group-hover:text-gold rotate-45 group-hover:rotate-[225deg] transition-all duration-700" />
          </div>
        ))}
      </div>
      <div className="animate-marquee whitespace-nowrap flex items-center absolute top-6">
        {[...textPhrases, ...textPhrases, ...textPhrases].map((phrase, index) => (
          <div key={`dup-${index}`} className="flex items-center mx-6 sm:mx-10 group">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black font-[family-name:var(--font-heading)] uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold/50 via-gold to-gold/50 group-hover:from-gold group-hover:via-gold-light group-hover:to-gold transition-all duration-300">
              {phrase}
            </span>
            <Star className="w-5 h-5 sm:w-8 sm:h-8 ml-6 sm:ml-10 text-gold/40 group-hover:text-gold rotate-45 group-hover:rotate-[225deg] transition-all duration-700" />
          </div>
        ))}
      </div>
    </div>
  );
}
