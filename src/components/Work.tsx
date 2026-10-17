import Image from "next/image";
import { featured, more, work, type FeaturedId } from "@/content/site";
import {
  AnvilScreen,
  BirdDogScreen,
  DioiScreen,
  EdgeDeskScreen,
  HuddleScreen,
  SwitchboardScreen,
} from "./mocks";

// The work section: a swipeable row of app icons that jump to each app's own band,
// then one full band per featured app (screen on one side, story on the other,
// alternating), then the smaller projects. Static: links are plain #anchors.

const screens: Record<FeaturedId, React.ComponentType> = {
  switchboard: SwitchboardScreen,
  dioi: DioiScreen,
  birddog: BirdDogScreen,
  anvil: () => <AnvilScreen running />,
  huddle: HuddleScreen,
  edge: EdgeDeskScreen,
};

// Soft panel behind each screen, a tint of that app's own colors.
const tint: Record<string, string> = {
  switchboard: "#d9e4e6",
  dioi: "#dce8e8",
  birddog: "#dce3ea",
  anvil: "#e8dfd6",
  huddle: "#d8ddea",
  edge: "#ece9e0",
};

const icon = (id: string) => `/icons/${id}.webp`;

const cards = [
  ...featured.map((f) => ({ id: f.id, name: f.name, line: f.tagline })),
  ...more.map((m) => ({ id: m.id, name: m.name, line: m.tagline })),
];

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-6 pb-24 pt-16">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-x-8 gap-y-3 px-6 pb-7">
        <div>
          <h2 id="work-title" className="font-display text-[clamp(44px,6vw,80px)] leading-none tracking-[-0.01em]">
            {work.headline}
          </h2>
          <p className="mt-4 max-w-[52ch] text-ink-soft">{work.intro}</p>
        </div>
        <p className="text-[15px] text-muted">{work.swipeHint}</p>
      </div>

      <nav aria-label="Jump to an app" className="snap-x snap-mandatory scroll-px-6 overflow-x-auto pb-6 pt-2 xl:scroll-px-[calc((100vw-1132px)/2)]">
        <ul className="flex w-max gap-3.5 px-6 xl:px-[calc((100vw-1132px)/2)]">
          {cards.map((c) => (
            <li key={c.id} className="snap-start">
              <a
                href={`#${c.id}`}
                className="flex w-[148px] flex-col gap-2.5 rounded-[22px] bg-white p-4 shadow-[0_1px_0_rgba(22,25,31,0.06),0_12px_30px_-18px_rgba(22,25,31,0.25)] transition-transform hover:-translate-y-0.5"
              >
                <Image src={icon(c.id)} alt="" width={72} height={72} className="rounded-[17px]" />
                <span className="text-[17px] font-extrabold leading-tight tracking-[-0.02em]">{c.name}</span>
                <span className="text-sm leading-snug text-muted">{c.line}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {featured.map((f, i) => {
        const Screen = screens[f.id];
        return (
          <article
            key={f.id}
            id={f.id}
            className={`mx-auto flex max-w-[1180px] scroll-mt-4 flex-wrap items-center gap-x-[72px] gap-y-10 px-6 py-12 ${
              i % 2 ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className="flex min-w-0 flex-[1_1_420px] justify-center rounded-[28px] px-6 py-[clamp(28px,5vw,56px)]"
              style={{ background: tint[f.id] }}
            >
              <Screen />
            </div>
            <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px]">
              <div className="flex flex-wrap items-center gap-3">
                <Image src={icon(f.id)} alt="" width={44} height={44} className="rounded-[11px]" />
                <h3 className="text-[30px] font-extrabold tracking-[-0.03em]">{f.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-sm font-semibold ${
                    f.live ? "bg-live-bg text-live-ink" : "bg-[#e4e7ec] text-ink-soft"
                  }`}
                >
                  {f.status}
                </span>
              </div>
              <p className="font-display text-[clamp(30px,3.4vw,42px)] leading-[1.08]">{f.tagline}.</p>
              <p className="text-ink-soft">{f.headline}</p>
              <div>
                <h4 className="text-[15px] font-bold text-muted">The problem</h4>
                <p className="mt-1 text-ink-soft">{f.problem}</p>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-muted">What I built</h4>
                <p className="mt-1 text-ink-soft">{f.built}</p>
              </div>
              <p className="text-[15px] text-muted">Built with {f.stack}</p>
              {f.href && (
                <a href={f.href} className="font-bold text-accent underline underline-offset-4">
                  Visit the live site
                </a>
              )}
            </div>
          </article>
        );
      })}

      <div className="mx-auto max-w-[1180px] px-6 pt-14">
        <h3 className="mb-6 font-display text-[clamp(36px,4.5vw,56px)] leading-none">{work.moreHeadline}</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-8">
          {more.map((m) => (
            <div key={m.id} id={m.id} className="flex scroll-mt-4 gap-4 border-t-2 border-ink pb-6 pt-[18px]">
              <Image src={icon(m.id)} alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-xl" />
              <div>
                <h4 className="mb-1.5 text-[22px] font-bold">{m.name}</h4>
                <p className="text-ink-soft">{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
