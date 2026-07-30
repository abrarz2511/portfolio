import type { Metadata } from "next";
import { Barlow, Roboto, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { getSiteUrl, siteConfig } from "@/content/site";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monoFont = Roboto({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const metadataBase = siteUrl ?? new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.positioning,
  applicationName: `${siteConfig.name} Portfolio`,
  keywords: [
    "software engineer",
    "AI engineer",
    "FastAPI",
    "robotics",
    "machine learning",
    "full-stack engineer",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.positioning,
    siteName: `${siteConfig.name} Portfolio`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.positioning,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.education.school,
    },
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  };

  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SmoothScrollProvider>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </SmoothScrollProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
