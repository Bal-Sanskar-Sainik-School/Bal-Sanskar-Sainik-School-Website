import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Bal Sansar Sainik School, Jeolikot, Nainital. Get directions, phone numbers, email, and visit us for admissions and inquiries. State Board school in Uttarakhand.",
  keywords: [
    "contact Bal Sansar Sainik School",
    "school phone number Jeolikot",
    "school address Nainital",
    "school email Jeolikot",
    "directions to school Jeolikot",
    "school enquiry Nainital",
  ],
  openGraph: {
    title: "Contact Bal Sansar Sainik School | Nainital",
    description: "Reach out to us for admissions, inquiries, or visit our campus in Jeolikot, Nainital.",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Bal Sansar Sainik School",
    description: "Get phone, email, directions to Bal Sansar Sainik School, Jeolikot, Nainital.",
  },
  alternates: {
    canonical: "https://balsansarsainikschool.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="md:pt-24 bg-navy min-h-screen">
      <Contact />
    </main>
  );
}
