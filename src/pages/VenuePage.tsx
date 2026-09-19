import { aboutPune, accommodationNote, currentConference, historicalVenue, howToReach } from "@/data/constants";
import { displayValue } from "@/lib/utils";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { VenueMap } from "@/components/conference/VenueMap";
import { ThemeCard } from "@/components/conference/ThemeCard";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";

export function VenuePage() {
  return (
    <>
      <PageMeta title="Venue | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Venue"
        title="Meeting place"
        description="The current venue stays a placeholder until organizers confirm it. Azam Campus is documented only for earlier editions."
      />

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Venue Overview" />
            <p className="mt-6 text-lg">
              {displayValue(currentConference.venue, "Current venue to be confirmed")}
            </p>
            <p className="mt-2 text-sm text-muted">
              {displayValue(currentConference.city, "City TBA")}, {displayValue(currentConference.country, "Country TBA")}
            </p>
            <p className="mt-4 text-sm text-muted">{historicalVenue.note}</p>
          </div>
          <VenueMap />
        </div>

        <div>
          <SectionHeading title="Campus" />
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <PlaceholderImage
              src="/conference-assets/venue/campus.jpg"
              alt="Campus photograph placeholder"
              className="aspect-[16/10] rounded-lg border border-border"
            />
            <p className="text-sm leading-7 text-muted">
              Earlier editions used the Assembly Hall (2010) and Dr. A. R. Shaikh Assembly Hall (2014, 2016) at Azam Campus, Camp, Pune – 411001. Photographs and access notes for the next edition should replace this placeholder only after confirmation.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading title="How to Reach" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {howToReach.map((item) => (
              <ThemeCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeading title="Accommodation" />
          <p className="mt-4 max-w-3xl text-sm text-muted">{accommodationNote}</p>
        </div>

        <div>
          <SectionHeading title="About Pune" />
          <p className="mt-4 max-w-3xl leading-7 text-muted">{aboutPune}</p>
        </div>
      </section>
    </>
  );
}
