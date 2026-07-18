// Post-build: materialize a real static index.html at each client-side route so
// GitHub Pages serves a 200 on deep links (e.g. /portfolio) instead of a 404.
//
// Why this is needed: the app is a React Router SPA. GitHub Pages serves a real
// file only for "/", and 404s any other path. public/_redirects (/* /index.html
// 200) is a CLOUDFLARE Pages convention that GitHub Pages ignores — so the SPA
// fallback never applied. Copying the built index.html to each route path gives
// a genuine 200 (better for SEO than a 404.html hack, which returns 404 status).
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';

const ROUTES = ['portfolio', 'mfg', 'privacy']; // keep in sync with src/App.jsx <Route>s
const SRC = 'dist/index.html';

if (!existsSync(SRC)) {
  console.error('postbuild: dist/index.html not found — did `vite build` run?');
  process.exit(1);
}
for (const r of ROUTES) {
  mkdirSync(`dist/${r}`, { recursive: true });
  copyFileSync(SRC, `dist/${r}/index.html`);
}
copyFileSync(SRC, 'dist/404.html'); // catch-all SPA fallback for any other deep link
console.log(`postbuild: materialized routes [${ROUTES.join(', ')}] + 404.html`);
