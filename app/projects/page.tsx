import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { PageHero } from "@/components/layout/PageHero";
import { projectVisuals } from "@/data/project-visuals";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected AI, backend, robotics, and full-stack projects by Abrar Zahin.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Projects"
        copy="Systems built for clinical workflows, production AI, supply-chain operations, and physical automation."
      />
      <section className="page-section">
        <div className="shell projects-grid">
          {projects.map((project) => (
            <ProjectCard
              project={project}
              visualImage={projectVisuals[project.slug]?.image}
              visualAlt={projectVisuals[project.slug]?.alt}
              key={project.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
}
