// The spark that jumps the gap between the two fingertips in the hero: the studio's name.
// Pure SVG + CSS (no JavaScript), so the page stays static. It sits OUTSIDE the photo's
// mix-blend-multiply layer, because a light glow multiplied onto a light sky vanishes.
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
          <radialGradient id="spark-glow">
            <stop offset="0%" stopColor="#fffaf0" stopOpacity="1" />
            <stop offset="18%" stopColor="#ffd59a" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#f29a52" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#b97a56" stopOpacity="0" />
          </radialGradient>
          <filter id="spark-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.1" />
          </filter>
        </defs>
        <ellipse className="spark-glow" cx="60" cy="30" rx="46" ry="30" fill="url(#spark-glow)" />
        {/* Two arcs that take turns, so the spark crackles instead of sitting still. */}
        <g className="spark-arc spark-arc-a" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="49,30 53,27.5 55.5,31 58.5,26.8 61.5,32 64.5,28 67,31.2 71,29.5" stroke="#f3a25a" strokeWidth="3.6" filter="url(#spark-blur)" />
          <polyline points="49,30 53,27.5 55.5,31 58.5,26.8 61.5,32 64.5,28 67,31.2 71,29.5" stroke="#fffdf7" strokeWidth="1.3" />
        </g>
        <g className="spark-arc spark-arc-b" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="49,30 52,32.4 55,28.2 58,32.6 61,27.4 64,31.6 67.5,28.4 71,30.2" stroke="#f3a25a" strokeWidth="3.6" filter="url(#spark-blur)" />
          <polyline points="49,30 52,32.4 55,28.2 58,32.6 61,27.4 64,31.6 67.5,28.4 71,30.2" stroke="#fffdf7" strokeWidth="1.3" />
          <polyline points="58,32.6 59.5,35.5 61.5,36.2" stroke="#fffdf7" strokeWidth="0.6" />
        </g>
        {/* A few embers thrown off the arc. */}
        <g className="spark-embers" fill="#fff4dc">
          <circle cx="56" cy="22" r="0.8" />
          <circle cx="66" cy="38" r="0.7" />
          <circle cx="62" cy="19.5" r="0.55" />
          <circle cx="53" cy="37" r="0.6" />
        </g>
        <circle cx="60" cy="30" r="2.6" fill="#ffffff" />
      </svg>
    </div>
  );
}
