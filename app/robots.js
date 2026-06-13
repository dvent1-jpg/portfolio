const SITE_URL = "https://www.dennisventrello.com";

export default function robots() {
  return {
    rules: [
      {
        // Allow everyone, including AI answer-engine crawlers
        // (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) for visibility.
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
