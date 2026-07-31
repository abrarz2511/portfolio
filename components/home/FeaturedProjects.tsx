import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projectVisuals } from "@/data/project-visuals";
import { projects } from "@/data/projects";
import { AnimatedContent } from "@/components/react-bits/AnimatedContent";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProjects() {
  return (
    <section className="section projects-section" aria-labelledby="projects-heading">
      <div className="shell">
        <div className="section-heading-row">
          <AnimatedContent>
            <SectionHeading
              title="Featured projects"
              headingId="projects-heading"
              copy="Production-minded AI systems built around real workflows, operational constraints, and measurable outcomes."
            />
          </AnimatedContent>
          <Link className="text-link desktop-route-link" href="/projects">
            View all projects <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="projects-grid">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <AnimatedContent delay={index * 70} key={project.slug}>
                <ProjectCard
                  project={project}
                  visualImage={projectVisuals[project.slug]?.image}
                  visualAlt={projectVisuals[project.slug]?.alt}
                />
              </AnimatedContent>
            ))}
        </div>
      </div>
    </section>
  );
}
