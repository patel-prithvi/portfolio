import { BootScreen } from "@/components/BootScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Terminal Boot Intro Sequence (Shown once per session) */}
      <BootScreen />

      {/* 2. Sticky Navbar */}
      <Navbar />

      {/* 3. Hero Section with Typewriter Tagline */}
      <Hero />

      {/* 4. ⭐ Interactive Tech Stack Matrix (Centerpiece) */}
      <Skills />

      {/* 5. Hover-Reveal Projects Section */}
      <Projects />

      {/* 6. Academic Education Timeline */}
      <Education />

      {/* 7. Contact Section */}
      <Contact />

      {/* 8. Footer & Developer Easter Egg */}
      <Footer />
    </main>
  );
}
