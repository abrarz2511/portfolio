import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { siteConfig } from "@/content/site";
import { AnimatedContent } from "@/components/react-bits/AnimatedContent";
import { ExperienceRow } from "@/components/cards/ExperienceRow";
import { SectionHeading } from "./SectionHeading";

export function ProfileOverview() {
  return (
    <section className="profile-section section" aria-labelledby="profile-heading">
      <div className="shell profile-grid">
        <AnimatedContent className="profile-card">
          <div className="portrait-wrap">
            <Image
              src="/images/profile.webp"
              alt={siteConfig.profileAlt}
              width={800}
              height={800}
              sizes="(max-width: 639px) 240px, (max-width: 1023px) 280px, 320px"
              priority
              style={{ objectPosition: siteConfig.profileFocalPoint }}
            />
          </div>
          <div className="profile-card__identity">
            <h2 id="profile-heading">{siteConfig.name}</h2>
            <p>{siteConfig.role}</p>
          </div>
          <div className="profile-card__education">
            <span>{siteConfig.education.degree}</span>
            <span>{siteConfig.education.school}</span>
            <span>{siteConfig.education.graduation}</span>
          </div>
        </AnimatedContent>

        <AnimatedContent className="experience-preview" delay={100}>
          <SectionHeading
            title="Experience"
            headingId="experience-heading"
            copy="Building AI, robotics, and backend systems across defense, industrial automation, and research."
          />
          <div className="experience-list">
            {experiences.map((experience) => (
              <ExperienceRow experience={experience} key={experience.slug} />
            ))}
          </div>
          <Link className="text-link route-link" href="/experience">
            Full experience <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </AnimatedContent>
      </div>
    </section>
  );
}
