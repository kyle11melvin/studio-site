// The sunset between the light hero and the dark work section (Kyle, 2026-10-17: "light
// transitions between the hero and the bottom, light clouds and orange, make it make sense").
// The story is the day ending: the dawn the hero ends on warms to orange, the low clouds catch
// that light from below, then the sky falls to night behind the work. Streaks are long, thin
// and blurred, placed in px from the top of the band so they always sit in the sunset zone.
// Real sunset clouds: cooler violet bars sitting in the warm band, each with a bright
// gold-pink rim where the low sun catches its underside.
const streaks = [
  { left: "-8%", top: 57, w: "44%", h: 26, o: 0.55, c: "#8f7fb0" },
  { left: "-6%", top: 67, w: "40%", h: 10, o: 0.9, c: "#ffd6a6" },
  { left: "56%", top: 74, w: "52%", h: 30, o: 0.5, c: "#8a7aae" },
  { left: "58%", top: 87, w: "46%", h: 10, o: 0.85, c: "#ffc895" },
  { left: "22%", top: 104, w: "36%", h: 22, o: 0.45, c: "#7d74a8" },
  { left: "24%", top: 113, w: "32%", h: 8, o: 0.8, c: "#ffb98c" },
  { left: "-10%", top: 138, w: "34%", h: 22, o: 0.4, c: "#6f6c9f" },
  { left: "70%", top: 146, w: "38%", h: 20, o: 0.4, c: "#6c6a9c" },
  { left: "36%", top: 21, w: "40%", h: 30, o: 0.8, c: "#fff1e2" },
];

export function SunsetClouds() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[240px] overflow-hidden">
      {streaks.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-[50%] blur-[9px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.w,
            height: p.h,
            opacity: p.o,
            background: `radial-gradient(ellipse at 50% 40%, ${p.c} 0%, ${p.c} 45%, transparent 75%)`,
          }}
        />
      ))}
    </div>
  );
}
