import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { RegistrationPlan } from "@/data/types";

export function RegistrationCard({ category, price, currency, includes }: RegistrationPlan) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{category}</CardTitle>
        <p className="text-sm text-gold">
          {price}
          {currency ? ` ${currency}` : ""}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {includes.length > 0 ? (
          <ul className="space-y-2 text-sm text-muted">
            {includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted">Inclusions will be listed when the current circular is released.</p>
        )}
        <Button asChild>
          <Link to="/register">Register</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
