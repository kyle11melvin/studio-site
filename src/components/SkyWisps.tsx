// A touch of cloud in the blue-and-purple sky behind the headline (Kyle, 2026-10-17: "just a
// touch, don't overdo it"). Faint, wide, blurred streaks kept to the edges and the lower sky,
// so they never sit behind the headline text. Positions are % of the hero's sky.
const wisps = [
  { left: "-8%", top: "18%", w: "34%", h: "70px", o: 0.16 },
  { left: "74%", top: "10%", w: "36%", h: "80px", o: 0.14 },
  { left: "-4%", top: "70%", w: "30%", h: "60px", o: 0.18 },
  { left: "70%", top: "64%", w: "38%", h: "70px", o: 0.2 },
  { left: "30%", top: "78%", w: "42%", h: "50px", o: 0.12 },
];

export function SkyWisps() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {wisps.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-[50%] blur-[22px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.w,
            height: p.h,
            opacity: p.o,
            background: "radial-gradient(ellipse at 50% 50%, #ffffff 0%, #e8e4f7 45%, rgba(232,228,247,0) 100%)",
          }}
        />
      ))}
    </div>
  );
}
