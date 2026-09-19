import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  currentConference,
  featuredSpeakerSlots,
  highlights,
  historicalTopics,
  pastConferences,
  primaryCta,
  speakers,
} from "@/data/constants";
import { displayValue } from "@/lib/utils";
import { PageMeta } from "@/components/seo/PageMeta";
import { HeroSection } from "@/components/conference/HeroSection";
import { TrustLogoStrip } from "@/components/conference/TrustLogoStrip";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { HighlightCard } from "@/components/conference/HighlightCard";
import { CountdownTimer } from "@/components/conference/CountdownTimer";
import { ThemeCard } from "@/components/conference/ThemeCard";
import { SpeakerCard } from "@/components/conference/SpeakerCard";
import { PastConferenceCard } from "@/components/conference/PastConferenceCard";
import { Button } from "@/components/ui/button";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function HomePage() {
  const featured = speakers.slice(0, featuredSpeakerSlots);

  return (
    <>
      <PageMeta title={`${displayValue(currentConference.title, "Herbal & Synthetic Drug Studies")} | ${displayValue(currentConference.edition, "Conference")} | ${displayValue(currentConference.city, "City TBA")}`} />
      <HeroSection />

      <motion.section
        className="mx-auto max-w-6xl px-4 py-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fade}
      >
        <TrustLogoStrip />
      </motion.section>

      <section id="overview" className="paper-texture scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionHeading
            eyebrow="Introduction"
            title="A documented series in herbal and synthetic drug studies"
            description="HSDS has convened national and international editions since 2010. This site holds the official pages for the next meeting and an archive of confirmed past editions. Current title, dates, and venue stay editable placeholders until organizers confirm them."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading eyebrow="Highlights" title="What the series is known for" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {highlights.map((item) => (
            <HighlightCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-cream/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionHeading eyebrow="Countdown" title="Time to the opening session" />
          <div className="mt-8">
            <CountdownTimer />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="Research areas"
          title="Themes drawn from earlier editions"
          description="These topics appeared on previous HSDS materials. They are shown as historical research areas, not as the confirmed track list for the next edition."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {historicalTopics.slice(0, 6).map((topic, index) => (
            <ThemeCard key={topic} title={topic} index={index} />
          ))}
        </div>
      </section>

      <section className="paper-texture">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionHeading
            eyebrow="Speakers"
            title="Featured speakers"
            description="Confirmed names will replace these placeholders. Do not invent a roster."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.length > 0
              ? featured.map((speaker) => <SpeakerCard key={speaker.name} {...speaker} />)
              : Array.from({ length: featuredSpeakerSlots }).map((_, index) => (
                  <SpeakerCard key={index} placeholder />
                ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading eyebrow="Archive" title="Previous editions" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pastConferences.map((conference) => (
            <PastConferenceCard key={conference.code} conference={conference} />
          ))}
        </div>
      </section>

      <section className="bg-deep-forest text-warm-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-3xl text-warm-white md:text-4xl">Registration will open with the current circular</h2>
          <p className="mx-auto mt-4 max-w-2xl text-warm-white/75">
            Fees from earlier pamphlets are not current. Use the registration page to leave your details once categories are confirmed.
          </p>
          <Button variant="gold" size="lg" className="mt-8" asChild>
            <Link to={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
