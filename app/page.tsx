import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import PrincipalDesk from "@/components/PrincipalDesk";
import WhyChooseUs from "@/components/WhyChooseUs";
import Academics from "@/components/Academics";
import BeyondAcademics from "@/components/BeyondAcademics";
import FeeStructure from "@/components/FeeStructure";
import Admissions from "@/components/Admissions";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import JoinOurRanks from "@/components/JoinOurRanks";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <PrincipalDesk />
      <WhyChooseUs />
      <Academics />
      <BeyondAcademics />
      <FeeStructure />
      <Admissions />
      <Gallery />
      <Testimonials />
      <JoinOurRanks />
      <Contact />
    </>
  );
}
