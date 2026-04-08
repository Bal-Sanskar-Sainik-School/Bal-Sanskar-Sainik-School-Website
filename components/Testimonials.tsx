"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const testimonials = [
  {
    name: "Rajesh Kumar Sharma",
    initials: "R",
    color: "bg-blue-600",
    time: "2 weeks ago",
    rating: 5,
    quote: "Bal Sanskar Sainik School has transformed my son. The discipline, values, and academic focus here are exceptional. The teachers are dedicated and the Himalayan campus is a blessing for young minds.",
  },
  {
    name: "Priya Negi",
    initials: "P",
    color: "bg-green-600",
    time: "1 month ago",
    rating: 5,
    quote: "We chose this school for its excellent discipline and we are not disappointed. My daughter has become more confident, disciplined and focused. The fee structure is very reasonable for the quality they provide.",
  },
  {
    name: "Amit Bisht",
    initials: "A",
    color: "bg-purple-600",
    time: "3 months ago",
    rating: 5,
    quote: "The holistic development approach is what sets this school apart. My child excels not just in academics but in sports, arts, and has developed strong moral values. Highly recommended for complete growth!",
  },
  {
    name: "Sunita Rawat",
    initials: "S",
    color: "bg-orange-600",
    time: "4 months ago",
    rating: 5,
    quote: "As a parent, safety was my top concern. The school provides a very secure and nurturing environment. The morning assembly and daily activities instill amazing discipline in children from a young age.",
  },
  {
    name: "Vikram Singh",
    initials: "V",
    color: "bg-red-600",
    time: "6 months ago",
    rating: 5,
    quote: "Best Sainik school preparation and foundational education in Nainital. The management is heavily invested in student outcomes. The campus is beautiful and extremely well maintained. Proud to be a parent here.",
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 sm:py-32 bg-[#F8FAFC] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header containing title and aggregate Google rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="font-[family-name:var(--font-body)] text-gold text-sm sm:text-base tracking-[0.2em] uppercase mb-3 font-semibold">
              Parent Voices
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-navy-dark text-3xl sm:text-4xl md:text-5xl font-black">
              What Parents Say
            </h2>
          </div>
          
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-900 leading-none">4.9</span>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
            </div>
            <div className="w-[1px] h-10 bg-gray-200" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900 text-sm">Excellent</span>
                <GoogleIcon />
              </div>
              <p className="text-xs text-gray-500">Based on 140+ reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Horizontal Scrolling Review Cards */}
        <div className="relative -mx-4 sm:mx-0">
          <div className="flex overflow-x-auto pb-8 pt-4 px-4 sm:px-0 gap-6 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {testimonials.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="snap-center sm:snap-start shrink-0 w-[300px] sm:w-[350px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* User Info Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-lg`}>
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px] leading-tight font-[family-name:var(--font-body)]">
                        {review.name}
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5">{review.time}</p>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Stars */}
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-[#FBBC04] text-[#FBBC04]' : 'fill-gray-200 text-gray-200'}`} />
                  ))}
                </div>

                {/* Review Content */}
                <p className="text-gray-700 text-[15px] leading-relaxed font-[family-name:var(--font-body)]">
                  {review.quote}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Fading Edge Gradient for Horizontal Scroll */}
          <div className="absolute top-0 right-0 bottom-8 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent pointer-events-none hidden sm:block" />
        </div>
      </div>
    </section>
  );
}
