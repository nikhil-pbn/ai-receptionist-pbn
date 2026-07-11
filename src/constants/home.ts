import { FAQItemProps, HowItWorksItem, PricingItem } from "@/types/home";

export const HerosSection = {
  title: "Never miss a new patient because nobody picked up.",
  description: "OnCall Receptionist answers every call your front desk can't, nights, lunch rush, holidays — and books it straight into your schedule.",
  spanText: "Built for the 1,500+ dental practices already running on PbN.",
};

export const HeroImageCalls = [
  {
    initials: "MJ",
    name: "Maggie J.",
    subtitle: "New patient · 9:42 PM",
    status: "Booked",
    color: "bg-violet-500",
  },
  {
    initials: "CR",
    name: "Chris P.",
    subtitle: "Reschedule · Overflow",
    status: "Booked",
    color: "bg-violet-500",
  },
  {
    initials: "GH",
    name: "Gael H.",
    subtitle: "New patient · Lunch hour",
    status: "In Progress",
    color: "bg-blue-500",
  },
];

export const testimonials = [
  {
    quote:
      "We used to lose at least a couple of new patients a week to after-hours calls. Now they just get booked.",
    initials: "PM",
    name: "Practice Manager",
    company: "Two-Dentist Practice",
  },
  {
    quote:
      "It didn't feel like adding another vendor. It just showed up inside the tool we already use every day.",
    initials: "OA",
    name: "Office Administrator",
    company: "Multi-Location Practice",
  },
  {
    quote:
      "Our front desk finally gets a lunch break without worrying about missed calls piling up.",
    initials: "PO",
    name: "Practice Owner",
    company: "Solo Dental Practice",
  },
];

export const whyChooseUs = [
  {
    title: "Native to PbN",
    description:
      "No new vendor, no new login, no separate integration project.",
  },
  {
    title: "Built for dental, not retrofitted",
    description:
      "Deep PMS integration and dental-specific scheduling logic from day one.",
  },
  {
    title: "HIPAA-compliant, every call",
    description:
      "One-time passcode verification before any patient information is shared.",
  },
  {
    title: "Simple, transparent pricing",
    description:
      "Turn it on or off anytime. No long-term contract required.",
  },
  {
    title: "Full call recordings & transcripts",
    description:
      "Know exactly what happened on every call, every time.",
  },
  {
    title: "Backed by a platform 1,500+ practices trust",
    description:
      "Not a new company betting on dental for the first time.",
  },
];

export const integrations = [
  "Dentrix",
  "Eaglesoft",
  "Open Dental",
  "Denticon",
  "PbN Platform",
];

export const problemStats = {
  badge: "THE PROBLEM",
  title: "Every unanswered call is a new patient calling someone else",
  description:
    "When a prospective patient can't get through, they don't wait on hold, they don't leave a voicemail. Most call the next practice on their list instead.",

  stats: [
    {
      value: "32–38%",
      description:
        "of dental practice calls go unanswered during business hours",
    },
    {
      value: "1 in 3",
      description:
        "of missed calls are from new patients trying to book",
    },
    {
      value: "$10,000+",
      description:
        "average lifetime value of a single new patient",
    },
  ],
};


export const howItWorksItems: HowItWorksItem[] = [
  {
    number: "01",
    title: "Turn it on",
    description:
      "One toggle inside your PbN account. No implementation call, no new software to install.",
  },
  {
    number: "02",
    title: "It answers what your team misses",
    description:
      "After-hours, lunch, overflow — OnCall picks up, understands why the patient is calling, and books the appointment.",
  },
  {
    number: "03",
    title: "You wake up to a fuller schedule",
    description:
      "Every booking shows up in your existing calendar, tagged so you know it came from OnCall.",
  },
];


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

export const faqList: FAQItemProps[] = [
  {
    value: "item-1",
    question: "Will this replace my front desk staff?",
    answer:
      "No. OnCall is built for the hours your staff isn't there — nights, lunch, and overflow when every line is already busy. Your team stays in charge of the desk during business hours.",
  },
  {
    value: "item-2",
    question: "Do I need to sign up with a new vendor?",
    answer:
      "No. OnCall runs inside PbN using the connection you already have. There's no separate contract, login, or integration to maintain.",
  },
  {
    value: "item-3",
    question: "Can I hear AIR before I commit to anything?",
    answer:
      "Yes — call our live demo line at 425-434-5570 anytime, or listen to a recorded call on the See AIR In Action page. No sign-up required.",
  },
];

export const seeItInAction = [
  {
    title: "New Patient Appointment Booking",
    description:
      "Sara is a brand-new patient calling to book her first visit for tooth pain.",
    highlights: [
      "New patient? No problem.",
      "Number confirmed, booked live.",
    ],
  },
  {
    title: "Cancellation — Patient Keeps the Appointment",
    description:
      "Sara calls intending to cancel, but keeps her appointment after AIR explains the fee.",
    highlights: [
      "Upfront about policy — before any change.",
      "A cancellation avoided is a chair filled.",
    ],
  },
  {
    title: "Appointment Confirmation",
    description:
      "Sara calls to check on and confirm her upcoming appointment.",
    highlights: [
      "Verified with a one-time code.",
      "Fewer no-shows, zero hold time.",
    ],
  },
];

export const features = [
  {
    badge: "New Patient Growth",
    badgeBackground: "#203337",
    badgeColor: "#74F7D4",

    title: "Capture new patients before they call someone else",

    description:
      "OnCall answers every after-hours, lunch, and overflow call — the exact moments new patients are most likely calling to book. Nothing goes to voicemail.",

    image: "/assets/home/PatientGrowth.png",

    points: [
      "24/7 after-hours and overflow answering",
      "Recognizes new vs. existing patient calls instantly",
      "Books directly into your schedule — no manual follow-up",
    ],
  },

  {
    badge: "Integration",
    badgeBackground: "#1F3146",
    badgeColor: "#74C7FF",

    title: "Built into PbN, not bolted on",

    description:
      "OnCall runs on the same PbN connection you already use — no separate app, no second vendor relationship, no manual data entry between systems.",

    image: "/assets/home/Integration.png",

    points: [
      "Books directly into your existing PMS",
      "One login, one invoice, one support relationship",
      "Turn on or off in a single click — no setup project",
    ],
  },

  {
    badge: "Visibility",
    badgeBackground: "#32223E",
    badgeColor: "#B06CFF",

    title: "See exactly what it's doing for your practice",

    description:
      "Every call is recorded and summarized, so you always know what happened and why — right inside your PbN dashboard.",

    image: "/assets/home/Visibility.png",

    points: [
      "Call recordings and transcripts for every interaction",
      "Booking, reschedule, and cancellation tracking",
      "HIPAA-compliant handling of every patient interaction",
    ],
  },
];

export const calculatorDefaults = {
  callsPerMonth: 500,
  unansweredRate: 35,
  newPatientRate: 30,
  conversionRate: 50,
  firstVisitValue: 300,
};