export interface Project {
  name: string;
  description: string;
  tags: string[];
  status:
    | "Shipped"
    | "Live"
    | "Client Work"
    | "Internal Tool"
    | "Ongoing"
    | "In Build";
  /** Live site. Shown as a button on the project's page. */
  url?: string;
  /** Page at /work/[slug] — a case study (data/case-studies.ts) or a walkthrough (data/project-details.ts). */
  slug?: string;
  /** Shown on the homepage; every project is listed on /work. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "VeloxaRecruit",
    description:
      "Post a job, let AI screen the CVs and run first interviews, then hire from a ranked shortlist.",
    tags: ["Next.js", "FastAPI", "Supabase", "AI screening"],
    status: "Shipped",
    url: "https://veloxarecruit.com",
    slug: "veloxarecruit",
    featured: true,
  },
  {
    name: "VeloxaHire",
    description:
      "A job board that knows you — it finds jobs, recommends the good ones and drafts your CV for each.",
    tags: ["Next.js", "FastAPI", "Supabase", "AI matching"],
    status: "Shipped",
    url: "https://veloxahire.org",
    slug: "veloxahire",
    featured: true,
  },
  {
    name: "VenariQ",
    description:
      "An AI sales team that finds leads, writes the emails and books the meetings — you approve every step.",
    tags: ["Next.js", "FastAPI", "Supabase", "Claude", "Gmail OAuth"],
    status: "Shipped",
    url: "https://www.venariq.com/",
    slug: "venariq",
    featured: true,
  },
  {
    name: "VeloxaHR",
    description:
      "People records, leave, onboarding, performance and payroll — so you always know who needs to act next.",
    tags: ["Next.js", "FastAPI", "Supabase", "PostgreSQL"],
    status: "In Build",
    slug: "veloxahr",
  },
  {
    name: "Fabrication Operations Platform",
    description:
      "One platform for a glass & aluminium fabricator — configurator, quoting, cutting optimization and factory pipeline.",
    tags: ["React", "FastAPI", "PostgreSQL", "react-konva", "WhatsApp API"],
    status: "Client Work",
    slug: "fabrication-ops-platform",
  },
  {
    name: "School Management SaaS",
    description:
      "A whole school in one app — registers, report cards, fees, and an AI study buddy for the kids.",
    tags: ["React", "NestJS", "PostgreSQL", "Supabase", "Claude"],
    status: "In Build",
    slug: "school-management",
  },
  {
    name: "WhatsApp Food Ordering",
    description:
      "Order from a menu link, chat with Ama on WhatsApp, and the kitchen gets it. Built for many restaurants at once.",
    tags: ["Next.js", "FastAPI", "Meta WhatsApp API", "Supabase"],
    status: "Live",
    slug: "whatsapp-food-ordering",
  },
  {
    name: "E-commerce Platform",
    description:
      "A full online store — browse, request a quote, pay with mobile money and track your order.",
    tags: ["React", "FastAPI", "Supabase", "Tailwind CSS", "Mobile Money"],
    status: "Client Work",
    slug: "ecommerce-store",
  },
  {
    name: "Church Management System",
    description:
      "Members, attendance, giving and messages — everything a church office juggles, in one place.",
    tags: ["React", "FastAPI", "PostgreSQL", "JWT"],
    status: "Client Work",
    slug: "church-management",
  },
  {
    name: "Freight Operations Platform",
    description:
      "One searchable job file for a Ghana freight forwarder, instead of emails, spreadsheets and paper.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Supabase"],
    status: "In Build",
    slug: "freight-operations",
  },
  {
    name: "Laundry Booking Website",
    description:
      "A laundry shop's front door — pick a service, snap photos, and the booking arrives on WhatsApp.",
    tags: ["React", "TypeScript", "Tailwind CSS", "WhatsApp"],
    status: "Client Work",
    slug: "laundry-booking",
  },
];

/* Smaller or older work — shown as one quiet line on /work, no page of its own. */
export const alsoBuilt: { name: string; url?: string }[] = [
  { name: "Pharma-POS-AI" },
  { name: "Kweli.AI accounting agent" },
  { name: "Hermes agent" },
  { name: "AI bootcamps" },
];
