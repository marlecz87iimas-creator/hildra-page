import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web",
    title: "Páginas Web",
    description: "Sitios modernos, rápidos y adaptables para impulsar tu presencia digital.",
    items: [
      "Landing Pages",
      "Sitios Corporativos",
      "Sistemas Web",
      "Portales Administrativos",
    ],
    icon: "Globe",
  },
  {
    id: "admin",
    title: "Sistemas administrativos",
    description: "Control eficiente de inventario, ventas, usuarios y reportes.",
    items: [
      "Sistemas empresariales",
      "Inventarios",
      "Ventas",
      "CRM",
      "ERP",
      "Automatización",
    ],
    icon: "Layers",
  },
  {
    id: "mobile",
    title: "Aplicaciones móviles",
    description: "Apps para Android e iPhone con experiencia fluida y moderna.",
    items: ["Android", "iPhone", "React Native", "Expo"],
    icon: "Smartphone",
  },
  {
    id: "backend",
    title: "Backend y APIs",
    description: "Servicios robustos, seguros y escalables para tu producto digital.",
    items: ["Java", "Spring Boot", "APIs REST", "Microservicios", "Integraciones"],
    icon: "Server",
  },
  {
    id: "automation",
    title: "Automatización",
    description: "Optimizamos tareas repetitivas e integramos sistemas para ahorrar tiempo.",
    items: [
      "Digitalización de procesos",
      "Reportes",
      "Integración entre sistemas",
    ],
    icon: "Workflow",
  },
];
