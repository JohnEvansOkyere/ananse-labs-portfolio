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

export const metadata: Metadata = {
  metadataBase: new URL("https://ananse-labs-portfolio.vercel.app"),
  title: "Ananse AI Labs — AI Automation Agency | Accra, Ghana",
  description:
    "We build intelligent systems, automation workflows, and AI-powered products for businesses across Africa and beyond. Founded by John Evans Okyere.",
  keywords: [
    "AI automation",
    "AI agency",
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
    title: "Ananse AI Labs — AI Automation Agency",
    description:
      "Building intelligent systems from Accra to the world. AI automation, custom agents, and full-stack AI products.",
    url: "https://ananse-labs-portfolio.vercel.app",
    siteName: "Ananse AI Labs",
    type: "website",
    locale: "en_US",
    images: [{ url: "/ananselogo.jpg", width: 800, height: 800, alt: "Ananse AI Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananse AI Labs — AI Automation Agency",
    description: "Building intelligent systems from Accra to the world.",
    images: ["/ananselogo.jpg"],
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
