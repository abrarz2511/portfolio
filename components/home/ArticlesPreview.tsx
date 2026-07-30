import { FileText } from "lucide-react";
import Link from "next/link";
import { articles } from "@/data/articles";
import { AnimatedContent } from "@/components/react-bits/AnimatedContent";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";
import { SectionHeading } from "./SectionHeading";

export function ArticlesPreview() {
  return (
    <section className="section articles-section" aria-labelledby="articles-heading">
      <div className="shell">
        <AnimatedContent>
          <SectionHeading
            title="Latest articles"
            headingId="articles-heading"
            copy="Notes on building production AI systems, agent workflows, and reliable software."
          />
        </AnimatedContent>
        {articles.length ? null : (
          <AnimatedContent delay={100}>
            <SpotlightCard className="empty-state">
              <div className="empty-state__icon">
                <FileText size={23} aria-hidden="true" />
              </div>
              <p className="eyebrow">Drafting in progress</p>
              <h3>The first field notes are on the way.</h3>
              <p>
                I’m turning lessons from production APIs, embedded AI, and
                agentic systems into concise technical articles.
              </p>
              <Link className="text-link" href="/articles">
                Visit the writing index
              </Link>
            </SpotlightCard>
          </AnimatedContent>
        )}
      </div>
    </section>
  );
}
