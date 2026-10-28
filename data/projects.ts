export interface Project {
  name: string;
  description: string;
  tags: string[];
  status: "Shipped" | "Live" | "Client Work" | "Internal Tool" | "Ongoing";
  url?: string;
  /** Set when a long-form case study exists at /work/[slug]. */
  slug?: string;
  /** Shown on the homepage; every project is listed on /work. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Fabrication Operations Platform",
    description:
      "One platform for a glass & aluminium fabricator — configurator, quoting, cutting optimization and factory pipeline.",
    tags: ["React", "FastAPI", "PostgreSQL", "react-konva", "WhatsApp API"],
    status: "Client Work",
    slug: "fabrication-ops-platform",
    featured: true,
  },
  {
    name: "VenariQ",
    description:
      "Multi-tenant AI outbound sales platform — lead discovery, cold email, reply handling and approvals.",
    tags: ["Next.js", "FastAPI", "Supabase", "Anthropic", "Gmail OAuth"],
    status: "Shipped",
    url: "https://www.venariq.com/",
    featured: true,
  },
  {
    name: "School Management SaaS",
    description:
      "AI-native platform for Ghanaian nursery to JHS schools — admissions, attendance, scores, report cards, fees and a guardian portal.",
    tags: ["React", "NestJS", "PostgreSQL", "Supabase"],
    status: "Ongoing",
  },
  {
    name: "Pharma-POS-AI",
    description:
      "Offline-first POS for Ghanaian pharmacy chains, with FEFO batch dispensing and an AI manager assistant.",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker"],
    status: "Shipped",
  },
  {
    name: "WhatsApp Food Ordering SaaS",
    description:
      'Restaurant ordering on WhatsApp, with an AI assistant ("Ama") on a three-provider LLM cascade.',
    tags: ["Next.js", "FastAPI", "Meta WhatsApp API", "Supabase"],
    status: "Live",
  },
  {
    name: "E-commerce Platform",
    description:
      "Online store with an admin dashboard for orders and inventory, mobile-money checkout and a customer chatbot.",
    tags: ["React", "FastAPI", "Supabase", "Tailwind CSS", "Mobile Money"],
    status: "Client Work",
  },
  {
    name: "Freight Operations Platform",
    description:
      "Quote-to-job platform for a Ghana freight forwarder — quote requests, role-based staff workflows and a customer portal.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Supabase"],
    status: "Ongoing",
  },
  {
    name: "Laundry Booking Website",
    description:
      "Website for a laundry & dry-cleaning business — pricing, pickup options, map and a photo booking form that opens WhatsApp.",
    tags: ["React", "TypeScript", "Tailwind CSS", "WhatsApp"],
    status: "Client Work",
  },
  {
    name: "Church Management System",
    description:
      "Members, attendance, donations, groups, events, communication and reports for a church.",
    tags: ["React", "FastAPI", "PostgreSQL", "JWT"],
    status: "Client Work",
  },
  {
    name: "Kweli.AI Accounting Agent",
    description:
      "Flags QuickBooks misclassifications for a Florida-based accounting firm.",
    tags: ["n8n", "Claude 3.5 Sonnet", "Supabase", "Next.js"],
    status: "Client Work",
  },
  {
    name: "VenariQ Lead Gen",
    description: "n8n lead-generation pipeline — the predecessor to VenariQ.",
    tags: ["n8n", "Apify", "Claude", "Email Automation"],
    status: "Shipped",
  },
  {
    name: "Hermes Agent",
    description: "AI agent for client communication and task management.",
    tags: ["n8n", "Claude", "WhatsApp API"],
    status: "Internal Tool",
  },
  {
    name: "VeloxaRecruit",
    description: "AI recruitment automation for hiring pipelines.",
    tags: ["FastAPI", "Supabase", "LLM Integration"],
    status: "Shipped",
    url: "https://veloxarecruit.com/",
  },
  {
    name: "VeloxaHire",
    description: "AI-driven job matching between candidates and roles.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    status: "Shipped",
  },
  {
    name: "AI Bootcamp / Masterclass",
    description:
      'Hands-on AI training for business teams: "Stop Using AI Like Google".',
    tags: ["Training", "Curriculum Design", "n8n", "Claude"],
    status: "Ongoing",
  },
];
