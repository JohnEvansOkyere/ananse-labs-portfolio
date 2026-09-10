import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Mentorship from "@/components/sections/Mentorship";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import MobileContactBar from "@/components/layout/MobileContactBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <div className="order-1"><Hero /></div>
        <div className="order-2"><Marquee /></div>
        <div className="order-3 lg:order-9"><Stats /></div>
        <div className="order-4 lg:order-6"><Work /></div>
        <div className="order-5 lg:order-8"><Testimonials /></div>
        <div className="order-6 lg:order-5"><Services /></div>
        <div className="order-7 lg:order-4"><Approach /></div>
        <div className="order-8 lg:order-3"><About /></div>
        <div className="order-9 lg:order-7"><Mentorship /></div>
        <div className="order-10"><CTA /></div>
        <div className="order-11"><FAQ /></div>
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
