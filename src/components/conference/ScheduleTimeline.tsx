import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { primaryCta, programDays } from "@/data/constants";
import type { ProgramDay } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function DayTimeline({ day }: { day: ProgramDay }) {
  if (day.sessions.length === 0) {
    return <p className="text-sm text-muted">Sessions for this day have not been published.</p>;
  }

  return (
    <ol className="space-y-4">
      {day.sessions.map((session) => (
        <li key={`${day.id}-${session.time}-${session.title}`} className="grid gap-2 border-l-2 border-gold/40 pl-4 md:grid-cols-[8rem_1fr]">
          <p className="text-sm font-medium text-deep-forest">{session.time}</p>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-medium">{session.title}</p>
              <Badge variant="outline">{session.type}</Badge>
            </div>
            {session.speaker ? <p className="text-sm text-muted">{session.speaker}</p> : null}
            {session.room ? <p className="text-xs text-muted">Room: {session.room}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ScheduleTimeline() {
  if (programDays.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-cream px-6 py-16 text-center">
        <p className="font-heading text-3xl">Register Now for the Complete Schedule</p>
        <Button
          variant="gold"
          className="mt-6 rounded-[10px] px-5 text-[13px] font-bold tracking-[0.14em] uppercase [&_svg]:size-2.5"
          asChild
        >
          <Link to={primaryCta.href}>
            {primaryCta.label}
            <ArrowUpRight className="size-2.5" strokeWidth={2.5} />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <Tabs defaultValue={programDays[0].id}>
      <TabsList>
        {programDays.map((day) => (
          <TabsTrigger key={day.id} value={day.id}>
            {day.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {programDays.map((day) => (
        <TabsContent key={day.id} value={day.id}>
          <p className="mb-4 text-sm text-muted">{day.date}</p>
          <DayTimeline day={day} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
