import { RecordedDemo, SuggestedPrompt, VideoScenario } from "@/types/demoPage";

export const heroSection = {
    title: "See AIR In Action",
    description: "Hear it live, listen to a recorded call, or watch real scenarios below.",
};


export const VIDEO_LIBRARY: VideoScenario[] = [
    {
        id: 1,
        title: "New Patient Appointment Booking",
        description:
            "Sara is a brand-new patient calling to book her first visit for tooth pain.",
        callouts: [
            '"New patient? No problem."',
            '"AIR identifies the right visit type from the symptom."',
            '"Number confirmed, appointment read back, booked live."',
        ],
    },
    {
        id: 2,
        title: "Returning Patient Appointment Booking",
        description:
            "Sara is an existing patient calling to schedule a routine cleaning and checkup.",
        callouts: [
            '"AIR recognizes returning patients instantly."',
            '"Pulls up your record with just a name and date of birth."',
            '"Real availability, confirmed and booked live."',
        ],
    },
    {
        id: 3,
        title:
            "Cancellation — Patient Keeps the Appointment After Fee Info",
        description:
            "Sara calls intending to cancel, but decides to keep her appointment after AIR explains the cancellation fee.",
        callouts: [
            '"AIR confirms which appointment before touching anything."',
            '"Upfront about policy — before any change is made."',
            '"A cancellation avoided is a chair filled."',
        ],
    },
    {
        id: 4,
        title: "Appointment Confirmation",
        description:
            "Sara calls to check on and confirm her upcoming appointment.",
        callouts: [
            '"Verified with a one-time code to the phone on file."',
            '"Check and confirm appointments in seconds."',
            '"Status updated live — fewer no-shows, zero hold time."',
        ],
    },
    {
        id: 5,
        title: "Account Balance Check",
        description:
            "Sara asks for her current account balance; AIR verifies her identity before sharing anything.",
        callouts: [
            '"Account details? Verified first, always."',
            '"HIPAA-minded security with a one-time passcode."',
            '"Balances answered securely — no front-desk needed."',
        ],
    },
    {
        id: 6,
        title: "Practice Address & Office Hours",
        description:
            "A caller asks for the practice location and office hours.",
        callouts: [
            '"Hours, directions, services — answered instantly."',
            '"Powered by each practice’s own knowledge base."',
            '"No question left on hold."',
        ],
    },
];


export const RECORDED_DEMO: RecordedDemo = {
  title: "New Patient Appointment Booking",
  voice: "Voice: Maya · Riverbend Family Dental",
  duration: "~45 sec",

  audio: "/audio/new-patient.mp3",

  transcript: [
    {
      speaker: "AIR (Maya)",
      text: "Thanks for calling Riverbend Family Dental, this is Maya. How can I help you today?",
    },
    {
      speaker: "Sara",
      text: "Hi, I'd like to book an appointment. I'm a new patient.",
    },
    {
      speaker: "AIR (Maya)",
      text: "Happy to get you set up. Can I start with your first and last name?",
    },
    {
      speaker: "Sara",
      text: "Sara Kone. That's K-O-N-E.",
    },
    {
      speaker: "AIR (Maya)",
      text: "Thank you, Sara. And your date of birth?",
    },
    {
      speaker: "Sara",
      text: "November 10th, 1990.",
    },
    {
      speaker: "AIR (Maya)",
      text: "Got it. What's bringing you in today?",
    },
    {
      speaker: "Sara",
      text: "I've had some tooth pain on the lower right side.",
    },
    {
      speaker: "AIR (Maya)",
      text: "I'm sorry to hear that — let's get you seen. This will be for a dental emergency visit type. Do you want me to check the earliest availability, or do you have a specific day in mind?",
    },
  ],
};


export const SUGGESTED_PROMPTS: SuggestedPrompt[] = [
  {
    id: 1,
    text: '"I\'d like to book a new patient appointment."',
  },
  {
    id: 2,
    text: '"What are your office hours?"',
  },
  {
    id: 3,
    text: '"I need to check my appointment."',
  },
];