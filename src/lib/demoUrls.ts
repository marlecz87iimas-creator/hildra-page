export const DEMO_URLS = {
  costea:
    process.env.NEXT_PUBLIC_COSTEA_DEMO_URL?.trim() ||
    "http://localhost:5175",
  stockea:
    process.env.NEXT_PUBLIC_STOCKEA_DEMO_URL?.trim() ||
    "http://localhost:5174",
  webExample:
    process.env.NEXT_PUBLIC_WEB_EXAMPLE_URL?.trim() ||
    "https://www.losguerrerosrugbyescarcega.org",
} as const;
