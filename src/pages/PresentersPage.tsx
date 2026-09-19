import { historicalPosterNote } from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";

export function PresentersPage() {
  return (
    <>
      <PageMeta title="Presenters Instructions | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Program"
        title="Presenters instructions"
        description="Oral, poster, and session-chair instructions will be published with the current program."
      />
      <section className="mx-auto max-w-6xl space-y-10 px-4 py-16">
        <p className="max-w-3xl text-sm leading-7 text-muted">
          Slide formats, poster sizes, and presentation timings remain placeholders until the scientific committee confirms them.
        </p>
        <div>
          <SectionHeading
            title="Poster size on earlier editions"
            description="Taken from HSDS brochures. Not a rule for the next meeting."
          />
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{historicalPosterNote}</p>
        </div>
      </section>
    </>
  );
}
