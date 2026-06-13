import MarriottBlendedAI from "../../src/views/MarriottBlendedAI";

const description =
  "How I led the design of a first-to-market blended AI search experience at Marriott's Homes & Villas — 10M+ AI searches, a 10% step conversion lift, and 54M media impressions.";

export const metadata = {
  title: "Marriott Blended AI Search",
  description,
  alternates: { canonical: "/marriott-blended-ai-search-experience" },
  openGraph: {
    title: "Marriott Blended AI Search — Dennis Ventrello",
    description,
    url: "/marriott-blended-ai-search-experience",
    images: ["/images/ai-search/Hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriott Blended AI Search — Dennis Ventrello",
    description,
    images: ["/images/ai-search/Hero.png"],
  },
};

export default function Page() {
  return <MarriottBlendedAI />;
}
