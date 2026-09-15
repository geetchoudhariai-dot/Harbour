import type { MetadataRoute } from "next";
import { CONTENT_REVIEWED, SITE_URL } from "./lib/seo";
import { getAllTreatmentSlugs } from "./lib/treatments";

const reviewed = new Date(`${CONTENT_REVIEWED}T00:00:00-07:00`);

const staticRoutes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/new-patients", priority: 0.85, changeFrequency: "monthly" },
  { path: "/technology", priority: 0.75, changeFrequency: "monthly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
  { path: "/llms.txt", priority: 0.2, changeFrequency: "monthly" },
  { path: "/llms-full.txt", priority: 0.2, changeFrequency: "monthly" }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: reviewed,
    changeFrequency,
    priority
  }));

  const treatments = getAllTreatmentSlugs().map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: reviewed,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...pages, ...treatments];
}
