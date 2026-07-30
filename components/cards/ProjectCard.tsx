import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/content";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <SpotlightCard className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-card__link"
        aria-label={`View ${project.title} case study`}
      >
        <div className="project-card__visual" aria-hidden="true">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div className="project-card__orb" />
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
