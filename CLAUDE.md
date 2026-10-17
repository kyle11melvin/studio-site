@AGENTS.md

# Studio site — rules for every session

Kyle Melvin's landing page for his solo app and website business. One page.
Its job: a prospective client scrolls it and thinks "this person is very good."

## Stack (decided 2026-10-17)

Next.js (App Router) + Tailwind v4, deployed on **Vercel** (not Cloudflare). Static: the
page must stay prerendered (`○ /` in the build output). No backend, no database, no CMS.

## Where things live

- `src/content/site.ts` — **all copy.** Change words there, never in components.
- `src/app/globals.css` — **design tokens** (`@theme`). A redesign starts here.
- `src/components/Showcase.tsx` — the interactive app switcher (the page's one bold element).
- `src/components/mocks.tsx` — drawn stand-ins for each app's screen, each in that app's own
  colors and type. Replace a mock with a real screenshot when one exists.

## Hard rules

1. **No real client data, ever.** Bird Dog appears only as a mock or as a screenshot of the
   demo build (fake data). Never a screenshot of the live CRM. Names in mocks are invented.
2. **No invented proof.** No made-up stats, testimonials, client logos or "years of experience."
   A fact on the page must be true of the real repo or app.
3. **Status words are honest:** Live / Private / Private demo / In build. DefendItOwnIt stays
   "In build" until its pages are published.
4. **No mortgage branding.** No NMLS, no Rev Mortgage, no navy/gold mortgage palette. This is a
   separate business.
5. **Name is not final.** Kyle is choosing a studio name (a Wizard of Oz / "behind the curtain"
   idea is on the table). Keep `site.name` the single place the name lives.

## Open items

- Real email address (placeholder in `site.email`).
- Real screenshots to replace the mocks.
- Pricing: not shown yet, by choice.
- Design pass from example sites Kyle will send.

## Build check

`npm run lint && npx tsc --noEmit && npm run build`. Sandboxed sessions may fail to fetch
Google Fonts during `next build`; that is the sandbox, not the code. Vercel fetches them fine.
