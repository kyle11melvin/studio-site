// The spark between the two fingertips in the hero: the studio's name. A still point of
// warm light (Kyle, 2026-10-17: the animated zigzag arc read as cheesy). Pure SVG, no motion.
// It sits OUTSIDE the photo's mix-blend-multiply layer, because a light glow multiplied onto
// a light sky vanishes.
//
// Placement follows the photo's object-cover crop. The gap sits at x 50.1%, y 45.2% of the
// 1672×941 image, and object-cover centers the image, so: horizontally at 50%, vertically
// 4.8% of the rendered image height above center. Rendered size is max(container, image
// aspect), written out in CSS in `.spark` (globals.css).
export function Spark() {
  return (
    <div aria-hidden="true" className="spark pointer-events-none absolute">
      <svg viewBox="0 0 120 60" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id="spark-halo">
            <stop offset="0%" stopColor="#fff6e6" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#ffd8a8" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#f2a466" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#b97a56" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="spark-core">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="45%" stopColor="#fffaf0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffe7c4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="spark-streak" x1="0" x2="1">
            <stop offset="0%" stopColor="#fff3dc" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fff3dc" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="30" rx="30" ry="20" fill="url(#spark-halo)" />
        {/* A faint horizontal glint that bridges the gap between the two tips. */}
        <rect x="47" y="29.6" width="26" height="0.8" rx="0.4" fill="url(#spark-streak)" />
        <circle cx="60" cy="30" r="4.5" fill="url(#spark-core)" />
      </svg>
    </div>
  );
}
