import { Link } from "react-router-dom";
import type { PastConference } from "@/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";

export function PastConferenceCard({ conference }: { conference: PastConference }) {
  const cover = conference.gallery[0];

  return (
    <Card className="overflow-hidden">
      <PlaceholderImage
        src={cover?.src}
        alt={cover?.alt ?? `${conference.code} archive image`}
        className="aspect-[16/10]"
      />
      <CardHeader>
        <div className="flex flex-wrap gap-2">
          <Badge>{conference.year}</Badge>
          <Badge variant="gold">{conference.code}</Badge>
        </div>
        <CardTitle>{conference.title}</CardTitle>
        <p className="text-sm text-muted">
          {conference.edition} · {conference.dates}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted">{conference.venue}</p>
        <Link
          to="/past-conferences"
          className="mt-4 inline-block text-sm font-medium text-deep-forest underline-offset-4 hover:underline"
        >
          View archive
        </Link>
      </CardContent>
    </Card>
  );
}
