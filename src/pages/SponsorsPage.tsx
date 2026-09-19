import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";

export function SponsorsPage() {
  return (
    <>
      <PageMeta title="Sponsor | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Sponsor"
        title="Exhibition and sponsorship"
        description="Packages and fees for the current edition have not been published. Historical pamphlet rates are not shown."
      />
      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <div id="exhibition" className="scroll-mt-28">
          <SectionHeading title="Exhibition (Tabletop) Opportunities" />
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
            Tabletop exhibition details will be listed here when organizers confirm booth inclusions and eligibility.
          </p>
        </div>
        <div id="opportunity" className="scroll-mt-28">
          <SectionHeading title="Sponsor Opportunity" />
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
            Sponsor tiers and benefits remain unpublished. Do not use figures from earlier editions.
          </p>
        </div>
        <div id="become" className="scroll-mt-28">
          <SectionHeading title="Become A Sponsor" />
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
            An enquiry route will replace this note once a current contact and application process are supplied.
          </p>
        </div>
      </section>
    </>
  );
}
