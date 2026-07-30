import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { siGithub } from "simple-icons";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <span className="eyebrow">Designed &amp; built with intention</span>
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Engineering reliable
            systems from software to the edge.
          </p>
        </div>
        <div className="social-links" aria-label="Social links">
          <Link href={siteConfig.social.github} rel="noreferrer" target="_blank">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d={siGithub.path} fill="currentColor" />
            </svg>
            GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <Link href={siteConfig.social.linkedin} rel="noreferrer" target="_blank">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            LinkedIn
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
