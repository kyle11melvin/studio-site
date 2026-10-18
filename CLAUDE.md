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
  row of app icons, each a plain `#id` link that jumps to that app below; then three **flagship**
  case studies (Bird Dog, DefendItOwnIt, Switchboard; the hero centerpiece is the live DefendItOwnIt site, Kyle 2026-10-17) on dark lit stages with a second screen behind;
  then a compact gallery (ANVIL, The Huddle, Edge Desk with phone thumbnails; Finance and Markup
  icon-only). Icons live in `public/icons/<id>.webp`. No JavaScript: it stays a static page.
- `Device` in `mocks.tsx` is the phone frame: metal edge, side buttons, Dynamic Island, a status bar
  in each app's own color. Kyle said the old flat black frame didn't read as a phone; keep this one.
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
5. **The studio is Spark Gap** (Kyle, 2026-10-17), domain sparkgapstudio.com (bought 2026-10-17). The name is the gap a
   spark jumps across: the fingertips almost touching in the hero. Logo (from Kyle's ChatGPT
   concept, rebuilt as live type): `Wordmark.tsx` ("SPARK GAP" in Cormorant Garamond 600, tracked
   caps, "STUDIO" between copper hairlines) and the S/G monogram with a copper slash as
   `app/icon.png` / `app/apple-icon.png`. Copper is `--color-copper`; ink stays near-black, not navy.
   Keep `site.name` the single place the name lives.

## Open items

- **The main CTA is the project form** (Kyle, 2026-10-17): `ProjectForm.tsx`, a "what are you looking for" form (ideas, wishlist, examples/visuals, timeline) emailed to Kyle so he can quote. **No prices or dollar figures anywhere on the site**; every project is custom. The form is plain HTML posting to a hosted form service (`site.formEndpoint`, e.g. Formspree), which is the one exception to "no backend". Until it is set, the form falls back to the visitor's mail app.
- Placeholders still to fill: `site.email`, `site.formEndpoint`, `site.bookingUrl`, `site.phone` (the last two show "Book a call" / "Text" links only once filled).
- **Audience and voice (Kyle, 2026-10-17, from a grilling session):** individuals with an idea who can't build it, not businesses with a dev budget. Hero "Have an idea? We'll build it." Studio voice, "we". **No owner name and no day job anywhere on the page.** No mention of AI tools in how the work is built. Paid projects only, no equity; NDA on request. "App" is fine (App Store help on request) but claim no App Store work until one ships. The line under the hands, "Every idea starts as a spark. We close the gap.", ties the name to the picture (Kyle's pick).
- Copy is checked against the `copywriting`, `copy-editing` and `cro` skills from coreyhaines31/marketingskills: no invented proof, no AI tells, form kept to three required fields.
- Design pass from example sites Kyle will send.

## Build check

`npm run lint && npx tsc --noEmit && npm run build`. Sandboxed sessions may fail to fetch
Google Fonts during `next build`; that is the sandbox, not the code. Vercel fetches them fine.
Tailwind runs through the Turbopack loader in `next.config.ts`, so a `next build --webpack`
renders the page **unstyled**. That is a test-build artifact, not a bug on Vercel.
