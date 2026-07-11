import { AboutFeatureProps } from "@/types/about";

export const heroSection = {
    title: "Built by the people who already run your practice's numbers.",
    description: "OnCall Receptionist isn't a bolt-on product from a new vendor. It's a natural extension of the platform your practice already runs on.",
};

export const aboutFeatures: AboutFeatureProps[] = [
  {
    badge: "Who We Are",
     badgeBackground: "#203337",
    badgeColor: "#74F7D4",
    heading: "Practice by Numbers",
    description1:
      "Practice by Numbers is a practice performance platform used by more than 1,500 dental practices—helping owners and administrators see exactly how their front desk, hygiene schedule, and production are performing, all in one place.",

    description2:
      "OnCall Receptionist grew directly out of that work. Practices using PbN kept losing patients to calls nobody could answer, so we built the fix directly into the platform they were already logging into every day.",

    image: "/assets/about/Practices.png",
  },

  {
    badge: "Why We Built It",
    badgeBackground: "#1F3146",
    badgeColor: "#74C7FF",
    heading: "The staffing gap every practice already knows",
    description1:
      "Hiring another receptionist to cover nights, lunch, and overflow costs $35,000–$45,000 a year—a cost that rarely makes sense for a one- or two-dentist practice. Most offices simply accept missed calls as a cost of doing business.",

    description2:
      "We didn't think that had to be the trade-off. OnCall Receptionist gives practices the coverage they actually need first, without a new vendor, a new integration, or a new line item to manage separately from everything else they run through PbN.",

    image: "/assets/about/WeBuildIt.png",
    reverse: true,
  },

  {
    badge: "Our Approach",
    badgeBackground: "#32223E",
    badgeColor: "#B06CFF",
    heading: "Built for dental, not retrofitted from a general-purpose bot",
    description1:
      "OnCall understands dental-specific scheduling logic—appointment types, provider availability, and emergency triage—because it was built for this workflow from the start, not adapted from a generic answering service.",

    description2:
      "Everything works natively with your existing Practice by Numbers workflow, providing secure, HIPAA-compliant patient interactions and seamless integration with your practice management system.",

    image: "/assets/about/OurApproach.png",
  },
];