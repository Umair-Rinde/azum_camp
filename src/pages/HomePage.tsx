import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  currentConference,
  currentImportantDates,
  featuredSpeakerSlots,
  highlights,
  historicalVenue,
  homeOrganizers,
  hostInstitution,
  patrons,
  primaryCta,
  registrationPlans,
  speakers,
} from "@/data/constants";
import { PAST_HIGHLIGHTS, SITE_IMAGES } from "@/data/images";
import { displayValue } from "@/lib/utils";
import { PageMeta } from "@/components/seo/PageMeta";
import { HeroSection } from "@/components/conference/HeroSection";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { FeaturePillars } from "@/components/conference/FeaturePillars";
import { SpeakerCard } from "@/components/conference/SpeakerCard";
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
            className="font-sans text-2xl leading-snug text-deep-forest md:text-3xl"
          >
            {displayValue(currentConference.edition, "4th")}{" "}
            {displayValue(
              currentConference.title,
              "International Conference on Herbal & Synthetic Drug Studies",
            )}{" "}
            will take place from{" "}
            <strong className="font-sans font-normal text-deep-forest">
              {displayValue(currentConference.dates, "dates to be announced")}
            </strong>
            , at the{" "}
            <strong className="font-sans font-normal text-deep-forest">
              {displayValue(currentConference.city, "Pune")},{" "}
              {displayValue(currentConference.country, "India")}
            </strong>
            .
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-12">
            <p className="text-xs tracking-[0.22em] text-gold uppercase">Joint Organizers</p>
            <div className="academic-divider mt-3 max-w-[7rem]" />
            <motion.ul
              variants={stagger}
              className="mt-8 flex max-w-5xl flex-col gap-5"
            >
              {homeOrganizers.map((org) => (
                <motion.li
                  key={org.name}
                  variants={fadeUp}
                  className="group flex items-center gap-4 border-l-2 border-gold/55 bg-[linear-gradient(135deg,rgba(245,240,230,0.9)_0%,transparent_72%)] py-4 pl-4 pr-3 transition-[border-color] duration-300 hover:border-gold sm:gap-5 sm:py-5 sm:pl-5"
                >
                  <PlaceholderImage
                    src={org.logo.src}
                    alt={org.logo.alt}
                    className="size-[4.25rem] shrink-0 bg-transparent sm:size-[5.25rem]"
                    imgClassName="object-contain p-0.5 mix-blend-multiply"
                    sizes="84px"
                  />
                  <div className="min-w-0">
                    <p className="font-sans text-lg font-semibold leading-snug tracking-wide text-deep-forest md:text-xl">
                      {org.name}
                    </p>
                    {"detail" in org && org.detail ? (
                      <p className="mt-2 font-sans text-sm font-semibold tracking-wide text-gold md:text-base">
                        {org.detail}
                      </p>
                    ) : null}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-base leading-8 text-muted md:text-[17px]">
            Building on the success of its previous editions held in 2010, 2014, and 2016, the Fourth
            International Conference on Herbal and Synthetic Drug Studies (HSDS-2027) aims to provide a
            dynamic interdisciplinary platform for scientific exchange, innovation, and collaboration in the
            fields of herbal medicines, synthetic and metal-based drugs, pharmaceutical formulations, and
            translational drug research.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 text-base leading-8 text-muted md:text-[17px]">
            In view of the growing global interest in natural therapeutics and advances in contemporary drug
            discovery, HSDS-2027 will bring together researchers, academicians, healthcare professionals, and
            industry experts to deliberate on emerging developments in drug synthesis, preparation and
            characterization, advanced analytical techniques, formulation science, and regulatory
            perspectives. The conference will also emphasize the integration of traditional medicinal
            knowledge with modern scientific approaches to healthcare and therapeutic development.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 text-base leading-8 text-muted md:text-[17px]">
            The scientific programme will feature keynote lectures, invited talks, oral and poster
            presentations, and dedicated networking opportunities, fostering interdisciplinary dialogue,
            knowledge sharing, and meaningful collaborations among academia, healthcare, and industry.
            HSDS-2027 aspires to advance scientific understanding, encourage innovative research, and
            strengthen collaborative efforts towards the development of safe, effective, and scientifically
            validated therapeutic agents.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 text-base leading-8 text-muted md:text-[17px]">
            The forthcoming conference aims to bring together academicians, researchers, scientists,
            healthcare professionals and students on a common platform to deliberate on the current status,
            emerging trends, future prospects and diverse applications of herbal and synthetic drugs.
          </motion.p>
          {/* <motion.div variants={fadeUp} className="mt-8">
            <p className="text-base font-medium leading-8 text-deep-forest md:text-[17px]">
              The major themes of the conference include:
            </p>
            <ol className="mt-4 list-decimal space-y-2.5 pl-6 text-base leading-8 text-muted md:text-[17px]">
              {majorThemes.map((theme) => (
                <li key={theme} className="pl-1">
                  {theme}
                </li>
              ))}
            </ol>
          </motion.div> */}
        </div>
      </motion.section>

      <motion.section
        aria-label="Patrons"
        className="border-y border-border bg-warm-white"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <motion.div variants={fadeUp}>
            <SectionHeading align="center" eyebrow="Our Inspiration" title="Patrons" />
          </motion.div>
          <motion.ul
            variants={stagger}
            className="mt-12 flex flex-wrap items-start justify-center gap-14 sm:gap-24"
          >
            {patrons.map((patron) => (
              <motion.li key={patron.name} variants={fadeUp} className="w-52 text-center">
                <PlaceholderImage
                  src={patron.photo}
                  alt={patron.name}
                  width={192}
                  height={192}
                  sizes="192px"
                  className="mx-auto size-40 rounded-full shadow-[0_8px_24px_rgba(20,83,45,0.12)] ring-4 ring-gold/35 md:size-48"
                  imgClassName="object-cover object-center"
                />
                <p className="mt-5 font-heading text-xl leading-tight text-deep-forest">{patron.name}</p>
                <p className="mt-1 text-sm text-gold">{patron.role}</p>
                <p className="mt-1 text-sm text-muted">{patron.institution}</p>
              </motion.li>
            ))}
          </motion.ul>
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
        className="border-y border-border bg-warm-white"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
        aria-label={hostInstitution.title}
      >
        <PlaceholderImage
          src={SITE_IMAGES.CAMPUS_PANORAMA.src}
          alt={SITE_IMAGES.CAMPUS_PANORAMA.alt}
          className="aspect-[2.8/1] w-full bg-cream md:aspect-[3.2/1]"
          imgClassName="object-cover object-center"
        />
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <motion.div variants={fadeUp}>
            <SectionHeading
              align="center"
              eyebrow={hostInstitution.eyebrow}
              title={hostInstitution.title}
            />
          </motion.div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
            <motion.div variants={fadeUp}>
              <p className="text-xs tracking-[0.22em] text-gold uppercase">
                {hostInstitution.college.label}
              </p>
              <div className="academic-divider mt-3 max-w-[5rem]" />
              <p className="mt-5 text-base leading-8 text-muted md:text-[17px]">
                {hostInstitution.college.body}
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-xs tracking-[0.22em] text-gold uppercase">
                {hostInstitution.department.label}
              </p>
              <div className="academic-divider mt-3 max-w-[5rem]" />
              <div className="mt-5 space-y-4 text-base leading-8 text-muted md:text-[17px]">
                {hostInstitution.department.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
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
        className="mx-auto max-w-6xl px-4 py-16 md:py-20"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            align="center"
            eyebrow="Important Dates"
            title="Mark your calendar"
          />
        </motion.div>
        <motion.div
          variants={stagger}
          className="mt-10 grid gap-6 sm:grid-cols-3"
        >
          {currentImportantDates.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="border-t border-deep-forest/20 pt-5 text-center"
            >
              <p className="text-xs tracking-[0.2em] text-muted uppercase">{item.label}</p>
              <p className="mt-2 text-lg font-semibold tracking-wide text-deep-forest">
                {item.date}
              </p>
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
