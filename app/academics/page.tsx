import { Metadata } from "next";
import Academics from "@/components/Academics";
import BeyondAcademics from "@/components/BeyondAcademics";

export const metadata: Metadata = {
  title: "Academics - State Board Curriculum Classes 1-8",
  description: "Explore our comprehensive Uttarakhand State Board curriculum for Classes 1-8 at Bal Sansar Sainik School, Nainital. Quality education with focus on academics, sports, arts, and holistic development.",
  keywords: [
    "academics Bal Sansar Sainik School",
    "Uttarakhand State Board curriculum",
    "Classes 1 to 8 syllabus Nainital",
    "UK Board school academics",
    "school curriculum Jeolikot",
    "quality education Nainital",
  ],
  openGraph: {
    title: "Academic Programs | Bal Sansar Sainik School",
    description: "State Board affiliated curriculum with focus on academic excellence, extracurricular activities, and character building.",
  },
  twitter: {
    card: "summary",
    title: "Academics | Bal Sansar Sainik School",
    description: "Uttarakhand State Board curriculum for Classes 1-8 with focus on holistic development.",
  },
  alternates: {
    canonical: "https://balsansarsainikschool.com/academics",
  },
};

export default function AcademicsPage() {
  return (
    <main className="md:pt-24 bg-navy min-h-screen">
      <Academics />
      <BeyondAcademics />
    </main>
  );
}
