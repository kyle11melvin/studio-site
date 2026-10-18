import { replay } from "@/content/site";

// The Switchboard replay (Kyle, 2026-10-17). No JavaScript: the idea chips are radio buttons,
// `.replay:has(#replay-N:checked)` shows run N, and the panel's children animate in on show
// (three answers, a "judging" beat, then the winner), so it plays every time a chip is picked.
// Renders nothing until site.ts holds real runs.
export function SwitchboardReplay() {
  if (replay.runs.length === 0) return null;
  return (
    <div className="mx-auto max-w-[1180px] px-4 py-4 sm:px-6 sm:py-5">
      <section
        aria-labelledby="replay-title"
        className="replay reveal rounded-[32px] border border-white/12 bg-[radial-gradient(120%_80%_at_50%_0%,#1c3a42,#0a1517)] p-[clamp(20px,3.5vw,44px)] text-[#ecf3f4] shadow-[0_40px_80px_-40px_rgba(5,10,30,0.7)]"
      >
        <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#f0aa80]">{replay.eyebrow}</p>
        <h3 id="replay-title" className="mt-3 font-display text-[clamp(32px,3.8vw,52px)] leading-[1.04]">
          {replay.headline}
        </h3>
        <p className="mt-3 max-w-[56ch] text-[#97adb3]">{replay.intro}</p>

        <div role="radiogroup" aria-label="Pick an idea" className="mt-7 flex flex-wrap gap-2.5">
          {replay.runs.map((r, i) => (
            <label
              key={r.label}
              className="flex min-h-[50px] cursor-pointer items-center rounded-full border-2 border-white/25 px-5 text-[17px] transition-colors has-[:checked]:border-[#e08a58] has-[:checked]:bg-[#e08a58] has-[:checked]:text-[#0a1517] has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-[#f0aa80]"
            >
              <input type="radio" name="replay" id={`replay-${i}`} defaultChecked={i === 0} className="sr-only" />
              {r.label}
            </label>
          ))}
        </div>

        {replay.runs.map((r, i) => (
          <div key={r.label} className={`replay-run replay-run-${i} mt-8`}>
            <p className="replay-step rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[17px]">
              <span className="mr-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#97adb3]">You asked</span>
              {r.idea}
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {r.answers.map((a, j) => (
                <div
                  key={a.ai}
                  className={`replay-step replay-answer rounded-2xl border bg-white/[0.04] p-5 text-[15px] leading-relaxed text-[#cfdcdf] ${
                    j === r.winner ? "replay-winner border-white/10" : "border-white/10"
                  }`}
                  style={{ animationDelay: `${0.25 + j * 0.45}s` }}
                >
                  <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#97adb3]">{a.ai}</p>
                  {a.text}
                </div>
              ))}
            </div>
            <p className="replay-step replay-judging mt-5 text-[15px] text-[#97adb3]" style={{ animationDelay: "1.7s" }}>
              {replay.judging}
              <span aria-hidden="true">&hellip;</span>
            </p>
            <div
              className="replay-step mt-3 rounded-2xl border border-[#e08a58]/60 bg-[#e08a58]/10 p-5"
              style={{ animationDelay: "2.5s" }}
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#f0aa80]">
                {replay.picked}: {r.answers[r.winner]?.ai}
              </p>
              <p className="mt-2 text-[16px] text-[#ecf3f4]">{r.why}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
