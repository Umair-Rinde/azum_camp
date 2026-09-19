import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Highlight } from "@/data/types";

export function HighlightCard({ title, description }: Highlight) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted">{description}</p>
      </CardContent>
    </Card>
  );
}
