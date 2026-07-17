export const SITE = {
  name: "Hildra",
  legalName: "Hildra",
  brandLine: "Soluciones Digitales",
  tagline: "Tecnología más humana para simplificar la vida y los negocios.",
  description:
    "Desarrollamos software que impulsa tu negocio. Creamos aplicaciones móviles, sistemas web y soluciones tecnológicas a la medida para pequeñas empresas, emprendedores y negocios en crecimiento.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hildra.com.mx",
  locale: "es_MX",
  email: "hildra.ti@gmail.com",
  whatsapp: {
    number: "529999905030",
    display: "999 990 5030",
    message:
      "Hola Hildra, me interesa solicitar una cotización para un proyecto.",
  },
  social: {
    facebook: "https://facebook.com/hildra",
    linkedin: "https://linkedin.com/company/hildra",
    instagram: "https://instagram.com/hildra",
  },
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.message)}`;

export const NAV_ITEMS = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Precios", href: "/#precios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/#contacto" },
] as const;
