import Image from "next/image";
import { Clouds } from "@/components/Clouds";
import { AnvilScreen, BirdDogScreen, SwitchboardScreen } from "@/components/mocks";
import { Work } from "@/components/Work";
import { contact, hero, process, site } from "@/content/site";

const btn = "inline-flex min-h-[54px] items-center rounded-full px-7 font-semibold no-underline";

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
          <a href="#top" className="text-xl font-extrabold tracking-[-0.02em] text-white">{site.name}</a>
          <nav aria-label="Main" className="flex flex-wrap items-center gap-1">
            <a href="#work" className="hidden px-3.5 py-3 text-white/85 hover:text-white sm:inline">Work</a>
            <a href="#process" className="hidden px-3.5 py-3 text-white/85 hover:text-white sm:inline">How it works</a>
            <a href="#contact" className="ml-2 rounded-full bg-white px-5 py-3 font-semibold text-ink">Start a project</a>
          </nav>
        </header>

        <section id="top" className="relative mx-auto flex max-w-[1000px] flex-col items-center gap-7 px-6 pt-[88px] text-center">
          <h1 className="font-display text-[clamp(52px,8vw,112px)] leading-[0.98] tracking-[-0.02em] text-white [text-shadow:0_2px_30px_rgba(30,40,80,0.18)]">
            {hero.headline}
          </h1>
          <p className="max-w-[46ch] text-xl text-white/90">{hero.intro}</p>
          <a href="#contact" className={`${btn} bg-ink text-white hover:bg-black`}>Start a project</a>
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
              <div className="w-[300px] origin-top-left scale-[0.7]"><AnvilScreen /></div>
            </div>
            <div className="relative z-10 flex min-w-0 max-w-[620px] flex-1 justify-center">
              <SwitchboardScreen />
            </div>
            <div className="hidden h-[480px] w-[210px] shrink-0 rotate-[4deg] pt-8 md:block">
              <div className="w-[300px] origin-top-left scale-[0.7]"><BirdDogScreen /></div>
            </div>
          </div>
        </div>
      </div>

      <section aria-label={hero.shippedLabel} className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 pb-6 pt-10">
        <span className="text-[15px] text-muted">{hero.shippedLabel}</span>
        {shipped.map((s) => (
          <span key={s.name} className={`text-xl text-ink-soft ${s.className}`}>{s.name}</span>
        ))}
      </section>

      <main>
        <Work />

        <section id="process" className="scroll-mt-6 bg-ink text-fog">
          <div className="mx-auto max-w-[1240px] px-6 py-24">
            <h2 className="mb-12 max-w-[18ch] font-display text-[clamp(40px,5.5vw,72px)] leading-none tracking-[-0.01em]">
              {process.headline}
            </h2>
            <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-10">
              {process.steps.map((s, i) => (
                <li key={s.title} className="flex flex-col gap-2.5">
                  <span aria-hidden="true" className="font-display text-[64px] leading-none text-sky-4">{i + 1}</span>
                  <h3 className="text-[22px] font-bold">{s.title}</h3>
                  <p className="text-[#b4bac4]">{s.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-14 max-w-[60ch] border-t border-[#343944] pt-6 text-[#b4bac4]">{process.ownership}</p>
          </div>
        </section>

        <section id="contact" className="bg-sky scroll-mt-6">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-8 px-6 py-32 text-center">
            <h2 className="max-w-[22ch] font-display text-[clamp(40px,5.5vw,76px)] leading-[1.02] text-white [text-shadow:0_2px_30px_rgba(30,40,80,0.18)]">
              {contact.headline}
            </h2>
            <a href={`mailto:${site.email}`} className={`${btn} bg-ink text-[19px] text-white hover:bg-black`}>
              {contact.button}
            </a>
            <p className="text-ink">{contact.note}</p>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 px-6 pb-12 pt-6 text-[15px] text-muted">
        <span>© {site.year} {site.name}, {site.location}</span>
        <span>This site is built with the same tools it describes.</span>
      </footer>
    </>
  );
}
