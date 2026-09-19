import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import { announcementLinks } from "@/data/constants";
import { displayValue } from "@/lib/utils";

export function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-warm-white">
      <div className="mx-auto flex max-w-[1380px] flex-col items-center justify-center gap-1 px-3 py-2 text-center text-xs font-semibold sm:flex-row sm:gap-3 sm:text-sm">
        {announcementLinks.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span className="hidden text-white/35 sm:inline">|</span> : null}
            <Link to={item.href} className="inline-flex items-center gap-1.5 hover:text-gold-soft">
              <CalendarDays className="size-3.5 text-gold" />
              {item.label}{" "}
              <span className="text-gold">{displayValue(item.date)}</span>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
