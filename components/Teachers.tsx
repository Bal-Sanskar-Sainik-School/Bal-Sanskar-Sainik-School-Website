"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { GraduationCap, Users, X } from "lucide-react";
import Image from "next/image";

const teachers = [
  {
    name: "Sandhya Tamta",
    subject: "Science",
    qualification: "B.Ed., Graduate",
    experience: "Since 2008",
    dateOfJoining: "01/04/2008",
    post: "Principal",
    image: "/images/Teachers/Sandhya.jpg",
  },
  {
    name: "Sarita Tamta",
    subject: "Social Studies",
    qualification: "B.Ed.",
    experience: "Since 2019",
    dateOfJoining: "02/02/2019",
    post: "Teacher",
    image: "/images/Teachers/Sarita.jpg",
  },
  {
    name: "Kusum Bora",
    subject: "Social Studies",
    qualification: "B.Ed., Graduate",
    experience: "Since 2018",
    dateOfJoining: "01/04/2018",
    post: "Teacher",
    image: "/images/Teachers/Kusum.jpg",
  },
  {
    name: "Anju",
    subject: "English",
    qualification: "D.El.Ed",
    experience: "Since 2021",
    dateOfJoining: "01/10/2021",
    post: "Teacher",
    image: "/images/Teachers/Anju.JPG",
  },
  {
    name: "Lalita",
    subject: "Sanskrit",
    qualification: "Basic Teacher Training",
    experience: "Since 2017",
    dateOfJoining: "01/04/2017",
    post: "Teacher",
    image: "/images/Teachers/Lalita.JPG",
  },
  {
    name: "Renu Arya",
    subject: "Hindi",
    qualification: "B.Ed.",
    experience: "Since 2019",
    dateOfJoining: "01/04/2019",
    post: "Teacher",
    image: "/images/Teachers/Renu.jpg",
  },
  {
    name: "Karishma Chauhan",
    subject: "English",
    qualification: "B.Ed.",
    experience: "Since 2019",
    dateOfJoining: "01/04/2019",
    post: "Teacher",
    image: "/images/Teachers/Karishma.jpg",
  },
  {
    name: "Ankit Kumar",
    subject: "Mathematics",
    qualification: "D.El.Ed, Graduate",
    experience: "Since 2016",
    dateOfJoining: "01/04/2016",
    post: "Teacher",
    image: "/images/Teachers/Ankit.jpg",
  },
];

interface SelectedTeacher {
  name: string;
  subject: string;
  post: string;
  image: string;
}

