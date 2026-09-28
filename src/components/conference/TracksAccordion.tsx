import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type Track = {
  title: string;
  focus: string;
  sessions: string[];
};

export function TracksAccordion({ tracks }: { tracks: Track[] }) {
  return (
    <Accordion type="single" collapsible defaultValue={tracks[0]?.title} className="w-full">
      {tracks.map((track, index) => (
        <AccordionItem key={track.title} value={track.title}>
          <AccordionTrigger className="font-heading text-lg text-deep-forest md:text-xl">
            <span className="pr-4 text-left">
              <span className="mr-2 text-gold">Track {index + 1}:</span>
              {track.title}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-4 text-sm italic text-muted">{track.focus}</p>
            <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase">Sessions</p>
            <ul className="space-y-2 text-sm leading-6 text-charcoal">
              {track.sessions.map((session) => (
                <li key={session} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-deep-forest" />
                  <span>{session}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
