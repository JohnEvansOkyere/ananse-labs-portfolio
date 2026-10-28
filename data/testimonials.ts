export interface Testimonial {
  quote: string;
  name: string;
  /** Omitted where the person's title isn't confirmed. */
  role?: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "One thing I love about you is you get the job done.",
    name: "Nana Agyeman",
    company: "IT Support Ghana",
  },
  {
    quote: "So what problem can't you solve?",
    name: "Adeolu Deborah",
    role: "Co-founder",
    company: "Veloxa Technology Ltd",
  },
  {
    quote:
      "Evans made me understand AI and automation like it was never difficult.",
    name: "Stanley Ametepe",
    role: "Mentee",
    company: "AI & Automation Mentorship",
  },
  {
    quote: "VenariQ helped me get more clients than all my past years.",
    name: "Akua Doris",
    company: "B2B Cleaning Service",
  },
  {
    quote:
      "Through VeloxaHire, I got a job. God bless the team at Veloxa led by John.",
    name: "Erica Agyeiwaa",
    company: "VeloxaHire",
  },
];
