import { Link } from "react-router-dom";
import { contact, currentConference, footerLinks, siteMeta } from "@/data/constants";
import { SITE_IMAGES } from "@/data/images";
import { displayValue } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="mt-0 border-t border-border bg-deep-forest text-warm-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={SITE_IMAGES.LOGO_AISC.src}
              alt={SITE_IMAGES.LOGO_AISC.alt}
              className="size-12 rounded-full border border-white/15 bg-warm-white object-contain p-0.5"
            />
            <p className="font-heading text-2xl">{currentConference.shortName}</p>
          </div>
          <p className="mt-4 text-sm font-medium text-gold-soft">Organized with</p>
          <p className="mt-1 text-sm leading-6 text-warm-white/80">
            M.C.E. Society&apos;s Abeda Inamdar Senior College and partner institutions named on earlier editions.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-warm-white/65">{siteMeta.description}</p>
        </div>

        <div>
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

        <div>
          <p className="text-xs tracking-[0.2em] text-gold-soft uppercase">Stay Connected</p>
          <ul className="mt-4 space-y-2 text-sm text-warm-white/80">
            <li>{displayValue(contact.secretariat)}</li>
            <li>
              <a className="hover:text-gold-soft" href={`mailto:${displayValue(contact.email, "conference@email")}`}>
                {displayValue(contact.email)}
              </a>
            </li>
            <li>{displayValue(contact.phone)}</li>
            <li>{displayValue(contact.address)}</li>
          </ul>
          <p className="mt-6 text-xs leading-5 text-warm-white/55">
            Historical editions: 2010, 2014, 2016. Current details remain placeholders until confirmed.
          </p>
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
