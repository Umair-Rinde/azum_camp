import { Link } from "react-router-dom";
import { currentConference, primaryCta, secondaryCta } from "@/data/constants";
import { displayValue } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { ConferenceDateBadge } from "./ConferenceDateBadge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-deep-forest text-warm-white">
      <div className="absolute inset-0 opacity-25">
        <PlaceholderImage
          src="/conference-assets/hero/hero.jpg"
          alt="Editorial placeholder for the conference hero"
          className="size-full"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,83,45,0.92),rgba(23,33,27,0.78))]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div>
          <ConferenceDateBadge />
          <h1 className="mt-6 max-w-2xl text-4xl text-warm-white md:text-6xl">
            {displayValue(currentConference.title, "Herbal & Synthetic Drug Studies")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-warm-white/80">
            {displayValue(
              currentConference.description,
              "Official website for the conference series. Current-edition title, dates, and venue remain placeholders until organizers confirm them.",
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="gold" size="lg" asChild>
              <Link to={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-warm-white/30 text-warm-white hover:bg-white/10"
              asChild
            >
              <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <PlaceholderImage
            alt="Botanical and molecular study placeholder"
            className="h-full min-h-80 rounded-lg border border-white/15"
          />
        </div>
      </div>
    </section>
  );
}
