import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectList from "@/components/work/ProjectList";

export default function Work() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="border-t border-white/10 py-16 sm:py-24" id="work">
      <div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="section-kicker self-start text-[#F7F4EF]/50 lg:col-span-3">Work</h2>

        <div className="lg:col-span-9">
          <ProjectList projects={featured} />

          <Link
            href="/work"
            id="work-explore"
            className="pill-btn pill-btn-light mt-8 w-full justify-between sm:w-auto sm:justify-start"
          >
            <span className="pill-label">See more</span>
            <span className="pill-arrow">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
