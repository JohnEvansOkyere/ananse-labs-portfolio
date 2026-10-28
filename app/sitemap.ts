import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { projectDetails } from "@/data/project-details";

const BASE_URL = "https://ananse-labs-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectRoutes: MetadataRoute.Sitemap = [
    ...caseStudies,
    ...projectDetails,
  ].map(({ slug }) => ({
    url: `${BASE_URL}/work/${slug}`,
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
    ...projectRoutes,
  ];
}
