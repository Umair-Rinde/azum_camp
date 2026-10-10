import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { Card, CardContent } from "@/components/ui/card";
import type { Speaker } from "@/data/types";

type SpeakerCardProps = Partial<Speaker> & {
  placeholder?: boolean;
};

export function SpeakerCard({
  name = "Speaker to be announced",
  designation = "Designation to be confirmed",
  institution = "Institution to be confirmed",
  country = "Country TBA",
  photo,
  shortBio,
  placeholder = false,
}: SpeakerCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-border shadow-sm transition hover:shadow-md">
      <PlaceholderImage
        src={photo}
        alt={name}
        className="aspect-[3/4] shrink-0 bg-cream"
        imgClassName="object-cover"
      />
      <CardContent className="flex min-h-[7.5rem] flex-1 flex-col gap-1 px-3.5 pt-3.5 pb-4 text-center">
        <p className="min-h-[2.5rem] font-heading text-[0.95rem] leading-snug line-clamp-2">
          {name}
        </p>
        <p className="min-h-[2rem] text-xs leading-snug text-gold line-clamp-2">
          {designation}
        </p>
        <p className="min-h-[2.75rem] text-xs leading-snug text-muted line-clamp-3">
          {institution}
          {country ? (
            <>
              <br />
              {country}
            </>
          ) : null}
        </p>
        {shortBio && !placeholder ? (
          <p className="pt-1 text-left text-xs leading-5 text-muted line-clamp-3">{shortBio}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
