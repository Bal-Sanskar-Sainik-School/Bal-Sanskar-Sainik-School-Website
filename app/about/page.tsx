import { Metadata } from "next";
import About from "@/components/About";
import PrincipalDesk from "@/components/PrincipalDesk";
import Teachers from "@/components/Teachers";

export const metadata: Metadata = {
  title: "About Us - State Board School in Nainital",
  description: "Learn about Bal Sansar Sainik School, a Uttarakhand State Board affiliated private school in Jeolikot, Nainital. Established in 2008, we provide quality education with discipline and values. Not a military school.",
  keywords: [
    "about Bal Sansar Sainik School",
    "school history Jeolikot",
    "State Board school Nainital",
    "principal Bal Sansar school",
    "teachers Jeolikot school",
    "school mission vision Nainital",
  ],
  openGraph: {
    title: "About Bal Sansar Sainik School | State Board School Nainital",
    description: "Discover our mission, vision, and dedicated faculty at Bal Sansar Sainik School - a premier State Board school in the Himalayas.",
  },
  twitter: {
    card: "summary",
    title: "About Us | Bal Sansar Sainik School Jeolikot",
    description: "Learn about our mission, faculty, and legacy since 2008 at Bal Sansar Sainik School.",
  },
  alternates: {
    canonical: "https://balsansarsainikschool.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="md:pt-24 bg-navy min-h-screen pt-0">
      <About />
      <PrincipalDesk />
      <Teachers />
    </main>
  );
}
