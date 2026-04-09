"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users } from "lucide-react";

const teachers = [
  {
    name: "Sandhya Tamta",
    subject: "Science",
    qualification: "B.Ed., Graduate",
    experience: "Since 2008",
    dateOfJoining: "01/04/2008",
    post: "Principal",
  },
  {
    name: "Sarita Tamta",
    subject: "Social Studies",
    qualification: "B.Ed.",
    experience: "Since 2019",
    dateOfJoining: "02/02/2019",
    post: "Teacher",
  },
  {
    name: "Kusum Bora",
    subject: "Social Studies",
    qualification: "B.Ed., Graduate",
    experience: "Since 2018",
    dateOfJoining: "01/04/2018",
    post: "Teacher",
  },
  {
    name: "Anju",
    subject: "English",
    qualification: "D.El.Ed",
    experience: "Since 2021",
    dateOfJoining: "01/10/2021",
    post: "Teacher",
  },
  {
    name: "Lalita",
    subject: "Sanskrit",
    qualification: "Basic Teacher Training",
    experience: "Since 2017",
    dateOfJoining: "01/04/2017",
    post: "Teacher",
  },
  {
    name: "Renu Arya",
    subject: "Hindi",
    qualification: "B.Ed.",
    experience: "Since 2019",
    dateOfJoining: "01/04/2019",
    post: "Teacher",
  },
  {
    name: "Karishma Chauhan",
    subject: "English",
    qualification: "B.Ed.",
    experience: "Since 2019",
    dateOfJoining: "01/04/2019",
    post: "Teacher",
  },
  {
    name: "Ankit Kumar",
    subject: "Mathematics",
    qualification: "D.El.Ed, Graduate",
    experience: "Since 2016",
    dateOfJoining: "01/04/2016",
    post: "Teacher",
  },
];

export default function Teachers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-navy-dark font-[family-name:var(--font-heading)]">
                    {teacher.name}
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
                  <td className="px-3 py-3 whitespace-nowrap text-xs font-bold text-navy-dark font-[family-name:var(--font-heading)]">
                    {teacher.name}
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
  );
}
