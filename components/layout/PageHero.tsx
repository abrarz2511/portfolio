import { BlurText } from "@/components/react-bits/BlurText";

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="shell page-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          <BlurText text={title} />
        </h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}
