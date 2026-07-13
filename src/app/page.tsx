import { LastCTA } from "@/components/common";
import { FAQSection, FeaturesSection, HearAIR, HeroSection, HowItWorks, IntegrationStrip, PricingPreview, ProblemStats, RevenueCalculator, SeeItInAction, Testimonials, WhyChooseUs } from "@/components/home";
import { homeFaqSchema } from "@/schema/home";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqSchema),
        }}
      />
      <main className="flex pt-10 flex-col w-full items-center justify-between bg-[#161515]">
        <HeroSection />
        <IntegrationStrip />
        <ProblemStats />
        <RevenueCalculator />
        <HowItWorks />
        <FeaturesSection />
        <WhyChooseUs />
        <HearAIR />
        <SeeItInAction />
        <PricingPreview />
        <Testimonials />
        <FAQSection />
        <LastCTA heading="Never miss a new patient because nobody picked up."
          description="OnCall Receptionist answers every call your front desk can't, nights, lunch rush, holidays — and books it straight into your schedule." />
      </main>
    </>
  );
}
