import Image from "next/image";

// App screens for the hero and the work section.
// Real screenshots live in public/screens/, taken by running each app locally from its own
// repo with demo data (Bird Dog's book is invented; no real client ever appears here), or
// from Kyle's own phone (The Huddle roster, Edge Desk). DefendItOwnIt's shots have the
// "powered by REV Mortgage" bar and NMLS byline removed (CLAUDE.md rule 4).
// To refresh a screenshot, replace the file; the frames don't change.

type Bar = { bg: string; ink: "light" | "dark" };

// Status-bar color per screen, matched to the top of each app so the phone reads as real.
const bars = {
  switchboard: { bg: "#0b1518", ink: "light" },
  birddog: { bg: "#102b39", ink: "light" },
  anvil: { bg: "#111316", ink: "light" },
  huddle: { bg: "#0a1430", ink: "light" },
  edge: { bg: "#f3f1ea", ink: "dark" },
  dioi: { bg: "#f4f5f3", ink: "dark" },
} satisfies Record<string, Bar>;

function StatusBar({ ink }: { ink: Bar["ink"] }) {
  const c = ink === "light" ? "#ffffff" : "#111111";
  return (
    <div
      className="relative flex h-[34px] items-center justify-between px-[26px] pt-1 text-[13px] font-semibold"
      style={{ color: c }}
    >
      <span>9:41</span>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[8px] h-[25px] w-[84px] -translate-x-1/2 rounded-full bg-black"
      />
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <svg width="17" height="11" viewBox="0 0 17 11" fill={c}>
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="21"
            height="11"
            rx="3.5"
            stroke={c}
            strokeOpacity="0.45"
          />
          <rect x="2" y="2" width="16" height="8" rx="2" fill={c} />
          <rect
            x="23"
            y="4"
            width="1.6"
            height="4"
            rx="0.8"
            fill={c}
            fillOpacity="0.45"
          />
        </svg>
      </span>
    </div>
  );
}

/**
 * A phone that reads as a phone: brushed-metal edge, side buttons, Dynamic Island,
 * status bar in the app's own color, and a faint glass highlight.
 */
export function Device({
  src,
  alt,
  bar,
  className = "w-[300px]",
  priority = false,
}: {
  src: string;
  alt: string;
  bar: Bar;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative max-w-full shrink-0 rounded-[50px] p-[9px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.65),inset_0_0_0_1px_rgba(255,255,255,0.18)] ${className}`}
      style={{
        background:
          "linear-gradient(145deg,#5b6068 0%,#1c1e22 35%,#2f3238 70%,#6a6f78 100%)",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute -left-[3px] top-[110px] h-7 w-[3px] rounded-l bg-[#3b3e44]"
      />
      <span
        aria-hidden="true"
        className="absolute -left-[3px] top-[150px] h-12 w-[3px] rounded-l bg-[#3b3e44]"
      />
      <span
        aria-hidden="true"
        className="absolute -right-[3px] top-[160px] h-16 w-[3px] rounded-r bg-[#3b3e44]"
      />
      <div
        className="relative overflow-hidden rounded-[42px] bg-black"
        style={{ background: bar.bg }}
      >
        <StatusBar ink={bar.ink} />
        <div className="relative aspect-[390/800]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="300px"
            className="object-cover object-top"
          />
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_36%)]"
        />
      </div>
    </div>
  );
}

function BrowserWindow({
  src,
  alt,
  label,
  className = "w-full max-w-[680px]",
  aspect = "aspect-[1280/820]",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-[#e1e5ea] bg-[#f1f3f6] px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#e06a5c]" />
        <span className="size-2.5 rounded-full bg-[#e5b94a]" />
        <span className="size-2.5 rounded-full bg-[#6bbf6a]" />
        <span className="ml-3 truncate text-xs text-[#6b7280]">{label}</span>
      </div>
      <div className={`relative ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 760px) 560px, 90vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

const ALT = {
  switchboard:
    "Switchboard showing the top answer to a question, picked by a judge from several AIs",
  birddog:
    "Bird Dog on a Monday: today's list and the Realtor Calls theme day (demo data)",
  anvil:
    "ANVIL running a workout, round 1 of 3, with the full session on screen",
  huddle:
    "The Huddle: the team header above the starting roster with projected points",
  edge: "Edge Desk's board flagging where one market's price disagrees with the others",
};

// ----- Single screens (hero and compact gallery) -----

