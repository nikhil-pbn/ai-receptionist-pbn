import { useMemo, useState } from "react";

import { calculatorDefaults } from "@/constants/home";

export type CalculatorValues = typeof calculatorDefaults;

/** Owns the ROI calculator state and derives the "cost of missed calls" stats. */
export function useRevenueCalculator() {
  const [values, setValues] = useState<CalculatorValues>(calculatorDefaults);

  const setField = <K extends keyof CalculatorValues>(key: K, value: number) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const stats = useMemo(() => {
    const missedCalls = values.callsPerMonth * (values.unansweredRate / 100);
    const missedNewPatients = missedCalls * (values.newPatientRate / 100);
    const lostAppointments = missedNewPatients * (values.conversionRate / 100);
    const monthlyRevenue = lostAppointments * values.firstVisitValue;

    return {
      missedCalls: Math.round(missedCalls),
      lostAppointments: Math.round(lostAppointments),
      monthlyRevenue,
      yearlyRevenue: monthlyRevenue * 12,
    };
  }, [values]);

  const money = (value: number) =>
    value >= 1000 ? `$${Math.round(value / 1000)}K` : `$${Math.round(value)}`;

  return { values, setField, stats, money };
}

export type CalculatorStats = ReturnType<typeof useRevenueCalculator>["stats"];
