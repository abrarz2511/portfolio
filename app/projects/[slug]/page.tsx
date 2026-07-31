import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Code2, Radio } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siGithub } from "simple-icons";
import { projects, getProject } from "@/data/projects";
import { formatDate } from "@/lib/format";
import { TechnologyItem } from "@/components/cards/TechnologyItem";

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
  const isPhysicianAssistant = project.slug === "physicians-assistant";

  return (
    <article className="case-study">
      <header className="case-study__hero">
        <div className="case-study__mesh" aria-hidden="true" />
        <div className="shell">
          <div className="case-study__hero-nav">
            <Link className="back-link" href="/projects">
              <ArrowLeft size={16} aria-hidden="true" /> All projects
            </Link>
            {project.repositoryUrl ? (
              <Link
                className="case-study__github-link"
                href={project.repositoryUrl}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  aria-hidden="true"
                >
                  <path d={siGithub.path} fill="currentColor" />
                </svg>
                GitHub
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            ) : null}
          </div>
          <p className="eyebrow">
            {isPhysicianAssistant
              ? formatDate(project.publishedAt)
              : `${project.status === "building" ? "In active development" : "Completed"} · ${formatDate(project.publishedAt)}`}
          </p>
          <h1>{project.title}</h1>
          <p className="case-study__summary">{project.summary}</p>
          <div
            className={`case-study__meta${isPhysicianAssistant ? " case-study__meta--role-only" : ""}`}
          >
            <span
              className={
                isPhysicianAssistant
                  ? "case-study__role--highlighted"
                  : undefined
              }
            >
              {isPhysicianAssistant ? null : <small>Role</small>}
              {project.role}
            </span>
            {isPhysicianAssistant ? null : (
              <span>
                <small>Stack</small>
                {project.technologies.join(" · ")}
              </span>
            )}
          </div>
        </div>
      </header>
      <div
        className={`shell case-study__body${isPhysicianAssistant ? " case-study__body--without-index" : ""}`}
      >
        {project.sections.map((section, index) => (
          <section key={section.heading}>
            {isPhysicianAssistant ? null : (
              <span className="case-study__index">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <div>
              <div className="case-study__section-intro">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
              {section.highlights?.map((highlight) => (
                <p className="case-study__section-detail" key={highlight.label}>
                  <strong>{highlight.label}:</strong> {highlight.body}
                </p>
              ))}
              {section.video ? (
                <div className="case-study__video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${section.video.youtubeId}`}
                    title={section.video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              ) : null}
              {section.technologyTable ? (
                <div className="case-study__technology-table">
                  <h3>{section.technologyTable.title}</h3>
                  <ul aria-label={section.technologyTable.title}>
                    {section.technologyTable.technologies.map((technology) => (
                      <TechnologyItem
                        technology={technology}
                        key={technology.name}
                      />
                    ))}
                  </ul>
                </div>
              ) : null}
              {section.documentTable ? (
                <>
                  <p>{section.documentTable.introduction}</p>
                  <div
                    className="case-study__document-table"
                    role="region"
                    aria-label={`${section.heading} source documents`}
                    tabIndex={0}
                  >
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">Source document</th>
                          <th scope="col">Purpose</th>
                          <th scope="col">Approx. pages</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.documentTable.documents.map((document) => (
                          <tr key={document.source}>
                            <td>
                              <strong>{document.source}</strong>
                            </td>
                            <td>{document.purpose}</td>
                            <td>
                              {document.approximatePages}{" "}
                              <a
                                href={document.citationUrl}
                                rel="noreferrer"
                                target="_blank"
                              >
                                ({document.citationLabel})
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : null}
            </div>
          </section>
        ))}
        {(!isPhysicianAssistant && project.repositoryUrl) || project.liveUrl ? (
          <div className="case-study__links">
            {!isPhysicianAssistant && project.repositoryUrl ? (
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
