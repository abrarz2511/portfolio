import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  return (
    <section className="hero" aria-label="Portfolio introduction">
      <h1 className="sr-only">
        {siteConfig.name} — {siteConfig.role}
      </h1>
      <div className="hero__poster" aria-hidden="true" />
      <HeroVideo />
      <div className="hero__hue" aria-hidden="true" />
      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <ArrowDown size={17} />
      </div>
    </section>
  );
}
