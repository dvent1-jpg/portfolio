const SITE_URL = "https://www.dennisventrello.com";

export default function sitemap() {
  const routes = [
    "",
    "/marriott-blended-ai-search-experience",
    "/marriott-booking-funnel-redesign",
    "/jesel-digital-business-transformation",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
