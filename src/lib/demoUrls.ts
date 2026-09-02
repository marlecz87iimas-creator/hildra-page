export const DEMO_URLS = {
  costea:
    process.env.NEXT_PUBLIC_COSTEA_DEMO_URL?.trim() ||
    "https://costea.com.mx",
  stockea:
    process.env.NEXT_PUBLIC_STOCKEA_DEMO_URL?.trim() ||
    "https://stockea-extended-web-production.up.railway.app",
  webExample:
    process.env.NEXT_PUBLIC_WEB_EXAMPLE_URL?.trim() ||
    "https://www.losguerrerosrugbyescarcega.org",
} as const;

