import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";

export function ReviewProcessPage() {
  return (
    <>
      <PageMeta title="Review Process | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Program"
        title="Review process"
        description="The current review policy has not been issued. This page will hold screening, chair review, and decision steps once organizers confirm them."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="max-w-3xl text-sm leading-7 text-muted">
          Earlier editions used contributed oral and poster sessions. Do not treat historical brochure notes as the current review criteria until they are added to src/data/constants.ts.
        </p>
      </section>
    </>
  );
}
