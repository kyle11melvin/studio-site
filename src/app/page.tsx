import { AnvilMock, BirdDogMock, SwitchboardMock } from "@/components/mocks";
import { Showcase } from "@/components/Showcase";
import { contact, hero, more, process, site } from "@/content/site";

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
      <div className="bg-sky relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[210px] h-[120px] bg-[linear-gradient(180deg,rgba(255,236,214,0)_0%,rgba(255,236,214,0.55)_60%,rgba(255,236,214,0)_100%)]"
        />

        <header className="relative mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-[22px]">
          <a href="#top" className="text-xl font-extrabold tracking-[-0.02em] text-white">{site.name}</a>
          <nav aria-label="Main" className="flex flex-wrap items-center gap-1">
            <a href="#work" className="px-3.5 py-3 text-white/85 hover:text-white">Work</a>
            <a href="#process" className="px-3.5 py-3 text-white/85 hover:text-white">How it works</a>
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

        {/* The apps rise out of the sky. Decorative: the same apps are explained in #work. */}
        <div aria-hidden="true" className="relative mx-auto mt-[72px] flex h-[440px] max-w-[1100px] justify-center px-6">
          <div className="absolute left-[max(24px,calc(50%-500px))] top-[70px] hidden origin-top-left -rotate-[4deg] scale-[0.7] lg:block">
            <AnvilMock />
          </div>
          <div className="relative z-10 flex w-full justify-center">
            <SwitchboardMock />
          </div>
          <div className="absolute right-[max(24px,calc(50%-500px))] top-[40px] hidden origin-top-right rotate-[4deg] scale-[0.7] lg:block">
            <BirdDogMock />
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
        <Showcase />

        <section aria-labelledby="more" className="mx-auto max-w-[1240px] px-6 pb-24">
          <h2 id="more" className="mb-6 font-display text-[clamp(36px,4.5vw,56px)] leading-none tracking-[-0.01em]">More I&apos;ve built</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-x-8">
            {more.map((m) => (
              <div key={m.name} className="border-t-2 border-ink pb-6 pt-[18px]">
                <h3 className="mb-1.5 text-[22px] font-bold">{m.name}</h3>
                <p className="text-ink-soft">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

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
            <h2 className="max-w-[14ch] font-display text-[clamp(48px,7vw,100px)] leading-[0.98] text-white [text-shadow:0_2px_30px_rgba(30,40,80,0.18)]">
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
