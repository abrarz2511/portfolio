import { technologyGroups } from "@/data/technologies";
import { AnimatedContent } from "@/components/react-bits/AnimatedContent";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";
import { TechnologyItem } from "@/components/cards/TechnologyItem";
import { SectionHeading } from "./SectionHeading";

export function TechStack() {
  return (
    <section className="section tech-section" aria-labelledby="tech-heading">
      <div className="shell">
        <AnimatedContent>
          <SectionHeading
            title="Technology stack"
            headingId="tech-heading"
            copy="Tools I’ve used across AI engineering, robotics, full-stack systems, and production operations."
          />
        </AnimatedContent>
        <div className="tech-grid">
          {technologyGroups.map((group, index) => (
            <AnimatedContent delay={index * 55} key={group.name}>
              <SpotlightCard className="technology-group">
                <h3>{group.name}</h3>
                <ul>
                  {group.technologies.map((technology) => (
                    <TechnologyItem
                      technology={technology}
                      key={technology.name}
                    />
                  ))}
                </ul>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