// The desktop window is unreadable at phone width, so phones get the phone-size screenshot.
export function SwitchboardScreen() {
  return (
    <>
      <div className="hidden w-full justify-center md:flex">
        <BrowserWindow
          src="/screens/switchboard.webp"
          label="switchboard"
          alt={ALT.switchboard}
        />
      </div>
      <div className="flex justify-center md:hidden">
        <Device
          src="/screens/switchboard-phone.webp"
          alt={ALT.switchboard}
          bar={bars.switchboard}
          priority
        />
      </div>
    </>
  );
}

export function BirdDogScreen({ className }: { className?: string }) {
  return (
    <Device
      src="/screens/birddog.webp"
      alt={ALT.birddog}
      bar={bars.birddog}
      className={className}
    />
  );
}

export function AnvilScreen({ className }: { className?: string }) {
  return (
    <Device
      src="/screens/anvil-run.webp"
      alt={ALT.anvil}
      bar={bars.anvil}
      className={className}
    />
  );
}

export function HuddleScreen({ className }: { className?: string }) {
  return (
    <Device
      src="/screens/huddle.webp"
      alt={ALT.huddle}
      bar={bars.huddle}
      className={className}
    />
  );
}

export function EdgeDeskScreen({ className }: { className?: string }) {
  return (
    <Device
      src="/screens/edge.webp"
      alt={ALT.edge}
      bar={bars.edge}
      className={className}
    />
  );
}

// ----- Flagship stages: a dark, lit set with a second screen behind the first -----

const stageLight: Record<string, string> = {
  switchboard:
    "radial-gradient(ellipse at 28% 18%, #335a61 0%, #12232a 55%, #0a1316 100%)",
  birddog:
    "radial-gradient(ellipse at 70% 15%, #2f6275 0%, #123544 55%, #0a1e28 100%)",
  dioi: "radial-gradient(ellipse at 30% 15%, #7a5640 0%, #2c201a 55%, #161009 100%)",
};

export function FlagshipStage({
  id,
}: {
  id: "switchboard" | "birddog" | "dioi";
}) {
  return (
    <div
      className="relative flex min-h-[clamp(440px,52vw,600px)] w-full items-center justify-center overflow-hidden rounded-[28px] px-4 py-10"
      style={{ background: stageLight[id] }}
    >
      {/* soft floor glow under the devices */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[10%] bottom-[6%] h-24 rounded-[50%] bg-white/10 blur-3xl"
      />

      {id === "switchboard" && (
        <div className="relative flex w-full max-w-[560px] items-center justify-center">
          <div className="hidden w-[82%] -translate-x-[4%] -translate-y-[10%] sm:block">
            <BrowserWindow
              src="/screens/switchboard.webp"
              label="switchboard"
              alt=""
            />
          </div>
          <Device
            src="/screens/switchboard-phone.webp"
            alt={ALT.switchboard}
            bar={bars.switchboard}
            className="w-[min(250px,70vw)] rotate-[3deg] sm:absolute sm:bottom-[-8%] sm:right-[-2%] sm:w-[210px]"
          />
        </div>
      )}

      {id === "birddog" && (
        <div className="relative flex items-center justify-center">
          <Device
            src="/screens/birddog-back.webp"
            alt=""
            bar={bars.birddog}
            className="-mr-[38%] w-[min(220px,56vw)] -rotate-[8deg] translate-y-4 opacity-90 sm:-mr-24 sm:w-[240px]"
          />
          <Device
            src="/screens/birddog.webp"
            alt={ALT.birddog}
            bar={bars.birddog}
            className="relative z-10 w-[min(240px,62vw)] rotate-[3deg] sm:w-[268px]"
          />
        </div>
      )}

      {id === "dioi" && (
        <div className="relative flex w-full max-w-[540px] items-center justify-center">
          <div className="relative z-10 w-[min(330px,78vw)] -rotate-[2deg] sm:-translate-x-[9%] sm:w-[330px]">
            <BrowserWindow
              src="/screens/dioi.webp"
              label="defenditownit.com"
              alt="The DefendItOwnIt homepage"
              className="w-full"
              aspect="aspect-[900/1046]"
            />
          </div>
          <Device
            src="/screens/dioi-back.webp"
            alt="A DefendItOwnIt base guide on a phone: where Marines live near Camp Pendleton"
            bar={bars.dioi}
            className="absolute right-[-2%] top-[16%] hidden w-[190px] rotate-[6deg] sm:block"
          />
        </div>
      )}
    </div>
  );
}
