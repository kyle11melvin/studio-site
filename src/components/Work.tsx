import Image from "next/image";
import { featured, more, work, type Featured } from "@/content/site";
import {
  AnvilScreen,
  EdgeDeskScreen,
  FlagshipStage,
  HuddleScreen,
} from "./mocks";

// The work section, top to bottom:
//   1. a swipeable row of every app's icon, each a plain #anchor to that app below
//   2. three flagship case studies, each on a dark lit stage with a second screen behind
//   3. a compact gallery for the rest: phone-thumbnail cards, then icon-only cards
// Static: no JavaScript, links are plain #anchors.

const FLAGSHIPS = ["switchboard", "birddog", "dioi"] as const;
type FlagshipId = (typeof FLAGSHIPS)[number];

const flagships = FLAGSHIPS.map((id) => featured.find((f) => f.id === id)!);
const gallery = featured.filter((f) => !FLAGSHIPS.includes(f.id as FlagshipId));

const thumbs: Record<string, React.ComponentType<{ className?: string }>> = {
  anvil: AnvilScreen,
  huddle: HuddleScreen,
  edge: EdgeDeskScreen,
};

// Soft panel behind each gallery phone, a tint of that app's own colors.
const tint: Record<string, string> = {
  anvil: "linear-gradient(160deg,#ece2d8,#d9c9b9)",
  huddle: "linear-gradient(160deg,#dde2ee,#c4cbe0)",
  edge: "linear-gradient(160deg,#f0ede4,#ddd8c9)",
};

const icon = (id: string) => `/icons/${id}.webp`;

const cards = [
  ...flagships.map((f) => ({ id: f.id, name: f.name, line: f.tagline })),
  ...gallery.map((f) => ({ id: f.id, name: f.name, line: f.tagline })),
  ...more.map((m) => ({ id: m.id, name: m.name, line: m.tagline })),
];

const frosted =
  "rounded-[32px] border border-white/80 bg-white/55 shadow-[0_30px_70px_-40px_rgba(60,64,120,0.45)] backdrop-blur-md";

function Status({ f }: { f: Featured }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-sm font-semibold ${
        f.live ? "bg-live-bg text-live-ink" : "bg-[#e4e7ec] text-ink-soft"
      }`}
    >
      {f.status}
    </span>
  );
}

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-6 pb-32 pt-16"
    >
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-x-8 gap-y-3 px-6 pb-7">
        <div>
          <h2
            id="work-title"
            className="font-display text-[clamp(44px,6vw,80px)] leading-none tracking-[-0.01em]"
          >
            {work.headline}
          </h2>
          <p className="mt-4 max-w-[52ch] text-ink-soft">{work.intro}</p>
        </div>
        <p className="text-[15px] text-muted">{work.swipeHint}</p>
      </div>

      <nav
        aria-label="Jump to an app"
        className="snap-x snap-mandatory scroll-px-6 overflow-x-auto pb-6 pt-2 xl:scroll-px-[calc((100vw-1132px)/2)]"
      >
        <ul className="flex w-max gap-3.5 px-6 xl:px-[calc((100vw-1132px)/2)]">
          {cards.map((c) => (
            <li key={c.id} className="snap-start">
              <a
                href={`#${c.id}`}
                className="flex w-[148px] flex-col gap-2.5 rounded-[22px] border border-white/80 bg-white/70 p-4 shadow-[0_14px_34px_-20px_rgba(60,64,120,0.45)] backdrop-blur-md transition-transform hover:-translate-y-0.5"
              >
                <Image
                  src={icon(c.id)}
                  alt=""
                  width={72}
                  height={72}
                  className="rounded-[17px]"
                />
                <span className="text-[17px] font-extrabold leading-tight tracking-[-0.02em]">
                  {c.name}
                </span>
                <span className="text-sm leading-snug text-muted">
                  {c.line}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 2. Flagship case studies */}
      {flagships.map((f, i) => (
        <div
          key={f.id}
          className="mx-auto max-w-[1180px] px-4 py-4 sm:px-6 sm:py-5"
        >
          <article
            id={f.id}
            className={`flex scroll-mt-4 flex-wrap items-center gap-x-14 gap-y-8 p-[clamp(12px,3vw,36px)] ${frosted} ${
              i % 2 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex min-w-0 flex-[1.25_1_460px]">
              <FlagshipStage id={f.id as FlagshipId} />
            </div>
            <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-[18px] px-2 pb-3 sm:px-0 sm:pb-0">
              <div className="flex flex-wrap items-center gap-3">
                <Image
                  src={icon(f.id)}
                  alt=""
                  width={44}
                  height={44}
                  className="rounded-[11px]"
                />
                <h3 className="text-[30px] font-extrabold tracking-[-0.03em]">
                  {f.name}
                </h3>
                <Status f={f} />
              </div>
              <p className="font-display text-[clamp(32px,3.6vw,46px)] leading-[1.05]">
                {f.tagline}.
              </p>
              <p className="text-ink-soft">{f.headline}</p>
              <div>
                <h4 className="text-[15px] font-bold text-muted">
                  {work.ideaLabel}
                </h4>
                <p className="mt-1 text-ink-soft">{f.idea}</p>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-muted">
                  {work.builtLabel}
                </h4>
                <p className="mt-1 text-ink-soft">{f.built}</p>
              </div>
              {f.href && (
                <a
                  href={f.href}
                  className="font-bold text-accent underline underline-offset-4"
                >
                  Visit the live site
                </a>
              )}
            </div>
          </article>
        </div>
      ))}

      {/* 3. Compact gallery */}
      <div className="mx-auto max-w-[1180px] px-4 pt-12 sm:px-6">
        <h3 className="mb-6 px-2 font-display text-[clamp(36px,4.5vw,56px)] leading-none sm:px-0">
          {work.moreHeadline}
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4 sm:gap-5">
          {gallery.map((f) => {
            const Thumb = thumbs[f.id];
            return (
              <article
                key={f.id}
                id={f.id}
                className={`flex scroll-mt-4 flex-col overflow-hidden ${frosted}`}
              >
                <div
                  className="relative flex h-[300px] justify-center overflow-hidden pt-8"
                  style={{ background: tint[f.id] }}
                >
                  <Thumb className="w-[230px]" />
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Image
                      src={icon(f.id)}
                      alt=""
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <h4 className="text-[22px] font-extrabold tracking-[-0.02em]">
                      {f.name}
                    </h4>
                    <Status f={f} />
                  </div>
                  <p className="font-display text-[26px] leading-[1.1]">
                    {f.tagline}.
                  </p>
                  <p className="text-ink-soft">{f.headline}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4 sm:mt-5 sm:gap-5">
          {more.map((m) => (
            <div
              key={m.id}
              id={m.id}
              className={`flex scroll-mt-4 gap-4 p-6 ${frosted}`}
            >
              <Image
                src={icon(m.id)}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-xl"
              />
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
