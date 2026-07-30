import { ArticlesPreview } from "@/components/home/ArticlesPreview";
import { VantaNet } from "@/components/effects/VantaNet";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { ProfileOverview } from "@/components/home/ProfileOverview";
import { TechStack } from "@/components/home/TechStack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="ambient-zone">
        <VantaNet />
        <ProfileOverview />
        <ArticlesPreview />
        <TechStack />
      </div>
      <FeaturedProjects />
    </>
  );
}
