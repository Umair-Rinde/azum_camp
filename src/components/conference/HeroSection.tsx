import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { currentConference, historicalVenue, primaryCta, secondaryCta } from "@/data/constants";
import { HERO_IMAGE_STRIP, SITE_IMAGES } from "@/data/images";
import { displayValue, isPlaceholder } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { HeroImageStrip } from "@/components/conference/HeroImageStrip";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const dateLine = [
    displayValue(currentConference.dates, "JANUARY 28-30, 2027"),
    [displayValue(currentConference.city, "PUNE"), displayValue(currentConference.country, "INDIA")]
      .filter(Boolean)
      .join(", "),
  ]
    .filter(Boolean)
    .join(" · ");

  const venueLine = isPlaceholder(currentConference.venue)
    ? `${historicalVenue.name}, ${historicalVenue.address}`
    : currentConference.venue;

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease },
    },
  };

  return (
    <section className="relative overflow-hidden bg-deep-forest text-warm-white">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.06, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.4, ease }}
      >
        <PlaceholderImage
          src={SITE_IMAGES.HERO_MAIN.src}
          alt={SITE_IMAGES.HERO_MAIN.alt}
          className="size-full"
          imgClassName="object-cover object-center"
          loading="eager"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,35,24,0.97)_0%,rgba(14,48,32,0.92)_42%,rgba(16,55,36,0.72)_68%,rgba(20,60,40,0.55)_100%)]" />

      <div className="relative mx-auto grid max-w-[1380px] items-center gap-10 px-4 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] text-warm-white/90 uppercase sm:text-xs"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-warm-white" aria-hidden />
            {dateLine}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 max-w-2xl font-sans font-extrabold uppercase tracking-[-0.02em] text-warm-white"
          >
            <span className="block whitespace-nowrap text-[clamp(1.25rem,2.8vw,2.25rem)] leading-[1.05] text-gold">
              <span className="align-baseline">4</span>
              <sup className="ml-0.5 text-[0.5em] font-extrabold leading-none tracking-normal">
                TH
              </sup>{" "}
              INTERNATIONAL CONFERENCE ON
            </span>
            <span className="mt-1 block text-[clamp(2rem,4.5vw,3.375rem)] leading-[1.05]">
              <span className="block">
                HERBAL <span className="text-gold">&amp;</span>
              </span>
              <span className="block">SYNTHETIC DRUG</span>
              <span className="block">STUDIES</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-sm leading-7 text-warm-white/85 sm:text-[15px]"
          >
            {displayValue(
              currentConference.description,
              "Connecting researchers in herbal medicines, synthetic chemistry, and translational pharmacology for scientific exchange and collaboration.",
            )}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-xs leading-6 text-warm-white/70 sm:text-sm"
          >
            <span className="font-semibold text-warm-white/90">Venue:</span> {venueLine}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              variant="gold"
              size="lg"
              className="rounded-[10px] px-6 text-[13px] font-bold tracking-[0.14em] uppercase [&_svg]:size-2.5"
              asChild
            >
              <Link to={primaryCta.href}>
                Register Now
                <ArrowUpRight className="size-2.5" strokeWidth={2.5} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-[10px] border-warm-white bg-transparent px-6 font-cta text-[13px] font-bold tracking-[0.14em] text-warm-white uppercase hover:bg-white/10 [&_svg]:size-3"
              asChild
            >
              <Link to={secondaryCta.href}>
                Submit Abstract
                <FileText className="size-3" strokeWidth={2} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <HeroImageStrip images={HERO_IMAGE_STRIP} />
      </div>
    </section>
  );
}
