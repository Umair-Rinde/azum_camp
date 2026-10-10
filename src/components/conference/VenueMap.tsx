import { currentConference, historicalVenue } from "@/data/constants";
import { SITE_IMAGES } from "@/data/images";
import { displayValue, isPlaceholder } from "@/lib/utils";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";

export function VenueMap() {
  const currentUnknown = isPlaceholder(currentConference.venue);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-cream">
      <PlaceholderImage
        src={SITE_IMAGES.CAMPUS_PANORAMA.src}
        alt="Campus map placeholder until the current venue is confirmed"
        className="aspect-[16/9]"
      />
      <div className="space-y-2 p-5">
        <p className="font-heading text-xl">
          {currentUnknown ? "Current venue to be confirmed" : displayValue(currentConference.venue)}
        </p>
        <p className="text-sm text-muted">
          Historical reference only: {historicalVenue.name}, {historicalVenue.address}.
        </p>
      </div>
    </div>
  );
}
