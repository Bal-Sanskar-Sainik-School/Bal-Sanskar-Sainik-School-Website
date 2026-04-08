"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const bgImages = [
  "/images/Assembly_Image/Assembly_Image_1.jpeg",
  "/images/Students_Studying/Students_Studying_2.jpeg",
  "/images/School_Bus_Images/Students_In_School_Bus_1.jpeg",
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark"
    >
      {/* Dynamic Background Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url('${bgImages[currentBg]}')`,
          }}
        />
      </AnimatePresence>

      {/* Layered overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/60 to-navy-dark/95 border-b border-gold/10 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-transparent to-navy-dark/80 mix-blend-multiply z-[1]" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-[family-name:var(--font-body)] text-olive font-bold tracking-widest uppercase text-xs sm:text-sm">
                Discover Your True Potential
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-bold text-navy-dark leading-[1.1] mb-6">
              Learn new <br className="hidden sm:block" />
              skills. <span className="text-navy">Easily</span>
            </h1>

            <p className="font-[family-name:var(--font-body)] text-navy-light text-base md:text-lg font-light leading-relaxed mb-8 max-w-md">
              Bring your children to Bal Sanskar Sainik School to find out how much they enjoy holistic learning, unparalleled discipline, and immense character building.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/academics"
                className="bg-gold hover:bg-gold-light text-white font-[family-name:var(--font-body)] font-medium px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Choose Class
              </Link>
              <Link 
                href="/admissions"
                className="bg-olive hover:bg-olive-light text-white font-[family-name:var(--font-body)] font-medium px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Content / Images side-by-side overlap like in reference */}
        <div className="w-full md:w-1/2 flex justify-end relative h-[500px]">
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="absolute right-0 top-10 w-[70%] h-[400px] z-10"
           >
             <Image 
                src={bgImages[0]} 
                alt="Student Main"
                fill
                className="object-cover rounded-sm shadow-xl"
             />
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="absolute left-10 bottom-0 w-[50%] h-[300px] z-20 border-8 border-ivory-dark"
           >
             <Image 
                src={bgImages[1]} 
                alt="Student Second"
                fill
                className="object-cover rounded-sm shadow-md"
             />
             {/* Mustard Dot grid accent from reference */}
             <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[radial-gradient(circle,_#f0a028_4px,_transparent_4px)]" style={{ backgroundSize: '16px 16px' }} />
           </motion.div>
        </div>

      </div>
    </section>
  );
}