export default function Teachers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTeacher, setSelectedTeacher] = useState<SelectedTeacher | null>(null);

  const closeModal = useCallback(() => {
    setSelectedTeacher(null);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedTeacher) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedTeacher, closeModal]);

  return (
    <>
      <section className="py-16 sm:py-24 bg-ivory overflow-hidden" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-gold" />
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">
                Our Faculty
              </span>
              <span className="w-8 h-[2px] bg-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-dark font-[family-name:var(--font-heading)] leading-tight mb-4">
              Dedicated Teaching Staff
            </h2>
            <p className="text-navy-light text-base sm:text-lg font-[family-name:var(--font-body)] max-w-2xl mx-auto">
              Academic Session 2026-27
            </p>
          </motion.div>

          {/* Desktop Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block overflow-hidden rounded-2xl border border-navy/10 shadow-xl"
          >
            <table className="w-full">
              <thead className="bg-gradient-to-r from-navy-dark to-navy">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    S.No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Subject
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Qualification
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Experience
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Date of Joining
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Position
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-navy/5">
                {teachers.map((teacher, index) => (
                  <tr
                    key={index}
                    className="hover:bg-ivory-dark transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy font-[family-name:var(--font-body)]">
                      {index + 1}
                    </td>
                    <td className="px-6 py-8">
                      <div className="flex items-center gap-6">
                        <div
                          className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-gold shadow-2xl bg-white p-1 cursor-pointer group"
                          onClick={() => setSelectedTeacher(teacher)}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                              src={teacher.image}
                              alt={teacher.name}
                              fill
                              className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                              sizes="112px"
                              quality={95}
                              priority={index < 4}
                              onError={(e) => {
                                console.log(`Failed to load image: ${teacher.image}`);
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          {/* Hover hint */}
                          <div className="absolute inset-0 rounded-full bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300 flex items-center justify-center">
                            <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                              View
                            </span>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-navy-dark font-[family-name:var(--font-heading)]">
                          {teacher.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-navy-light font-[family-name:var(--font-body)]">
                      {teacher.subject}
                    </td>
                    <td className="px-6 py-4 text-sm text-navy-light font-[family-name:var(--font-body)]">
                      {teacher.qualification}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-navy-light font-[family-name:var(--font-body)]">
                      {teacher.experience}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-navy-light font-[family-name:var(--font-body)]">
                      {teacher.dateOfJoining}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        teacher.post === "Principal"
                          ? "bg-gold/20 text-gold border border-gold/30"
                          : "bg-navy/10 text-navy border border-navy/20"
                      }`}>
                        {teacher.post}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile Table - Horizontal Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:hidden overflow-x-auto rounded-xl border border-navy/10 shadow-xl"
          >
            <table className="w-full min-w-[640px]">
              <thead className="bg-gradient-to-r from-navy-dark to-navy">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    S.No
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Name
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Subject
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Qualification
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Experience
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Date of Joining
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-gold uppercase tracking-wider font-[family-name:var(--font-body)]">
                    Position
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-navy/5">
                {teachers.map((teacher, index) => (
                  <tr
                    key={index}
                    className="hover:bg-ivory-dark transition-colors duration-200"
                  >
                    <td className="px-3 py-3 whitespace-nowrap text-xs font-medium text-navy font-[family-name:var(--font-body)]">
                      {index + 1}
                    </td>
                    <td className="px-3 py-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="relative w-20 h-20 rounded-full overflow-hidden border-3 border-gold shadow-2xl bg-white p-1 cursor-pointer group"
                          onClick={() => setSelectedTeacher(teacher)}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                              src={teacher.image}
                              alt={teacher.name}
                              fill
                              className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                              sizes="80px"
                              quality={95}
                              priority={index < 4}
                              onError={(e) => {
                                console.log(`Failed to load image: ${teacher.image}`);
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        </div>
                        <span className="text-xs font-bold text-navy-dark font-[family-name:var(--font-heading)]">
                          {teacher.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-navy-light font-[family-name:var(--font-body)]">
                      {teacher.subject}
                    </td>
                    <td className="px-3 py-3 text-xs text-navy-light font-[family-name:var(--font-body)]">
                      {teacher.qualification}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-navy-light font-[family-name:var(--font-body)]">
                      {teacher.experience}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-xs text-navy-light font-[family-name:var(--font-body)]">
                      {teacher.dateOfJoining}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        teacher.post === "Principal"
                          ? "bg-gold/20 text-gold border border-gold/30"
                          : "bg-navy/10 text-navy border border-navy/20"
                      }`}>
                        {teacher.post}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          
          {/* Scroll Hint for Mobile */}
          <p className="md:hidden text-center text-navy/60 text-xs mt-3 font-[family-name:var(--font-body)]">
            👉 Swipe left to see more details
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-navy-dark/80 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-3 -right-3 z-20 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors duration-200"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gold/20">
                <div className="relative w-full aspect-[3/4] bg-ivory">
                  <Image
                    src={selectedTeacher.image}
                    alt={selectedTeacher.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 90vw, 448px"
                    quality={95}
                    priority
                  />
                </div>

                {/* Teacher Info */}
                <div className="p-5 text-center bg-gradient-to-b from-white to-ivory">
                  <h3 className="text-xl font-bold text-navy-dark font-[family-name:var(--font-heading)] mb-1">
                    {selectedTeacher.name}
                  </h3>
                  <p className="text-sm text-navy-light font-[family-name:var(--font-body)] mb-2">
                    {selectedTeacher.subject}
                  </p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    selectedTeacher.post === "Principal"
                      ? "bg-gold/20 text-gold border border-gold/30"
                      : "bg-navy/10 text-navy border border-navy/20"
                  }`}>
                    {selectedTeacher.post}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
