export interface Project {
  name: string;
  description: string;
  tags: string[];
  status: "Shipped" | "Live" | "Client Work" | "Internal Tool" | "Ongoing";
}

export const projects: Project[] = [
  {
    name: "VenariQ",
    description:
      "Multi-tenant AI outbound sales automation platform with lead discovery, cold email, reply handling, and approval workflows",
    tags: ["Next.js", "FastAPI", "Supabase", "Anthropic", "Gmail OAuth"],
    status: "Shipped",
  },
  {
    name: "Pharma-POS-AI",
    description:
      "Offline-first pharmaceutical POS for Ghanaian pharmacy chains with FEFO batch dispensing and AI manager assistant",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker"],
    status: "Shipped",
  },
  {
    name: "WhatsApp Food Ordering SaaS",
    description:
      'WhatsApp-native food ordering system for restaurants, with AI assistant "Ama" using three-provider LLM cascade',
    tags: ["Next.js", "FastAPI", "Meta WhatsApp API", "Supabase"],
    status: "Live",
  },
  {
    name: "Kweli.AI Accounting Agent",
    description:
      "AI-powered QuickBooks misclassification detection system for a Florida-based accounting firm",
    tags: ["n8n", "Claude 3.5 Sonnet", "Supabase", "Next.js"],
    status: "Client Work",
  },
  {
    name: "GlowSalon Telegram Bot",
    description:
      "Telegram-based appointment booking bot for a salon, with Google Calendar integration",
    tags: ["n8n", "Claude AI", "Google Calendar", "Docker"],
    status: "Live",
  },
  {
    name: "VenariQ Lead Gen",
    description:
      "n8n-based AI lead generation workflow — automated pipeline predecessor to VenariQ",
    tags: ["n8n", "Apify", "Claude", "Email Automation"],
    status: "Shipped",
  },
  {
    name: "Hermes Agent",
    description:
      "AI client communication and task management agent for ongoing operations",
    tags: ["n8n", "Claude", "WhatsApp API"],
    status: "Internal Tool",
  },
  {
    name: "VeloxaRecruit",
    description:
      "AI-powered recruitment automation system for streamlining hiring pipelines",
    tags: ["FastAPI", "Supabase", "LLM Integration"],
    status: "Shipped",
  },
  {
    name: "VeloxaHire",
    description:
      "Job matching platform connecting candidates to roles using AI-driven matching",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    status: "Shipped",
  },
  {
    name: "AI Bootcamp / Masterclass",
    description:
      'Hands-on AI training events for businesses: "Stop Using AI Like Google"',
    tags: ["Training", "Curriculum Design", "n8n", "Claude"],
    status: "Ongoing",
  },
];
