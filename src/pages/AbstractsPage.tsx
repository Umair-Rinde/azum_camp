import { abstractGuidelines, currentImportantDates, historicalTopics } from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { AbstractSubmissionForm } from "@/components/conference/AbstractSubmissionForm";
import { ThemeCard } from "@/components/conference/ThemeCard";
import { Button } from "@/components/ui/button";

export function AbstractsPage() {
  return (
    <>
      <PageMeta title="Call for Abstracts | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Call for Abstracts"
        title="Submit your work"
        description="Guidelines below stay conservative. Historical 300-word limits are noted as archival, not current policy."
      />

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <div>
          <SectionHeading title="Submission Guidelines" />
          <dl className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-warm-white p-4">
              <dt className="text-xs tracking-widest text-muted uppercase">Language</dt>
              <dd className="mt-1">{abstractGuidelines.language}</dd>
            </div>
            <div className="rounded-lg border border-border bg-warm-white p-4">
              <dt className="text-xs tracking-widest text-muted uppercase">Length</dt>
              <dd className="mt-1">{abstractGuidelines.wordLimit}</dd>
            </div>
            <div className="rounded-lg border border-border bg-warm-white p-4 md:col-span-2">
              <dt className="text-xs tracking-widest text-muted uppercase">Files</dt>
              <dd className="mt-1">{abstractGuidelines.fileTypes}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-muted">{abstractGuidelines.note}</p>
        </div>

        <div>
          <SectionHeading title="Important Dates" />
          {currentImportantDates.length === 0 ? (
            <p className="mt-4 text-sm text-muted">Submission and notification dates will be listed here when confirmed.</p>
          ) : (
            <ul className="mt-4 space-y-2 text-sm">
              {currentImportantDates.map((item) => (
                <li key={item.label}>
                  {item.label}: {item.date}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <SectionHeading
            title="Research Areas"
            description="Areas recorded from earlier editions. Replace or edit these in constants.ts if a new track list is issued."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {historicalTopics.map((topic, index) => (
              <ThemeCard key={topic} title={topic} index={index} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeading title="Abstract Template" />
          <p className="mt-4 text-sm text-muted">
            A downloadable template will be linked here once organizers provide the file.
          </p>
          <Button className="mt-4" variant="outline" disabled>
            Template not yet available
          </Button>
        </div>

        <div className="rounded-lg border border-border bg-warm-white p-6">
          <SectionHeading title="Submission Form" />
          <div className="mt-8">
            <AbstractSubmissionForm />
          </div>
        </div>
      </section>
    </>
  );
}
