import { ArrowUpRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { Project } from "@/types/content";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";

export function ProjectCard({
  project,
  visualImage,
  visualAlt,
}: {
  project: Project;
  visualImage?: StaticImageData;
  visualAlt?: string;
}) {
  return (
    <SpotlightCard className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-card__link"
        aria-label={`View ${project.title} case study`}
      >
        <div
          className="project-card__visual"
          aria-hidden={visualImage ? undefined : true}
        >
          {visualImage ? (
            <Image
              src={visualImage}
              alt={visualAlt ?? `${project.title} project preview`}
              className="project-card__image"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          ) : null}
          {visualImage ? null : <div className="project-card__orb" />}
        </div>
        <div className="project-card__content">
          <div className="project-card__meta">
            <span>{project.role}</span>
            <span>{project.status === "building" ? "In progress" : "Complete"}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <ul className="tag-list" aria-label="Technologies">
            {project.technologies.slice(0, 5).map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <span className="text-link">
            View case study <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </SpotlightCard>
  );
}
