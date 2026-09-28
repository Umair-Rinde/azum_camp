import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  currentConference,
  featuredSpeakerSlots,
  highlights,
  historicalVenue,
  pastConferences,
  primaryCta,
  registrationPlans,
  researchTracksHome,
  speakers,
} from "@/data/constants";
import { PAST_HIGHLIGHTS, SITE_IMAGES } from "@/data/images";
import { displayValue } from "@/lib/utils";
import { PageMeta } from "@/components/seo/PageMeta";
import { HeroSection } from "@/components/conference/HeroSection";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { FeaturePillars } from "@/components/conference/FeaturePillars";
import { SpeakerCard } from "@/components/conference/SpeakerCard";
import { TracksAccordion } from "@/components/conference/TracksAccordion";
import { RegistrationCard } from "@/components/conference/RegistrationCard";
import { PastHighlightsCarousel } from "@/components/conference/PastHighlightsCarousel";
import { ContactForm } from "@/components/conference/ContactForm";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.2, margin: "0px 0px -8% 0px" } as const;

function useScrollVariants() {
  const reduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.65, ease },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.05,
      },
    },
  };

  return { fadeUp, stagger };
}

export function HomePage() {
  const featured = speakers.slice(0, featuredSpeakerSlots);
  const { fadeUp, stagger } = useScrollVariants();

  return (
    <>
      <PageMeta
        title={`${displayValue(currentConference.title, "Herbal & Synthetic Drug Studies")} | ${displayValue(currentConference.edition, "Conference")} | ${displayValue(currentConference.city, "City TBA")}`}
      />
      <HeroSection />

      <motion.section
        id="overview"
        className="scroll-mt-28"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <motion.h2
            variants={fadeUp}
            className="text-2xl leading-snug text-deep-forest md:text-3xl"
          >
            {displayValue(currentConference.edition, "4th")}{" "}
            {displayValue(
              currentConference.title,
              "International Conference on Herbal & Synthetic Drug Studies",
            )}{" "}
            will take place from{" "}
            <strong className="font-heading font-normal text-deep-forest">
              {displayValue(currentConference.dates, "dates to be announced")}
            </strong>
            , at the{" "}
            <strong className="font-heading font-normal text-deep-forest">
              {displayValue(currentConference.city, "Pune")},{" "}
              {displayValue(currentConference.country, "India")}
            </strong>
            .
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-base leading-8 text-muted md:text-[17px]">
            Building on the success of previous editions in {pastConferences.map((c) => c.year).join(", ")},
            HSDS aims to serve as a dynamic interdisciplinary platform for scientific exchange, innovation,
            and collaboration in herbal medicines, synthetic and metal-based drugs, formulation science, and
            translational approaches.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 text-base leading-8 text-muted md:text-[17px]">
            With continuing interest in natural therapeutics and contemporary drug discovery, the conference
            will foster discussions on preparation and characterization methods, analytical techniques,
            regulatory challenges, and the integration of traditional medicinal knowledge with modern
            healthcare research.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 text-base leading-8 text-muted md:text-[17px]">
            The scientific program will feature keynote lectures, invited talks, oral and poster presentations,
            and networking opportunities designed to encourage collaborations between academia, healthcare,
            and industry once organizers confirm the current circular.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-border bg-cream/60"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <FeaturePillars items={highlights} />
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-6xl px-4 py-16 md:py-20"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="relative">
          <SectionHeading
            align="center"
            eyebrow="Plenary & Keynote"
            title="Featured speakers"
            // description="Confirmed names will replace these placeholders. Do not invent a roster."
          />
          <Button
            variant="outline"
            className="mt-6 rounded-full md:absolute md:right-0 md:bottom-0 md:mt-0"
            asChild
          >
            <Link to="/speakers">View all speakers →</Link>
          </Button>
        </motion.div>
        <motion.div variants={stagger} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.length > 0
            ? featured.map((speaker) => (
                <motion.div key={speaker.name} variants={fadeUp}>
                  <SpeakerCard {...speaker} />
                </motion.div>
              ))
            : Array.from({ length: featuredSpeakerSlots }).map((_, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <SpeakerCard placeholder />
                </motion.div>
              ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="paper-texture"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <motion.div variants={fadeUp}>
            <SectionHeading
              align="center"
              eyebrow="Tracks & Sessions"
              title="Research areas from earlier editions"
              // description="Grouped from topics listed on previous HSDS materials. Confirmed tracks for the next edition will replace this list when published."
            />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 rounded-xl border border-border bg-warm-white px-4 md:px-6">
            <TracksAccordion tracks={researchTracksHome} />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 text-center">
            <Button variant="gold" className="rounded-full uppercase" asChild>
              <Link to="/abstracts">Call for Abstracts</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-6xl px-4 py-16 md:py-20"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            align="center"
            eyebrow="Registration Plans"
            title="Choose your category"
            // description="Fees from earlier pamphlets are not current. Prices appear here only after organizers release them."
          />
        </motion.div>
        <motion.div variants={stagger} className="mt-10 grid gap-5 md:grid-cols-3">
          {registrationPlans.map((plan) => (
            <motion.div key={plan.category} variants={fadeUp}>
              <RegistrationCard {...plan} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-deep-forest"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <motion.div variants={fadeUp}>
            <SectionHeading
              align="center"
              eyebrow="Past Edition Highlights"
              title="Moments from the series"
              className="[&_h2]:text-warm-white"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10">
            <PastHighlightsCarousel images={PAST_HIGHLIGHTS} />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 text-center">
            <Button
              variant="outline"
              className="rounded-full border-warm-white/35 bg-transparent text-warm-white hover:bg-warm-white/10 hover:text-warm-white"
              asChild
            >
              <Link to="/past-conferences">Browse past conferences</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-6xl px-4 py-16 md:py-20"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeUp}>
            <SectionHeading eyebrow="Venue" title="Meeting place" />
            <p className="mt-6 text-lg font-medium text-deep-forest">
              {displayValue(currentConference.venue, historicalVenue.name)}
            </p>
            <p className="mt-2 text-sm leading-7 text-muted">{historicalVenue.address}</p>
            <p className="mt-4 text-sm leading-7 text-muted">{historicalVenue.note}</p>
            <Button variant="outline" className="mt-6 rounded-full" asChild>
              <Link to="/venue">Venue details</Link>
            </Button>
          </motion.div>
          <motion.div variants={fadeUp}>
            <PlaceholderImage
              src={SITE_IMAGES.ASSEMBLY_HALL.src}
              alt={SITE_IMAGES.ASSEMBLY_HALL.alt}
              className="aspect-[16/11] rounded-xl border border-border"
              imgClassName="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="bg-deep-forest text-warm-white"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <motion.div variants={fadeUp}>
            <p className="text-xs tracking-[0.25em] text-gold-soft uppercase">Get in touch</p>
            <h2 className="mt-3 text-3xl text-warm-white md:text-4xl">Contact us</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-warm-white/75">
              Got a question? Fill in your details with your enquiry and we will be in touch. Registration
              and abstract portals open with the current circular.
            </p>
            <Button variant="gold" size="lg" className="mt-8 rounded-full uppercase" asChild>
              <Link to={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-xl bg-warm-white p-6 text-charcoal shadow-lg">
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
