import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { Card, CardContent } from "@/components/ui/card";
import type { Speaker } from "@/data/types";

type SpeakerCardProps = Partial<Speaker> & {
  placeholder?: boolean;
  featured?: boolean;
};

export function SpeakerCard({
  name = "Speaker to be announced",
  designation = "Designation to be confirmed",
  institution = "Institution to be confirmed",
  country = "Country TBA",
  photo,
  shortBio,
  placeholder = false,
  featured = false,
}: SpeakerCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-border shadow-sm transition hover:shadow-md">
      <PlaceholderImage
        src={photo}
        alt={name}
        className="aspect-[3/4] shrink-0 bg-cream"
        imgClassName="object-cover"
      />
      <CardContent
        className={
          featured
            ? "flex flex-1 flex-col px-5 pt-5 pb-6 text-center"
            : "flex flex-1 flex-col px-3.5 pt-3.5 pb-4 text-center"
        }
      >
        <p
          className={
            featured
              ? "font-heading text-xl leading-tight line-clamp-2"
              : "font-heading text-[0.95rem] leading-tight line-clamp-2"
          }
        >
          {name}
        </p>
        <p
          className={
            featured
              ? "mt-2 text-sm leading-snug text-gold line-clamp-2"
              : "mt-1 text-xs leading-snug text-gold line-clamp-2"
          }
        >
          {designation}
        </p>
        <p
          className={
            featured
              ? "mt-2 text-sm leading-snug text-muted line-clamp-4"
              : "mt-1 text-xs leading-snug text-muted line-clamp-3"
          }
        >
          {institution}
          {country ? (
            <>
              <br />
              {country}
            </>
          ) : null}
        </p>
        {shortBio && !placeholder ? (
          <p className="pt-2 text-sm leading-6 text-muted">{shortBio}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
