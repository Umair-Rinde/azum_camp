import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";

export function PresentersPage() {
  return (
    <>
      <PageMeta title="Presenters Instructions | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Program"
        title="Presenters instructions"
        description="Oral, poster, and session-chair instructions will be published with the current program."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="max-w-3xl text-sm leading-7 text-muted">
          Slide formats, poster sizes, and presentation timings remain placeholders until the scientific committee confirms them.
        </p>
      </section>
    </>
  );
}
