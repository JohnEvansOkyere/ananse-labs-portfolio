import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

/* The share image comes from app/opengraph-image.tsx. */
export const metadata: Metadata = {
  metadataBase: new URL("https://ananse-labs-portfolio.vercel.app"),
  title: {
    default: "John Evans Okyere — Software & AI Engineer, Accra",
    template: "%s | John Evans Okyere",
  },
  description:
    "Software & AI engineer in Accra, Ghana. I build custom software, AI agents and automations for real businesses, and mentor people one-on-one.",
  authors: [{ name: "John Evans Okyere" }],
  keywords: [
    "John Evans Okyere",
    "software engineer",
    "custom software",
    "AI engineer",
    "AI automation",
    "Ghana",
    "Accra",
    "machine learning",
    "AI agents",
    "n8n",
    "FastAPI",
    "Next.js",
    "LLM integration",
  ],
  openGraph: {
    title: "John Evans Okyere — Software & AI Engineer",
    description:
      "I build custom software and AI systems for real businesses. Based in Accra, Ghana.",
    url: "https://ananse-labs-portfolio.vercel.app",
    siteName: "John Evans Okyere",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Evans Okyere — Software & AI Engineer",
    description:
      "I build custom software and AI systems for real businesses. Based in Accra, Ghana.",
  },
  robots: {
    index: true,
    follow: true,
  },
  /* Paste the token from Google Search Console > Add property > HTML tag. */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
