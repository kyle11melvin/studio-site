import { site } from "@/content/site";

// The Spark Gap wordmark, set in live type so it stays crisp at any size:
// "SPARK GAP" in widely tracked classic serif capitals, "STUDIO" small and tracked
// between two copper hairlines. `tone` picks white (on the sky) or ink (on light).
export function Wordmark({
  tone = "light",
  size = "md",
}: {
  tone?: "light" | "dark";
  size?: "md" | "lg";
}) {
  const ink = tone === "light" ? "text-white" : "text-ink";
  const big = size === "lg";
  return (
    <span className={`inline-flex flex-col items-center leading-none ${ink}`}>
      <span
        className={`font-logo font-semibold uppercase ${
          big ? "text-[clamp(30px,4.4vw,52px)] tracking-[0.16em]" : "text-[21px] tracking-[0.18em] md:text-[26px]"
        }`}
      >
        {site.name}
      </span>
      <span className={`flex items-center ${big ? "mt-3 gap-3" : "mt-1.5 gap-2"}`} aria-hidden="true">
        <span className={`h-px bg-copper ${big ? "w-14" : "w-6"}`} />
        <span className={`font-sans font-medium uppercase ${big ? "text-[13px] tracking-[0.5em]" : "text-[9px] tracking-[0.45em] md:text-[10px]"}`}>
          Studio
        </span>
        <span className={`h-px bg-copper ${big ? "w-14" : "w-6"}`} />
      </span>
    </span>
  );
}
