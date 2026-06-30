# StangScales — stangscales.net

Revamped marketing site for StangScales (results-driven digital marketing).
Built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, and TypeScript.

## Pages

- `/` — Home (hero, stats, services, process, why-us, CTA)
- `/services` — Full service breakdown
- `/process` — Four-phase engagement timeline
- `/about` — Studio story, values, stats
- `/contact` — Inquiry form (opens a prefilled email)

## Run locally

This machine has a portable Node 24 in `~/.local`. Put it on your PATH first:

```bash
export PATH="$HOME/.local/node-v24.18.0-darwin-arm64/bin:$PATH"

npm run dev      # dev server  → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

(If you install Node globally later — e.g. via nvm or the nodejs.org installer —
you can skip the `export PATH` line.)

## Editing content

Almost all copy lives in one place: **`src/lib/content.ts`**
(services, process steps, stats, values, nav, contact email). Edit there and every
page updates.

## Contact form

`src/components/ContactForm.tsx` builds a prefilled `mailto:` to
`daymien.zavala@stangscales.net` — no backend required. To capture submissions on a
server instead, swap the `mailto` for a POST to a form service (Formspree, Resend,
or a Next.js Route Handler under `src/app/api/`).

## Deploy

Static-friendly — works on Vercel (zero config), Netlify, or any Node host.
Update the domain in `src/lib/content.ts` (`site.domain`) if it ever changes;
metadata, Open Graph tags, and `sitemap.xml` all read from it.

## To do (optional polish)

- Replace the default `src/app/favicon.ico` with a StangScales icon.
- Add a real Open Graph image (`src/app/opengraph-image.png`).
- Wire the contact form to a backend if you want stored leads + autoresponders.
