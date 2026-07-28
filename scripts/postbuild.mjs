// Post-build: PRE-RENDER each client-side route to real static HTML.
//
// ── What this used to do, and why it wasn't enough ──────────────────────────
// The app is a React Router SPA. GitHub Pages serves a real file only for "/",
// and 404s any other path (public/_redirects is a CLOUDFLARE convention that
// GitHub Pages ignores). The original version copied the built index.html to
// each route so deep links returned a genuine 200 instead of a 404. That part
// was right and is preserved.
//
// But the file it copied is an EMPTY SHELL — <div id="root"></div> plus a script
// tag. Measured 2026-07-27: every page on makerwebstudios.com returned ZERO
// words of body HTML. Google executes JavaScript so it sees the site; most AI
// crawlers do not, so to them the agency that sells GEO had nothing on it.
//
// ── What it does now ───────────────────────────────────────────────────────
// Serves dist/ locally, drives headless Chrome over each route, and writes the
// fully-rendered DOM. Same React, same router, same deploy — the HTML just
// arrives already populated.
//
// No new dependencies: node:http to serve, plus the Chrome that already exists
// on this machine and on the GitHub Actions ubuntu runner.
//
// ── Safety ─────────────────────────────────────────────────────────────────
// If Chrome isn't found, or a route renders suspiciously empty, it FALLS BACK
// to copying the shell — the exact previous behaviour — and warns. Pre-rendering
// can never break the deploy. Set CHROME_PATH to force a specific binary.
import { copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { extname, join } from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const ROUTES = ['', 'portfolio', 'mfg', 'privacy']; // '' = "/". Keep in sync with src/App.jsx

// Per-route <title> and meta description. The SPA never set these, so every
// route inherited index.html's. That was harmless while the pages were empty
// shells — nothing was indexable. Now that they pre-render into real pages,
// four pages sharing one title and description is a duplicate-content signal,
// so the static output gets corrected here. Keep in sync with src/pages/.
const ROUTE_META = {
  '': null, // homepage keeps what index.html already declares
  portfolio: {
    title: 'Our Work — Manufacturer & Trade Websites | Maker Web Studios',
    description:
      'Websites built for manufacturers and trades by someone who ran a $1.5M ' +
      'manufacturing operation. See the work: ABBA Manufacturing, Valley Modern ' +
      'Plumbing, and more.',
  },
  mfg: {
    title: 'The Revenue Builder System for Texas Manufacturers | Maker Web Studios',
    description:
      'You built a serious operation — your website should show it. A web, SEO ' +
      'and lead-generation system for Texas manufacturers, built by a manufacturer.',
  },
  privacy: {
    title: 'Privacy Policy | Maker Web Studios',
    description:
      'How Maker Web Studios collects, uses and protects your information.',
  },
};

const DIST = 'dist';
const SRC = `${DIST}/index.html`;
const PORT = 4317;
// Below this many words we assume React never mounted, so we don't trust it.
const MIN_WORDS = 40;

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  '/opt/google/chrome/chrome',
].filter(Boolean);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8',
};

if (!existsSync(SRC)) {
  console.error('postbuild: dist/index.html not found — did `vite build` run?');
  process.exit(1);
}

// The pristine shell, captured BEFORE we overwrite dist/index.html with the
// rendered homepage. 404.html must stay this shell — it's the catch-all for
// deep links we didn't pre-render, so the router has to resolve them client
// side. Serving a pre-rendered homepage there would show the wrong page.
const SHELL = readFileSync(SRC, 'utf8');

const wordCount = (html) =>
  html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')
      .split(/\s+/).filter(Boolean).length;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** Rewrite title + description (and their og:/twitter: twins) for a route. */
function applyMeta(html, route) {
  const m = ROUTE_META[route];
  if (!m) return html;
  let out = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(m.title)}</title>`);
  for (const attr of ['name="description"', 'property="og:description"',
                      'name="twitter:description"']) {
    out = out.replace(new RegExp(`(<meta\\s+${attr}\\s+content=")[^"]*(")`, 'i'),
                      `$1${esc(m.description)}$2`);
  }
  for (const attr of ['property="og:title"', 'name="twitter:title"']) {
    out = out.replace(new RegExp(`(<meta\\s+${attr}\\s+content=")[^"]*(")`, 'i'),
                      `$1${esc(m.title)}$2`);
  }
  return out;
}

function writeRoute(route, html) {
  if (route === '') {
    writeFileSync(SRC, html);
  } else {
    mkdirSync(`${DIST}/${route}`, { recursive: true });
    writeFileSync(`${DIST}/${route}/index.html`, html);
  }
}

function copyRoute(route) {
  if (route === '') return; // "/" already exists
  mkdirSync(`${DIST}/${route}`, { recursive: true });
  writeFileSync(`${DIST}/${route}/index.html`, applyMeta(SHELL, route));
}

// Static server over dist/, with SPA fallback so client routes resolve.
function serve() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = decodeURIComponent((req.url || '/').split('?')[0]);
      let file = join(DIST, url);
      if (!existsSync(file) || url.endsWith('/')) {
        const idx = join(file, 'index.html');
        file = existsSync(idx) ? idx : SRC; // SPA fallback
      }
      try {
        res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
        res.end(readFileSync(file));
      } catch {
        res.writeHead(404).end('not found');
      }
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

async function render(chrome, route) {
  const { stdout } = await execFileAsync(chrome, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
    '--virtual-time-budget=12000',
    `--user-data-dir=/tmp/mws-prerender-${process.pid}-${route || 'root'}`,
    '--dump-dom', `http://127.0.0.1:${PORT}/${route}`,
  ], { maxBuffer: 32 * 1024 * 1024, timeout: 90_000 });
  return stdout;
}

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));

if (!chrome) {
  console.warn('postbuild: ⚠ no Chrome found — falling back to copying the shell.');
  console.warn('postbuild:   Routes will 200 but ship EMPTY HTML to non-JS crawlers.');
  console.warn(`postbuild:   Looked in: ${CHROME_CANDIDATES.join(', ')}`);
  ROUTES.forEach(copyRoute);
  writeFileSync(`${DIST}/404.html`, SHELL);
  console.log(`postbuild: copied routes [${ROUTES.filter(Boolean).join(', ')}] + 404.html`);
  process.exit(0);
}

const server = await serve();
let rendered = 0;
const failures = [];

for (const route of ROUTES) {
  const label = route || '/';
  try {
    const html = await render(chrome, route);
    const words = wordCount(html);
    if (words < MIN_WORDS) throw new Error(`only ${words} words — React likely didn't mount`);
    writeRoute(route, applyMeta(html, route));
    rendered++;
    console.log(`postbuild: pre-rendered ${label.padEnd(12)} ${words} words`);
  } catch (e) {
    failures.push(`${label} (${String(e.message).split('\n')[0]})`);
    copyRoute(route);
  }
}

server.close();

writeFileSync(`${DIST}/404.html`, SHELL);

if (failures.length) {
  console.warn(`postbuild: ⚠ ${failures.length} route(s) fell back to the shell: ${failures.join(', ')}`);
}
console.log(`postbuild: ${rendered}/${ROUTES.length} routes pre-rendered + 404.html fallback`);
