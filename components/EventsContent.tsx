"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Calendar, ImageIcon, Filter, X } from "lucide-react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Annual Function",
    tag: "Cultural",
    description: "A grand celebration of talent featuring spectacular dance, drama, and musical performances by our talented students.",
    photos: [
      "/images/events/anual function/annual-function (1).jpg",
      "/images/events/anual function/annual-function (2).jpg",
      "/images/events/anual function/annual-function (3).jpg",
      "/images/events/anual function/annual-function (4).jpg",
      "/images/events/anual function/annual-function (5).jpg",
      "/images/events/anual function/annual-function (6).jpg",
      "/images/events/anual function/annual-function (7).jpg",
      "/images/events/anual function/annual-function (8).jpg",
      "/images/events/anual function/annual-function (9).jpg",
      "/images/events/anual function/annual-function (10).jpg",
      "/images/events/anual function/annual-function (11).jpg",
    ],
  },
  {
    id: 2,
    title: "Independence Day",
    tag: "National Day",
    description: "Every year on 15th August, our school comes alive with the spirit of patriotism. Students participate in flag hoisting, a grand march past, patriotic speeches, and cultural performances that honour the sacrifices of our freedom fighters and inspire pride in our nation.",
    photos: [
      "/images/events/Independance Day/inde day (1).jpg",
      "/images/events/Independance Day/inde day (2).jpg",
      "/images/events/Independance Day/inde day (3).jpg",
      "/images/events/Independance Day/inde day (4).jpg",
      "/images/events/Independance Day/inde day (5).jpg",
      "/images/events/Independance Day/inde day (6).jpg",
      "/images/events/Independance Day/inde day (7).jpg",
      "/images/events/Independance Day/inde day (8).jpg",
      "/images/events/Independance Day/inde day (9).jpg",
      "/images/events/Independance Day/inde day (1).webp",
      "/images/events/Independance Day/inde day (2).webp",
      "/images/events/Independance Day/inde day (3).webp",
      "/images/events/Independance Day/inde day (4).webp",
      "/images/events/Independance Day/inde day (5).webp",
      "/images/events/Independance Day/inde1 (1).jpg",
      "/images/events/Independance Day/inde1 (2).jpg",
      "/images/events/Independance Day/inde1 (3).jpg",
      "/images/events/Independance Day/inde1 (4).jpg",
      "/images/events/Independance Day/inde1 (5).jpg",
    ],
  },
  {
    id: 3,
    title: "Holi Celebration",
    tag: "Festival",
    description: "A vibrant festival of colors bringing joy, unity, and a sense of belonging among students and staff.",
    photos: [
      "/images/events/Holi/holi (1).jpeg",
      "/images/events/Holi/holi (2).jpeg",
      "/images/events/Holi/holi (3).jpeg",
      "/images/events/Holi/holi (4).jpeg",
    ],
  },
  {
    id: 4,
    title: "Aipan Competition",
    tag: "Cultural",
    description: "Preserving local heritage by encouraging students to showcase the traditional Kumaoni art form of Aipan.",
    photos: [
      "/images/events/Aipan compation/apir (1).webp",
      "/images/events/Aipan compation/apir (2).webp",
      "/images/events/Aipan compation/apir (3).webp",
      "/images/events/Aipan compation/apir (4).webp",
      "/images/events/Aipan compation/apir (5).webp",
    ],
  },
  {
    id: 5,
    title: "Prize Distribution",
    tag: "Awards",
    description: "Recognizing academic brilliance and extracurricular achievements to motivate our future leaders.",
    photos: [
      "/images/events/Prize/prize (1).jpeg",
      "/images/events/Prize/prize (2).jpeg",
      "/images/events/Prize/prize (3).jpeg",
      "/images/events/Prize/prize (4).jpeg",
      "/images/events/Prize/prize (5).jpeg",
      "/images/events/Prize/prize (6).jpeg",
      "/images/events/Prize/prize (7).jpeg",
    ],
  },
  {
    id: 6,
    title: "Aris Tour",
    tag: "Tour",
    description: "Educational excursions designed to broaden horizons and provide hands-on learning outside the classroom.",
    photos: [
      "/images/events/Aris tour/Aris (1).webp",
      "/images/events/Aris tour/Aris (2).webp",
      "/images/events/Aris tour/Aris (3).webp",
      "/images/events/Aris tour/Aris (4).webp",
      "/images/events/Aris tour/Aris (5).webp",
      "/images/events/Aris tour/Aris (6).webp",
      "/images/events/Aris tour/Aris (7).webp",
      "/images/events/Aris tour/Aris (8).webp",
    ],
  },
  {
    id: 7,
    title: "Campus Cleaning Drive",
    tag: "Campus Life",
    description: "Instilling values of cleanliness and environmental responsibility through active student participation.",
    photos: [
      "/images/events/Campus Cleaning/campus (1).jpg",
      "/images/events/Campus Cleaning/campus (2).jpg",
      "/images/events/Campus Cleaning/campus (3).jpg",
      "/images/events/Campus Cleaning/campus (4).jpg",
      "/images/events/Campus Cleaning/campus (5).jpg",
      "/images/events/Campus Cleaning/campus (6).jpg",
    ],
  },
  {
    id: 8,
    title: "School Assembly",
    tag: "Assembly",
    description: "Starting the day with discipline, moral reflections, and a shared sense of purpose.",
    photos: [
      "/images/events/Assembliy/assembly (1).jpeg",
      "/images/events/Assembliy/assembly (2).jpeg",
      "/images/Assembly_Image/Assembly_Image_1.jpeg",
      "/images/Assembly_Image/Assembly_Image_2.jpeg",
    ],
  },
  {
    id: 9,
    title: "Education Tour",
    tag: "Tour",
    description: "Connecting classroom knowledge with real-world experiences through guided educational trips.",
    photos: [
      "/images/events/education_tour/education tour (1).jpeg",
      "/images/events/education_tour/education tour (2).jpeg",
    ],
  },
  {
    id: 10,
    title: "Sports & Outdoor Activities",
    tag: "Sports",
    description: "Fostering physical fitness, teamwork, and a healthy competitive spirit on the playground.",
    photos: [
      "/images/Students_Playing/Students_Playing.jpeg",
      "/images/Students_Playing/Students_Playing_2.jpeg",
      "/images/Students_Playing/Students_Playing_3.jpeg",
      "/images/Students_Playing/Students_Playing_4.jpeg",
      "/images/Students_Playing/Students_Playing_5.jpeg",
      "/images/Students_Playing/Students_Playing_6.jpeg",
      "/images/Students_Playing/Students_Playing_7.jpeg",
      "/images/Students_Playing/Students_Playing_8.jpeg",
      "/images/Students_Playing/Students_Palying_9.jpeg",
      "/images/Students_Playing/Students_Playing_10.jpeg",
      "/images/Students_Playing/Students_Playing_11.jpeg",
      "/images/Students_Playing/Students_Playing_12.jpeg",
    ],
  },
  {
    id: 11,
    title: "Classroom & Studies",
    tag: "Academics",
    description: "Engaging and interactive academic sessions aimed at deep conceptual understanding.",
    photos: [
      "/images/Students_Studying/Students_Studying_1.jpeg",
      "/images/Students_Studying/Students_Studying_2.jpeg",
      "/images/Students_Studying/Students_Studying_4.jpeg",
      "/images/Students_Studying/Students_Studying_5.jpeg",
      "/images/Students_Studying/Student_Using_Microscope.jpeg",
    ],
  },
  {
    id: 12,
    title: "Computer Lab & Digital Learning",
    tag: "Academics",
    description: "Equipping students with essential digital literacy and modern technological skills.",
    photos: [
      "/images/Students_In_Computer_Lab/Students_In_Computer_Lab.jpeg",
      "/images/Students_In_Computer_Lab/Computer_Classes.jpeg",
      "/images/Students_In_Computer_Lab/Student_In_Lab.jpeg",
    ],
  },
  {
    id: 13,
    title: "Music & Arts Classes",
    tag: "Arts",
    description: "Nurturing creativity and self-expression through dedicated music and artistic training.",
    photos: [
      "/images/Music_Classes/Music_Classes.jpeg",
    ],
  },
  {
    id: 14,
    title: "School Transport",
    tag: "Campus Life",
    description: "Ensuring safe, reliable, and comfortable commuting for our high-spirited students.",
    photos: [
      "/images/School_Bus_Images/Students_In_School_Bus_1.jpeg",
      "/images/School_Bus_Images/Students_In_School_Bus_2.jpeg",
    ],
  },
  {
    id: 15,
    title: "Teachers & Classroom Sessions",
    tag: "Academics",
    description: "Dedicated faculty members providing personalized attention and mentorship to every child.",
    photos: [
      "/images/Teachers_Teaching_Students/Teachers_Teaching_Students_1.jpeg",
      "/images/Teachers_Teaching_Students/Teachers_Teaching_Students_2.jpeg",
      "/images/Teachers_Teaching_Students/Teachers_Teaching_Students_5.jpeg",
    ],
  },
];

