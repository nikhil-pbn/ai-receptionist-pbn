"use client";

import { CalculatorForm } from "@/components/home/CalculatorForm";
import { CalculatorResults } from "@/components/home/CalculatorResults";
import { useRevenueCalculator } from "@/components/home/useRevenueCalculator";

export const RevenueCalculator = () => {
  const { values, setField, stats, money } = useRevenueCalculator();

  return (
    <section id="roi-calculator" className="px-6 py-20 w-full bg-sectionBg">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#8B4DFF]">
            See The Impact
          </p>

          <h2 className="mt-6 text-2xl font-extrabold text-foreground lg:text-4xl">
            What are missed calls costing your practice?
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm font-normal leading-6 text-foreground/55">
            Answer four quick questions about your call volume and see what
            you&apos;re leaving on the table every month.
          </p>
        </div>

        <div className="mt-16 rounded-[28px] border border-foreground/10 bg-surface p-4 md:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <CalculatorForm values={values} setField={setField} />
            <CalculatorResults stats={stats} money={money} />
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl lg:text-nowrap text-center text-sm text-foreground/35">
          Estimates based on industry benchmark call-handling rates. Actual
          results vary by practice. Reflects inbound call coverage only.
        </p>
      </div>
    </section>
  );
};
