"use client";

import { FileText, Download, Eye } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const documents = [
  {
    title: "Admission Form",
    description: "Official admission application form for the academic year. Fill, print, and submit to the school office.",
    file: "/documents/admission_form_clean_260413_101100.pdf",
    filename: "Admission_Form.pdf",
  },
  {
    title: "Fee Structure 2026–27",
    description: "Complete fee schedule for all classes for the academic year 2026–27, including all applicable charges.",
    file: "/documents/Fee_Structure_Final_2026_27_copy (1).pdf",
    filename: "Fee_Structure_2026_27.pdf",
  },
  {
    title: "School Calendar 2026–27",
    description: "Academic calendar with important dates, holidays, exams, and events for the year 2026–27.",
    file: "/documents/Bal_Sansar_Sainik_School_Calendar_2026_27_Updated.pdf",
    filename: "School_Calendar_2026_27.pdf",
  },
  {
    title: "Book List",
    description: "Complete list of required textbooks and stationery for all classes.",
    file: "/documents/School_Book_List.pdf",
    filename: "School_Book_List.pdf",
  },
];

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-navy pt-28 pb-20 px-4 sm:px-6 lg:px-16">
      {/* Header */}
      <ScrollReveal direction="up" className="text-center mb-16 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-[2px] bg-gold/60" />
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">Official</span>
          <span className="w-8 h-[2px] bg-gold/60" />
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-white text-4xl sm:text-5xl font-bold mb-4">
          Documents
        </h1>
        <p className="font-[family-name:var(--font-body)] text-white/50 text-base">
          Download or view official school documents below.
        </p>
      </ScrollReveal>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
        {documents.map((doc, i) => (
          <ScrollReveal key={doc.title} direction="up" delay={i * 0.1}>
            <div className="group relative flex flex-col gap-4 p-4 sm:p-8 rounded-2xl border border-gold/20 bg-gradient-to-br from-[#1a2540] to-[#0d1829] hover:border-gold/50 transition-all duration-300 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_48px_rgba(201,150,43,0.15)]" >
              {/* Left gold accent */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-2xl" />

              {/* Header with Icon and Text */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5">
                {/* Icon */}
                <div className="shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300 flex-shrink-0">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gold" strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 mt-1 sm:mt-0">
                  <h2 className="font-[family-name:var(--font-heading)] text-white text-[13px] leading-tight sm:leading-normal sm:text-xl font-semibold mb-1.5 sm:mb-1 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {doc.title}
                  </h2>
                  <p className="font-[family-name:var(--font-body)] text-white/45 text-[11px] sm:text-sm leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-3">
                    {doc.description}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full mt-auto sm:mt-0">
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-xs sm:text-sm font-semibold font-[family-name:var(--font-body)] transition-all duration-300"
                >
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">View</span>
                  <span className="sm:hidden">View</span>
                </a>
                <a
                  href={doc.file}
                  download={doc.filename}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-gold text-navy-dark hover:bg-gold-light text-xs sm:text-sm font-bold font-[family-name:var(--font-body)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Download</span>
                  <span className="sm:hidden">Get</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
