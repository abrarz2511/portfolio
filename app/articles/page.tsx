import type { Metadata } from "next";
import { FileText } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Technical writing by Abrar Zahin on AI engineering, robotics, and reliable software systems.",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical field notes"
        title="Articles"
        copy="Practical notes from building production APIs, embedded AI, and agentic workflows."
      />
      <section className="page-section placeholder-page">
        <div className="shell">
          <div className="placeholder-panel">
            <FileText size={28} aria-hidden="true" />
            <p className="eyebrow">Content coming soon</p>
            <h2>The first article is in the works.</h2>
            <p>
              This index is ready for verified long-form content without
              publishing placeholder claims or unfinished drafts.
            </p>
            <Link className="button button--secondary" href="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
