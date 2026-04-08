import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Lazy load all below-the-fold sections (code-split, no ssr:false needed in App Router)
const AboutPreview  = dynamic(() => import("@/components/AboutPreview"));
const StatsBar      = dynamic(() => import("@/components/StatsBar"));
const WhyChooseUs   = dynamic(() => import("@/components/WhyChooseUs"));
const Gallery       = dynamic(() => import("@/components/Gallery"));
const EventsPreview = dynamic(() => import("@/components/EventsPreview"));
const JoinOurRanks  = dynamic(() => import("@/components/JoinOurRanks"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutPreview />
      <StatsBar />
      <WhyChooseUs />
      <Gallery />
      <EventsPreview />
      <JoinOurRanks />
    </main>
  );
}
