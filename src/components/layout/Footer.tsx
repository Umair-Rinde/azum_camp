import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { currentConference, footerLinks, primaryCta, secondaryCta, siteMeta } from "@/data/constants";
import { SITE_IMAGES } from "@/data/images";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";

export function Footer() {
  return (
    <footer className="mt-0 border-t border-border bg-deep-forest text-warm-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="md:max-w-xs md:shrink-0 lg:max-w-sm">
          <div className="flex items-center gap-3">
            <PlaceholderImage
              src={SITE_IMAGES.LOGO_SITE.src}
              alt={SITE_IMAGES.LOGO_SITE.alt}
              width={48}
              height={48}
              sizes="48px"
              className="size-12 shrink-0 rounded-full border border-white/15 bg-warm-white"
              imgClassName="object-contain p-0.5"
            />
            <p className="font-heading text-2xl">{currentConference.shortName}</p>
          </div>
          <p className="mt-4 text-sm font-medium text-gold-soft">Organized with</p>
          <p className="mt-1 text-sm leading-6 text-warm-white/80">
            M.C.E. Society&apos;s Abeda Inamdar Senior College and partner institutions named on earlier editions.
          </p>
          <p className="mt-4 text-sm leading-6 text-warm-white/65">{siteMeta.description}</p>
        </div>

        <div className="md:w-44 md:shrink-0">
          <p className="text-xs tracking-[0.2em] text-gold-soft uppercase">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-gold-soft" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:max-w-[15rem] md:shrink-0">
          <p className="text-xs tracking-[0.2em] text-gold-soft uppercase">Take Action</p>
          <p className="mt-4 text-sm leading-6 text-warm-white/70">
            Secure your place or share your research for the upcoming edition.
          </p>
          <div className="mt-5 flex flex-col items-start gap-3">
            <Button
              variant="gold"
              className="rounded-[10px] px-5 text-[13px] font-bold tracking-[0.14em] uppercase [&_svg]:size-2.5"
              asChild
            >
              <Link to={primaryCta.href}>
                {primaryCta.label}
                <ArrowUpRight className="size-2.5" strokeWidth={2.5} />
              </Link>
            </Button>
            <Link
              to={secondaryCta.href}
              className="text-sm text-warm-white/75 underline-offset-4 transition-colors hover:text-gold-soft hover:underline"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-warm-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentConference.shortName}. All rights reserved.</p>
          <p>
            <Link className="hover:text-gold-soft" to="/contact">
              Contact
            </Link>
            {" · "}
            <Link className="hover:text-gold-soft" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
