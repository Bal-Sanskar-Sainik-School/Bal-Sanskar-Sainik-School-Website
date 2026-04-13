import { Metadata } from "next";
import FAQContent from "@/components/FAQContent";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions About Our School",
  description:
    "Get answers to frequently asked questions about Bal Sansar Sainik School, Jeolikot, Nainital. Learn about admissions, fees, board affiliation, facilities, classes 1-8, and more.",
  keywords: [
    "Bal Sansar Sainik School FAQ",
    "school questions Jeolikot",
    "admission FAQ Nainital school",
    "is Bal Sansar military school",
    "Uttarakhand State Board school FAQ",
    "school fees Jeolikot",
    "classes 1 to 8 Nainital",
    "best school Jeolikot questions",
  ],
  openGraph: {
    title: "FAQ | Bal Sansar Sainik School Jeolikot",
    description:
      "Find answers about admissions, fees, board affiliation, and facilities at Bal Sansar Sainik School, Jeolikot, Nainital.",
  },
  twitter: {
    card: "summary",
    title: "FAQ | Bal Sansar Sainik School Jeolikot",
    description:
      "Frequently Asked Questions about Bal Sansar Sainik School - admissions, fees, facilities, and more.",
  },
  alternates: {
    canonical: "https://balsansarsainikschool.com/faq",
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-navy pt-28 pb-20 px-4 sm:px-6 lg:px-16">
      <FAQContent />
    </main>
  );
}
