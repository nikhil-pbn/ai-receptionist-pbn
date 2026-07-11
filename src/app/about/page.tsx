import { AboutFeaturesSection, HeroSection } from "@/components/about";
import { LastCTA } from "@/components/common";

export default function AboutPage() {
  return (
    <main className="flex pt-10 flex-col w-full items-center justify-between bg-[#161515]">
      <HeroSection />
      <AboutFeaturesSection />
      <LastCTA
        heading="See it running inside your own PbN account"
        description="No new vendor relationship, no separate login — just turn it on." />
    </main>
  );
}
