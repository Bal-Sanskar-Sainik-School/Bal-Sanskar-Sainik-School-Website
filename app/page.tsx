import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Academics from "@/components/Academics";
import FeeStructure from "@/components/FeeStructure";
import Admissions from "@/components/Admissions";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <WhyChooseUs />
      <Academics />
      <FeeStructure />
      <Admissions />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
