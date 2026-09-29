import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import {
  PhilosophySection,
  AboutSection,
  ResearchPipelineSection,
  ResearchSection,
} from "../components/sections";
import { Footer } from "../components/footer";
import { CursorLight } from "../components/cursor-light";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col relative">
      <CursorLight />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <PhilosophySection />
        <AboutSection />
        <ResearchPipelineSection />
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
}
