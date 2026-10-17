// Drawn stand-ins for each app's screen, in that app's own colors and type.
// Names and numbers are SAMPLE DATA. Never put real client records here.
// Swap a mock for a real screenshot by rendering <Image> in its place.

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[300px] max-w-full rounded-[40px] bg-[#050709] p-2.5 shadow-[0_30px_60px_-20px_rgba(22,25,31,0.45)]">
      <div className="overflow-hidden rounded-[31px]">{children}</div>
    </div>
  );
}

function Bar({ w = "100%" }: { w?: string }) {
  return <span className="block h-1.5 rounded-full bg-[#cbd1d9]" style={{ width: w }} />;
}

export function SwitchboardMock() {
  const answers = [
    { name: "Claude", bars: ["100%", "85%", "92%", "60%"], pick: true },
    { name: "ChatGPT", bars: ["100%", "70%", "88%", "50%"] },
    { name: "Grok", bars: ["90%", "100%", "65%", "78%"] },
  ];
  return (
    <div className="w-full max-w-[680px] overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-20px_rgba(22,25,31,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-[#e1e5ea] bg-[#f1f3f6] px-3.5 py-3">
        <span className="size-2.5 rounded-full bg-[#e06a5c]" />
        <span className="size-2.5 rounded-full bg-[#e5b94a]" />
        <span className="size-2.5 rounded-full bg-[#6bbf6a]" />
        <span className="ml-3 text-xs text-[#6b7280]">switchboard</span>
      </div>
      <div className="flex flex-col gap-3.5 p-5 text-sm">
        <div className="rounded-lg border-[1.5px] border-ink px-3.5 py-3">
          Write the homepage copy for a one-person app studio
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs">
          {["Claude", "ChatGPT", "Grok"].map((m) => (
            <span key={m} className="rounded-full bg-ink px-2.5 py-1 text-white">{m}</span>
          ))}
          <span className="rounded-full border border-line px-2.5 py-1 text-[#6b7280]">Perplexity</span>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {answers.map((a) => (
            <div
              key={a.name}
              className={`flex flex-col gap-2 rounded-lg bg-[#f5f6f8] p-3 ${a.pick ? "outline-2 outline-accent" : ""}`}
            >
              <b className="text-xs">{a.name}</b>
              {a.bars.map((w, i) => <Bar key={i} w={w} />)}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2.5 rounded-lg bg-[#eef0ff] px-3.5 py-3">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2b3bff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          <span><b>Judge pick: Claude.</b> Meets 4 of 4 of your project rules.</span>
        </div>
      </div>
    </div>
  );
}

export function BirdDogMock() {
  const mission = [
    { name: "Jordan Lee, First Team", action: "Call" },
    { name: "Sam Patel, eXp", action: "Text" },
    { name: "Casey Wu, Coldwell", action: "Call" },
  ];
  const box = "size-3.5 shrink-0 rounded";
  return (
    <Phone>
      <div className="bg-[#f4f2ec] text-[13px] text-[#0a1528]">
        <div className="bg-[#0a1528] px-[18px] pb-4 pt-[26px] text-[#f4f2ec]">
          <div className="font-[Georgia,serif] text-[22px]">Thursday</div>
          <div className="text-xs text-[#c9a94b]">Agent day, 3 of 7 done</div>
        </div>
        <div className="flex flex-col gap-1.5 px-4 py-3.5">
          <b className="mb-0.5 font-[Georgia,serif] text-[15px]">Your list</b>
          <div className="flex items-center gap-2 text-[#9aa0a8] line-through"><span className={`${box} bg-[#9aa0a8]`} />Send Dana the rate sheet</div>
          <div className="flex items-center gap-2"><span className={`${box} border-[1.5px] border-[#0a1528]`} />Lunch with Marco, 12:30</div>
          <b className="mb-0.5 mt-2.5 font-[Georgia,serif] text-[15px]">Today&apos;s mission</b>
          <div className="flex items-center gap-2 text-[#9aa0a8] line-through"><span className={`${box} bg-[#9aa0a8]`} />Alex Rivera, Compass</div>
          {mission.map((m) => (
            <div key={m.name} className="flex items-center justify-between gap-2 rounded-lg bg-white p-2">
              <span className="flex items-center gap-2"><span className={`${box} border-[1.5px] border-[#0a1528]`} />{m.name}</span>
              <span className="rounded-md bg-[#0a1528] px-2 py-0.5 text-[11px] text-[#c9a94b]">{m.action}</span>
            </div>
          ))}
        </div>
      </div>
    </Phone>
  );
}

export function AnvilMock() {
  const row = (n: string, what: string, dim = false) => (
    <div className={`flex gap-2.5 ${dim ? "text-[#9aa4ae]" : ""}`}>
      <span className="w-6 text-right text-[#9aa4ae]">{n}</span>{what}
    </div>
  );
  return (
    <Phone>
      <div className="flex flex-col gap-3.5 bg-[#1b1f24] px-[18px] pb-5 pt-7 text-[#e6eaee]">
        <div className="text-sm font-extrabold tracking-[0.18em] text-[#7fa6c4]">ANVIL</div>
        <div className="rounded-[14px] bg-[#262b32] p-3.5 text-center">
          <div className="font-display-num text-[64px] leading-none text-white">07:42</div>
          <div className="text-xs text-[#7fa6c4]">Block A, round 2 of 3</div>
        </div>
        <div className="flex flex-col gap-1.5 text-[13px]">
          <b className="text-[#7fa6c4]">A. 3 rounds</b>
          {row("12", "DB thrusters @35s")}
          {row("10", "Pull-ups")}
          {row("15", "Cal row")}
          <b className="mt-2 text-[#7fa6c4]">B. 10 min EMOM</b>
          {row("8", "Goblet squats @53", true)}
          {row("12", "Leg curls", true)}
        </div>
        <div className="flex gap-2 text-[13px]">
          <span className="flex-1 rounded-[10px] bg-[#7fa6c4] p-2.5 text-center font-bold text-[#11151a]">Pause</span>
          <span className="flex-1 rounded-[10px] border border-[#3a414a] p-2.5 text-center">End here</span>
        </div>
      </div>
    </Phone>
  );
}

export function EdgeDeskMock() {
  const facts = [
    ["Reference", "Pinnacle"],
    ["Depth", "$1,840"],
    ["Gap open", "14 min"],
  ];
  return (
    <div className="flex w-full max-w-[640px] flex-col gap-4 rounded-xl bg-[#f4f3ee] p-6 text-[#1c1f22] shadow-[0_30px_60px_-20px_rgba(22,25,31,0.35)]">
      <div className="flex items-baseline justify-between border-b border-[#d8d5ca] pb-2.5 font-serif">
        <span className="text-xl font-semibold">The Board</span>
        <span className="text-sm text-[#6b6a63]">Week 7, live</span>
      </div>
      <div className="flex flex-wrap items-end gap-5">
        <div>
          <div className="font-display-num text-[clamp(64px,10vw,96px)] leading-[0.9] text-[#9a7415]">+3.1%</div>
          <div className="font-serif text-[#6b6a63]">fee-adjusted value</div>
        </div>
        <div className="flex min-w-[200px] flex-1 flex-col gap-1 font-serif">
          <b className="text-xl">Bills −2.5</b>
          <span>Kalshi, resting order</span>
          <span className="text-[#6b6a63]">Fair price 54.2¢, ask 51¢</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 font-mono text-[13px]">
        {facts.map(([k, v]) => (
          <div key={k} className="border-t-2 border-[#1c1f22] pt-2">
            <div className="text-[#6b6a63]">{k}</div>{v}
          </div>
        ))}
      </div>
    </div>
  );
}
