import { Link } from "react-router-dom";
import type { PastConference } from "@/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PastConferenceCard({ conference }: { conference: PastConference }) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-deep-forest px-6 py-5 text-warm-white">
        <p className="text-xs tracking-[0.2em] text-gold-soft uppercase">{conference.edition}</p>
        <p className="mt-1 font-heading text-3xl text-warm-white">{conference.year}</p>
      </div>
      <CardHeader>
        <div className="flex flex-wrap gap-2">
          <Badge>{conference.type}</Badge>
          <Badge variant="gold">{conference.code}</Badge>
        </div>
        <CardTitle>{conference.title}</CardTitle>
        <p className="text-sm text-muted">
          {conference.dates}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted">{conference.venue}</p>
        <p className="mt-3 text-sm text-muted">{conference.organizers[0]}</p>
        <Link
          to={`/past-conferences#${conference.code.toLowerCase()}`}
          className="mt-4 inline-block text-sm font-medium text-deep-forest underline-offset-4 hover:underline"
        >
          View archive
        </Link>
      </CardContent>
    </Card>
  );
}
