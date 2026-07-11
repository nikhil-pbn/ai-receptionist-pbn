import { HeroSection, PricingFAQProps, PricingFeaturesProps, PricingTabsProps, ROIStat } from "@/types/pricing";

export const heroSection: HeroSection = {
    title: "One plan. Every feature. Pay for only minutes you use.",
    description: "OnCall Receptionist includes the full feature set for every practice — there's no higher tier to unlock. Pricing scales with the AI minutes your practice needs each month, starting free.",
    link: {
        label: "Not sure this pays for itself? Try the calculator on our homepage →",
        href: "/#roi-calculator"
    }
};



export const pricingFeatures: PricingFeaturesProps = {
    badge: "THE ONLY PLAN YOU NEED",
    title: "OnCall Receptionist",
    description:
        "Every feature is included from day one — there's no higher tier to unlock later. The only thing that changes as your practice grows is how many AI minutes you purchase each month.",

    columns: [
        [
            "24/7 after-hours + overflow answering",
            "Rescheduling & cancellation handling (with save)",
            "Direct, complete PMS write-back",
            "Warm transfer + screening to your team",
            "Call recording & transcripts",
        ],
        [
            "Full-time inbound call handling",
            "Appointment confirmations",
            "Two-way SMS conversations",
            "OTP patient verification",
            "Live analytics dashboard",
        ],
        [
            "New & existing patient booking",
            "Emergency & same-day scheduling",
            "Self-serve knowledge base Q&A",
            "HIPAA compliance & BAA",
        ],
    ],
};


export const pricingTabs: PricingTabsProps = {
  tiers: [
    {
      value: "50",
      minutes: "50",
      price: "Free",
    },
    {
      value: "250",
      minutes: "250",
      price: "$150",
      popular: true,
    },
    {
      value: "450",
      minutes: "450",
      price: "$225",
    },
    {
      value: "600",
      minutes: "600",
      price: "$325",
    },
    {
      value: "800",
      minutes: "800",
      price: "$425",
    },
    {
      value: "1000",
      minutes: "1,000",
      price: "$500",
    },
  ],
};


export const pricingFAQ: PricingFAQProps = {
  badge: "Billing",
  title: "Common pricing questions",

  items: [
    {
      question: "Is there a contract or commitment?",
      answer:
        "No long-term contract is required to get started. You can turn OnCall on or off from your PbN account at any time.",
    },
    {
      question: "What happens if we go over our purchased minutes?",
      answer:
        "If your practice consistently needs more than your current tier's minutes, our team will reach out to help you move to the right tier for your call volume — no surprise overage charges.",
    },
    {
      question: "Can we change minute tiers later?",
      answer:
        "Yes. Every tier runs on the same OnCall Receptionist plan with the same full feature set, so moving to a higher or lower minutes tier doesn't require a migration or a new setup process.",
    },
    {
      question: "Is pricing per location?",
      answer:
        "Yes, minute tiers are priced per location. Groups with 5 or more locations should talk to our team about volume pricing.",
    },
  ],
};


export const ROI_SECTION = {
  badge: "Why The Math Works",

  heading: "One recovered patient pays for the month",

  description:
    "Even on the entry tier, a typical practice's AI minutes translate into real, bookable appointments — well beyond what those minutes cost.",

  footer:
    "Based on ~17% of after-hours callers having booking intent, a 50% conversion rate, and a $165 blended appointment value, at the 250-minute tier ($150/month) — the math isn't close.",
};

export const ROI_STATS: ROIStat[] = [
  {
    value: "250 min",
    title: "AI minutes tier",
    subtitle: "($150/mo)",
  },
  {
    value: "~43",
    title: "calls handled",
  },
  {
    value: "~15",
    title: "appointments booked,",
    subtitle: "after cancellations",
  },
  {
    value: "$2,475",
    title: "estimated practice",
    subtitle: "value recovered",
  },
];