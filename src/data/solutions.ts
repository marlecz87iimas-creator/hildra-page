import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    id: "costea",
    name: "Costea",
    description:
      "Sistema para calcular costos y generar cotizaciones con precisión y velocidad.",
    features: [
      "Cálculo de costos por producto o servicio",
      "Generación de cotizaciones profesionales",
      "Control de márgenes y utilidades",
      "Historial y seguimiento de propuestas",
    ],
    status: "available",
    href: "/#productos",
  },
  {
    id: "stockea",
    name: "Stockea",
    description:
      "Sistema de inventarios y ventas para tener el control de tu negocio en un solo lugar.",
    features: [
      "Inventario en tiempo real",
      "Punto de venta y registro de ventas",
      "Alertas de stock bajo",
      "Reportes claros para decidir mejor",
    ],
    status: "available",
    href: "/#productos",
  },
  {
    id: "paginas",
    name: "Páginas a la medida",
    description:
      "Sitios web y landing pages diseñados para tu marca y objetivos de negocio.",
    features: [
      "Diseño responsive y moderno",
      "Portales administrativos",
      "Integración con WhatsApp y formularios",
      "Soporte y mantenimiento",
    ],
    status: "available",
    href: "/#productos",
  },
];
