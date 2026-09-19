import { Link } from "react-router-dom";
import { contact, currentConference, footerLinks, siteMeta } from "@/data/constants";
import { displayValue } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-deep-forest text-warm-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl">{currentConference.shortName}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-warm-white/75">
            {siteMeta.description}
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-gold-soft uppercase">Explore</p>
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
          <p className="text-xs tracking-[0.2em] text-gold-soft uppercase">Secretariat</p>
          <ul className="mt-4 space-y-2 text-sm text-warm-white/80">
            <li>{displayValue(contact.secretariat)}</li>
            <li>{displayValue(contact.email)}</li>
            <li>{displayValue(contact.phone)}</li>
            <li>{displayValue(contact.address)}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-warm-white/55">
          Historical editions: 2010, 2014, 2016. Current details remain placeholders until confirmed.
        </p>
      </div>
    </footer>
  );
}
