import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <div className="line-separator" />
        <Approach />
        <div className="line-separator" />
        <Services />
        <div className="line-separator" />
        <Work />
        <Stats />
        <CTA />
        <div className="line-separator" />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
