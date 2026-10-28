/**
 * Walkthrough pages rendered at /work/[slug] for projects without a long-form
 * case study (those live in data/case-studies.ts).
 *
 * A project in `data/projects.ts` opts in by setting its `slug` to a key that
 * exists here. Add `image` to any step to show a screenshot beside it — drop
 * the file in /public and use a root-relative path such as "/work/school-1.jpg".
 *
 * Confidentiality: clients are described by sector, not name. Say in `status`
 * what is and isn't built yet — never describe planned features as done.
 */

export interface WalkthroughStep {
  title: string;
  body: string;
  /** Optional screenshot, shown under the step. */
  image?: string;
}

export interface ProjectDetail {
  slug: string;
  /** Small label above the title, e.g. "Client work · E-commerce". */
  kicker: string;
  tagline: string;
  /** Each string renders as its own paragraph. */
  summary: string[];
  role: string;
  /** Honest "where it stands" note. Leave out once the project is finished. */
  status?: string;
  walkthrough: WalkthroughStep[];
  highlights: string[];
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "school-management",
    kicker: "Product · Education",
    tagline:
      "A whole school in one app — registers, report cards, fees, and an AI study buddy for the kids.",
    summary: [
      "Schools often juggle paper registers, spreadsheets and WhatsApp groups. This is one platform for nursery, KG, primary and JHS schools, where every school keeps its own private records.",
      "The idea is simple: record what happens, understand it, help the learners who need it, tell their parents, then check again. AI helps teachers and kids along the way — it never makes the big decisions.",
    ],
    role: "Product, architecture and full-stack build",
    status:
      "Still being built. It already runs with a full sample school — 184 learners, teachers, parents and a term of data — so you can see how everything fits together.",
    walkthrough: [
      {
        title: "Sign up and set up the school",
        body: "Create an account and you become the headteacher of a brand-new school. Add classes, terms and staff, and give each person the right role — teacher, accounts, front desk.",
      },
      {
        title: "Admit and enrol learners",
        body: "Review admissions, enrol learners into classes and link verified parents or guardians. Transfers and withdrawals keep a history, so nothing quietly disappears.",
      },
      {
        title: "Teachers take the register",
        body: "A teacher opens the app and lands on today's register. Tap, tap, done. Missing registers get flagged so the headteacher can follow up.",
      },
      {
        title: "Scores become report cards",
        body: "Teachers enter scores, the headteacher approves, and report cards are published to parents. No more writing hundreds of reports by hand.",
      },
      {
        title: "Fees without the headache",
        body: "Set fees, take part-payments, issue receipts and see who owes what. A cash book keeps track of the rest of the school's money.",
      },
      {
        title: "Parents get a window in",
        body: "Guardians sign in to see their children, notices, published results and fees — plus a Learn at home space where kids can practise with Ella, an AI study helper.",
      },
    ],
    highlights: [
      "Many schools on one platform, each with its own private data",
      "Roles for headteacher, teacher, accounts, front desk and parent",
      "Early-years observations for the little ones",
      "Fees with part-payments, receipts and a cash book",
      "Notices to parents, with delivery status",
      "AI that drafts lesson and progress notes — a teacher always decides",
      "Ella, the study helper, with a monthly limit per child",
      "Designed for phones first",
    ],
  },
  {
    slug: "venariq",
    kicker: "Product · Sales automation",
    tagline:
      "An AI sales team that finds leads, writes the emails and books the meetings — with you approving every step.",
    summary: [
      "VenariQ finds businesses worth contacting, scores them with AI, drafts personal cold emails, handles the replies and books appointments. The golden rule: nothing gets sent until the client approves it.",
      "It's multi-tenant, so every client gets their own workspace with their own Gmail and Google Calendar connected.",
    ],
    role: "Product, backend, frontend and AI",
    walkthrough: [
      {
        title: "Find the leads",
        body: "Pick an industry and a place, and VenariQ collects matching businesses from Google Maps.",
      },
      {
        title: "AI qualifies them",
        body: "Claude scores each lead from 0 to 100 and automatically drops the weak ones (anything under 50), so you only see leads worth your time.",
      },
      {
        title: "Draft the emails, you approve",
        body: "A personalised cold email is drafted for each good lead. The client reads it, approves it, and only then does it go out.",
      },
      {
        title: "Replies are read for you",
        body: "Gmail is checked every couple of hours, and Claude works out whether a reply is a question, an objection, real interest or a booking.",
      },
      {
        title: "Smart replies and follow-ups",
        body: "Contextual replies are drafted for you, and follow-ups go out on their own when a lead goes quiet.",
      },
      {
        title: "Meeting booked",
        body: "Appointments land on Google Calendar with a Google Meet link, and the client is notified at every step along the way.",
      },
    ],
    highlights: [
      "Human approval before anything is sent",
      "Each client connects their own Gmail and Google Calendar",
      "Lead scoring and reply intent powered by Claude",
      "Scheduled follow-ups for leads that go quiet",
      "In-app notifications at every step",
      "Row-level security keeps each client's data separate",
    ],
  },
  {
    slug: "whatsapp-food-ordering",
    kicker: "Product · Restaurants",
    tagline:
      "Customers order from a menu link on their phone. The restaurant gets it on WhatsApp. And Ama says hello.",
    summary: [
      "Ghanaian restaurants already live on WhatsApp, so I built ordering around it: a fast mobile menu, a WhatsApp conversation that feels like texting a friend, and a dashboard the kitchen can actually use.",
      "It's multi-tenant, so one platform can serve many restaurants — and each restaurant's branches — without mixing anything up.",
    ],
    role: "Product, backend, frontend and WhatsApp integration",
    walkthrough: [
      {
        title: "Open the menu",
        body: "A restaurant shares its menu link. Customers browse a mobile-first menu with photos and prices, and build their cart.",
      },
      {
        title: "Say hi to Ama",
        body: "On WhatsApp, Ama — the restaurant's AI assistant — greets customers, answers menu questions and helps them order. She runs on three AI providers, so if one is down another steps in.",
      },
      {
        title: "Sign in with a code",
        body: "No passwords to forget. Customers enter their phone number, get a 6-digit code by SMS, and they're in.",
      },
      {
        title: "The kitchen gets the order",
        body: "Staff see new orders on their dashboard, accept them and move them through preparing and dispatch. Each branch's kitchen only sees its own orders.",
      },
      {
        title: "The customer stays in the loop",
        body: "A receipt and tracking link go out on WhatsApp and by SMS, so the message still lands if the WhatsApp one gets missed.",
      },
      {
        title: "Owners keep the overview",
        body: "Owners and managers run the menu, the branches and their staff from one dashboard.",
      },
    ],
    highlights: [
      "Many restaurants and branches on one platform, strictly separated",
      "Roles for owner, manager, kitchen, dispatch and support",
      "Phone number + texted code sign-in",
      "Receipts and tracking over WhatsApp and SMS",
      "AI assistant that falls back across providers automatically",
      "A live order-tracking page for customers",
    ],
  },
  {
    slug: "ecommerce-store",
    kicker: "Client work · E-commerce",
    tagline:
      "A full online store — browse, request a quote, pay with mobile money and track your order.",
    summary: [
      "A Ghana-based business wanted to sell online and also take quote requests for bigger jobs. I built the storefront, the backend and the admin dashboard they run it all from.",
      "It's designed phone-first, because that's where most of their customers will shop.",
    ],
    role: "Storefront, backend, admin dashboard and payments",
    walkthrough: [
      {
        title: "Browse the catalogue",
        body: "Categories and product pages with photos and details, laid out in a tight two-column grid on phones so nobody scrolls forever.",
      },
      {
        title: "Add to cart — or ask for a quote",
        body: "Small things go in the cart drawer. Bigger jobs get a quote request form that lands straight in the team's admin.",
      },
      {
        title: "Check out with mobile money",
        body: "Enter delivery details, pay on a secure hosted mobile-money page, and you're sent back with your order confirmed.",
      },
      {
        title: "The payment double-checks itself",
        body: "Payment confirmations are verified with the provider before an order is marked as paid — signed webhooks, re-verified, never trusting a lone message.",
      },
      {
        title: "Track the order",
        body: "Customers follow their order from a tracking page, or log in to see their account and past orders.",
      },
      {
        title: "The team runs it from the admin",
        body: "A dashboard for products and photos, orders and their status, incoming quotes, site content and sales analytics.",
      },
    ],
    highlights: [
      "Phone-first storefront",
      "Mobile-money checkout with verified payments",
      "Quote requests alongside normal orders",
      "Customer accounts with password reset",
      "Order tracking page",
      "Admin for products, orders, quotes, content and analytics",
      "Warranty & returns and terms pages",
    ],
  },
  {
    slug: "church-management",
    kicker: "Client work · Church",
    tagline:
      "Members, attendance, giving and messages — everything a church office juggles, in one place.",
    summary: [
      "Church offices often keep member lists, attendance sheets, giving records and SMS lists in separate places. This puts them in one system.",
      "Department leaders see only their own department; the church admin sees the whole picture.",
    ],
    role: "Design, backend and frontend build",
    walkthrough: [
      {
        title: "Register members and families",
        body: "Add members, link families and note who invited them. Families are optional — individuals are always welcome.",
      },
      {
        title: "Open a service, take attendance",
        body: "Create the session with a name, date and time, then mark everyone in bulk. The system works out attendance percentages and punctuality.",
      },
      {
        title: "Spot who's drifting",
        body: "Members who haven't been around in a month, or whose attendance drops below half, get flagged so someone can follow up with care.",
      },
      {
        title: "Record giving by fund",
        body: "Tithe, offering, harvest, missions, welfare and more are recorded properly — with tithes tied to a member and service batches that can be reconciled and closed.",
      },
      {
        title: "Message the right people",
        body: "Send SMS or email to everyone, active members, a department or hand-picked people. Scheduled reminders run on their own, on Accra time.",
      },
      {
        title: "See the big picture",
        body: "Dashboards and reports show attendance and giving at a glance, and member lists can be exported.",
      },
    ],
    highlights: [
      "Role-based logins for admins, leaders and staff",
      "Departments — a member can belong to several, leaders manage their own",
      "Events with capacity limits and recurring schedules",
      "SMS through Ghana providers, plus email, with a log of what was sent",
      "Reminders that run on a schedule — no browser needs to stay open",
      "Giving statements and exports",
    ],
  },
  {
    slug: "freight-operations",
    kicker: "Client work · Logistics",
    tagline: "One searchable job file instead of emails, spreadsheets and paper.",
    summary: [
      "A Ghana freight forwarder moves cargo by air and sea, clears it through customs, trucks it, stores it and bills for it — and a lot of that lives in inboxes and paper files. This platform puts a job, from first quote to final invoice, in one place.",
      "Customers get a portal for their own company's records. Staff see their department's work. The super admin sees everything and approves quotes before they go out.",
    ],
    role: "Requirements, architecture and full-stack build",
    status:
      "In build. Working today: quote requests, customer and contact records, quote drafts with revisions, staff roles with an audit trail, and a customer portal that only shows a company its own records. Jobs, shipments, invoices and documents are next.",
    walkthrough: [
      {
        title: "A customer asks for a quote",
        body: "From the client portal or after a phone call, a quote request lands in the inbox and gets linked to the customer's company.",
      },
      {
        title: "A rep drafts it, the boss approves",
        body: "The right department rep drafts the quote and can revise it as many times as needed. Nothing is issued until a super admin signs off.",
      },
      {
        title: "Accepted quote, new job",
        body: "When the customer says yes, the quote becomes a job file with its own readable file number and a status timeline.",
      },
      {
        title: "Clearance and shipping, step by step",
        body: "Staff tick through the sea or air import and export milestones, assign tasks, keep the ETA fresh and record exceptions.",
      },
      {
        title: "Delivery with proof",
        body: "Waybills with driver, vehicle and cargo details, plus signed proof of delivery.",
      },
      {
        title: "Bill it, close it",
        body: "Invoices and received payments are recorded — the app never moves money itself — and a job only closes once the required evidence is in.",
      },
    ],
    highlights: [
      "Staff roles for each department — air and sea, import and export",
      "Customers only ever see their own company's records, even if they guess a record ID (tested)",
      "Quote revisions with full history",
      "An audit trail of who changed what",
      "Shaped around the real clearance workflow, from sessions with the client",
      "Email and SMS updates first, WhatsApp later",
    ],
  },
  {
    slug: "laundry-booking",
    kicker: "Client work · Small business",
    tagline:
      "A laundry shop's front door — pick a service, snap photos, and the booking arrives on WhatsApp.",
    summary: [
      "A laundry and dry-cleaning business needed customers to book without phone tag. There's no backend, no database and no monthly bill: the form builds a neat summary and hands it to WhatsApp, which is where the shop already talks to its customers.",
      "Everything the owner might want to change lives in one config file.",
    ],
    role: "Design and build",
    walkthrough: [
      {
        title: "Land on a page that gets to the point",
        body: "A photo hero, a clear call to action, and a services-and-pricing grid.",
      },
      {
        title: "See how it works",
        body: "Four simple steps, plus three ways to get laundry to the shop without visiting: the shop's own pickup, a dispatch rider (Bolt Send or Yango Delivery), or a ride.",
      },
      {
        title: "Fill in the booking",
        body: "Pick a service, add items and quantities, upload photos of the clothes, and enter contact and pickup details.",
      },
      {
        title: "Tap send — WhatsApp opens",
        body: "WhatsApp opens with a tidy, pre-written message to the shop. The customer just taps send.",
      },
      {
        title: "The shop confirms",
        body: "The shop replies with the price and pickup time. Done.",
      },
      {
        title: "Find the shop",
        body: "A Google map, one-tap directions, opening hours and delivery zones are all on the page too.",
      },
    ],
    highlights: [
      "No backend and no monthly cost",
      "One config file to edit — prices, hours, phone, address",
      "Photo upload on the booking form",
      "Floating WhatsApp button on every screen",
      "Phone-first design",
      "Can be hosted free",
    ],
  },
];

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((detail) => detail.slug === slug);
}
