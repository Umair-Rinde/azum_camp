import { pastConferences } from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { ConferenceTimeline } from "@/components/conference/ConferenceTimeline";
import { PastConferenceCard } from "@/components/conference/PastConferenceCard";
import { ImageGallery } from "@/components/conference/ImageGallery";
import { SectionHeading } from "@/components/conference/SectionHeading";

export function PastConferencesPage() {
  return (
    <>
      <PageMeta title="Past Conferences | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Archive"
        title="Past conferences"
        description="Confirmed editions from 2010, 2014, and 2016. Brochure scans belong in /public/conference-assets/pamphlets/."
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
          <div id={conference.code.toLowerCase()} key={`${conference.code}-gallery`} className="scroll-mt-28">
            <SectionHeading
              title={`${conference.code} gallery`}
              description={`${conference.edition} · ${conference.dates} · ${conference.venue}`}
            />
            <ul className="mt-4 mb-6 flex flex-wrap gap-2 text-sm text-muted">
              {conference.themes.map((theme) => (
                <li key={theme} className="rounded-full border border-border px-3 py-1">
                  {theme}
                </li>
              ))}
            </ul>
            <ImageGallery images={conference.gallery} />
          </div>
        ))}
      </section>
    </>
  );
}
