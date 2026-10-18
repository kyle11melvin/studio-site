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
  // On the dark sky the logo copper reads dim, so the hairlines brighten there.
  const line = tone === "light" ? "h-[1.5px] bg-[#e3a172]" : "h-px bg-copper";
  return (
    <span className={`inline-flex flex-col items-center leading-none ${ink} ${tone === "light" ? "[text-shadow:0_2px_18px_rgba(20,30,70,0.35)]" : ""}`}>
      <span
        className={`font-logo font-semibold uppercase ${
          big ? "text-[clamp(30px,4.4vw,52px)] tracking-[0.16em]" : "text-[25px] tracking-[0.17em] md:text-[34px]"
        }`}
      >
        {site.name}
      </span>
      <span className={`flex items-center ${big ? "mt-3 gap-3" : "mt-2 gap-2.5"}`} aria-hidden="true">
        <span className={`${line} ${big ? "w-14" : "w-8 md:w-10"}`} />
        <span className={`font-sans font-medium uppercase ${big ? "text-[13px] tracking-[0.5em]" : "text-[10px] tracking-[0.45em] md:text-[12px]"}`}>
          Studio
        </span>
        <span className={`${line} ${big ? "w-14" : "w-8 md:w-10"}`} />
      </span>
    </span>
  );
}
