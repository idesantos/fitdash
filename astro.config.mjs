// @ts-check
import { defineConfig } from 'astro/config';

// No ar em https://sites.fitdash.com.br (o deploy passa SITE_URL e BASE_PATH=/).
// Sem variáveis, a build local usa o endereço antigo: idesantos.github.io/fitdash.
const site = process.env.SITE_URL ?? 'https://idesantos.github.io';
const base = (process.env.BASE_PATH ?? '/fitdash').replace(/\/$/, '');

export default defineConfig({
  site,
  base: base || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
