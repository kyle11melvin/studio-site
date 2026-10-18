// A touch of cloud across the page's sky (Kyle, 2026-10-17: "just a touch, don't overdo it" up
// top, then "a little of those touches throughout the bottom part"). Faint, wide, blurred
// streaks kept to the edges so they never sit behind text. Positions are % of the section.
// The parent needs `relative isolate`; the wisps sit at z -1, behind the section's content.
type Wisp = { left: string; top: string; w: string; h: string; o: number };

const white = "radial-gradient(ellipse at 50% 50%, #ffffff 0%, #e8e4f7 45%, rgba(232,228,247,0) 100%)";
// On the pale dawn sky behind the work, white disappears; a soft lilac reads as cloud.
const lilac = "radial-gradient(ellipse at 50% 50%, #ffffff 0%, #ddd6ef 45%, rgba(221,214,239,0) 100%)";

const sets: Record<string, { wisps: Wisp[]; bg: string }> = {
  top: {
    bg: white,
    wisps: [
      { left: "-8%", top: "18%", w: "34%", h: "70px", o: 0.16 },
      { left: "74%", top: "10%", w: "36%", h: "80px", o: 0.14 },
      { left: "-4%", top: "70%", w: "30%", h: "60px", o: 0.18 },
      { left: "70%", top: "64%", w: "38%", h: "70px", o: 0.2 },
      { left: "30%", top: "78%", w: "42%", h: "50px", o: 0.12 },
    ],
  },
  day: {
    bg: lilac,
    wisps: [
      { left: "-10%", top: "6%", w: "36%", h: "90px", o: 0.55 },
      { left: "76%", top: "14%", w: "34%", h: "80px", o: 0.5 },
      { left: "-12%", top: "34%", w: "30%", h: "90px", o: 0.45 },
      { left: "80%", top: "48%", w: "32%", h: "90px", o: 0.5 },
      { left: "-8%", top: "66%", w: "34%", h: "80px", o: 0.45 },
      { left: "78%", top: "82%", w: "34%", h: "90px", o: 0.5 },
    ],
  },
  dusk: {
    bg: white,
    wisps: [
      { left: "-10%", top: "8%", w: "38%", h: "80px", o: 0.18 },
      { left: "72%", top: "22%", w: "38%", h: "90px", o: 0.14 },
      { left: "-6%", top: "58%", w: "30%", h: "70px", o: 0.12 },
      { left: "76%", top: "76%", w: "34%", h: "80px", o: 0.14 },
    ],
  },
  night: {
    bg: white,
    wisps: [
      { left: "-8%", top: "6%", w: "34%", h: "80px", o: 0.16 },
      { left: "74%", top: "16%", w: "36%", h: "80px", o: 0.14 },
      { left: "-10%", top: "52%", w: "34%", h: "90px", o: 0.22 },
      { left: "76%", top: "62%", w: "36%", h: "90px", o: 0.25 },
    ],
  },
};

export function SkyWisps({ set = "top" }: { set?: keyof typeof sets }) {
  const { wisps, bg } = sets[set];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {wisps.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-[50%] blur-[22px]"
          style={{ left: p.left, top: p.top, width: p.w, height: p.h, opacity: p.o, background: bg }}
        />
      ))}
    </div>
  );
}
