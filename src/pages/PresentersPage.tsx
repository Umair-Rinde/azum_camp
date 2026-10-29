import { Download } from "lucide-react";
import { abstractGuidelines, historicalPosterNote } from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { Button } from "@/components/ui/button";

export function PresentersPage() {
  return (
    <>
      <PageMeta title="Presenters Instructions | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Program"
        title="Presenters Instructions"
        // description="Oral, poster, and session-chair instructions will be published with the current program."
      />
      <section className="mx-auto max-w-6xl space-y-10 px-4 py-16">
        {/* <p className="max-w-3xl text-sm leading-7 text-muted">
          Slide formats, poster sizes, and presentation timings remain placeholders until the scientific committee confirms them.
        </p> */}
        <div>
          <SectionHeading
            title="Oral / Poster Presentation"
            // description="Taken from HSDS brochures. Not a rule for the next meeting."
          />
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{historicalPosterNote}</p>
          <p className="mt-4 text-sm text-muted">
            Download the official Word template and use it when preparing your abstract for HSDS-2027.
          </p>
          <Button className="mt-4" asChild>
            <a
              href={abstractGuidelines.templateHref}
              download={abstractGuidelines.templateFilename}
            >
              <Download />
              Download Abstract Template
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
