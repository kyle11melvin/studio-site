// A few light wisps of cloud around the two fingertips (Kyle, 2026-10-17: "just a little bit
// of cloud" where the fingers touch). Drawn BEFORE the hands photo, so the photo's multiply
// blend lays the hands over them: the hands read as reaching through soft cloud, and the mist
// only shows in the sky around them. Placed with the same photo-crop math as the spark
// (`.finger-clouds` in globals.css); puff positions are % of that box.
const wisps = [
  { left: "0%", top: "48%", w: "42%", h: "30%", o: 0.9 },
  { left: "30%", top: "56%", w: "40%", h: "30%", o: 0.95 },
  { left: "58%", top: "46%", w: "42%", h: "30%", o: 0.85 },
  { left: "16%", top: "70%", w: "68%", h: "26%", o: 0.8 },
];

export function FingerClouds() {
  return (
    <div aria-hidden="true" className="finger-clouds pointer-events-none absolute">
      {wisps.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-[50%] blur-[12px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.w,
            height: p.h,
            opacity: p.o,
            background:
              "radial-gradient(ellipse at 50% 40%, #ffffff 0%, #ffffff 40%, rgba(222,214,236,0.85) 68%, rgba(222,214,236,0) 100%)",
          }}
        />
      ))}
    </div>
  );
}
