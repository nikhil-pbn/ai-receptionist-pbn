import { LastCTA } from "@/components/common";
import { HeroSection, RecordedDemo, SuggestedPrompts, VideoLibrary } from "@/components/demoPage";


export default function DemosPage() {
  return (
    <main className="flex pt-10 flex-col w-full items-center justify-between bg-[#161515]">
      <HeroSection />
      <LastCTA
        badge="Call Anytime — Live 24/7"
        heading="425-434-5570"
        description="Call anytime — AIR is live 24/7. Try booking an appointment, asking about office hours, or checking in as a returning patient."
      />
      <SuggestedPrompts />
      <RecordedDemo />
      <VideoLibrary />
      <LastCTA
        more="primaryButton"
        heading="Ready to see it in your own practice?"
        description="Book a full walkthrough with our team, or call the live demo line right now."
      />
    </main>
  );
}
