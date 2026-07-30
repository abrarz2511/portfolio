import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { experiences } from "@/data/experience";
import { formatDateRange } from "@/lib/format";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Abrar Zahin’s software engineering, AI engineering, and robotics research experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Professional timeline"
        title="Experience"
        copy="Applied AI and software engineering across multi-agent systems, industrial robotics, and research infrastructure."
      />
      <section className="page-section">
        <div className="shell timeline">
          {experiences.map((experience, index) => (
            <article id={experience.slug} className="timeline-entry" key={experience.slug}>
              <div className="timeline-entry__rail">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-entry__content">
                <p className="eyebrow">
                  {formatDateRange(experience.startDate, experience.endDate)}
                </p>
                <h2>{experience.title}</h2>
                <h3>{experience.company}</h3>
                <p>{experience.summary}</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
