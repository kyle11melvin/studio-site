@AGENTS.md

# Studio site — rules for every session

Kyle Melvin's landing page for his solo app and website business. One page.
Its job: a prospective client scrolls it and thinks "this person is very good."

## Stack (decided 2026-10-17)

Next.js (App Router) + Tailwind v4, deployed on **Vercel** (not Cloudflare). Static: the
page must stay prerendered (`○ /` in the build output). No backend, no database, no CMS.

## Where things live

- `src/content/site.ts` — **all copy.** Change words there, never in components.
- `src/app/globals.css` — **design tokens** (`@theme`). A redesign starts here. The page is one
  sky from top to bottom (Kyle loved the hero, disliked flat gray/black below it): dawn hero,
  `.sky-day` behind the work (apps sit on frosted white cards), `.sky-dusk` for the process
  band, `.sky-night-to-dawn` for contact. Don't reintroduce flat gray or black bands.
- `src/components/Work.tsx` — the work section (Kyle picked it 2026-10-17, "Option 3"): a swipeable
  row of app icons, each a plain `#id` link that jumps to that app's band below; then one band per
  featured app (screen + story, sides alternating); then Finance and Markup. Icons live in
  `public/icons/<id>.webp`, one per app id. No JavaScript: it stays a static page.
- `src/components/mocks.tsx` — the app screens. Real screenshots live in `public/screens/`,
  taken by running each app locally from its own repo (Switchboard with its fake-AI test
  harness, Bird Dog with an invented demo book, ANVIL with its test workout, The Huddle with
  its built-in sample roster, DefendItOwnIt from its live homepage with the REV bar cropped out).
  Edge Desk and The Huddle use Kyle's own phone screenshots (2026-10-17, his call to show them);
  The Huddle's is the app's header joined to his roster. Bird Dog is shot on a Monday ("Realtor
  Calls" theme day, Kyle's pick) with an invented book. To refresh one, replace the file.

## Hard rules

1. **No real client data, ever.** Bird Dog appears only as a mock or as a screenshot of the
   demo build (fake data). Never a screenshot of the live CRM. Names in mocks are invented.
2. **No invented proof.** No made-up stats, testimonials, client logos or "years of experience."
   A fact on the page must be true of the real repo or app.
3. **Status words are honest:** Live / Private / Private demo / In build. DefendItOwnIt is
   **live** at defenditownit.com (Kyle, 2026-10-17); its repo README saying "nothing is
   published" is out of date. Screenshots of it must crop out the "powered by REV Mortgage"
   bar (rule 4).
4. **No mortgage branding.** No NMLS, no Rev Mortgage, no navy/gold mortgage palette. This is a
   separate business.
5. **Name is not final.** Kyle is choosing a studio name (a Wizard of Oz / "behind the curtain"
   idea is on the table). Keep `site.name` the single place the name lives.

## Open items

- Real email address (placeholder in `site.email`).
- Pricing: not shown yet, by choice.
- Design pass from example sites Kyle will send.

## Build check

`npm run lint && npx tsc --noEmit && npm run build`. Sandboxed sessions may fail to fetch
Google Fonts during `next build`; that is the sandbox, not the code. Vercel fetches them fine.
Tailwind runs through the Turbopack loader in `next.config.ts`, so a `next build --webpack`
renders the page **unstyled**. That is a test-build artifact, not a bug on Vercel.
