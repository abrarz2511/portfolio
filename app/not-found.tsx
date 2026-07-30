import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__grid" aria-hidden="true" />
      <div className="shell not-found__content">
        <p className="eyebrow">404 / Route not found</p>
        <h1>Signal lost.</h1>
        <p>
          The page you requested is not part of this system—or it has moved.
        </p>
        <Link className="button button--primary" href="/">
          <ArrowLeft size={17} aria-hidden="true" /> Return home
        </Link>
      </div>
    </section>
  );
}
