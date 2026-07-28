import { PricingItem } from "@/types/home";

export const pricingItems: PricingItem[] = [
  {
    minutes: "50 minutes",
    price: "Free",
    free: true,
  },
  {
    minutes: "250 minutes",
    price: "$150 / mo",
    popular: true,
  },
  {
    minutes: "450 minutes",
    price: "$225 / mo",
  },
  {
    minutes: "600 – 1,000 minutes",
    price: "$325 – $500 / mo",
  },
];

export const calculatorDefaults = {
  callsPerMonth: 500,
  unansweredRate: 35,
  newPatientRate: 30,
  conversionRate: 50,
  firstVisitValue: 300,
};
