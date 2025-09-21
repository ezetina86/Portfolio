import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://ezetina.com',
  base: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind(), icon({
    include: {
      lucide: ["github", "linkedin"]
    }
  })],
  output: 'static'
});