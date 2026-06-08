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
        {/* BLACK: Hero + Marquee */}
        <Hero />
        <Marquee />

        {/* CREAM: About + Approach */}
        <About />
        <div className="section-cream">
          <div className="site-container">
            <div className="h-[1px] bg-black/[0.06]" />
          </div>
        </div>
        <Approach />

        {/* BLACK: Services + Work */}
        <Services />
        <Work />

        {/* CREAM: Stats + CTA */}
        <Stats />
        <CTA />

        {/* DARK: FAQ */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
