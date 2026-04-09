import About from "@/components/About";
import PrincipalDesk from "@/components/PrincipalDesk";
import Teachers from "@/components/Teachers";

export default function AboutPage() {
  return (
    <main className="md:pt-24 bg-navy min-h-screen pt-0">
      <About />
      <PrincipalDesk />
      <Teachers />
    </main>
  );
}
