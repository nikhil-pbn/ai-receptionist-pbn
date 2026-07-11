import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { PricingTabsProps } from "@/types/pricing";

export const PricingTabs = ({ tiers }: PricingTabsProps) => {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <Tabs defaultValue={tiers[0].value}>
          {/* Tabs */}

          <TabsList className="w-full md:h-fit flex justify-evenly items-center max-md:flex-wrap p-1 rounded-3xl md:rounded-full bg-[#21233A]">
            {tiers.map((tier) => (
              <TabsTrigger
                key={tier.value}
                value={tier.value}
                className="rounded-2xl max-w-fit md:rounded-full py-1 px-2 md:py-2 md:px-3 text-sm md:text-base font-semibold text-white/60 transition-all duration-500 data-[state=active]:bg-primary data-[state=active]:text-[#5750E5] data-[state=active]:shadow-none"
              >
                {tier.minutes} min
              </TabsTrigger>
            ))}
          </TabsList>

          {tiers.map((tier) => (
            <TabsContent
              key={tier.value}
              value={tier.value}
              className="mt-10"
            >
              <div className="rounded-[32px] border border-primary/20 bg-[#17182A] px-4 py-8 md:px-8 md:py-16 text-center">
                <p className="text-sm md:text-xl font-bold uppercase tracking-[1.1px] text-[#5750E5]">
                  {tier.minutes} AI MINUTES / MONTH
                </p>

                <div className="mt-6 flex items-end align-bottom justify-center gap-2">
                  <h2 className={cn(tier.price === "Free" ? "text-[#5750E5]" : "text-white", "text-4xl font-extrabold  md:text-6xl")}>
                    {tier.price}
                  </h2>

                  {tier.price !== "Free" && (
                    <span className="text-3xl font-medium text-white/60">
                      /month
                    </span>
                  )}
                </div>

                {tier.popular && (
                  <div className="mt-8">
                    <span className="rounded-full bg-[#1F3146] px-6 py-2 text-sm font-semibold text-[#74C7FF]">
                      Most Popular
                    </span>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xl leading-9 text-white/60">
          Need more than 1,000 minutes a month, or coverage across 5+
          locations? Talk to our team about custom volume pricing.
        </p>
      </div>
    </section>
  );
};