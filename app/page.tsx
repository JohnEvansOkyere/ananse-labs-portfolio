import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import Work from "@/components/sections/Work";
import Play from "@/components/sections/Play";
import Mentorship from "@/components/sections/Mentorship";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Work />
        <Play />
        <Mentorship />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
