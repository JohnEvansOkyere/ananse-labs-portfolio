const title = "Founder and CEO of Veloxa Technology Ltd and Ananse AI Community";

export const siteConfig = {
  name: "John Evans Okyere",
  role: "Software & AI engineer",
  title,
  email: "johnevansokyere@gmail.com",
  github: "https://github.com/JohnEvansOkyere",
  linkedin: "https://www.linkedin.com/in/john-evans-okyere/",
  twitter: "https://x.com/Ananselab",
  calendly: "https://calendly.com/johnevansokyere/30min",
  whatsapp: "https://wa.me/233544954643",
  location: "Accra, Ghana",
  status: "Open to new projects",
  headline: "I build custom software and AI systems for real businesses.",
  intro: `I'm John Evans Okyere, a software & AI engineer in Accra, Ghana. ${title}.`,
};

/* Root-relative so they also work from /work/[slug] case study pages. */
export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Play", href: "/#play" },
  { label: "Mentorship", href: "/#mentorship" },
  { label: "About", href: "/#about" },
];

/* Shown in the Contact section — add a line here to add a link. */
export const contactLinks = [
  { label: "WhatsApp", href: siteConfig.whatsapp },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "GitHub", href: siteConfig.github },
  { label: "X", href: siteConfig.twitter },
];

export const facts = [
  { value: "10+", label: "systems shipped" },
  { value: "100+", label: "people trained" },
  { value: "5+", label: "countries with clients" },
];

export const whatIDo = [
  {
    title: "Custom software",
    description:
      "Web platforms and internal tools built around how your business actually works — e-commerce, POS, school, church and operations systems.",
  },
  {
    title: "Automation & AI agents",
    description:
      "n8n workflows, WhatsApp and Telegram bots, and assistants that take repetitive work off your team.",
  },
  {
    title: "AI integration & data",
    description:
      "Claude, GPT or Gemini built into your product, plus the data pipelines and deployment behind production ML.",
  },
  {
    title: "Training & mentorship",
    description:
      "Hands-on AI sessions for teams, and one-on-one coaching for individuals.",
  },
];

export const stack = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "FastAPI",
  "NestJS",
  "Supabase",
  "PostgreSQL",
  "Docker",
  "n8n",
  "Claude",
  "GPT",
  "Gemini",
];

export const quote = {
  text: "We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.",
  author: "John F. Kennedy",
};

/* The game lives in public/chale-city — a static copy of the standalone game. */
export const game = {
  title: "Chale City",
  description:
    "A free driving and story game set in Accra. You're Kwesi, home for his father's funeral — drive taxis, trotros and okadas to raise the money and keep Papa's land.",
  hint: "WASD or arrows to drive · E to get in and out · C to change view",
  hintMobile: "Tip: turn your phone sideways for the best view.",
  href: "/chale-city/index.html",
  ctaText: "Play now",
};

export const mentorship = {
  headline: "1-on-1 AI & automation mentorship.",
  intro:
    "Weekly sessions on the system you're actually building — not a course. You bring the work, I tell you what would break in production.",
  seats: 5,
  seatsLabel: "mentees right now",
  seatsNote: "Capped at five — availability depends on where current mentees are.",
  format: "Weekly · 1-on-1 · Rolling admission",
  who: [
    "Engineers moving into AI",
    "Freelancers adding AI to their offer",
    "Founders automating their own business",
  ],
  ctaText: "Apply for mentorship",
};
