import Link from "next/link";

import { RevenueCard, Stat } from "@/components/home/RevenueCard";
import type { CalculatorStats } from "@/components/home/useRevenueCalculator";

interface CalculatorResultsProps {
  stats: CalculatorStats;
  money: (value: number) => string;
}

export const CalculatorResults = ({ stats, money }: CalculatorResultsProps) => (
  <div className="rounded-3xl flex-1 bg-[#e3e7ff] dark:bg-[#262766] p-3 md:p-7">
    <p className="mb-8 text-xs uppercase tracking-[1.1px] text-foreground/45">
      What this is costing you
    </p>

    <div className="grid grid-col-1 sm:grid-cols-2 gap-6">
      <Stat value={`${stats.missedCalls}/mo`} label="Missed calls / month" />
      <Stat
        value={`${stats.lostAppointments}/mo`}
        label="Lost appointments / month"
      />
    </div>

    <RevenueCard
      className="mt-8"
      value={money(stats.monthlyRevenue)}
      label="Monthly revenue at risk"
      blue
    />

    <RevenueCard
      className="mt-4"
      value={money(stats.yearlyRevenue)}
      label="Annual revenue at risk"
    />

    <Link
      href="/pricing"
      className="mt-10 flex max-sm:text-xs py-4 items-center justify-center gap-3 rounded-full bg-brand font-semibold text-white transition hover:opacity-90"
    >
      See How OnCall Recovers This
    </Link>
  </div>
);
