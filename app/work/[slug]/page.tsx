import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyView from "@/components/case-study/CaseStudyView";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

/* Every case study is known at build time, so prerender them all and
   let any other slug 404 without a dynamic render. */
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return {};

  const title = `${study.subtitle} — Case Study | Ananse AI Labs`;
  const url = `/work/${study.slug}`;

  return {
    title,
    description: study.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: study.metaDescription,
      url,
      siteName: "Ananse AI Labs",
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

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyView study={study} />
      </main>
      <Footer />
    </>
  );
}
