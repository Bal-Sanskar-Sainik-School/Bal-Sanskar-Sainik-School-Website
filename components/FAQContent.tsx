"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Where is Bal Sansar Sainik School located in Jeolikot?",
    answer: "Bal Sansar Sainik School is located in Jeolikot, Nainital, Uttarakhand - 263136. We are situated in the scenic Himalayan region, easily accessible from Nainital city. Our campus is spread across 15 acres of lush greenery."
  },
  {
    question: "Is Bal Sansar Sainik School a military or army school?",
    answer: "No, Bal Sansar Sainik School is NOT a military or army school. We are a private educational institution affiliated with the Uttarakhand State Board. While we emphasize discipline and character building, we are a civilian school focused on holistic education for Classes 1-8."
  },
  {
    question: "Which board is Bal Sansar Sainik School affiliated with?",
    answer: "Bal Sansar Sainik School is affiliated with the Uttarakhand State Board (UK Board). We follow the state curriculum and provide quality education for Classes 1 to 8. Our UDISE Code is 05110307811."
  },
  {
    question: "What classes are offered at Bal Sansar Sainik School Jeolikot?",
    answer: "We offer education from Class 1 to Class 8. Our curriculum follows the Uttarakhand State Board syllabus with a focus on academic excellence, sports, arts, and character development."
  },
  {
    question: "What is the fee structure at Bal Sansar Sainik School?",
    answer: "We offer transparent and affordable fee structure for all classes. The fees vary by grade level and include tuition, activities, and facilities. Please visit our Fee Structure page or contact us at +91-9410107811 for detailed information."
  },
  {
    question: "How can I apply for admission to Bal Sansar Sainik School Jeolikot?",
    answer: "Admissions are open throughout the year. You can download the admission form from our website, fill it out, and submit it to our school office. You can also contact us at +91-9410107811 or email balsansarsainikschool@gmail.com for admission inquiries."
  },
  {
    question: "What facilities are available at Bal Sansar Sainik School?",
    answer: "We provide modern facilities including well-equipped classrooms, computer lab, science lab, library, sports grounds, music room, art room, and safe school transport. Our 15-acre campus offers a conducive learning environment in the Himalayas."
  },
  {
    question: "Is Bal Sansar Sainik School a boarding school or day school?",
    answer: "Bal Sansar Sainik School is primarily a day school. We provide quality education with school transport facilities for students from nearby areas including Nainital, Bhowali, and surrounding regions."
  },
  {
    question: "What makes Bal Sansar Sainik School the best school in Jeolikot?",
    answer: "We combine academic excellence with character building, offer experienced faculty, modern facilities, small class sizes for personalized attention, focus on sports and arts, and maintain a disciplined yet nurturing environment. Established in 2008, we have consistently delivered 100% results."
  },
  {
    question: "How do I contact Bal Sansar Sainik School Jeolikot?",
    answer: "You can reach us at: Phone: +91-9410107811, Email: balsansarsainikschool@gmail.com, Address: Jeolikot, Nainital, Uttarakhand - 263136. Visit our Contact page for directions and more details."
  }
];

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <ScrollReveal direction="up" className="text-center mb-16 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-[2px] bg-gold/60" />
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] font-[family-name:var(--font-body)]">
            Help Center
          </span>
          <span className="w-8 h-[2px] bg-gold/60" />
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-white text-4xl sm:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="font-[family-name:var(--font-body)] text-white/50 text-base">
          Find answers to common questions about Bal Sansar Sainik School, Jeolikot, Nainital
        </p>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.05}>
            <div className="bg-gradient-to-br from-[#1a2540] to-[#0d1829] border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start gap-4 p-6 text-left"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-heading)] text-white text-lg font-semibold mb-1">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pl-20">
                  <p className="font-[family-name:var(--font-body)] text-white/70 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal direction="up" delay={0.5}>
        <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-2xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-white text-2xl font-bold mb-3">
            Still have questions?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-white/60 mb-6">
            Contact us directly for personalized assistance
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </ScrollReveal>
    </>
  );
}
