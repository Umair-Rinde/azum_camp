import { useEffect, useState } from "react";
import { currentConference } from "@/data/constants";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemaining(iso: string): Remaining | null {
  const target = new Date(iso).getTime();
  if (Number.isNaN(target)) return null;
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer() {
  const [remaining, setRemaining] = useState<Remaining | null>(() =>
    currentConference.startDateISO ? getRemaining(currentConference.startDateISO) : null,
  );

  useEffect(() => {
    if (!currentConference.startDateISO) return;
    const id = window.setInterval(() => {
      setRemaining(getRemaining(currentConference.startDateISO));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!currentConference.startDateISO || !remaining) {
    return (
      <p className="rounded-lg border border-dashed border-gold/40 bg-cream px-5 py-4 text-sm text-muted">
        Countdown will appear when the opening date is confirmed in the constants file.
      </p>
    );
  }

  const units = [
    ["Days", remaining.days],
    ["Hours", remaining.hours],
    ["Minutes", remaining.minutes],
    ["Seconds", remaining.seconds],
  ] as const;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {units.map(([label, value]) => (
        <div key={label} className="rounded-lg border border-border bg-warm-white px-4 py-5 text-center">
          <p className="font-heading text-3xl text-deep-forest">{String(value).padStart(2, "0")}</p>
          <p className="mt-1 text-xs tracking-widest text-muted uppercase">{label}</p>
        </div>
      ))}
    </div>
  );
}
