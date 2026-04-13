import { Metadata } from "next";
import EventsContent from "@/components/EventsContent";

export const metadata: Metadata = {
  title: "Events & Activities - School Life at Bal Sansar Sainik School",
  description:
    "Explore school events, cultural programs, Independence Day celebrations, annual functions, sports activities, educational tours, and student life at Bal Sansar Sainik School, Jeolikot, Nainital.",
  keywords: [
    "school events Jeolikot",
    "Bal Sansar Sainik School events",
    "annual function school Nainital",
    "school activities Uttarakhand",
    "Independence Day school celebration",
    "school sports Nainital",
    "school cultural events Jeolikot",
    "student activities Nainital school",
  ],
  openGraph: {
    title: "Events & Activities | Bal Sansar Sainik School Jeolikot",
    description:
      "Cultural programs, national day celebrations, sports, tours, and more at Bal Sansar Sainik School, Jeolikot, Nainital.",
    images: [
      {
        url: "/images/events/anual function/anual-function (1).webp",
        width: 800,
        height: 600,
        alt: "Annual Function at Bal Sansar Sainik School Jeolikot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Activities | Bal Sansar Sainik School",
    description:
      "Explore school life, events, and celebrations at Bal Sansar Sainik School, Jeolikot.",
    images: ["/images/events/anual function/anual-function (1).webp"],
  },
  alternates: {
    canonical: "https://balsansarsainikschool.com/events",
  },
};

export default function EventsPage() {
  return (
    <main className="md:pt-24 bg-navy min-h-screen pt-0">
      <EventsContent />
    </main>
  );
}
