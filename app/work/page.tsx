import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectList from "@/components/work/ProjectList";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Client projects, products and tools built by John Evans Okyere — custom software, AI automation and agents.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pb-16 pt-32 sm:pb-24 sm:pt-40">
          <div className="site-container">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#F7F4EF]/50 transition-colors hover:text-[#F7F4EF]"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Home
            </Link>

            <h1 className="rise mt-8 font-[var(--font-syne)] text-[clamp(2.5rem,7.5vw,5.75rem)] font-bold leading-[1] tracking-[-0.05em] text-[#F7F4EF]">
              Work
            </h1>
            <p className="mt-4 text-lg text-[#F7F4EF]/60">
              Client projects, products and tools.
            </p>

            <div className="mt-12 sm:mt-16">
              <ProjectList projects={projects} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
