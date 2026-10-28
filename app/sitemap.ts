import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

const BASE_URL = "https://ananse-labs-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${BASE_URL}/work/${study.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...caseStudyRoutes,
  ];
}
