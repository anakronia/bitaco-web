// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bitaco.app',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    // Prefijo explícito en AMBOS idiomas (/es/... y /en/...) — sin esto,
    // Astro deja el default (es) sin prefijo, pero para hreflang/SEO
    // programático conviene tener rutas simétricas.
    routing: { prefixDefaultLocale: true },
  },

  redirects: {
    '/': '/es/',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      // Excluye del sitemap todo lo que hoy es placeholder / no debe
      // indexarse (mismo criterio que el meta noindex de cada página) —
      // privacidad/términos/soporte/quiz ya tienen contenido real,
      // negocios está oculta a propósito, y plan sigue sin construir.
      filter: (page) => !['negocios', 'plan'].some((slug) => page.includes(`/${slug}`)),
    }),
  ],
});