import { CalendarDays, MapPin } from "lucide-react";
import { currentConference } from "@/data/constants";
import { displayValue } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function ConferenceDateBadge() {
  const location = [currentConference.venue, currentConference.city, currentConference.country]
    .map((part) => displayValue(part, "TBA"))
    .join(", ");

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="gold">{displayValue(currentConference.edition, "Edition TBA")}</Badge>
      <span className="inline-flex items-center gap-2 text-sm text-cream/90">
        <CalendarDays className="size-4" />
        {displayValue(currentConference.dates)}
      </span>
      <span className="inline-flex items-center gap-2 text-sm text-cream/90">
        <MapPin className="size-4" />
        {location}
      </span>
    </div>
  );
}
