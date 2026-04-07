"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const galleryItems = [
  { label: "Morning Assembly & Flag Parade", height: "h-64" },
  { label: "Classroom Learning", height: "h-48" },
  { label: "Physical Training Drills", height: "h-72" },
  { label: "Science Laboratory", height: "h-56" },
  { label: "Himalayan Campus View", height: "h-64" },
  { label: "Annual Sports Day", height: "h-48" },
  { label: "Art & Cultural Activities", height: "h-72" },
  { label: "Library & Reading Hour", height: "h-52" },
  { label: "Yoga & Meditation", height: "h-60" },
  { label: "Adventure Activities", height: "h-48" },
  { label: "Prize Distribution Ceremony", height: "h-64" },
  { label: "Playground & Sports Facilities", height: "h-56" },
];

// Background colors for placeholder cards
const bgGradients = [
  "from-navy via-navy-light to-olive",
  "from-olive via-navy to-navy-light",
  "from-navy-dark via-navy to-gold-dark/30",
  "from-navy-light via-olive to-navy",
  "from-olive via-navy-light to-navy-dark",
  "from-navy via-olive/80 to-navy-light",
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-ivory-dark" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold text-lg tracking-[0.3em] uppercase mb-3">
            Life at School
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
            Gallery
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="masonry-item"
            >
              <div
                className={`relative ${item.height} bg-gradient-to-br ${
                  bgGradients[i % bgGradients.length]
                } rounded-xl overflow-hidden group cursor-pointer`}
              >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-8 h-8 border border-ivory/30 rotate-45" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border border-ivory/20 rotate-45" />
                </div>

                {/* Center icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-ivory/20 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-heading)] text-ivory/30 text-xl font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/80 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                  <p className="font-[family-name:var(--font-heading)] text-navy text-sm sm:text-base font-bold text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    {item.label}
                  </p>
                </div>

                {/* Zoom effect */}
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/bal.sansar.sainik.school"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-heading)] inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-sm px-8 py-3.5 rounded-lg hover:shadow-[0_0_30px_rgba(131,58,180,0.4)] transition-all duration-300 tracking-wider"
          >
            <FaInstagram size={20} />
            FOLLOW ON INSTAGRAM
          </a>
        </motion.div>
      </div>
    </section>
  );
}
