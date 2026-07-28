import { LastCTA } from "@/components/common";
import { HeroSection, PricingFAQ, PricingFeatures, PricingTabs, ROISection } from "@/components/pricing";
import { pricingFAQ, pricingFeatures, pricingTabs } from "@/constants/pricing";


export default function PricingPage() {
  return (
    <main className="flex pt-10 flex-col w-full items-center justify-between bg-background">
      <HeroSection />
      <PricingFeatures {...pricingFeatures} />
      <PricingTabs {...pricingTabs} />
      <ROISection />
      <PricingFAQ badge="Billing" title="Common pricing questions" items={pricingFAQ.items} />
      <LastCTA
        heading="Ready to stop missing new patients?"
        description="Start OnCall Receptionist free with 50 AI minutes. It's already part of PbN — there's nothing new to set up."
      />
    </main>
  );
}
