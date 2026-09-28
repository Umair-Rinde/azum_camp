import {
  historicalObjectives,
  historicalTopics,
  organizers,
  pastConferences,
  whyAttend,
} from "@/data/constants";
import {
  CERTIFICATE_IMAGES,
  COMMITTEE_GROUP_IMAGES,
  PARTNERSHIP_IMAGES,
  SITE_IMAGES,
} from "@/data/images";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { HighlightCard } from "@/components/conference/HighlightCard";
import { ThemeCard } from "@/components/conference/ThemeCard";
import { TrustLogoStrip } from "@/components/conference/TrustLogoStrip";
import { ImageGallery } from "@/components/conference/ImageGallery";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";

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
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <p className="max-w-3xl leading-7 text-muted">
              The series has hosted a national conference in 2010 and international conferences in 2014 and 2016 at Azam Campus, Pune, organized by M.C.E. Society colleges and, from 2014, ISTRA, with UGC support and later association with The University of Kansas Cancer Center. This website is the public record for those editions and the working site for the next meeting.
            </p>
            <PlaceholderImage
              src={SITE_IMAGES.GEMINI_GENERATED.src}
              alt={SITE_IMAGES.GEMINI_GENERATED.alt}
              className="aspect-[4/3] rounded-lg border border-border"
            />
          </div>
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
            description="Bodies named on the 2010, 2014, and 2016 brochures. They are the documented hosts of those editions, not a confirmed list for the next meeting."
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
          <SectionHeading
            title="Partnerships and MoU"
            description="Documented collaboration moments from the conference series."
          />
          <div className="mt-6">
            <ImageGallery images={PARTNERSHIP_IMAGES} />
          </div>
        </div>

        <div>
          <SectionHeading
            title="Committee"
            description="Group photographs of organizing and scientific committee members."
          />
          <div className="mt-6">
            <ImageGallery images={COMMITTEE_GROUP_IMAGES} />
          </div>
        </div>

        <div>
          <SectionHeading
            title="Certificates"
            description="Sample certificates from earlier editions."
          />
          <div className="mt-6">
            <ImageGallery images={CERTIFICATE_IMAGES} />
          </div>
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