const tags = ["All", "Cultural", "National Day", "Festival", "Awards", "Tour", "Assembly", "Sports", "Academics", "Arts", "Campus Life"];

const tagColors: Record<string, string> = {
  Cultural: "bg-purple-500/20 text-purple-300 border-purple-400/30",
  "National Day": "bg-orange-500/20 text-orange-300 border-orange-400/30",
  Festival: "bg-pink-500/20 text-pink-300 border-pink-400/30",
  Awards: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  Tour: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  Assembly: "bg-sky-500/20 text-sky-300 border-sky-400/30",
  Sports: "bg-red-500/20 text-red-300 border-red-400/30",
  Academics: "bg-violet-500/20 text-violet-300 border-violet-400/30",
  Arts: "bg-rose-500/20 text-rose-300 border-rose-400/30",
  "Campus Life": "bg-teal-500/20 text-teal-300 border-teal-400/30",
};

export default function EventsContent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [activeTag, setActiveTag] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredEvents =
    activeTag === "All"
      ? events
      : events.filter((e) => e.tag === activeTag);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-28 bg-navy-dark overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/[0.04] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 mb-6">
              <Calendar className="h-3.5 w-3.5 text-gold" />
              <span className="text-gold font-semibold tracking-[0.18em] uppercase text-[11px] font-[family-name:var(--font-body)]">
                School Life & Celebrations
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
              Events &{" "}
              <span className="text-gold-gradient">Activities</span>
            </h1>
            <p className="text-white/50 text-sm sm:text-lg font-[family-name:var(--font-body)] max-w-2xl mx-auto leading-relaxed">
              Our school hosts the best events, creating memorable experiences for every student.
            </p>
            <div className="star-divider mt-8">
              <Star className="w-4 h-4 text-gold fill-gold" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter + Gallery Section */}
      <section className="py-12 sm:py-20 bg-navy relative overflow-hidden" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Tag Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-14 overflow-x-auto pb-4 pt-1 px-1 scrollbar-hide snap-x snap-mandatory w-full"
          >
            <div className="flex-shrink-0 snap-start pl-1 pt-2">
               <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 mr-1" />
            </div>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`snap-center flex-shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider font-[family-name:var(--font-body)] border transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-gold/20 text-gold border-gold/40 shadow-[0_0_15px_rgba(201,150,43,0.3)] scale-105"
                    : "bg-white/[0.03] text-white/50 border-white/10 hover:bg-white/[0.06] hover:text-white/70"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Event Groups */}
          <div className="space-y-12 sm:space-y-16">
            {filteredEvents.map((event, gi) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * gi }}
              >
                {/* Event Title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border ${
                      tagColors[event.tag] || "bg-white/10 text-white/70 border-white/20"
                    }`}
                  >
                    {event.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-white text-lg sm:text-2xl font-bold">
                    {event.title}
                  </h3>
                </div>
                <p className="text-white/60 text-xs sm:text-sm font-[family-name:var(--font-body)] mb-5 sm:mb-8 leading-relaxed max-w-3xl">
                  {event.description}
                </p>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                  {event.photos.map((photo, pi) => (
                    <motion.div
                      key={pi}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * gi + 0.05 * pi }}
                      className="group relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden border border-white/[0.06] hover:border-gold/20 transition-all duration-500 cursor-pointer"
                      onClick={() => setLightboxImg(photo)}
                    >
                      <Image
                        src={photo}
                        alt={`${event.title} - Photo ${pi + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3">
                          <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="w-12 h-12 text-white/10 mx-auto mb-4" />
              <p className="text-white/30 text-lg font-[family-name:var(--font-body)]">
                No events found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImg}
                alt="Event photo"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
