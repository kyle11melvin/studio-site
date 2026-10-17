// A soft cloud bank drawn in CSS: overlapping blurred white puffs with a faint
// lavender underside. Purely decorative. Positions are % of the band width.
const puffs = [
  { left: "-6%", top: "8%", w: "34%", h: "120px", o: 0.95 },
  { left: "18%", top: "0%", w: "28%", h: "100px", o: 0.85 },
  { left: "38%", top: "14%", w: "30%", h: "110px", o: 0.9 },
  { left: "60%", top: "2%", w: "30%", h: "105px", o: 0.85 },
  { left: "78%", top: "10%", w: "32%", h: "125px", o: 0.95 },
  { left: "8%", top: "36%", w: "40%", h: "90px", o: 0.8 },
  { left: "52%", top: "40%", w: "44%", h: "95px", o: 0.8 },
];

export function Clouds() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[260px]">
      {puffs.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-[50%] blur-[18px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.w,
            height: p.h,
            opacity: p.o,
            background:
              "radial-gradient(ellipse at 50% 40%, #ffffff 0%, #ffffff 45%, rgba(226,222,240,0.9) 70%, rgba(226,222,240,0) 100%)",
          }}
        />
      ))}
    </div>
  );
}
