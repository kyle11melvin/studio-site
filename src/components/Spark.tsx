// The spark between the two fingertips in the hero: the studio's name. A single still
// electric arc, the way a real static spark looks: thin, jagged, blue-white, with two small
// forks and a soft glow (Kyle, 2026-10-17: the animated zigzag read as cheesy, the warm dot
// read as nothing). No motion. The points come from a seeded midpoint-displacement bolt, so
// the shape is irregular the way real lightning is, and it never changes between loads.
//
// It sits OUTSIDE the photo's mix-blend-multiply layer, because a light glow multiplied onto
// a light sky vanishes. Placement follows the photo's object-cover crop: see `.spark` in
// globals.css. In the 120x60 box, the arc runs from one fingertip (x 49) to the other (x 71).
const MAIN =
  "49.20,30.00 49.54,29.72 49.88,29.51 50.21,29.41 50.55,29.28 50.89,29.01 51.23,28.98 51.56,28.65 51.90,28.55 52.24,28.47 52.58,28.54 52.91,28.36 53.25,28.10 53.59,28.18 53.92,28.31 54.26,28.33 54.60,28.44 54.94,28.46 55.28,28.43 55.61,28.47 55.95,28.52 56.29,28.63 56.62,28.85 56.96,28.86 57.30,28.72 57.64,28.59 57.97,28.36 58.31,28.33 58.65,28.43 58.99,28.65 59.33,28.83 59.66,28.86 60.00,28.88 60.34,28.87 60.67,28.65 61.01,28.70 61.35,28.62 61.69,28.59 62.03,28.68 62.36,29.00 62.70,29.07 63.04,28.94 63.38,29.00 63.71,29.13 64.05,29.31 64.39,29.42 64.73,29.40 65.06,29.44 65.40,29.67 65.74,29.73 66.08,29.78 66.41,29.57 66.75,29.59 67.09,29.40 67.42,29.11 67.76,29.10 68.10,28.94 68.44,28.98 68.77,28.98 69.11,29.06 69.45,28.95 69.79,29.09 70.12,29.34 70.46,29.52 70.80,29.60";
const FORK_A = "55.95,28.52 56.15,28.79 56.35,29.35 56.55,29.62 56.75,29.76 56.95,30.20 57.15,30.55 57.35,30.85 57.55,30.81 57.75,31.14 57.95,31.25 58.15,31.41 58.35,31.72 58.55,31.98 58.75,32.32 58.95,32.58 59.15,32.72";
const FORK_B = "63.38,29.00 63.53,28.48 63.68,28.11 63.83,27.84 63.98,27.64 64.12,27.31 64.28,26.75 64.43,26.42 64.58,26.35 64.72,26.20 64.88,26.09 65.03,25.83 65.18,25.55 65.33,25.52 65.48,25.27 65.62,25.43 65.78,25.40";

export function Spark() {
  return (
    <div aria-hidden="true" className="spark pointer-events-none absolute">
      <svg viewBox="0 0 120 60" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id="spark-halo">
            <stop offset="0%" stopColor="#f4f6ff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#c7d2ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#c7d2ff" stopOpacity="0" />
          </radialGradient>
          <filter id="spark-glow" x="-50%" y="-200%" width="200%" height="500%">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
          <filter id="spark-soft" x="-50%" y="-200%" width="200%" height="500%">
            <feGaussianBlur stdDeviation="0.45" />
          </filter>
        </defs>
        <ellipse cx="60" cy="30" rx="26" ry="13" fill="url(#spark-halo)" />
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* outer glow, inner glow, then the white-hot core */}
          <g stroke="#8ea4ff" strokeWidth="3.6" opacity="0.8" filter="url(#spark-glow)">
            <polyline points={MAIN} />
          </g>
          <g stroke="#e3e9ff" strokeWidth="1.6" filter="url(#spark-soft)">
            <polyline points={MAIN} />
            <polyline points={FORK_A} strokeWidth="0.9" />
            <polyline points={FORK_B} strokeWidth="0.9" />
          </g>
          <g stroke="#ffffff">
            <polyline points={MAIN} strokeWidth="0.7" />
            <polyline points={FORK_A} strokeWidth="0.35" />
            <polyline points={FORK_B} strokeWidth="0.35" />
          </g>
        </g>
        {/* where the arc touches each fingertip */}
        <circle cx="49.2" cy="30" r="1.5" fill="#ffffff" filter="url(#spark-soft)" />
        <circle cx="70.8" cy="29.6" r="1.5" fill="#ffffff" filter="url(#spark-soft)" />
      </svg>
    </div>
  );
}
