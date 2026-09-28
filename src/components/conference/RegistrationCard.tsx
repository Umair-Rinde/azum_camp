import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { RegistrationPlan } from "@/data/types";
import { Check } from "lucide-react";

export function RegistrationCard({ category, price, currency, includes }: RegistrationPlan) {
  return (
    <Card className="flex h-full flex-col border-border shadow-sm transition hover:border-gold/40 hover:shadow-md">
      <CardHeader className="space-y-3 pb-2 text-center">
        <CardTitle className="text-xl">{category}</CardTitle>
        <p className="font-heading text-3xl text-deep-forest">
          {price}
          {currency ? <span className="ml-1 text-base text-muted">{currency}</span> : null}
        </p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col space-y-6">
        {includes.length > 0 ? (
          <ul className="flex-1 space-y-3 text-sm text-muted">
            {includes.map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="flex-1 text-sm text-muted">
            Inclusions will be listed when the current circular is released.
          </p>
        )}
        <Button className="w-full rounded-full uppercase" asChild>
          <Link to="/register">Register Now</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
