import { Download } from "lucide-react";
import { abstractGuidelines, currentImportantDates, historicalTopics } from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { ThemeCard } from "@/components/conference/ThemeCard";
import { Button } from "@/components/ui/button";

export function AbstractsPage() {
  return (
    <>
      <PageMeta title="Call for Abstracts | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Call for Abstracts"
        title="Submit your work"
        // description="Guidelines below stay conservative. Historical 300-word limits are noted as archival, not current policy."
      />

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <div>
          <SectionHeading title="Submission Guidelines" />
          <dl className="mt-6 grid gap-4 md:grid-cols-2">
            {abstractGuidelines.items.map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-warm-white p-4">
                <dt className="text-xs tracking-widest text-muted uppercase">{item.label}</dt>
                <dd className="mt-1">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <SectionHeading title="Important Dates" />
          {currentImportantDates.length === 0 ? (
            <p className="mt-4 text-sm text-muted">Submission and notification dates will be listed here when confirmed.</p>
          ) : (
            <ul className="mt-6 space-y-5 text-sm">
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
            // description="Areas recorded from earlier editions. Replace or edit these in constants.ts if a new track list is issued."
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
            Download the official Word template and use it when preparing your abstract for HSDS-2027.
          </p>
          <Button className="mt-4" asChild>
            <a
              href={abstractGuidelines.templateHref}
              download={abstractGuidelines.templateFilename}
            >
              <Download />
              Download Template
            </a>
          </Button>
        </div>

        {/* <div className="rounded-lg border border-border bg-warm-white p-6">
          <SectionHeading title="Submission Form" />
          <div className="mt-8">
            <AbstractSubmissionForm />
          </div>
        </div> */}
      </section>
    </>
  );
}
