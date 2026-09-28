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
    <Card className="overflow-hidden border-border shadow-sm transition hover:shadow-md">
      <PlaceholderImage
        src={photo}
        alt={name}
        className="aspect-[4/5] bg-cream"
        imgClassName="object-cover"
      />
      <CardContent className="space-y-1 pt-5 text-center">
        <p className="font-heading text-xl leading-tight">{name}</p>
        <p className="text-sm text-gold">{designation}</p>
        <p className="text-sm text-muted">
          {institution}
          {country ? (
            <>
              <br />
              {country}
            </>
          ) : null}
        </p>
        {shortBio && !placeholder ? (
          <p className="pt-2 text-left text-sm leading-6 text-muted">{shortBio}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
