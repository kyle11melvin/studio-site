import Image from "next/image";
import { featured, more, work, type Featured } from "@/content/site";
import { SwitchboardReplay } from "@/components/SwitchboardReplay";
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

// Order: Bird Dog leads, then the live DefendItOwnIt site, then Switchboard (Kyle, 2026-10-17).
const FLAGSHIPS = ["birddog", "dioi", "switchboard"] as const;
type FlagshipId = (typeof FLAGSHIPS)[number];

const flagships = FLAGSHIPS.map((id) => featured.find((f) => f.id === id)!);
const gallery = featured.filter((f) => !FLAGSHIPS.includes(f.id as FlagshipId));

const thumbs: Record<string, React.ComponentType<{ className?: string }>> = {
  anvil: AnvilScreen,
  huddle: HuddleScreen,
  edge: EdgeDeskScreen,
};

const icon = (id: string) => `/icons/${id}.webp`;

// The bento below "More we've built". Colors are each app's own palette (from its repo).
type Bento = {
  id: string;
  span: string;
  tall?: boolean;
  /** Narrow card: text on top, icon underneath, at every width. */
  stack?: boolean;
  phone?: string;
  bg: string;
  ink: string;
  soft: string;
  glow: string;
  glowAt: React.CSSProperties;
  border: string;
  chipBg: string;
  chipInk: string;
};
const bento: Bento[] = [
  {
    id: "anvil", span: "lg:row-span-2", tall: true, phone: "w-[min(300px,74vw)] -rotate-[4deg]",
    bg: "radial-gradient(130% 80% at 50% 100%,#3a1d0c 0%,#15100c 55%,#0a0908 100%)",
    ink: "#f3f3f1", soft: "rgba(243,243,241,0.72)", glow: "#ff6b1a", glowAt: { left: "15%", bottom: "-8%" },
    border: "border-[#ff6b1a]/20", chipBg: "rgba(255,107,26,0.18)", chipInk: "#ffa033",
  },
  {
    id: "huddle", span: "lg:col-span-2", phone: "w-[min(230px,60vw)] rotate-[5deg]",
    bg: "linear-gradient(150deg,#16243c 0%,#0a1321 70%)",
    ink: "#eef2f8", soft: "rgba(238,242,248,0.72)", glow: "#e8b95a", glowAt: { right: "-6%", top: "-30%" },
    border: "border-[#e8b95a]/20", chipBg: "rgba(232,185,90,0.16)", chipInk: "#ffd98a",
  },
  {
    id: "edge", span: "lg:col-span-2", phone: "w-[min(230px,60vw)] -rotate-[4deg]",
    bg: "linear-gradient(150deg,#f4f2ed 0%,#e9e5da 100%)",
    ink: "#111111", soft: "#3a3a3a", glow: "#8fd39b", glowAt: { right: "4%", bottom: "-40%" },
    border: "border-[#cfccc3]", chipBg: "#111111", chipInk: "#f4f2ed",
  },
  {
    id: "finance", span: "lg:col-span-1", stack: true,
    bg: "linear-gradient(150deg,#0f4a32 0%,#0a2e21 70%)",
    ink: "#f0f8f3", soft: "rgba(240,248,243,0.75)", glow: "#3bb07f", glowAt: { right: "-20%", top: "-20%" },
    border: "border-[#3bb07f]/25", chipBg: "", chipInk: "",
  },
  {
    id: "markup", span: "lg:col-span-2",
    // Markup's own site is near-black with warm off-white; the chevron logo is gold. No green.
    bg: "radial-gradient(120% 120% at 85% 40%,#1c1e24 0%,#0b0c0f 60%)",
    ink: "#f3f1ea", soft: "rgba(243,241,234,0.7)", glow: "#c9a85a", glowAt: { right: "2%", top: "-10%" },
    border: "border-white/10", chipBg: "", chipInk: "",
  },
];

const cards = [
  ...flagships.map((f) => ({ id: f.id, name: f.name, line: f.tagline })),
  ...gallery.map((f) => ({ id: f.id, name: f.name, line: f.tagline })),
  ...more.map((m) => ({ id: m.id, name: m.name, line: m.tagline })),
];

// Every other flagship is a daylight card (Kyle, 2026-10-17: alternate light and dark between
// the apps). `.on-light` flips the text tokens back to ink inside the dark band.
const daylight =
  "on-light rounded-[32px] border border-white/70 bg-[linear-gradient(160deg,#fbf6f0,#efe8f4)] text-ink shadow-[0_40px_90px_-40px_rgba(5,10,30,0.8)]";

const frosted =
  "rounded-[32px] border border-white/12 bg-white/[0.06] shadow-[0_40px_80px_-40px_rgba(5,10,30,0.7)] backdrop-blur-md";

