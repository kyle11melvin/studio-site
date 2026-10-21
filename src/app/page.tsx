import Image from "next/image";
import { Clouds } from "@/components/Clouds";
import { FingerClouds } from "@/components/FingerClouds";
import { ProjectForm } from "@/components/ProjectForm";
import { SkyWisps } from "@/components/SkyWisps";
import { SunsetClouds } from "@/components/SunsetClouds";
import { Spark } from "@/components/Spark";
import {
  AnvilScreen,
  BirdDogScreen,
  DioiHeroScreen,
} from "@/components/mocks";
import { Work } from "@/components/Work";
import { Wordmark } from "@/components/Wordmark";
import { contact, hero, process, projectForm, site } from "@/content/site";

const btn =
  "inline-flex min-h-[54px] items-center rounded-full px-7 font-semibold no-underline";

// Each shipped app's name in a nod to its own type style, for the row under the hero.
const shipped = [
  { name: "Switchboard", className: "font-extrabold tracking-[-0.02em]" },
  { name: "ANVIL", className: "font-extrabold tracking-[0.14em]" },
  { name: "Bird Dog", className: "font-[Georgia,serif] text-[21px]" },
  { name: "EDGE DESK", className: "font-black tracking-[0.04em]" },
  { name: "The Huddle", className: "font-bold" },
  { name: "DefendItOwnIt", className: "font-semibold" },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden bg-dawn">
        <div className="sky-top relative isolate pb-2">
          <SkyWisps />
          <header className="relative mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-[22px]">
            <a
              href="#top"
              aria-label={`${site.name} Studio, back to top`}
              className="py-1"
            >
              <Wordmark />
            </a>
            <nav
              aria-label="Main"
              className="flex flex-wrap items-center gap-1"
            >
              <a
                href="#work"
                className="hidden px-3.5 py-3 text-white/85 hover:text-white sm:inline"
              >
                Work
              </a>
              <a
                href="#process"
                className="hidden px-3.5 py-3 text-white/85 hover:text-white sm:inline"
              >
                How it works
              </a>
              <a
                href="#contact"
                className="ml-2 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[15px] font-semibold text-ink sm:px-5 sm:py-3 sm:text-lg"
              >
                <span className="sm:hidden">{hero.ctaShort}</span>
                <span className="hidden sm:inline">{hero.cta}</span>
              </a>
            </nav>
          </header>

          <section
            id="top"
            className="relative mx-auto flex max-w-[860px] flex-col items-center gap-5 px-6 pt-[48px] text-center"
          >
            <h1 className="hero-rise font-display text-balance text-[clamp(40px,5.2vw,72px)] leading-[1.02] tracking-[-0.02em] text-white [text-shadow:0_2px_30px_rgba(30,40,80,0.18)]">
              {hero.headline}
            </h1>
            <a
              href="#contact"
              className={`hero-rise hero-rise-2 ${btn} bg-ink text-white hover:bg-black`}
            >
              {hero.cta}
            </a>
            {/* The audience line moved here from above the headline (Kyle, 2026-10-18). */}
            <p className="hero-rise hero-rise-3 -mt-1 text-[13px] font-semibold uppercase tracking-[0.24em] text-white/80 sm:text-[14px]">
              {hero.eyebrow}
            </p>
          </section>
        </div>

        {/* Human hand meets machine hand. The photo's white ground disappears under
            mix-blend-multiply, so the hands sit directly on the sky. */}
        <div className="sky-low relative h-[clamp(260px,38vw,540px)]">
          <FingerClouds />
          <Image
            src="/hero-hands.webp"
            alt="A human hand reaching toward a robotic hand, fingertips almost touching"
            fill
            priority
            sizes="100vw"
            className="object-cover mix-blend-multiply [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
          />
          <Spark />
          {/* The name, explained right under the fingertips (between the hands on wider
              screens; below the picture on a phone, where the gap is too narrow). */}
          <p className="spark-line absolute hidden text-center font-display text-ink sm:block">
            <SparkLine />
          </p>
          <p className="absolute inset-x-0 bottom-[4%] z-20 px-6 text-center font-display text-[33px] leading-[1.08] text-ink [text-shadow:0_1px_18px_rgba(255,255,255,0.8)] sm:hidden">
            <SparkLine />
          </p>
        </div>

        {/* Cloud bank the apps rise out of. Decorative; the apps are explained in #work. */}
        {/* Cloud bank with the app screens rising out of it: md+ only. On a phone the screens are
            hidden, so the bank was just an empty white band under the spark line. */}
        <div aria-hidden="true" className="relative -mt-[clamp(40px,6vw,90px)] hidden md:block">
          <Clouds />
          <div className="relative mx-auto flex max-w-[1240px] items-start justify-center gap-4 px-6 pb-6 pt-6 md:pb-16 lg:gap-8">
            {/* ANVIL and Bird Dog are emphasized (Kyle, 2026-10-17): bigger than the centerpiece's
                scale, rising higher out of the clouds. */}
            <div className="relative z-20 hidden h-[560px] w-[230px] shrink-0 -rotate-[5deg] pt-6 md:block lg:h-[680px] lg:w-[285px]">
              <div className="w-[300px] origin-top-left scale-[0.77] lg:scale-[0.95]">
                <AnvilScreen />
              </div>
            </div>
            {/* The centerpiece is a live website (DefendItOwnIt); Switchboard stays in the
                top three of the work section. */}
            <div className="relative z-10 hidden min-w-0 max-w-[620px] flex-1 justify-center md:flex">
              <DioiHeroScreen />
            </div>
            <div className="relative z-20 hidden h-[560px] w-[230px] shrink-0 rotate-[5deg] md:block lg:h-[680px] lg:w-[285px]">
              <div className="w-[300px] origin-top-left scale-[0.77] lg:scale-[0.95]">
                <BirdDogScreen />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* The app names sit on the hero's dawn; then night falls behind the work (Kyle,
            2026-10-17: invert the scheme from the hero to the next section). */}
        <div className="bg-dawn">
          <section
            aria-label={hero.shippedLabel}
            className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 pb-2 pt-8"
          >
            {shipped.map((s) => (
              <span
                key={s.name}
                className={`text-xl text-ink-soft ${s.className}`}
              >
                {s.name}
              </span>
            ))}
          </section>
        </div>
        <div className="sky-night on-dark relative isolate text-ink">
          <SunsetClouds />
          <SkyWisps set="dusk" />
          <Work />
        </div>

        <section id="process" className="sky-dusk relative isolate scroll-mt-6 text-white">
          <SkyWisps set="dusk" />
          <div className="mx-auto max-w-[1180px] px-6 pb-28 pt-40">
            <h2 className="reveal mb-5 max-w-[18ch] font-display text-[clamp(40px,5.5vw,72px)] leading-none tracking-[-0.01em] [text-shadow:0_2px_30px_rgba(30,40,80,0.25)]">
              {process.headline}
            </h2>
            <p className="reveal mb-12 max-w-[52ch] text-[19px] text-white/85">{process.builder}</p>
            <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4 sm:gap-5">
              {process.steps.map((s, i) => (
                <li
                  key={s.title}
                  className="reveal flex flex-col gap-3 rounded-[28px] border border-white/20 bg-white/10 p-7 backdrop-blur-md"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[72px] leading-[0.9] text-sky-4"
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-[22px] font-bold">{s.title}</h3>
                  <p className="text-white/90">{s.body}</p>
                </li>
              ))}
            </ol>

            {/* The low-resistance path: a free call for people the form feels like too much for.
                Opens the booking page once site.bookingUrl is set; until then, an email asking
                for a call. */}
            <div className="reveal mt-10 flex flex-col items-start gap-5 rounded-[28px] border border-sky-4/40 bg-white/[0.08] p-7 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="font-display text-[clamp(26px,2.6vw,34px)] leading-tight">{process.consult.line}</p>
                <p className="mt-1.5 text-white/85">{process.consult.sub}</p>
              </div>
              <a
                href={site.bookingUrl || `mailto:${site.email}?subject=${encodeURIComponent("Free consultation")}`}
                className="inline-flex min-h-[54px] shrink-0 items-center gap-2 rounded-full bg-sky-4 px-7 font-semibold text-ink no-underline hover:bg-sky-5"
              >
                {process.consult.button}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* FAQ, editorial style: a sticky intro on the left, the questions as a numbered
                list with hairlines on the right (no boxed cards). Native <details>, so it opens
                and closes with no JavaScript. */}
            {/* A daylight panel, continuing the light/dark rhythm of the work section. */}
            <div className="mt-24 grid gap-12 rounded-[32px] border border-white/70 bg-[linear-gradient(160deg,#fbf6f0,#efe8f4)] p-[clamp(24px,4vw,56px)] text-ink shadow-[0_40px_90px_-40px_rgba(5,10,30,0.8)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
              <div className="reveal lg:sticky lg:top-24 lg:self-start">
                <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-copper-ink">
                  {process.faqEyebrow}
                </p>
                <h3 className="mt-4 max-w-[12ch] font-display text-[clamp(40px,4.6vw,64px)] leading-[1.02]">
                  {process.faqHeadline}
                </h3>
                <p className="mt-6 max-w-[34ch] text-ink-soft">{process.faqAside}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-full bg-ink px-6 font-semibold text-white no-underline hover:bg-black"
                >
                  {process.faqCta}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <div className="border-b border-ink/15">
                {process.faq.map((f, i) => (
                  <details key={f.q} className="reveal group border-t border-ink/15">
                    <summary className="flex cursor-pointer list-none items-baseline gap-5 py-6 [&::-webkit-details-marker]:hidden">
                      <span aria-hidden="true" className="w-8 shrink-0 font-display text-[22px] text-copper-ink">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-display text-[clamp(24px,2.4vw,32px)] leading-tight group-hover:text-copper-ink">
                        {f.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/25 text-xl leading-none text-copper-ink transition-transform duration-300 group-open:rotate-45 group-open:border-copper-ink"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-[56ch] pb-7 pl-[3.25rem] pr-12 text-[17px] leading-relaxed text-ink-soft">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="sky-night-to-dawn relative isolate scroll-mt-6">
          <SkyWisps set="night" />
          <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-8 px-6 py-32 text-center">
            <h2 className="reveal max-w-[22ch] font-display text-[clamp(40px,5.5vw,76px)] leading-[1.02] text-white [text-shadow:0_2px_30px_rgba(30,40,80,0.18)]">
              {contact.headline}
            </h2>
            {/* What happens after you send it (from the Switchboard review, 2026-10-17). */}
            <ul className="reveal -mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[16px] text-white/90">
              {projectForm.next.map((n) => (
                <li key={n} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-sky-4">&#10003;</span>
                  {n}
                </li>
              ))}
            </ul>
            {/* Shown only when FormSubmit sends the visitor back to /#sent. */}
            <div id="sent" className="sent-note hidden w-full max-w-[720px] scroll-mt-24 rounded-[28px] border border-live-ink/30 bg-live-bg p-6 text-left text-live-ink">
              <p className="font-display text-[28px] leading-tight">{projectForm.thanksTitle}</p>
              <p className="mt-1.5">{projectForm.thanksBody}</p>
            </div>
            <ProjectForm />

            {/* Other ways in. Email always shows; the call and text links appear once
                site.ts has a booking link or number. */}
            <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-ink">
              <span>{contact.otherWays}</span>
              <a
                href={site.bookingUrl || `mailto:${site.email}?subject=${encodeURIComponent("Free consultation")}`}
                className="font-semibold underline underline-offset-4"
              >
                {contact.talkFirst}
              </a>
              <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
                {contact.button}
              </a>
              {site.phone && (
                <a href={`sms:${site.phone}`} className="font-semibold underline underline-offset-4">
                  {contact.textButton}
                </a>
              )}
            </p>
          </div>
        </section>
      </main>

      {/* Phones only: a "Tell us your idea" button that stays at the bottom of the screen
          (Kyle, 2026-10-17). It hides itself once the contact section is on screen. */}
      <a
        href="#contact"
        className="sticky-cta fixed inset-x-4 bottom-[max(16px,env(safe-area-inset-bottom))] z-50 flex min-h-[54px] items-center justify-center rounded-full bg-ink text-[17px] font-semibold text-white no-underline shadow-[0_18px_40px_-12px_rgba(5,10,30,0.7)] sm:hidden"
      >
        {contact.sticky}
      </a>

      <div className="bg-sky-5">
        <footer className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 px-6 pb-14 pt-10 text-center text-[15px] text-ink-soft sm:flex-row sm:justify-between sm:text-left">
          <Wordmark tone="dark" size="lg" />
          <div className="flex flex-col gap-1.5 text-[13px] uppercase tracking-[0.28em] text-ink-soft">
            <span>Custom apps &amp; websites</span>
            <span>{site.location.replace(", California", "")}</span>
          </div>
        </footer>
        <p className="mx-auto max-w-[1240px] px-6 pb-10 text-center text-[13px] text-ink-soft sm:text-left">
          © {site.year} {site.name} Studio. This site is built with the same
          tools it describes.
        </p>
      </div>
    </>
  );
}

// "Every idea starts as a spark. We close the gap." with the two words that make the name in
// copper, one sentence per line (Kyle, 2026-10-17: make it pop, color and a bigger font).
function SparkLine() {
  const [first, second] = hero.sparkLine.split(". ");
  const tint = (t: string) =>
    t.split(/\b(spark|gap)\b/).map((part, i) =>
      part === "spark" || part === "gap" ? (
        <span key={i} className="text-copper-ink">
          {part}
        </span>
      ) : (
        part
      ),
    );
  return (
    <>
      <span className="block">{tint(first + ".")}</span>
      <span className="block">{tint(second)}</span>
    </>
  );
}
