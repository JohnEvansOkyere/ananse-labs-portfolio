import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyView from "@/components/case-study/CaseStudyView";
import ProjectView from "@/components/work/ProjectView";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { getProjectDetail, projectDetails } from "@/data/project-details";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

/* Every page is known at build time, so prerender them all and
   let any other slug 404 without a dynamic render. */
export const dynamicParams = false;

export function generateStaticParams() {
  return [...caseStudies, ...projectDetails].map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const url = `/work/${slug}`;

  if (study) {
    const title = `${study.subtitle} — Case Study`;

    return {
      title,
      description: study.metaDescription,
      alternates: { canonical: url },
      openGraph: {
        title,
        description: study.metaDescription,
        url,
        siteName: siteConfig.name,
        type: "article",
        locale: "en_US",
        images: [{ url: study.image, alt: study.title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: study.metaDescription,
        images: [study.image],
      },
    };
  }

  const detail = getProjectDetail(slug);
  const project = projects.find((p) => p.slug === slug);

  if (!detail || !project) return {};

  const title = `${project.name} — how it works`;

  return {
    title,
    description: `${detail.tagline} ${detail.summary[0]}`,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: detail.tagline,
      url,
      siteName: siteConfig.name,
      type: "article",
      locale: "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: detail.tagline,
      images: ["/opengraph-image"],
    },
  };
}

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const detail = getProjectDetail(slug);
  const index = projects.findIndex((p) => p.slug === slug);

  if (!study && !(detail && index >= 0)) notFound();

  return (
    <>
      <Navbar />
      <main>
        {study ? (
          <CaseStudyView study={study} />
        ) : (
          <ProjectView
            project={projects[index]}
            detail={detail!}
            next={projects[(index + 1) % projects.length]}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
