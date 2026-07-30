import { describe, expect, it } from "vitest";
import { articles } from "@/data/articles";
import { experiences } from "@/data/experience";
import { getProject, projects } from "@/data/projects";
import { technologyGroups } from "@/data/technologies";

describe("portfolio content", () => {
  it("contains unique, route-safe project slugs", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs.every((slug) => /^[a-z0-9-]+$/.test(slug))).toBe(true);
  });

  it("resolves known projects and rejects unknown slugs", () => {
    expect(getProject("physicians-assistant")?.title).toBe(
      "Physician’s Assistant",
    );
    expect(getProject("missing")).toBeUndefined();
  });

  it("keeps verified experience and technology content available", () => {
    expect(experiences).toHaveLength(3);
    expect(technologyGroups.length).toBeGreaterThanOrEqual(5);
    expect(experiences.every((entry) => entry.highlights.length > 0)).toBe(true);
  });

  it("uses a deliberate empty article collection until writing is supplied", () => {
    expect(articles).toEqual([]);
  });
});
