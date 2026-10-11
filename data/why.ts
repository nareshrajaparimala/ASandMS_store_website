import type { WhyItem, HowStep } from "@/types";

export const whyItems: WhyItem[] = [
  {
    icon: "Home",
    title: "We Come to You",
    desc: "No need to step out. Our technician comes to your home, office, or shop — anywhere in South Bengaluru.",
  },
  {
    icon: "IndianRupee",
    title: "Pay After Repair",
    desc: "You pay only after the repair is done and you are satisfied. No advance, no card needed.",
  },
  {
    icon: "ShieldCheck",
    title: "6-Month Warranty",
    desc: "Every repair comes with a 6-month warranty. Same issue returns? We fix it free.",
  },
  {
    icon: "Clock",
    title: "Same-Day Service",
    desc: "Most repairs completed the same day. Screen replacements done in under 45 minutes.",
  },
  {
    icon: "MapPin",
    title: "20km Service Zone",
    desc: "We cover all of South Bengaluru — Electronic City, Hosa Road, BTM, HSR, JP Nagar and more.",
  },
  {
    icon: "Wrench",
    title: "All Devices & Brands",
    desc: "Mobile, laptop, tablet. Apple, Samsung, OnePlus, HP, Dell — we repair them all.",
  },
];

export const howSteps: HowStep[] = [
  {
    step: 1,
    title: "WhatsApp Us",
    desc: "Send us a message on WhatsApp — tell us your device, issue, and address. Takes 2 minutes.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "We Come to You",
    desc: "Our technician arrives at your home or office. We diagnose the issue and give you an exact price before starting.",
    icon: "Home",
  },
  {
    step: 3,
    title: "Repaired. You Pay.",
    desc: "Device is repaired in front of you. You pay only after you are fully satisfied. 6-month warranty included.",
    icon: "CheckCircle",
  },
];
