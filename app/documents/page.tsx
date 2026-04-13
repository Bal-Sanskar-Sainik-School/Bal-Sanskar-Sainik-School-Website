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
      <div className="max-w-3xl mx-auto grid gap-6">
        {documents.map((doc, i) => (
          <ScrollReveal key={doc.title} direction="up" delay={i * 0.1}>
            <div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 sm:p-8 rounded-2xl border border-gold/20 bg-gradient-to-br from-[#1a2540] to-[#0d1829] hover:border-gold/50 transition-all duration-300 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_48px_rgba(201,150,43,0.15)]" >
              {/* Left gold accent */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-2xl" />

              {/* Icon */}
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                <FileText className="w-6 h-6 text-gold" strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h2 className="font-[family-name:var(--font-heading)] text-white text-xl font-semibold mb-1 group-hover:text-gold transition-colors duration-300">
                  {doc.title}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-white/45 text-sm leading-relaxed">
                  {doc.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-sm font-semibold font-[family-name:var(--font-body)] transition-all duration-300"
                >
                  <Eye className="w-4 h-4" />
                  View
                </a>
                <a
                  href={doc.file}
                  download={doc.filename}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gold text-navy-dark hover:bg-gold-light text-sm font-bold font-[family-name:var(--font-body)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
