import { pastConferences } from "@/data/constants";
import type { PastConference } from "@/data/types";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { ConferenceTimeline } from "@/components/conference/ConferenceTimeline";
import { PastConferenceCard } from "@/components/conference/PastConferenceCard";
import { PersonList } from "@/components/conference/PersonList";
import { SectionHeading } from "@/components/conference/SectionHeading";

function EditionRecord({ conference }: { conference: PastConference }) {
  return (
    <article id={conference.code.toLowerCase()} className="scroll-mt-28 space-y-10">
      <SectionHeading
        title={conference.code}
        description={`${conference.edition} · ${conference.dates} · ${conference.venue}`}
      />

      {conference.quote ? (
        <blockquote className="border-l-2 border-gold/60 pl-4 text-lg text-deep-forest italic">
          {conference.quote}
        </blockquote>
      ) : null}

      <p className="max-w-3xl leading-7 text-muted">{conference.about}</p>

      <div>
        <h3 className="mb-3 text-xl">Organizers</h3>
        <ul className="space-y-2 text-sm">
          {conference.organizers.map((org) => (
            <li key={org}>{org}</li>
          ))}
        </ul>
        {conference.inAssociationWith.length > 0 ? (
          <p className="mt-3 text-sm text-muted">
            In association with {conference.inAssociationWith.join("; ")}
          </p>
        ) : null}
        {conference.sponsors.length > 0 ? (
          <p className="mt-1 text-sm text-muted">Sponsored by {conference.sponsors.join("; ")}</p>
        ) : null}
      </div>

      <div>
        <h3 className="mb-3 text-xl">Objectives</h3>
        <ol className="space-y-2">
          {conference.objectives.map((item, index) => (
            <li key={item} className="rounded-lg border border-border bg-warm-white px-4 py-3 text-sm">
              <span className="mr-3 text-gold">{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="mb-3 text-xl">Themes</h3>
        <ul className="flex flex-wrap gap-2 text-sm">
          {conference.themes.map((theme) => (
            <li key={theme} className="rounded-full border border-border px-3 py-1">
              {theme}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-3 text-xl">Nature of the conference</h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {conference.format.map((item) => (
            <li key={item} className="rounded-lg border border-border bg-warm-white px-4 py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-xl">Resource persons</h3>
        <PersonList people={conference.resourcePersons} />
      </div>

      {conference.advisoryCommittee.length > 0 ? (
        <div>
          <h3 className="mb-4 text-xl">Advisory committee</h3>
          <PersonList people={conference.advisoryCommittee} />
        </div>
      ) : null}

      {conference.receptionCommittee.length > 0 ? (
        <div>
          <h3 className="mb-4 text-xl">Reception committee</h3>
          <PersonList people={conference.receptionCommittee} />
        </div>
      ) : null}

      <div>
        <h3 className="mb-4 text-xl">Organizing committee</h3>
        <PersonList people={conference.organizingCommittee} />
      </div>

      <div>
        <h3 className="mb-4 text-xl">Members</h3>
        <PersonList people={conference.members} />
      </div>

      <div>
        <h3 className="mb-2 text-xl">Abstracts and posters</h3>
        <p className="max-w-3xl text-sm leading-7 text-muted">{conference.abstractNote}</p>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{conference.posterNote}</p>
      </div>

      <div>
        <h3 className="mb-2 text-xl">Secretariat (that edition)</h3>
        <p className="text-sm">{conference.contact.convener}</p>
        <p className="mt-1 text-sm text-muted">{conference.contact.address}</p>
        <p className="mt-1 text-sm text-muted">{conference.contact.phones.join(" · ")}</p>
        <p className="mt-1 text-sm text-muted">{conference.contact.emails.join(" · ")}</p>
        {conference.website ? <p className="mt-1 text-sm text-muted">{conference.website}</p> : null}
      </div>
    </article>
  );
}

export function PastConferencesPage() {
  return (
    <>
      <PageMeta title="Past Conferences | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Archive"
        title="Past conferences"
        description="Names, committees, themes, and other facts transcribed from the 2010, 2014, and 2016 brochures. They describe those editions only."
      />

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <div>
          <SectionHeading title="Series timeline" />
          <div className="mt-8">
            <ConferenceTimeline />
          </div>
        </div>

        <div>
          <SectionHeading title="Edition cards" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pastConferences.map((conference) => (
              <PastConferenceCard key={conference.code} conference={conference} />
            ))}
          </div>
        </div>

        {pastConferences.map((conference) => (
          <EditionRecord key={conference.code} conference={conference} />
        ))}
      </section>
    </>
  );
}
