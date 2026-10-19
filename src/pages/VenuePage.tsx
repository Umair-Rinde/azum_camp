import { aboutPune, currentConference, historicalVenue} from "@/data/constants";
import { CAMPUS_GALLERY, LAB_GALLERY, PUNE_LANDMARKS } from "@/data/images";
import { displayValue } from "@/lib/utils";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { VenueMap } from "@/components/conference/VenueMap";
import { ImageGallery } from "@/components/conference/ImageGallery";

export function VenuePage() {
  return (
    <>
      <PageMeta title="Venue | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Venue"
        title="Meeting place"
        // description="The current venue stays a placeholder until organizers confirm it. Azam Campus is documented only for earlier editions."
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
          <SectionHeading
            title="Campus"
            description="A Glimpse of Azam Campus"
          />
          <div className="mt-6">
            <ImageGallery images={CAMPUS_GALLERY} />
          </div>
          {/* <p className="mt-4 text-sm leading-7 text-muted">
            Earlier editions used the Assembly Hall (2010) and Dr. A. R. Shaikh Assembly Hall (2014, 2016) at Azam Campus, Camp, Pune – 411001. Access notes for the next edition should be updated only after confirmation.
          </p> */}
        </div>

        <div>
          <SectionHeading
            title="Laboratories and facilities"
            description="Exploring the Campus Laboratories"
          />
          <div className="mt-6">
            <ImageGallery images={LAB_GALLERY} />
          </div>
        </div>
        <div>
          <SectionHeading
            title="About Pune"
            // description="Landmarks often noted in earlier HSDS sightseeing notes."
          />
          <p className="mt-4 max-w-3xl leading-7 text-muted">{aboutPune}</p>
          <div className="mt-8">
            <ImageGallery images={PUNE_LANDMARKS} />
          </div>
        </div>
      </section>
    </>
  );
}
