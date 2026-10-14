import { Hero } from "@/components/home/Hero";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { StatsStrip } from "@/components/home/StatsStrip";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyUs } from "@/components/home/WhyUs";
import { ConstructionProgress } from "@/components/home/ConstructionProgress";
import { CeoMessage } from "@/components/home/CeoMessage";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/shared/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <StatsStrip />
      <FeaturedProjects />
      <WhyUs />
      <ConstructionProgress />
      <CeoMessage />
      <Testimonials />
      <CtaBand />
    </>
  );
}
