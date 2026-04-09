"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, BookOpen, Clock, Palette } from "lucide-react";

const tabs = [
  {
    id: "primary",
    label: "Primary (1–5)",
    subjects: [
      "English Language & Literature",
      "Hindi",
      "Mathematics",
      "Environmental Science (EVS)",
      "General Knowledge",
      "Computer Science",
      "Moral Science & Value Education",
    ],
    schedule: [
      "Morning Yoga & Assembly — 9:00 AM",
      "Regular Classes — 9:30 AM to 12:30 PM",
      "Lunch Break — 12:30 PM to 1:00 PM",
      "Music & English Speaking — 1:00 PM to 2:00 PM",
      "Co-curricular Activities — 2:00 PM to 3:00 PM",
    ],
    activities: [
      "Art & Craft",
      "Music Classes",
      "English Speaking Practice",
      "Yoga & Meditation",
      "Storytelling & Drama",
      "Saturday Activity Day",
    ],
  },
  {
    id: "middle",
    label: "Middle (6–8)",
    subjects: [
      "English Language & Literature",
      "Hindi",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Science (History, Geography, Civics)",
      "Computer Applications",
      "Physical Education",
      "Moral Science & Value Education",
    ],
    schedule: [
      "Morning Yoga & Assembly — 9:00 AM",
      "Regular Classes — 9:30 AM to 12:30 PM",
      "Lunch Break — 12:30 PM to 1:00 PM",
      "Music & English Speaking — 1:00 PM to 2:00 PM",
      "Co-curricular Activities — 2:00 PM to 3:00 PM",
    ],
    activities: [
      "Science Lab Experiments",
      "Music & English Speaking",
      "House Debates & Competitions",
      "Sports & Physical Training",
      "Leadership Development",
      "Saturday Activity Day",
    ],
  },
];

export default function Academics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("primary");

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="academics" className="section-padding bg-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold text-lg tracking-[0.3em] uppercase mb-3">
            Curriculum
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Academics
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white/5 rounded-lg p-1.5 border border-white/10 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-[family-name:var(--font-heading)] relative px-6 sm:px-8 py-3 rounded-md text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gold text-navy shadow-[0_0_15px_rgba(201,150,43,0.3)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Subjects */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:border-gold/30 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-white text-xl font-bold">
                  Subjects
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {currentTab.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="font-[family-name:var(--font-body)] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-white/80 text-sm sm:text-base font-medium hover:border-gold/30 hover:text-white transition-all duration-300"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:border-gold/30 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-white text-xl font-bold">
                  Daily Schedule
                </h3>
              </div>
              <ul className="space-y-4 flex-1">
                {currentTab.schedule.map((item) => {
                  const [task, time] = item.split(" — ");
                  return (
                    <li
                      key={item}
                      className="flex justify-between items-center gap-4 border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="font-[family-name:var(--font-body)] text-white/80 text-sm sm:text-base font-semibold">
                        {task}
                      </span>
                      <span className="font-[family-name:var(--font-heading)] text-gold text-xs sm:text-sm font-bold whitespace-nowrap bg-gold/10 border border-gold/20 px-3 py-1 rounded-md">
                        {time || ""}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm font-[family-name:var(--font-body)] leading-relaxed">
                  <span className="text-gold font-bold">Saturday Special:</span> Activity day featuring house debates, competitions, sports, and engaging co-curricular programs.
                </p>
              </div>
            </div>

            {/* Activities */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:border-gold/30 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-white text-xl font-bold">
                  Activities
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {currentTab.activities.map((activity) => (
                  <span
                    key={activity}
                    className="font-[family-name:var(--font-body)] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg text-white/80 text-sm sm:text-base hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-colors duration-300 font-medium cursor-default"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
