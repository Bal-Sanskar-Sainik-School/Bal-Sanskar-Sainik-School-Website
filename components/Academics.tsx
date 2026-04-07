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
      "Morning Exercise & Assembly — 6:30 AM",
      "Academic Classes — 8:00 AM to 2:30 PM",
      "Lunch & Rest — 2:30 PM to 3:15 PM",
      "Activity / Lab Period — 3:15 PM to 4:30 PM",
      "Sports & Physical Activities — 4:30 PM to 6:00 PM",
    ],
    activities: [
      "Art & Craft",
      "Music & Dance",
      "Yoga & Meditation",
      "Storytelling & Drama",
      "Nature Walks",
      "Basic Sports Training",
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
      "Morning Exercise & Assembly — 6:30 AM",
      "Academic Classes — 8:00 AM to 2:30 PM",
      "Lunch & Rest — 2:30 PM to 3:15 PM",
      "Activity / Lab Period — 3:15 PM to 4:30 PM",
      "Sports & Physical Activities — 4:30 PM to 6:00 PM",
    ],
    activities: [
      "Science Experiments & Lab Work",
      "Debate & Public Speaking",
      "Adventure Activities",
      "Inter-house Competitions",
      "Leadership Training",
      "Community Service",
    ],
  },
];

export default function Academics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("primary");

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="academics" className="section-padding bg-ivory-dark" ref={ref}>
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
          <h2 className="font-[family-name:var(--font-heading)] text-navy text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
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
          <div className="inline-flex bg-ivory-dark/10 rounded-lg p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-[family-name:var(--font-heading)] relative px-6 sm:px-8 py-3 rounded-md text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gold text-navy shadow-lg"
                    : "text-navy/60 hover:text-navy"
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
            <div className="card-ivory rounded-2xl p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-ivory-dark/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-navy" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-navy text-xl font-bold">
                  Subjects
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {currentTab.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="font-[family-name:var(--font-body)] bg-white/80 border border-navy/10 px-3.5 py-1.5 rounded-full text-navy/80 text-sm sm:text-base font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="card-ivory rounded-2xl p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-ivory-dark/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-navy" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-navy text-xl font-bold">
                  Daily Schedule
                </h3>
              </div>
              <ul className="space-y-4 flex-1">
                {currentTab.schedule.map((item) => {
                  const [task, time] = item.split(" — ");
                  return (
                    <li
                      key={item}
                      className="flex justify-between items-center gap-4 border-b border-navy/5 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="font-[family-name:var(--font-body)] text-navy/80 text-sm sm:text-base font-semibold">
                        {task}
                      </span>
                      <span className="font-[family-name:var(--font-heading)] text-gold-dark text-xs sm:text-sm font-bold whitespace-nowrap bg-gold/15 px-3 py-1 rounded-md">
                        {time || ""}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Activities */}
            <div className="card-ivory rounded-2xl p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-ivory-dark/10 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-navy" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-navy text-xl font-bold">
                  Activities
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {currentTab.activities.map((activity) => (
                  <span
                    key={activity}
                    className="font-[family-name:var(--font-body)] bg-ivory-dark/5 border border-navy/10 px-3.5 py-1.5 rounded-lg text-navy/80 text-sm sm:text-base hover:bg-ivory-dark hover:text-navy-dark transition-colors duration-300 cursor-default font-medium"
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
