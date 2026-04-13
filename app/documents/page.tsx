import { Metadata } from "next";
import DocumentsContent from "@/components/DocumentsContent";

export const metadata: Metadata = {
  title: "Documents - Admission Form, Fee Structure & Calendar",
  description:
    "Download official documents of Bal Sansar Sainik School, Jeolikot, Nainital. Get admission forms, fee structure 2026-27, school calendar, and book lists.",
  keywords: [
    "Bal Sansar Sainik School documents",
    "admission form Jeolikot school",
    "school fee structure Nainital",
    "school calendar 2026-27",
    "book list Jeolikot school",
    "school admission form download",
    "Uttarakhand school documents",
  ],
  openGraph: {
    title: "Official Documents | Bal Sansar Sainik School Jeolikot",
    description:
      "Download admission forms, fee structure, school calendar, and book lists for Bal Sansar Sainik School.",
  },
  twitter: {
    card: "summary",
    title: "Documents | Bal Sansar Sainik School Jeolikot",
    description:
      "Official school documents — admission form, fee structure, calendar, and book list.",
  },
  alternates: {
    canonical: "https://balsansarsainikschool.com/documents",
  },
};

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-navy pt-28 pb-20 px-4 sm:px-6 lg:px-16">
      <DocumentsContent />
    </main>
  );
}
