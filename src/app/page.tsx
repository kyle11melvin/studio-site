import Image from "next/image";
import { Clouds } from "@/components/Clouds";
import { FingerClouds } from "@/components/FingerClouds";
import { ProjectForm } from "@/components/ProjectForm";
import { SkyWisps } from "@/components/SkyWisps";
import { Spark } from "@/components/Spark";
import {
  AnvilScreen,
  BirdDogScreen,
  SwitchboardScreen,
} from "@/components/mocks";
import { Work } from "@/components/Work";
import { Wordmark } from "@/components/Wordmark";
import { contact, hero, process, site } from "@/content/site";

const btn =
  "inline-flex min-h-[54px] items-center rounded-full px-7 font-semibold no-underline";

// Each shipped app's name in a nod to its own type style, for the row under the hero.
const shipped = [
  { name: "Switchboard", className: "font-extrabold tracking-[-0.02em]" },
  { name: "ANVIL", className: "font-extrabold tracking-[0.14em]" },
  { name: "Bird Dog", className: "font-[Georgia,serif] text-[21px]" },
  { name: "EDGE DESK", className: "font-display-num text-[21px]" },
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
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-white/80 sm:text-[14px]">
              {hero.eyebrow}
            </p>
            <h1 className="-mt-1 font-display text-balance text-[clamp(40px,5.2vw,72px)] leading-[1.02] tracking-[-0.02em] text-white [text-shadow:0_2px_30px_rgba(30,40,80,0.18)]">
              {hero.headline}
            </h1>
            <a
              href="#contact"
              className={`${btn} bg-ink text-white hover:bg-black`}
            >
              {hero.cta}
            </a>
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
          <div className="relative mx-auto flex max-w-[1100px] items-start justify-center gap-6 px-6 pb-6 pt-6 md:pb-16">
            <div className="hidden h-[480px] w-[210px] shrink-0 -rotate-[4deg] pt-16 md:block">
              <div className="w-[300px] origin-top-left scale-[0.7]">
                <AnvilScreen />
              </div>
            </div>
            {/* On a phone the hero ends on the spark line; the apps show up in the work
                section below, so the Switchboard screen only rises out of the clouds on md+. */}
            <div className="relative z-10 hidden min-w-0 max-w-[620px] flex-1 justify-center md:flex">
              <SwitchboardScreen />
            </div>
            <div className="hidden h-[480px] w-[210px] shrink-0 rotate-[4deg] pt-8 md:block">
              <div className="w-[300px] origin-top-left scale-[0.7]">
                <BirdDogScreen />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="sky-day relative isolate">
          <SkyWisps set="day" />
          <section
            aria-label={hero.shippedLabel}
            className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 pb-6 pt-10"
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

          <Work />
        </div>

        <section id="process" className="sky-dusk relative isolate scroll-mt-6 text-white">
          <SkyWisps set="dusk" />
          <div className="mx-auto max-w-[1180px] px-6 pb-28 pt-40">
            <h2 className="mb-12 max-w-[18ch] font-display text-[clamp(40px,5.5vw,72px)] leading-none tracking-[-0.01em] [text-shadow:0_2px_30px_rgba(30,40,80,0.25)]">
              {process.headline}
            </h2>
            <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4 sm:gap-5">
              {process.steps.map((s, i) => (
                <li
                  key={s.title}
                  className="flex flex-col gap-3 rounded-[28px] border border-white/20 bg-white/10 p-7 backdrop-blur-md"
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

            {/* FAQ: the worries a small-business owner has before reaching out. Native
                <details>, so it opens and closes with no JavaScript. */}
            <h3 className="mb-6 mt-24 font-display text-[clamp(32px,4vw,52px)] leading-none">
              {process.faqHeadline}
            </h3>
            <div className="flex max-w-[820px] flex-col gap-3">
              {process.faq.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[22px] border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[19px] font-bold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span aria-hidden="true" className="text-2xl font-normal text-sky-4 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-white/90">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="sky-night-to-dawn relative isolate scroll-mt-6">
          <SkyWisps set="night" />
          <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-8 px-6 py-32 text-center">
            <h2 className="max-w-[22ch] font-display text-[clamp(40px,5.5vw,76px)] leading-[1.02] text-white [text-shadow:0_2px_30px_rgba(30,40,80,0.18)]">
              {contact.headline}
            </h2>
            <ProjectForm />

            {/* Other ways in. Email always shows; the call and text links appear once
                site.ts has a booking link or number. */}
            <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-ink">
              <span>{contact.otherWays}</span>
              <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
                {contact.button}
              </a>
              {site.bookingUrl && (
                <a href={site.bookingUrl} className="font-semibold underline underline-offset-4">
                  {contact.bookButton}
                </a>
              )}
              {site.phone && (
                <a href={`sms:${site.phone}`} className="font-semibold underline underline-offset-4">
                  {contact.textButton}
                </a>
              )}
            </p>
          </div>
        </section>
      </main>

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
