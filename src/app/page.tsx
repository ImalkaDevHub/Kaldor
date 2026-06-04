import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Comparison from "@/components/sections/Comparison";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import RadialTimelineSection from "@/components/sections/RadialTimeline";
import Pricing from "@/components/sections/Pricing";
import Expertise from "@/components/sections/Expertise";
import AboutUs from "@/components/sections/AboutUs";
import TechStack from "@/components/sections/TechStack";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <Comparison />
      <Projects />
      <Process />
      <RadialTimelineSection />
      <Pricing />
      <Expertise />
      <AboutUs />
      <TechStack />
      <FAQ />
      <CTA />
    </main>
  );
}
