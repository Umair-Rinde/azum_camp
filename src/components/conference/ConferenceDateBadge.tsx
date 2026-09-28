import { currentConference } from "@/data/constants";
import { displayValue } from "@/lib/utils";

/** Compact date · location line for banners outside the PhytoTMed-style hero. */
export function ConferenceDateBadge() {
  const dateLine = [
    displayValue(currentConference.dates, "JANUARY 28-30, 2027"),
    [displayValue(currentConference.city, "PUNE"), displayValue(currentConference.country, "INDIA")]
      .filter(Boolean)
      .join(", "),
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <p className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] text-warm-white/90 uppercase sm:text-xs">
      <span className="size-1.5 shrink-0 rounded-full bg-warm-white" aria-hidden />
      {dateLine}
    </p>
  );
}
