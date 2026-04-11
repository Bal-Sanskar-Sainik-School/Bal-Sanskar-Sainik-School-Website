"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Calendar, MapPin, ImageIcon } from "lucide-react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Annual Function",
    date: "2025",
    location: "School Auditorium",
    description:
      "A grand celebration of talent featuring dance, drama, music performances, and cultural showcases by our students.",
    image: "/images/events/anual function/anual-function (1).webp",
    tag: "Cultural",
  },
  {
    id: 2,
    title: "Independence Day",
    date: "August 15, 2025",
    location: "Main Campus, Jeolikot",
    description:
      "Flag hoisting, patriotic songs, and march past celebrating the spirit of our nation's freedom.",
    image: "/images/events/Independance Day/inde day (1).webp",
    tag: "National Day",
  },
  {
    id: 3,
    title: "Holi Celebration",
    date: "2025",
    location: "School Campus, Jeolikot",
    description:
      "A joyful celebration of colours, unity, and festive spirit among students and teachers.",
    image: "/images/events/Holi/holi (1).jpeg",
    tag: "Festival",
  },
  {
    id: 4,
    title: "Aipan Competition",
    date: "2025",
    location: "School Campus",
    description:
      "Students showcase the beautiful traditional Kumaoni art of Aipan painting in a creative competition.",
    image: "/images/events/Aipan compation/apir (1).webp",
    tag: "Cultural",
  },
  {
    id: 5,
    title: "Aris Tour",
    date: "2025",
    location: "Uttarakhand",
    description:
      "Exploring new places and learning beyond the classroom through exciting educational trips.",
    image: "/images/events/Aris tour/Aris (1).webp",
    tag: "Tour",
  },
  {
    id: 6,
    title: "Campus Cleaning Drive",
    date: "2025",
    location: "School Campus",
    description:
      "Students taking responsibility and pride in keeping their campus clean and beautiful.",
    image: "/images/events/Campus Cleaning/campus (1).jpg",
    tag: "Campus Life",
  },
];

const tagColors: Record<string, string> = {
  Cultural: "bg-purple-500/20 text-purple-300 border-purple-400/30",
  "National Day": "bg-orange-500/20 text-orange-300 border-orange-400/30",
  Festival: "bg-pink-500/20 text-pink-300 border-pink-400/30",
  Awards: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  Tour: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  Assembly: "bg-sky-500/20 text-sky-300 border-sky-400/30",
  "Campus Life": "bg-teal-500/20 text-teal-300 border-teal-400/30",
};

export default function EventsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="events"
      className="py-20 sm:py-28 bg-navy-dark relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/[0.03] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 mb-6">
            <Calendar className="h-3.5 w-3.5 text-gold" />
            <span className="text-gold font-semibold tracking-[0.18em] uppercase text-[11px] font-[family-name:var(--font-body)]">
              School Life & Celebrations
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Our{" "}
            <span className="text-gold-gradient">Events & Activities</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-[family-name:var(--font-body)] max-w-2xl mx-auto leading-relaxed">
            Our school hosts the best events, creating memorable experiences for every student.
          </p>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * idx }}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-32 sm:h-52 lg:h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent opacity-80" />

                {/* Tag Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold uppercase tracking-wider border backdrop-blur-sm ${
                      tagColors[event.tag] || "bg-white/10 text-white/70 border-white/20"
                    }`}
                  >
                    {event.tag}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-navy-dark/80 backdrop-blur-md rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 border border-white/10">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <Calendar className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-gold" />
                    <span className="text-white/80 text-[9px] sm:text-xs font-semibold font-[family-name:var(--font-body)]">
                      {event.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5 lg:p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-white text-xs sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 leading-tight group-hover:text-gold transition-colors duration-300">
                  {event.title}
                </h3>

                <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                  <MapPin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-gold/60 flex-shrink-0" />
                  <span className="text-white/40 text-[9px] sm:text-xs font-[family-name:var(--font-body)] truncate">
                    {event.location}
                  </span>
                </div>

                <p className="text-white/50 text-[10px] sm:text-sm font-[family-name:var(--font-body)] leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {event.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
