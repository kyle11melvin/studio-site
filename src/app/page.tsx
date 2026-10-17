import { Showcase } from "@/components/Showcase";
import { contact, hero, more, process, site } from "@/content/site";

const btn = "inline-flex min-h-[50px] items-center rounded-[10px] px-6 font-semibold no-underline";

export default function Home() {
  return (
    <>
      <header className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-[22px]">
        <a href="#top" className="text-xl font-extrabold tracking-[-0.02em]">{site.name}</a>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-1">
          <a href="#work" className="px-3.5 py-3 text-[#4a505a] hover:text-ink">Work</a>
          <a href="#process" className="px-3.5 py-3 text-[#4a505a] hover:text-ink">How it works</a>
          <a href="#contact" className="ml-2 rounded-[10px] bg-ink px-5 py-3 font-semibold text-white">Start a project</a>
        </nav>
      </header>

      <main>
        <section id="top" className="mx-auto flex max-w-[1240px] flex-wrap items-end gap-x-16 gap-y-8 px-6 pb-12 pt-16">
          <h1 className="min-w-0 flex-[999_1_640px] text-[clamp(48px,7.4vw,104px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
            {hero.headline}
          </h1>
          <div className="flex flex-[1_1_320px] flex-col gap-6 pb-2">
            <p className="max-w-[38ch] text-ink-soft">{hero.intro}</p>
            <div className="flex flex-wrap gap-2.5">
              <a href="#contact" className={`${btn} bg-accent text-white hover:bg-[#1f2ee0]`}>Start a project</a>
              <a href="#work" className={`${btn} border-[1.5px] border-ink hover:bg-ink hover:text-white`}>See the work</a>
            </div>
          </div>
        </section>

        <Showcase />

        <section aria-labelledby="more" className="mx-auto max-w-[1240px] px-6 pb-24">
          <h2 id="more" className="mb-6 text-[clamp(30px,4vw,44px)] font-extrabold tracking-[-0.035em]">More I&apos;ve built</h2>
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
            <h2 className="mb-12 max-w-[16ch] text-[clamp(36px,5vw,64px)] font-extrabold leading-none tracking-[-0.04em]">
              {process.headline}
            </h2>
            <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-10">
              {process.steps.map((s, i) => (
                <li key={s.title} className="flex flex-col gap-2.5">
                  <span aria-hidden="true" className="text-[56px] font-extrabold leading-none text-accent-soft">{i + 1}</span>
                  <h3 className="text-[22px] font-bold">{s.title}</h3>
                  <p className="text-[#b4bac4]">{s.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-14 max-w-[60ch] border-t border-[#343944] pt-6 text-[#b4bac4]">{process.ownership}</p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1240px] scroll-mt-6 px-6 py-28">
          <h2 className="max-w-[13ch] text-[clamp(44px,7vw,96px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
            {contact.headline}
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href={`mailto:${site.email}`} className={`${btn} min-h-14 bg-accent px-7 text-[19px] text-white hover:bg-[#1f2ee0]`}>
              {contact.button}
            </a>
            <p className="max-w-[40ch] text-ink-soft">{contact.note}</p>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 border-t border-line px-6 pb-12 pt-6 text-[15px] text-muted">
        <span>© {site.year} {site.name}, {site.location}</span>
        <span>This site is built with the same tools it describes.</span>
      </footer>
    </>
  );
}
