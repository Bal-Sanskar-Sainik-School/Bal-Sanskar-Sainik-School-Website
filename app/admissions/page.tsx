import { Metadata } from "next";
import Admissions from "@/components/Admissions";

export const metadata: Metadata = {
  title: "Admissions - Apply Now for Classes 1-8",
  description: "Apply for admission to Bal Sansar Sainik School, Jeolikot, Nainital. Uttarakhand State Board affiliated school offering Classes 1-8. Check eligibility, admission process, and download forms.",
  keywords: [
    "admission Bal Sansar Sainik School",
    "school admission Jeolikot",
    "admission form Nainital school",
    "Classes 1 to 8 admission",
    "school enrollment Uttarakhand",
    "admission open Jeolikot school",
  ],
  openGraph: {
    title: "Admissions Open | Bal Sansar Sainik School Nainital",
    description: "Enroll your child in a quality State Board school in Nainital. Admissions open for Classes 1-8.",
  },
  twitter: {
    card: "summary",
    title: "Admissions Open | Bal Sansar Sainik School",
    description: "Apply now for Classes 1-8 at Bal Sansar Sainik School, Jeolikot, Nainital.",
  },
  alternates: {
    canonical: "https://balsansarsainikschool.com/admissions",
  },
};

export default function AdmissionsPage() {
  return (
    <main className="md:pt-24 bg-ivory min-h-screen">
      <Admissions />
    </main>
  );
}
