"use client";

import { Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const blogPosts = [
  {
    title: "Why Choose a School in Jeolikot, Nainital for Your Child?",
    excerpt: "Discover the benefits of quality education in the serene Himalayan environment of Jeolikot. Learn why parents prefer Bal Sansar Sainik School for holistic child development.",
    date: "March 15, 2024",
    slug: "why-choose-school-jeolikot-nainital",
    category: "Education"
  },
  {
    title: "State Board vs CBSE: Understanding Uttarakhand State Board Benefits",
    excerpt: "A comprehensive guide for parents about Uttarakhand State Board curriculum, its advantages, and why it's the right choice for students in Nainital region.",
    date: "March 10, 2024",
    slug: "state-board-vs-cbse-uttarakhand",
    category: "Academics"
  },
  {
    title: "Top 10 Schools in Jeolikot and Nainital Area - 2024 Guide",
    excerpt: "Complete guide to the best schools in Jeolikot, Nainital, and surrounding areas. Compare facilities, curriculum, and admission process.",
    date: "March 5, 2024",
    slug: "top-schools-jeolikot-nainital-2024",
    category: "Admissions"
  },
  {
    title: "Discipline and Character Building: The Bal Sansar Approach",
    excerpt: "How we combine academic excellence with character development. Learn about our unique approach to building future leaders without military training.",
    date: "February 28, 2024",
    slug: "discipline-character-building-approach",
    category: "School Life"
  },
  {
    title: "Admission Process for Classes 1-8 in Jeolikot Schools",
    excerpt: "Step-by-step guide to school admissions in Jeolikot. Documents required, eligibility criteria, and important dates for 2024-25 academic year.",
    date: "February 20, 2024",
    slug: "admission-process-jeolikot-schools",
    category: "Admissions"
  },
  {
    title: "Best Extracurricular Activities for Students in Hill Stations",
    excerpt: "Explore how schools in Nainital and Jeolikot leverage the natural environment for sports, adventure activities, and holistic development.",
    date: "February 15, 2024",
    slug: "extracurricular-activities-hill-stations",
    category: "Activities"
  }
];

export default function BlogContent() {
  return (
    <>
      <ScrollReveal direction="up" className="text-center mb-16 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-[2px] bg-gold/60" />
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">
            Insights & Updates
          </span>
          <span className="w-8 h-[2px] bg-gold/60" />
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-white text-4xl sm:text-5xl font-bold mb-4">
          School Blog & News
        </h1>
        <p className="font-[family-name:var(--font-body)] text-white/50 text-base">
          Latest updates, educational insights, and news from Bal Sansar Sainik School, Jeolikot
        </p>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <article className="group bg-gradient-to-br from-[#1a2540] to-[#0d1829] border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300 h-full flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gold/40" />
                  <div className="flex items-center gap-1 text-white/40 text-xs">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                
                <h2 className="font-[family-name:var(--font-heading)] text-white text-xl font-bold mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="font-[family-name:var(--font-body)] text-white/60 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal direction="up" delay={0.6}>
        <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-2xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-white text-2xl font-bold mb-3">
            Stay Updated
          </h2>
          <p className="font-[family-name:var(--font-body)] text-white/60 mb-6">
            Subscribe to our newsletter for latest updates and educational insights
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/40"
            />
            <button className="px-6 py-3 bg-gold hover:bg-gold-light text-navy-dark font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5">
              Subscribe
            </button>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
