import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/content/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl() ?? new URL("http://localhost:3000");
  const routes = ["", "/projects", "/experience", "/articles"];

  return [
    ...routes.map((route) => ({
      url: new URL(route || "/", siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
      lastModified: new Date(project.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
