"use client";

import { useMemo, useState } from "react";

import { calculatorDefaults } from "@/constants/home";
import Link from "next/link";
import { RevenueCard, Slider, Stat } from "@/components/home";

export const RevenueCalculator = () => {
  const [callsPerMonth, setCallsPerMonth] = useState(
    calculatorDefaults.callsPerMonth
  );

  const [unansweredRate, setUnansweredRate] = useState(
    calculatorDefaults.unansweredRate
  );

  const [newPatientRate, setNewPatientRate] = useState(
    calculatorDefaults.newPatientRate
  );

  const [conversionRate, setConversionRate] = useState(
    calculatorDefaults.conversionRate
  );

  const [firstVisitValue, setFirstVisitValue] = useState(
    calculatorDefaults.firstVisitValue
  );

  const stats = useMemo(() => {
    const missedCalls =
      callsPerMonth * (unansweredRate / 100);

    const missedNewPatients =
      missedCalls * (newPatientRate / 100);

    const lostAppointments =
      missedNewPatients * (conversionRate / 100);

    const monthlyRevenue =
      lostAppointments * firstVisitValue;

    const yearlyRevenue =
      monthlyRevenue * 12;

    return {
      missedCalls: Math.round(missedCalls),
      lostAppointments: Math.round(lostAppointments),
      monthlyRevenue,
      yearlyRevenue,
    };
  }, [
    callsPerMonth,
    unansweredRate,
    newPatientRate,
    conversionRate,
    firstVisitValue,
  ]);

  const money = (value: number) =>
    value >= 1000
      ? `$${Math.round(value / 1000)}K`
      : `$${Math.round(value)}`;

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
            Answer four quick questions about your call volume and see what you&#39re leaving on the table every month.
          </p>
        </div>

        <div className="mt-16 rounded-[28px] border border-foreground/10 bg-surface p-4 md:p-10">

          <div className="grid gap-10 lg:grid-cols-2">

            {/* LEFT */}

            <div className="space-y-8">

              <div>
                <label className="mb-3 block text-sm text-foreground/75">
                  Average inbound calls per month
                </label>

                <input
                  type="number"
                  value={callsPerMonth}
                  onChange={(e) =>
                    setCallsPerMonth(Number(e.target.value))
                  }
                  step={10}
                  min={0}
                  className="h-14 w-full rounded-xl border border-foreground/10 bg-surface-3 px-5 text-foreground outline-none"
                />
              </div>

              <Slider
                label="% calls that go unanswered"
                value={unansweredRate}
                setValue={setUnansweredRate}
              />

              <Slider
                label="% missed calls from new patients"
                value={newPatientRate}
                setValue={setNewPatientRate}
              />

              <Slider
                label="Appointment conversion when answered"
                value={conversionRate}
                setValue={setConversionRate}
              />

              <div>
                <label className="mb-3 block text-sm text-foreground/75">
                  Average first-visit value ($)
                </label>

                <input
                  type="number"
                  value={firstVisitValue}
                  onChange={(e) =>
                    setFirstVisitValue(Number(e.target.value))
                  }
                  min={0}
                  step={10}
                  className="h-14 w-full rounded-xl border border-foreground/10 bg-surface-3 px-5 text-foreground outline-none"
                />
              </div>

            </div>

            {/* RIGHT */}

            <div className="rounded-3xl flex-1 bg-[#e3e7ff] dark:bg-[#262766] p-3 md:p-7">

              <p className="mb-8 text-xs uppercase tracking-[1.1px] text-foreground/45">
                What this is costing you
              </p>

              <div className="grid grid-col-1 sm:grid-cols-2 gap-6">

                <Stat
                  value={`${stats.missedCalls}/mo`}
                  label="Missed calls / month"
                />

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

              <Link href="/pricing"
                className="mt-10 flex max-sm:text-xs py-4 items-center justify-center gap-3 rounded-full bg-brand font-semibold text-white transition hover:opacity-90"
              >
                See How OnCall Recovers This
              </Link>

            </div>

          </div>

        </div>

        <p className="mx-auto mt-8 max-w-3xl lg:text-nowrap text-center text-sm text-foreground/35">
          Estimates based on industry benchmark call-handling rates.
          Actual results vary by practice. Reflects inbound call
          coverage only.
        </p>

      </div>
    </section>
  );
};