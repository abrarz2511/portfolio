import { BlurText } from "@/components/react-bits/BlurText";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  headingId,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  headingId?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={headingId}>
        <BlurText text={title} />
      </h2>
      {copy ? <p className="section-heading__copy">{copy}</p> : null}
    </div>
  );
}
