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
    href: "/#contacto",
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
    href: "/#contacto",
  },
];
