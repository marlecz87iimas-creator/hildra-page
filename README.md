# Hildra

Sitio web corporativo de **Hildra**: tecnología más humana para simplificar la vida y los negocios.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- next-themes (modo claro / oscuro)

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copia `.env.example` a `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — URL canónica del sitio (SEO / sitemap / OG)
- `NEXT_PUBLIC_GA_ID` — ID de Google Analytics 4 (opcional)

## Estructura

```
src/
  app/                 # Rutas (home, blog, legales)
  components/
    layout/            # Header, Footer, tema, WhatsApp
    sections/          # Secciones de la landing
    seo/               # Analytics + JSON-LD
    ui/                # Componentes reutilizables
  data/                # Contenido tipado (listo para CMS)
  lib/                 # Constantes y utilidades
  types/               # Tipos compartidos
```

## Scripts

- `npm run dev` — desarrollo
- `npm run build` — build de producción
- `npm run start` — servir build
- `npm run lint` — ESLint
