import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";

// Lazy load all below-the-fold sections (code-split, no ssr:false needed in App Router)
const AboutPreview  = dynamic(() => import("@/components/AboutPreview"));
const StatsBar      = dynamic(() => import("@/components/StatsBar"));
const AcademicsPreview = dynamic(() => import("@/components/WhyChooseUs"));
const FacilitiesPreview = dynamic(() => import("@/components/FacilitiesPreview"));
const Gallery       = dynamic(() => import("@/components/Gallery"));
const Testimonials  = dynamic(() => import("@/components/Testimonials"));
const EventsPreview = dynamic(() => import("@/components/EventsPreview"));
const JoinOurRanks  = dynamic(() => import("@/components/JoinOurRanks"));

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <MissionSection />
      <StatsBar />
      <AboutPreview />
      <AcademicsPreview />
      <FacilitiesPreview />
      <Gallery />
      <Testimonials />
      <EventsPreview />
      <JoinOurRanks />
    </main>
  );
}
