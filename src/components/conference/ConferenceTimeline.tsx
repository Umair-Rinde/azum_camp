import { pastConferences } from "@/data/constants";

export function ConferenceTimeline() {
  return (
    <ol className="relative space-y-8 border-l border-gold/40 pl-6">
      {pastConferences.map((edition) => (
        <li key={edition.code} className="relative">
          <span className="absolute top-1.5 -left-[1.95rem] size-3 rounded-full bg-gold" />
          <p className="text-xs tracking-[0.2em] text-gold uppercase">{edition.year}</p>
          <h3 className="mt-1 text-2xl">{edition.code}</h3>
          <p className="text-sm text-muted">
            {edition.edition} · {edition.dates}
          </p>
          <p className="mt-2 text-sm">{edition.title}</p>
        </li>
      ))}
    </ol>
  );
}
