import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import EventsPreview from "@/components/EventsPreview";
import JoinOurRanks from "@/components/JoinOurRanks";

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
