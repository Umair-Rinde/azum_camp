import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ThemeCardProps = {
  title: string;
  description?: string;
  index?: number;
};

export function ThemeCard({ title, description, index }: ThemeCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        {typeof index === "number" ? (
          <p className="text-xs tracking-[0.2em] text-gold uppercase">
            {String(index + 1).padStart(2, "0")}
          </p>
        ) : null}
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      {description ? (
        <CardContent>
          <p className="text-sm text-muted">{description}</p>
        </CardContent>
      ) : null}
    </Card>
  );
}
