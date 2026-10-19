import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { RegistrationPlan } from "@/data/types";

const REGISTRATION_FORM_URL = "https://forms.gle/4KN1cg5WPp4b2V4m8";

export function RegistrationCard({ category, price, currency }: RegistrationPlan) {
  return (
    <Card className="mx-auto flex h-full w-full max-w-sm flex-col border-border shadow-sm transition hover:border-gold/40 hover:shadow-md">
      <CardHeader className="items-center gap-3 px-6 pt-7 pb-2 text-center">
        <CardTitle className="flex min-h-12 items-center justify-center text-balance text-lg leading-snug">
          {category}
        </CardTitle>
        <p className="flex items-baseline justify-center gap-2 font-cta text-[2rem] leading-none font-semibold tracking-tight text-gold tabular-nums">
          {price}
          {currency ? (
            <span className="text-sm font-medium tracking-[0.16em] text-gold-soft uppercase">
              {currency}
            </span>
          ) : null}
        </p>
      </CardHeader>
      <CardContent className="px-6 pt-4 pb-7">
        <Button className="h-11 w-full rounded-full text-sm tracking-[0.12em] uppercase" asChild>
          <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
