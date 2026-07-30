import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Experience } from "@/types/content";
import { formatDateRange } from "@/lib/format";

export function ExperienceRow({ experience }: { experience: Experience }) {
  return (
    <Link
      className="experience-row"
      href={`/experience#${experience.slug}`}
      aria-label={`${experience.title} at ${experience.company}`}
    >
      <span>
        <strong>{experience.title}</strong>
        <small>{experience.company}</small>
      </span>
      <span className="experience-row__date">
        {formatDateRange(experience.startDate, experience.endDate)}
      </span>
      <ArrowUpRight size={19} aria-hidden="true" />
    </Link>
  );
}
