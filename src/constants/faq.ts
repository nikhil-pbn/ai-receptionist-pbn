import { DemoFormField, FAQCategory } from "@/types/faq";

export const heroSection = {
    title: "Your questions, answered",
    description: "Everything practices ask us before turning on OnCall Receptionist.",
};

export const FAQ_CATEGORIES: FAQCategory[] = [
    {
        title: "Getting Started",
        items: [
            {
                value: "replace-front-desk",
                question: "Will this replace my front desk staff?",
                answer:
                    "No. OnCall is built to cover the calls your team can't get to — nights, lunch, overflow, and every hour you're open — but it's there to support your front desk, not replace the relationships your team already has with patients.",
            },
            {
                value: "new-vendor",
                question: "Do I need to sign up with a new vendor?",
                answer:
                    "No. OnCall runs inside PbN using the connection you already have. There's no separate contract, login, or integration to maintain — it's a feature of the platform, not a new relationship to manage.",
            },
            {
                value: "pricing",
                question: "How does pricing work?",
                answer:
                    "OnCall Receptionist is one plan with every feature included — there's no higher tier to unlock. Pricing is based on the AI minutes your practice purchases each month, starting free at 50 minutes and scaling up from there. See the Pricing page for the full breakdown.",
            },
            {
                value: "onboarding",
                question: "What does onboarding look like?",
                answer:
                    "It's a single toggle inside your existing PbN account — no implementation call required to get started.",
            },
            {
                value: "more-minutes",
                question: "What if my practice needs more minutes later?",
                answer:
                    "You can move to a higher minutes tier at any time. Every tier runs on the same OnCall Receptionist plan and feature set, so there's no migration or re-onboarding involved.",
            },
            {
                value: "hear-air",
                question: "Can I hear AIR before I commit to anything?",
                answer:
                    "Yes — call our live demo line at 425-434-5570 anytime, or listen to a recorded call on the See AIR In Action page. No sign-up required.",
            },
        ],
    },

    {
        title: "Using OnCall",
        items: [
            {
                value: "cant-handle",
                question: "What if a patient needs something OnCall can't handle?",
                answer:
                    "OnCall is built to recognize what it can and can't resolve, and hands off to a message, callback flow, or warm transfer to your team rather than guessing. You're not exposed to it improvising with a patient on something it isn't confident about.",
            },
            {
                value: "pms",
                question: "Which practice management systems are supported?",
                answer:
                    "OnCall integrates directly with the PMS connections already available through PbN, including Dentrix, Eaglesoft, and Open Dental, with more added regularly.",
            },
            {
                value: "multi-location",
                question: "Do you support multiple locations or DSOs?",
                answer:
                    "Yes. Practices with 5 or more locations, or needing more than 1,000 AI minutes a month, can move to a custom multi-location plan with a portfolio-level dashboard and a dedicated CSM.",
            },
            {
                value: "turn-off",
                question: "Can I turn OnCall off if it's not working for us?",
                answer:
                    "Yes — it's a single toggle in your PbN account, on or off, whenever you want.",
            },
        ],
    },

    {
        title: "Security & Compliance",
        items: [
            {
                value: "hipaa",
                question: "Is patient data handled securely?",
                answer:
                    "Yes. OnCall is HIPAA-compliant and operates under a signed Business Associate Agreement (BAA). Patient identity is verified using a one-time passcode before any protected health information is shared on a call.",
            },
            {
                value: "storage",
                question: "Where is call data stored, and who can access it?",
                answer:
                    "Call recordings, transcripts, and booking activity are stored within your PbN account and accessible to your practice's authorized users, the same way your other PbN data is managed today.",
            },
        ],
    },
];


export const DEMO_FORM_FIELDS: DemoFormField[] = [
    {
        label: "Practice name",
        name: "practiceName",
        placeholder: "e.g. Riverside Family Dental",
    },
    {
        label: "Your name",
        name: "fullName",
        placeholder: "Full name",
    },
    {
        label: "Work email",
        name: "email",
        placeholder: "you@practice.com",
        type: "email",
    },
    {
        label: "Number of locations",
        name: "locations",
        placeholder: "e.g. 1",
    },
];