/**
 * Long-form client case studies rendered at /work/[slug].
 *
 * A project in `data/projects.ts` opts into a case study by setting its
 * `slug` to a key that exists here. Everything else — the card link, the
 * sitemap entry, the static route — follows from that.
 *
 * Confidentiality: clients under an active engagement are described by
 * sector rather than name. Fill `client` in only with written permission;
 * `clientDescriptor` is what the page shows until then.
 */

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyChapter {
  /** Numbered marker shown beside the chapter, e.g. "01". */
  number: string;
  kicker: string;
  title: string;
  /** Each string renders as its own paragraph. */
  body: string[];
  /** Optional list of findings/decisions rendered as a bordered list. */
  points?: { label: string; detail: string }[];
  /** Optional pull-quote, set on a tinted panel below the body. */
  quote?: { text: string; attribution: string };
}

export interface CaseStudy {
  slug: string;
  /** Public title of the engagement. */
  title: string;
  /** One-line positioning under the title. */
  subtitle: string;
  /** Real client name — only set once the client has approved being named. */
  client?: string;
  /** Shown wherever `client` is absent. */
  clientDescriptor: string;
  sector: string;
  location: string;
  /** e.g. "Discovery + build" */
  engagement: string;
  duration: string;
  role: string;
  year: string;
  status: string;
  /** Accent colour, matched to the project card on the homepage. */
  accent: string;
  /** Hero image (must be an allowed remote host or a local /public path). */
  image: string;
  /** Search-engine description. */
  metaDescription: string;
  /** The one-sentence thesis, set large at the top of the page. */
  thesis: string;
  stats: CaseStudyStat[];
  chapters: CaseStudyChapter[];
  /** The "one data spine" style flow, rendered as connected nodes. */
  systemFlow?: { source: string; outputs: { title: string; detail: string }[] };
  stack: { group: string; items: string[] }[];
  /** Closing takeaway shown above the CTA. */
  takeaway: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fabrication-ops-platform",
    title: "One month on the factory floor before a line of code",
    subtitle:
      "Replacing four disconnected tools with a single operations platform for a glass & aluminium fabricator",
    clientDescriptor: "Glass & aluminium fabrication and installation company",
    sector: "Manufacturing · Fenestration",
    location: "Accra, Ghana",
    engagement: "Workflow discovery + full platform build",
    duration: "1 month discovery · ongoing build",
    role: "Technical lead — discovery, architecture, full-stack build",
    year: "2026",
    status: "In production use",
    accent: "#5DE2C5",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&auto=format&fit=crop&q=80",
    metaDescription:
      "How a month of on-site workflow discovery with a Ghanaian glass & aluminium fabricator produced a single operations platform — configurator, extraction, quoting, cutting optimization and a gated factory pipeline.",
    thesis:
      "The client was one signature away from buying a foreign off-the-shelf ERP. We asked for a month inside their business first — and what we learned there is the reason the system fits.",
    stats: [
      { value: "1", label: "Month embedded before building" },
      { value: "4", label: "Disconnected tools replaced" },
      { value: "7", label: "Roles modelled end to end" },
      { value: "0", label: "Steps that re-key data by hand" },
    ],
    chapters: [
      {
        number: "01",
        kicker: "The situation",
        title: "A precise business running on imprecise tools.",
        body: [
          "The company fabricates and installs windows, doors, frameless glass, curtain walls, balustrades and partitions. The engineering is exact — a sash cut two millimetres wrong is scrap. The systems around that engineering were not.",
          "Work arrived by phone, WhatsApp and walk-in. Measurements were taken by hand on site. Quotations were assembled in spreadsheets. Drawings lived in AutoCAD, frameless jobs went through a separate desktop package, and cutting was planned in a standalone optimizer that knew nothing about either. Every handoff between those four tools was a human retyping numbers.",
          "They had already found an off-the-shelf cloud ERP built for window fabricators and were close to buying it. Our position was not that we could out-feature a mature product on day one. It was that a bought system would require them to change how they work, and we could do the reverse — but only if we actually understood how they work.",
        ],
        points: [
          {
            label: "Intake",
            detail: "Phone, WhatsApp and walk-in, with nothing recording the lead.",
          },
          {
            label: "Measurement",
            detail:
              "Hand-recorded on site, re-entered in the office, sometimes twice.",
          },
          {
            label: "Quoting",
            detail: "Spreadsheets and manual calculation, per estimator.",
          },
          {
            label: "Drawing",
            detail: "AutoCAD plus a separate package for frameless work.",
          },
          {
            label: "Cutting",
            detail:
              "A desktop optimizer, fed by hand, disconnected from the quote it priced.",
          },
          {
            label: "Tracking",
            detail: "Verbal and printed instructions. No live view of a job.",
          },
        ],
      },
      {
        number: "02",
        kicker: "Discovery",
        title: "A month inside the business, not a questionnaire by email.",
        body: [
          "Before proposing anything, I spent a month with them — on site, in the office, and on the factory floor. Not a kickoff workshop; a month of watching the work happen.",
          "The governing rule of that month was ask for documents, not descriptions. A photo of a supplier invoice, one paper cutting list, or a single completed job file answers ten questions at once and answers them truthfully. Descriptions give you the process people believe they follow. Documents give you the one they actually follow.",
          "We walked out with a supplier price list per profile system, glass and hardware invoices, a completed frame job file, a completed frameless job pack, real recent quotations, and the staff list with roles. Those documents became the system's defaults instead of my assumptions.",
          "Alongside them we ran targeted written discovery on the areas that observation alone could not settle — where exactly AutoCAD enters the workflow, whether a quotation can be prepared before a drawing is complete, which products can be quoted from measurements alone, and who approves a drawing revision before it reaches production.",
        ],
        quote: {
          text:
            "Ask for documents, not descriptions. A photo of a supplier invoice or one completed job file answers ten questions at once.",
          attribution: "The rule we ran discovery on",
        },
      },
      {
        number: "03",
        kicker: "What we learned",
        title: "The findings that a feature list would never have surfaced.",
        body: [
          "Five things came out of that month that changed the architecture. None of them would have appeared in a requirements document, and none of them are served by a generic windows-and-doors ERP.",
        ],
        points: [
          {
            label: "The workflow is one; the automation is not",
            detail:
              "Frame, frameless and balustrade jobs all follow the same business workflow — measurement, extraction, quotation, payment authorization, drawing, approval, factory pack. What differs is only how much of the extraction and pricing the system can generate. So the pipeline is shared, and every product family can run generated, manual or hybrid extraction.",
          },
          {
            label: "Extraction is its own step",
            detail:
              "Before any quote exists, the technical team reads the measurements and writes down every glass, hardware and accessory item with quantities. It happens before quotation and is not the same as the detailed drawing prepared afterwards. Most systems collapse these; collapsing them breaks the business.",
          },
          {
            label: "A paid-stamped quote is the authorization",
            detail:
              "Technical drawing work does not start when a quote is accepted. It starts when a paid-stamped copy reaches the technical person. That is a real gate in the business, so it is a real gate in the software.",
          },
          {
            label: "The factory cannot work from the client drawing",
            detail:
              "A hinged door reads to the client as one opening with two sides. The factory needs each side separately, with its own width, height, hardware preparation and fabrication detail. Two audiences, two drawing outputs, generated from one design.",
          },
          {
            label: "Twenty-two windows, twenty-two measurements",
            detail:
              "A single job routinely carries twenty-plus openings, each measured individually with no formula between them. They need to keep adding openings inside the one project — not spawn a project per window — and get one combined quotation and material list at the end.",
          },
        ],
      },
      {
        number: "04",
        kicker: "The build",
        title: "One data spine, and nothing typed twice.",
        body: [
          "The architecture follows directly from the discovery. The design on the configurator canvas is the single source of truth, and everything else derives from it. That one sentence is the entire argument against their previous toolchain, where the same dimensions were re-keyed at four separate stations.",
          "A project is a workspace holding many items — each opening with its own dimensions, design, glass and opening type, added in place. From the shared design model the platform extracts the cut list, prices it in GHS, produces the bill of materials for procurement, and runs kerf-aware 1D nesting against real stock bar lengths to generate the bar-by-bar cutting plan and waste percentage.",
          "On top of that sits the operational pipeline: gated job lifecycle, departmental tasks, a pre-production QC gate with signed checks, procurement against the approved extraction, factory release, and WhatsApp notifications to the client in the channel they already use.",
        ],
      },
      {
        number: "05",
        kicker: "Demo and iteration",
        title: "The feedback that mattered came after the first demo.",
        body: [
          "We demoed the working platform to the team who would use it daily. Their framing was unambiguous: the design configurator is the heart of the software, and it still needed work. That is the most useful sentence a client can say, and we treated it as primary product direction rather than a list of complaints.",
          "Every item of that feedback was logged verbatim, mapped to an implementation, and shipped the following day where it did not depend on business data we were still waiting for — with the remaining dependencies recorded openly rather than guessed at.",
          "The largest change: they rejected duplicating a project per window. So the configurator became a project workspace — an item rail alongside the canvas, add-in-place, one combined client quotation and one project bill of quantities. The library also became scoped to the chosen product system, so choosing a sliding window stops showing casement options that can never apply.",
        ],
        quote: {
          text:
            "If the project is a sliding window, everything in the configurator should be of benefit to a sliding window.",
          attribution: "Client feedback, first demo",
        },
      },
      {
        number: "06",
        kicker: "Where it stands",
        title: "Built so the wrong revision cannot reach the saw.",
        body: [
          "In a fabrication business, the expensive failure is not downtime — it is producing yesterday's approved drawing. Most of the hardening work since the demo has gone into making that structurally impossible.",
          "Only the latest extraction revision can be approved, and approving a new one marks its predecessor superseded and invalidates the drawing and release paths that depended on it. Quotation acceptance, drawing handoff, approval and factory release must all reference one aligned approved extraction. Drawing files carry SHA-256 integrity checksums, and approved or superseded revisions reject further uploads.",
          "Every factory release freezes its own release number, extraction revision, quotation number, drawing revision and released-file manifest. Superseded releases are not deleted — they stay visible, marked Do Not Produce, so the floor can see what changed rather than wondering.",
        ],
      },
    ],
    systemFlow: {
      source: "Design on canvas — the single source of truth",
      outputs: [
        {
          title: "Extraction & BOM",
          detail:
            "Every glass, hardware and accessory item with quantities, generated, manual or hybrid per product family.",
        },
        {
          title: "Quotation",
          detail:
            "Priced in GHS from the approved extraction, sent to the client and gated on payment.",
        },
        {
          title: "Cutting optimization",
          detail:
            "Kerf-aware 1D nesting per profile group against real stock bar lengths — bar-by-bar plan and waste %.",
        },
        {
          title: "Factory pack",
          detail:
            "Client overview drawing plus per-side factory breakdowns, cutting information and material list.",
        },
      ],
    },
    stack: [
      { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "PWA"] },
      { group: "Canvas", items: ["react-konva", "Parametric design model"] },
      { group: "Backend", items: ["FastAPI", "Python", "JWT + role middleware"] },
      { group: "Data", items: ["PostgreSQL", "Row-Level Security"] },
      { group: "Comms", items: ["WhatsApp notifications"] },
      { group: "Delivery", items: ["Vercel", "Cloud Postgres"] },
    ],
    takeaway:
      "A month of discovery is not a delay before the build. It is the part of the build that decides whether the software fits the business or the business has to bend to the software.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
