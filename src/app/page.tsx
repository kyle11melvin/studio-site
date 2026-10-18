import Image from "next/image";
import { Clouds } from "@/components/Clouds";
import {
  AnvilScreen,
  BirdDogScreen,
  SwitchboardScreen,
} from "@/components/mocks";
import { Work } from "@/components/Work";
import { Wordmark } from "@/components/Wordmark";
import { about, contact, hero, process, site } from "@/content/site";

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
        <div className="sky-top pb-20">
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
                className="ml-2 rounded-full bg-white px-5 py-3 font-semibold text-ink"
              >
                Start a project
              </a>
            </nav>
          </header>

          <section
            id="top"
            className="relative mx-auto flex max-w-[1000px] flex-col items-center gap-7 px-6 pt-[88px] text-center"
          >
            <h1 className="font-display text-[clamp(52px,8vw,112px)] leading-[0.98] tracking-[-0.02em] text-white [text-shadow:0_2px_30px_rgba(30,40,80,0.18)]">
              {hero.headline}
            </h1>
            <p className="max-w-[46ch] text-xl text-white/90">{hero.intro}</p>
            <a
              href="#contact"
              className={`${btn} bg-ink text-white hover:bg-black`}
            >
              Start a project
            </a>
          </section>
        </div>

        {/* Human hand meets machine hand. The photo's white ground disappears under
            mix-blend-multiply, so the hands sit directly on the sky. */}
        <div className="sky-low relative h-[clamp(260px,38vw,540px)]">
          <Image
            src="/hero-hands.webp"
            alt="A human hand reaching toward a robotic hand, fingertips almost touching"
            fill
            priority
            sizes="100vw"
            className="object-cover mix-blend-multiply [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
          />
        </div>

        {/* Cloud bank the apps rise out of. Decorative; the apps are explained in #work. */}
        <div aria-hidden="true" className="relative -mt-[clamp(40px,6vw,90px)]">
          <Clouds />
          <div className="relative mx-auto flex max-w-[1100px] items-start justify-center gap-6 px-6 pb-16 pt-6">
            <div className="hidden h-[480px] w-[210px] shrink-0 -rotate-[4deg] pt-16 md:block">
              <div className="w-[300px] origin-top-left scale-[0.7]">
                <AnvilScreen />
              </div>
            </div>
            <div className="relative z-10 flex min-w-0 max-w-[620px] flex-1 justify-center">
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
        <div className="sky-day">
          <section
            aria-label={hero.shippedLabel}
            className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 pb-6 pt-10"
          >
            <span className="text-[15px] text-muted">{hero.shippedLabel}</span>
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

        <section id="process" className="sky-dusk scroll-mt-6 text-white">
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
          </div>
        </section>

        <section id="contact" className="sky-night-to-dawn scroll-mt-6">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-8 px-6 py-32 text-center">
            <h2 className="max-w-[22ch] font-display text-[clamp(40px,5.5vw,76px)] leading-[1.02] text-white [text-shadow:0_2px_30px_rgba(30,40,80,0.18)]">
              {contact.headline}
            </h2>
            <a
              href={`mailto:${site.email}`}
              className={`${btn} bg-ink text-[19px] text-white hover:bg-black`}
            >
              {contact.button}
            </a>
            <p className="text-ink">{contact.note}</p>

            {/* The person behind the work, so it reads as reaching Kyle, not filing a ticket. */}
            <div className="mt-10 flex w-full max-w-[720px] flex-col items-center gap-5 rounded-[32px] border border-white/60 bg-white/45 p-7 text-left shadow-[0_30px_70px_-40px_rgba(60,64,120,0.5)] backdrop-blur-md sm:flex-row sm:items-start sm:gap-7 sm:p-9">
              {about.photo && (
                <Image
                  src={about.photo}
                  alt={about.name}
                  width={112}
                  height={112}
                  className="size-28 shrink-0 rounded-full object-cover"
                />
              )}
              <div className="flex flex-col gap-3">
                <p className="font-display text-[30px] leading-none">
                  {about.name}
                </p>
                {about.lines.map((l) => (
                  <p key={l} className="text-ink-soft">
                    {l}
                  </p>
                ))}
                <p className="font-semibold text-ink">{process.ownership}</p>
              </div>
            </div>
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
