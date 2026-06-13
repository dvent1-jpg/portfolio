import "./globals.css";
import { Inter } from "next/font/google";
import SiteChrome from "../src/components/SiteChrome";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://www.dennisventrello.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dennis Ventrello — Product Design Director",
    template: "%s — Dennis Ventrello",
  },
  description:
    "Product Design Director specializing in AI-enabled experiences, conversion optimization, and design systems. Led work contributing to 10x revenue growth at Marriott's Homes & Villas.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dennis Ventrello",
    title: "Dennis Ventrello — Product Design Director",
    description:
      "AI-enabled experiences that drive conversion. Case studies from Marriott, Amazon, Chewy, and Target.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennis Ventrello — Product Design Director",
    description:
      "AI-enabled experiences that drive conversion. Case studies from Marriott, Amazon, Chewy, and Target.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dennis Ventrello",
  jobTitle: "Product Design Director",
  url: SITE_URL,
  email: "mailto:dennis.ventrello@gmail.com",
  sameAs: ["https://linkedin.com/in/dennis-ventrello"],
  knowsAbout: [
    "Product Design",
    "AI-Enabled Experiences",
    "Conversion Optimization",
    "Design Systems",
    "Design Leadership",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
