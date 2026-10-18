import Image from "next/image";

// App screens for the hero and the showcase.
// Real screenshots (public/screens/) were taken by running each app locally from its own
// repo: Switchboard against its stand-in AIs, Bird Dog with an invented demo book (no real
// client ever appears here), ANVIL with its test workout, The Huddle with its built-in
// sample roster. Edge Desk needs its live database, so it stays a drawn screen in its own
// design. To refresh a screenshot, replace the file; the frames don't change.

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[300px] max-w-full rounded-[44px] bg-[#050709] p-2.5 shadow-[0_30px_60px_-20px_rgba(22,25,31,0.45)]">
      <div className="relative aspect-[390/844] overflow-hidden rounded-[35px]">
        <Image src={src} alt={alt} fill sizes="300px" className="object-cover object-top" />
      </div>
    </div>
  );
}

function BrowserWindow({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="w-full max-w-[680px] overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-20px_rgba(22,25,31,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-[#e1e5ea] bg-[#f1f3f6] px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#e06a5c]" />
        <span className="size-2.5 rounded-full bg-[#e5b94a]" />
        <span className="size-2.5 rounded-full bg-[#6bbf6a]" />
        <span className="ml-3 text-xs text-[#6b7280]">{label}</span>
      </div>
      <div className="relative aspect-[1280/820]">
        <Image src={src} alt={alt} fill sizes="(min-width: 760px) 680px, 100vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

// The desktop window is unreadable at phone width, so phones get the phone-size screenshot.
export function SwitchboardScreen() {
  const alt = "Switchboard showing the top answer to a question, picked by a judge from several AIs";
  return (
    <>
      <div className="hidden w-full justify-center md:flex">
        <BrowserWindow src="/screens/switchboard.webp" label="switchboard" alt={alt} />
      </div>
      <div className="flex justify-center md:hidden">
        <Phone src="/screens/switchboard-phone.webp" alt={alt} />
      </div>
    </>
  );
}

// A website rather than an app: a browser window at the screenshot's own proportions.
// The "powered by REV Mortgage" bar is cropped out of the image on purpose (CLAUDE.md rule 4).
export function DioiScreen() {
  return (
    <div className="w-[400px] max-w-full overflow-hidden rounded-2xl bg-white shadow-[0_40px_70px_-28px_rgba(22,25,31,0.5)]">
      <div className="flex items-center gap-1.5 border-b border-[#e1e5ea] bg-[#eef0f3] px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#e06a5c]" />
        <span className="size-2.5 rounded-full bg-[#e5b94a]" />
        <span className="size-2.5 rounded-full bg-[#6bbf6a]" />
        <span className="ml-2.5 text-xs text-[#6b7280]">defenditownit.com</span>
      </div>
      <div className="relative aspect-[900/1046]">
        <Image src="/screens/dioi.webp" alt="The DefendItOwnIt homepage" fill sizes="400px" className="object-cover object-top" />
      </div>
    </div>
  );
}

export function BirdDogScreen() {
  return <Phone src="/screens/birddog.webp" alt="Bird Dog's day sheet with today's list and call targets (demo data)" />;
}

export function AnvilScreen({ running = false }: { running?: boolean }) {
  return running ? (
    <Phone src="/screens/anvil-run.webp" alt="ANVIL running a workout, round 1 of 3, with the full session on screen" />
  ) : (
    <Phone src="/screens/anvil.webp" alt="ANVIL with a pasted workout ready to start" />
  );
}

export function HuddleScreen() {
  return <Phone src="/screens/huddle.webp" alt="The Huddle: the team header above the starting roster with projected points" />;
}

export function EdgeDeskScreen() {
  return <Phone src="/screens/edge.webp" alt="Edge Desk's board flagging where one market's price disagrees with the others" />;
}
