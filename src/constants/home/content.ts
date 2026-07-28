import { FAQItemProps, HowItWorksItem } from "@/types/home";

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
