import {
  historicalObjectives,
  historicalTopics,
  organizers,
  pastConferences,
  whyAttend,
} from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { HighlightCard } from "@/components/conference/HighlightCard";
import { ThemeCard } from "@/components/conference/ThemeCard";
import { TrustLogoStrip } from "@/components/conference/TrustLogoStrip";

export function AboutPage() {
  return (
    <>
      <PageMeta title="About | Herbal & Synthetic Drug Studies Conference" />
      <PageBanner
        eyebrow="About"
        title="About the conference"
        description="HSDS is a documented academic series on herbal and synthetic drug studies. The next edition’s commitments will be published when organizers confirm them."
      />

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <div>
          <SectionHeading title="About the Conference" />
          <p className="mt-6 max-w-3xl leading-7 text-muted">
            The series has hosted a national conference in 2010 and international conferences in 2014 and 2016 at Azam Campus, Pune. This website is the public record for those editions and the working site for the next meeting.
          </p>
        </div>

        <div>
          <SectionHeading
            title="Objectives"
            description="The following objectives are adapted from earlier brochures. They describe the historical purpose of the series, not a newly issued mandate."
          />
          <ol className="mt-6 space-y-3">
            {historicalObjectives.map((item, index) => (
              <li key={item} className="rounded-lg border border-border bg-warm-white px-4 py-3">
                <span className="mr-3 text-gold">{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <SectionHeading title="Why Attend" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {whyAttend.map((item) => (
              <HighlightCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            title="Organizing Institutions"
            description="Names and marks will replace these placeholders when the current host list is supplied."
          />
          <div className="mt-8">
            <TrustLogoStrip />
          </div>
          <ul className="mt-4 text-sm text-muted">
            {organizers.map((org) => (
              <li key={org.name}>
                {org.name} — {org.role}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading title="Academic Legacy" />
          <ul className="mt-6 space-y-3">
            {pastConferences.map((edition) => (
              <li key={edition.code} className="border-l-2 border-gold/50 pl-4">
                <p className="font-medium">
                  {edition.code}: {edition.title}
                </p>
                <p className="text-sm text-muted">
                  {edition.edition} · {edition.dates}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading
            title="Conference Themes"
            description="Research areas recorded on previous editions. Current tracks will be edited in the constants file when confirmed."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {historicalTopics.map((topic, index) => (
              <ThemeCard key={topic} title={topic} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
