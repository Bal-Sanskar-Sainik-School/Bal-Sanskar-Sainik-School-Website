"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const galleryItems = [
  { label: "Morning Assembly", height: "h-64", src: "/images/Assembly_Image/Assembly_Image_1.jpeg" },
  { label: "Classroom Learning", height: "h-48", src: "/images/Students_Studying/Students_Studying_1.jpeg" },
  { label: "Physical Training", height: "h-72", src: "/images/Students_Playing/Students_Playing.jpeg" },
  { label: "Computer Laboratory", height: "h-56", src: "/images/Students_In_Computer_Lab/Students_In_Computer_Lab.jpeg" },
  { label: "School Transport", height: "h-64", src: "/images/School_Bus_Images/Students_In_School_Bus_1.jpeg" },
  { label: "Annual Sports Day", height: "h-48", src: "/images/Students_Playing/Students_Playing_2.jpeg" },
  { label: "Music & Performing Arts", height: "h-72", src: "/images/Music_Classes/Music_Classes.jpeg" },
  { label: "Library Hour", height: "h-52", src: "/images/Students_Studying/Students_Studying_2.jpeg" },
  { label: "Sports Events", height: "h-60", src: "/images/Students_Playing/Students_Playing_3.jpeg" },
  { label: "Recreation", height: "h-48", src: "/images/Students_Playing/Students_Playing_4.jpeg" },
  { label: "Flag Parade", height: "h-64", src: "/images/Assembly_Image/Assembly_Image_2.jpeg" },
  { label: "Interactive Learning", height: "h-56", src: "/images/Teachers_Teaching_Students/Teachers_Teaching_Students_1.jpeg" },
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
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-4 left-4 w-8 h-8 border border-ivory/30 rotate-45" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border border-ivory/20 rotate-45" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                  <p className="font-[family-name:var(--font-heading)] text-gold text-sm sm:text-base font-bold text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    {item.label}
                  </p>
                </div>
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
