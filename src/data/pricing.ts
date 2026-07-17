import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter-web",
    name: "Starter Web",
    price: "Desde $5,000 MXN",
    description: "Ideal para lanzar presencia digital con rapidez y claridad.",
    features: [
      "Landing Page",
      "Formulario",
      "WhatsApp",
      "Hosting",
      "Dominio",
      "Entrega rápida",
    ],
    cta: "Solicitar cotización",
    ctaHref: "/#contacto",
  },
  {
    id: "business",
    name: "Business",
    price: "Desde $15,000 MXN",
    description: "Sistema administrativo para ordenar inventario, ventas y operación.",
    features: [
      "Sistema administrativo",
      "Inventario",
      "Ventas",
      "Usuarios",
      "Reportes",
    ],
    cta: "Solicitar cotización",
    ctaHref: "/#contacto",
    highlighted: true,
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    price: "Desde $10,000 MXN",
    description: "Aplicación móvil completa con backend y panel administrativo.",
    features: [
      "Android",
      "iPhone",
      "Backend",
      "Panel administrativo",
      "Publicación en tiendas",
    ],
    cta: "Solicitar cotización",
    ctaHref: "/#contacto",
  },
  {
    id: "enterprise",
    name: "Software Empresarial",
    price: "Cotización personalizada",
    priceNote: "Según alcance y complejidad",
    description:
      "Soluciones a la medida para empresas que necesitan software robusto y escalable.",
    features: [
      "Análisis de requerimientos",
      "Arquitectura a medida",
      "Integraciones",
      "Soporte y evolución",
      "Acompañamiento cercano",
    ],
    cta: "Solicitar reunión",
    ctaHref: "/#contacto",
  },
];
