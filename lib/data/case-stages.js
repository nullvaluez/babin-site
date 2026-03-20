import {
  Phone,
  UserPlus,
  Search,
  FileText,
  Scale,
  HandshakeIcon,
  CheckCircle,
  HeartPulse,
  ClipboardList,
  ShieldCheck,
  Microscope,
  Gavel,
  Calculator,
  DollarSign,
  Lock,
  Heart,
  Compass,
  FileSignature,
  Swords,
  Award,
  Sunrise,
} from "lucide-react";

export const stageImages = [
  "/images/stages/consultation.jpg",
  "/images/stages/onboarding.jpg",
  "/images/stages/investigation.jpg",
  "/images/stages/negotiation.jpg",
  "/images/stages/litigation.jpg",
  "/images/stages/resolution.jpg",
  "/images/stages/closed.jpg",
];

export const caseStages = {
  homepage: {
    title: "7 Stages of Your Case",
    subtitle:
      "From your first call to case resolution, we guide you through every step with transparency and dedication.",
    stages: [
      {
        number: 1,
        title: "Free Consultation",
        description:
          "We listen to your story and evaluate your potential case at no cost to you. There's no pressure, no obligation — just honest guidance from experienced attorneys.",
        icon: Phone,
        timeline: "Same day or within 24 hours",
        bullets: [
          "Confidential case evaluation at zero cost",
          "Speak directly with an experienced attorney",
          "Receive honest assessment of your legal options",
        ],
      },
      {
        number: 2,
        title: "Onboarding",
        description:
          "Welcome to the firm. We assign your dedicated legal team, walk you through the process, and begin gathering the initial documents needed to pursue your claim.",
        icon: UserPlus,
        timeline: "1–3 business days",
        bullets: [
          "Dedicated case manager assigned to you",
          "Secure document collection process",
          "Clear timeline and expectations established",
        ],
      },
      {
        number: 3,
        title: "Investigation",
        description:
          "Our team collects evidence, obtains records, consults with expert witnesses, and builds the strongest possible case on your behalf.",
        icon: Search,
        timeline: "2–8 weeks depending on complexity",
        bullets: [
          "Evidence gathering and accident reconstruction",
          "Medical record and expert review",
          "Witness interviews and documentation",
        ],
      },
      {
        number: 4,
        title: "Demand & Negotiation",
        description:
          "We present a comprehensive demand package to the responsible parties and negotiate aggressively for a settlement that reflects the full extent of your damages.",
        icon: FileText,
        timeline: "4–12 weeks",
        bullets: [
          "Detailed demand package prepared and submitted",
          "Aggressive negotiation with insurance companies",
          "Regular updates on all settlement discussions",
        ],
      },
      {
        number: 5,
        title: "Litigation",
        description:
          "If a fair settlement isn't offered, we don't back down. We file suit and prepare to take your case before a judge and jury to get the justice you deserve.",
        icon: Scale,
        timeline: "6–18 months if needed",
        bullets: [
          "Full trial preparation and strategy",
          "Depositions and discovery process",
          "Courtroom representation by seasoned litigators",
        ],
      },
      {
        number: 6,
        title: "Resolution",
        description:
          "Whether through a negotiated settlement or a jury verdict, we fight relentlessly until your case reaches the best possible outcome.",
        icon: HandshakeIcon,
        timeline: "Varies by case",
        bullets: [
          "Maximum compensation pursued on your behalf",
          "Settlement or verdict — we're prepared for both",
          "All terms reviewed and explained clearly to you",
        ],
      },
      {
        number: 7,
        title: "Case Closed",
        description:
          "Your case is resolved. We handle all final details — ensuring funds are disbursed, liens are resolved, and you have everything you need moving forward.",
        icon: CheckCircle,
        timeline: "2–4 weeks after resolution",
        bullets: [
          "Funds disbursed and liens resolved",
          "Final accounting and documentation provided",
          "Ongoing support if you need anything post-case",
        ],
      },
    ],
  },

  "personal-injury": {
    title: "7 Stages of Your Personal Injury Case",
    subtitle:
      "Our proven process ensures maximum compensation for your injuries while you focus on recovery.",
    stages: [
      {
        number: 1,
        title: "Free Case Review",
        description:
          "We review the details of your accident or injury to determine if you have a viable claim.",
        icon: ClipboardList,
      },
      {
        number: 2,
        title: "Medical Documentation",
        description:
          "We help coordinate your medical treatment documentation and connect you with specialists if needed.",
        icon: HeartPulse,
      },
      {
        number: 3,
        title: "Evidence & Investigation",
        description:
          "Accident reconstruction, witness interviews, police reports, and expert consultations build your case.",
        icon: Search,
      },
      {
        number: 4,
        title: "Insurance Demand",
        description:
          "We submit a comprehensive demand package to the insurance company with full documentation of your damages.",
        icon: FileText,
      },
      {
        number: 5,
        title: "Negotiation or Litigation",
        description:
          "We push for maximum compensation — if insurers won't pay fairly, we take them to court.",
        icon: Scale,
      },
      {
        number: 6,
        title: "Settlement or Verdict",
        description:
          "Your case resolves through a negotiated settlement or a jury verdict in your favor.",
        icon: HandshakeIcon,
      },
      {
        number: 7,
        title: "Recovery & Closure",
        description:
          "Funds are disbursed, medical liens resolved, and your case is officially closed.",
        icon: CheckCircle,
      },
    ],
  },

  "mass-tort": {
    title: "7 Stages of Your Mass Tort Case",
    subtitle:
      "Navigating complex mass tort litigation requires patience and expertise. Here's how we fight for you.",
    stages: [
      {
        number: 1,
        title: "Eligibility Screening",
        description:
          "We determine if your situation with a defective drug or product qualifies for the mass tort action.",
        icon: ShieldCheck,
      },
      {
        number: 2,
        title: "Case Filing",
        description:
          "Your individual claim is filed and connected to the broader litigation (MDL or class action).",
        icon: FileSignature,
      },
      {
        number: 3,
        title: "Discovery & Science",
        description:
          "Attorneys work with scientific experts, medical professionals, and researchers to establish causation.",
        icon: Microscope,
      },
      {
        number: 4,
        title: "Bellwether Trials",
        description:
          "Select cases go to trial to establish precedent and leverage for global settlement negotiations.",
        icon: Gavel,
      },
      {
        number: 5,
        title: "Settlement Negotiation",
        description:
          "Based on trial outcomes, manufacturers negotiate compensation for all qualifying claimants.",
        icon: Scale,
      },
      {
        number: 6,
        title: "Claims Processing",
        description:
          "Your individual damages are assessed and your share of the settlement is calculated.",
        icon: Calculator,
      },
      {
        number: 7,
        title: "Compensation & Closure",
        description:
          "Funds are distributed to you after legal fees and liens are resolved.",
        icon: DollarSign,
      },
    ],
  },

  "sexual-abuse": {
    title: "7 Stages of Your Sexual Abuse Case",
    subtitle:
      "We handle your case with the utmost sensitivity, compassion, and confidentiality at every step.",
    stages: [
      {
        number: 1,
        title: "Confidential Intake",
        description:
          "We provide a safe, private space to share your experience. Everything is 100% confidential.",
        icon: Lock,
      },
      {
        number: 2,
        title: "Trauma-Informed Onboarding",
        description:
          "Our team is trained in trauma-informed practices. We move at your pace and connect you with support resources.",
        icon: Heart,
      },
      {
        number: 3,
        title: "Investigation",
        description:
          "We investigate the abuser, the institution, and any systemic failures that allowed the abuse to occur.",
        icon: Search,
      },
      {
        number: 4,
        title: "Filing Your Claim",
        description:
          "Your civil claim is filed against the responsible parties — individuals and institutions alike.",
        icon: FileSignature,
      },
      {
        number: 5,
        title: "Pursuing Justice",
        description:
          "Through negotiation or litigation, we hold abusers and enablers accountable.",
        icon: Gavel,
      },
      {
        number: 6,
        title: "Resolution",
        description:
          "Your case resolves with compensation that reflects the harm done to you.",
        icon: HandshakeIcon,
      },
      {
        number: 7,
        title: "Healing Forward",
        description:
          "Case closed, but your healing continues. We provide referrals to counseling and support organizations.",
        icon: Sunrise,
      },
    ],
  },

  "human-trafficking": {
    title: "7 Stages of Your Human Trafficking Case",
    subtitle:
      "Your safety comes first. We build your case around your needs with survivor-centered advocacy.",
    stages: [
      {
        number: 1,
        title: "Safe & Confidential Contact",
        description:
          "Reach out to us in complete confidentiality. Your safety is our first priority.",
        icon: Lock,
      },
      {
        number: 2,
        title: "Survivor-Centered Onboarding",
        description:
          "We connect you with advocacy organizations and build your legal team around your needs.",
        icon: Compass,
      },
      {
        number: 3,
        title: "Investigation",
        description:
          "We trace the trafficking network, identify liable parties, and gather evidence of exploitation.",
        icon: Search,
      },
      {
        number: 4,
        title: "Civil Action Filed",
        description:
          "Your civil lawsuit is filed against traffickers, recruiters, and any businesses that profited from your exploitation.",
        icon: FileSignature,
      },
      {
        number: 5,
        title: "Aggressive Litigation",
        description:
          "We pursue every liable party relentlessly — traffickers, hotel chains, websites, and corporate enablers.",
        icon: Swords,
      },
      {
        number: 6,
        title: "Compensation & Accountability",
        description:
          "Through settlement or trial, we secure financial recovery and public accountability.",
        icon: Award,
      },
      {
        number: 7,
        title: "New Beginning",
        description:
          "Your case closes, and we ensure you have connections to long-term support services and resources.",
        icon: Sunrise,
      },
    ],
  },
};
