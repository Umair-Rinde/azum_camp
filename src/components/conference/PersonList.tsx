import type { NamedPerson } from "@/data/types";

export function PersonList({ people }: { people: NamedPerson[] }) {
  if (people.length === 0) return null;

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {people.map((person) => (
        <li key={`${person.name}-${person.role ?? ""}`} className="rounded-lg border border-border bg-warm-white px-4 py-3">
          <p className="font-medium">{person.name}</p>
          {person.role ? <p className="text-sm text-gold">{person.role}</p> : null}
          {person.affiliation ? <p className="text-sm text-muted">{person.affiliation}</p> : null}
        </li>
      ))}
    </ul>
  );
}