function Status({ f }: { f: Featured }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-sm font-semibold ${
        f.live ? "bg-live-bg text-live-ink" : "bg-ink/10 text-ink-soft"
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
      className="scroll-mt-6 pb-32 pt-[clamp(200px,18vw,240px)]"
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
        <p className="flex items-center gap-2 text-[15px] font-semibold text-ink-soft">
          {work.swipeHint}
          <span aria-hidden="true" className="swipe-nudge text-[20px] leading-none text-sky-4">&rarr;</span>
        </p>
      </div>

      <div className="app-row-wrap">
      <nav
        aria-label="Jump to an app"
        className="app-row snap-x snap-mandatory scroll-px-6 overflow-x-auto pb-4 pt-1 xl:scroll-px-[calc((100vw-1132px)/2)]"
      >
        <ul className="flex w-max items-center gap-3.5 px-6 xl:px-[calc((100vw-1132px)/2)]">
          {cards.map((c) => (
            <li key={c.id} className="app-tile snap-center py-3">
              <a
                href={`#${c.id}`}
                className="app-tile-card flex w-[148px] flex-col gap-2.5 rounded-[22px] border border-white/12 bg-[rgba(255,255,255,0.07)] p-4 hover:bg-white/[0.12]"
              >
                <Image
                  src={icon(c.id)}
                  alt=""
                  width={72}
                  height={72}
                  className="app-tile-icon rounded-[17px]"
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
      </div>

      {/* 2. Flagship case studies */}
      {flagships.map((f, i) => (
        <div
          key={f.id}
          className="mx-auto max-w-[1180px] px-4 py-4 sm:px-6 sm:py-5"
        >
          <article
            id={f.id}
            className={`reveal flex scroll-mt-4 flex-wrap items-center gap-x-14 gap-y-8 p-[clamp(12px,3vw,36px)] ${
              i % 2 ? `flex-row-reverse ${daylight}` : frosted
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
                  className="font-bold text-copper-ink underline underline-offset-4"
                >
                  Visit the live site
                </a>
              )}
            </div>
          </article>
        </div>
      ))}

      {/* Switchboard is the last flagship; its replay sits right under it. */}
      <SwitchboardReplay />

      {/* 3. "More we've built": a bento of brand-colored stages (Kyle, 2026-10-17: "you can do
          better than this"). ANVIL runs tall on the left; The Huddle and Edge Desk sit beside it
          with their phones rising from the corner; Ledger and Markup get their icons lit on
          their own colors. Each stage uses the app's real palette from its repo. */}
      <div className="mx-auto max-w-[1180px] px-4 pt-14 sm:px-6">
        <h3 className="reveal mb-7 px-2 font-display text-[clamp(36px,4.5vw,56px)] leading-none sm:px-0">
          {work.moreHeadline}
        </h3>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {bento.map((b) => {
            const f = gallery.find((g) => g.id === b.id);
            const m = more.find((x) => x.id === b.id);
            const name = f?.name ?? m?.name ?? "";
            const tagline = f?.tagline ?? m?.tagline ?? "";
            const line = f?.headline ?? m?.body ?? "";
            const Thumb = thumbs[b.id];
            return (
              <article
                key={b.id}
                id={b.id}
                className={`reveal group relative isolate flex scroll-mt-4 overflow-hidden rounded-[32px] border shadow-[0_40px_80px_-40px_rgba(5,10,30,0.8)] ${b.span} ${b.border} ${
                  b.tall ? "min-h-[520px] flex-col lg:min-h-[760px]" : b.stack ? "min-h-[300px] flex-col" : "min-h-[300px] flex-col sm:flex-row"
                }`}
                style={{ background: b.bg, color: b.ink }}
              >
                {/* soft brand glow */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -z-10 size-[420px] rounded-full blur-[90px]"
                  style={{ background: b.glow, opacity: 0.45, ...b.glowAt }}
                />
                <div className={`relative z-10 flex flex-col gap-2.5 p-7 sm:p-8 ${b.tall || b.stack ? "" : "sm:w-[56%]"}`}>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Image src={icon(b.id)} alt="" width={40} height={40} className="rounded-[11px] shadow-[0_6px_16px_-6px_rgba(0,0,0,0.5)]" />
                    <h4 className="text-[22px] font-extrabold tracking-[-0.02em]">{name}</h4>
                    {f && (
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[13px] font-semibold"
                        style={{ background: b.chipBg, color: b.chipInk }}
                      >
                        {f.status}
                      </span>
                    )}
                  </div>
                  <p className={`font-display leading-[1.04] ${b.tall ? "text-[clamp(34px,3.4vw,46px)]" : "text-[clamp(28px,2.6vw,34px)]"}`}>
                    {tagline}.
                  </p>
                  <p className="max-w-[36ch] text-[16px] leading-relaxed" style={{ color: b.soft }}>
                    {line}
                  </p>
                </div>

                {Thumb ? (
                  <div
                    className={`pointer-events-none relative flex flex-1 justify-center transition-transform duration-500 group-hover:-translate-y-2 ${
                      b.tall ? "items-end px-8" : "items-end sm:justify-end sm:pr-6"
                    }`}
                  >
                    <div className={`${b.phone} translate-y-[18%]`}>
                      <Thumb className="w-full" />
                    </div>
                  </div>
                ) : (
                  <div className={`relative flex flex-1 items-center justify-center p-8 pt-2 ${b.stack ? "" : "sm:justify-end sm:pr-12"}`}>
                    <Image
                      src={icon(b.id)}
                      alt=""
                      width={b.stack ? 104 : 132}
                      height={b.stack ? 104 : 132}
                      className="rounded-[32px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-3deg]"
                      style={{ boxShadow: `0 30px 60px -20px rgba(0,0,0,0.7), 0 0 60px -6px ${b.glow}` }}
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
