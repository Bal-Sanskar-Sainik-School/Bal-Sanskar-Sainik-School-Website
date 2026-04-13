import { Metadata } from "next";
import FeeStructure from "@/components/FeeStructure";

export const metadata: Metadata = {
  title: "Fee Structure - Affordable Quality Education",
  description: "View the transparent fee structure for Classes 1-8 at Bal Sansar Sainik School, Nainital. Affordable State Board education with no hidden charges.",
  keywords: [
    "fee structure Bal Sansar Sainik School",
    "school fees Jeolikot",
    "affordable school Nainital",
    "school tuition fees Uttarakhand",
    "Classes 1-8 fees Nainital",
    "private school fees Jeolikot",
  ],
  openGraph: {
    title: "Fee Structure | Bal Sansar Sainik School",
    description: "Transparent and affordable fee structure for quality State Board education in Nainital.",
  },
  twitter: {
    card: "summary",
    title: "Fee Structure | Bal Sansar Sainik School",
    description: "Affordable and transparent fee structure for Classes 1-8 at Bal Sansar Sainik School.",
  },
  alternates: {
    canonical: "https://balsansarsainikschool.com/fee-structure",
  },
};

export default function FeeStructurePage() {
  return (
    <main className="md:pt-24 bg-navy min-h-screen">
      <FeeStructure />
    </main>
  );
}
