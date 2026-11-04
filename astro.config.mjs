// @ts-check
import { defineConfig } from 'astro/config';

// Provisório no GitHub Pages (idesantos.github.io/fitdash). No domínio definitivo:
// SITE_URL=https://seudominio.com.br BASE_PATH=/ STAGING=false npm run build
const site = process.env.SITE_URL ?? 'https://idesantos.github.io';
const base = (process.env.BASE_PATH ?? '/fitdash').replace(/\/$/, '');

export default defineConfig({
  site,
  base: base || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
