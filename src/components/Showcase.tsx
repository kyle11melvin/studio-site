"use client";

import { useState } from "react";
import { featured, type FeaturedId } from "@/content/site";
import { AnvilMock, BirdDogMock, EdgeDeskMock, SwitchboardMock } from "./mocks";

const screens: Record<FeaturedId, React.ComponentType> = {
  switchboard: SwitchboardMock,
  birddog: BirdDogMock,
  anvil: AnvilMock,
  edge: EdgeDeskMock,
};

export function Showcase() {
  const [active, setActive] = useState<FeaturedId>(featured[0].id);
  const cur = featured.find((f) => f.id === active)!;
  const Screen = screens[active];

  return (
    <section id="work" aria-label="Featured work" className="mx-auto max-w-[1240px] scroll-mt-6 px-6 pb-24 pt-4">
      <div role="group" aria-label="Choose an app" className="mb-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-2">
        {featured.map((f) => {
          const on = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f.id)}
              className={`min-h-16 cursor-pointer rounded-xl border-[1.5px] px-4 py-3 text-left transition-colors ${
                on ? "border-ink bg-ink text-white" : "border-line text-ink hover:border-ink"
              }`}
            >
              <span className="block text-lg font-bold">{f.name}</span>
              <span className="block text-sm opacity-75">{f.tagline}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-10 rounded-[20px] bg-white p-[clamp(16px,3vw,40px)]">
        <div className="flex min-h-[520px] min-w-0 flex-[999_1_600px] items-center justify-center rounded-[14px] bg-mist p-[clamp(16px,3vw,40px)]">
          <Screen />
        </div>

        <div aria-live="polite" className="flex min-w-0 flex-[1_1_300px] flex-col gap-[18px]">
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="text-[34px] font-extrabold tracking-[-0.03em]">{cur.name}</h2>
            <span
              className={`rounded-full px-2.5 py-1 text-sm font-semibold ${
                cur.live ? "bg-live-bg text-live-ink" : "bg-[#eceef1] text-ink-soft"
              }`}
            >
              {cur.status}
            </span>
          </div>
          <p className="text-[22px] font-semibold leading-tight tracking-[-0.01em]">{cur.headline}</p>
          <div>
            <h3 className="text-[15px] font-bold text-muted">The problem</h3>
            <p className="mt-1 text-ink-soft">{cur.problem}</p>
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-muted">What I built</h3>
            <p className="mt-1 text-ink-soft">{cur.built}</p>
          </div>
          <p className="text-[15px] text-muted">Built with {cur.stack}</p>
          {cur.href && (
            <a href={cur.href} className="font-semibold text-accent underline underline-offset-4">
              Open {cur.name}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
