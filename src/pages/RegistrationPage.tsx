import {
  accommodationNote,
  cancellationPolicy,
  paymentNote,
  registrationIncludes,
  registrationPlans,
} from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { RegistrationCard } from "@/components/conference/RegistrationCard";
import { FeeTable } from "@/components/conference/FeeTable";
import { RegistrationForm } from "@/components/conference/RegistrationForm";
import { FAQAccordion } from "@/components/conference/FAQAccordion";

export function RegistrationPage() {
  return (
    <>
      <PageMeta title="Registration | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Registration"
        title="Register for the conference"
        description="Categories are listed. Fees from 2010, 2014, and 2016 pamphlets are not shown and must not be treated as current."
      />

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <div>
          <SectionHeading title="Registration Categories" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {registrationPlans.map((plan) => (
              <RegistrationCard key={plan.category} {...plan} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeading title="Fee Table" />
          <div className="mt-6">
            <FeeTable />
          </div>
        </div>

        <div>
          <SectionHeading title="What's Included" />
          <ul className="mt-6 space-y-2">
            {registrationIncludes.map((item) => (
              <li key={item} className="rounded-lg border border-border bg-warm-white px-4 py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading title="Accommodation" />
          <p className="mt-4 max-w-3xl text-sm text-muted">{accommodationNote}</p>
        </div>

        <div className="rounded-lg border border-border bg-warm-white p-6">
          <SectionHeading title="Registration Form" />
          <div className="mt-8">
            <RegistrationForm />
          </div>
        </div>

        <div>
          <SectionHeading title="Payment" />
          <p className="mt-4 max-w-3xl text-sm text-muted">{paymentNote}</p>
        </div>

        <div>
          <SectionHeading title="Cancellation Policy" />
          <p className="mt-4 max-w-3xl text-sm text-muted">{cancellationPolicy}</p>
        </div>

        <div>
          <SectionHeading title="FAQ" />
          <div className="mt-6">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
