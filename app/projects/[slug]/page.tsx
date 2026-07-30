import type { Metadata } from "next";
import { ArrowLeft, Code2, Radio } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { formatDate } from "@/lib/format";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="case-study">
      <header className="case-study__hero">
        <div className="case-study__mesh" aria-hidden="true" />
        <div className="shell">
          <Link className="back-link" href="/projects">
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </Link>
          <p className="eyebrow">
            {project.status === "building" ? "In active development" : "Completed"}{" "}
            · {formatDate(project.publishedAt)}
          </p>
          <h1>{project.title}</h1>
          <p className="case-study__summary">{project.summary}</p>
          <div className="case-study__meta">
            <span>
              <small>Role</small>
              {project.role}
            </span>
            <span>
              <small>Stack</small>
              {project.technologies.join(" · ")}
            </span>
          </div>
        </div>
      </header>
      <div className="shell case-study__body">
        {project.sections.map((section, index) => (
          <section key={section.heading}>
            <span className="case-study__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          </section>
        ))}
        {project.repositoryUrl || project.liveUrl ? (
          <div className="case-study__links">
            {project.repositoryUrl ? (
              <Link href={project.repositoryUrl} rel="noreferrer" target="_blank">
                <Code2 size={17} aria-hidden="true" /> Source
              </Link>
            ) : null}
            {project.liveUrl ? (
              <Link href={project.liveUrl} rel="noreferrer" target="_blank">
                <Radio size={17} aria-hidden="true" /> Live project
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
