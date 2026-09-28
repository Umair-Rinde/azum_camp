import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { currentConference, navigationMenu, primaryCta } from "@/data/constants";
import { SITE_IMAGES } from "@/data/images";
import type { NavNode } from "@/data/types";
import { cn, displayValue } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

function isActivePath(pathname: string, href?: string) {
  if (!href) return false;
  const path = href.split("#")[0] || "/";
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function DesktopDropdown({ item }: { item: NavNode }) {
  const { pathname } = useLocation();
  const open = item.children?.some((child) => isActivePath(pathname, child.href) || child.children?.some((nested) => isActivePath(pathname, nested.href)));

  return (
    <div className="group relative py-3">
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 bg-transparent text-sm font-semibold text-warm-white/85 transition-colors hover:text-gold-soft",
          open && "text-gold-soft",
        )}
      >
        {item.label}
        <ChevronDown className="size-2.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute top-full left-0 z-50 min-w-56 rounded-xl border border-gold/25 bg-[#0c1f14] py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {item.children?.map((child) =>
          child.children ? (
            <div key={child.label} className="group/nested relative">
              <span className="flex items-center justify-between px-3 py-2 text-xs text-warm-white">
                {child.label}
                <ChevronRight className="size-2.5 text-gold-soft" />
              </span>
              <div className="invisible absolute top-0 left-full z-50 ml-1 min-w-44 rounded-xl border border-gold/25 bg-[#0c1f14] py-2 opacity-0 shadow-xl transition group-hover/nested:visible group-hover/nested:opacity-100">
                {child.children.map((nested) => (
                  <NavLink
                    key={nested.href}
                    to={nested.href ?? "#"}
                    className="block rounded-full px-3 py-2 text-xs text-warm-white hover:bg-white/10 hover:text-gold-soft"
                  >
                    {nested.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={child.href}
              to={child.href ?? "#"}
              className={({ isActive }) =>
                cn(
                  "block rounded-full px-3 py-2 text-xs text-warm-white hover:bg-white/10 hover:text-gold-soft",
                  isActive && "text-gold-soft",
                )
              }
            >
              {child.label}
            </NavLink>
          ),
        )}
      </div>
    </div>
  );
}

function MobileBranch({
  item,
  onNavigate,
}: {
  item: NavNode;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <NavLink
        to={item.href ?? "/"}
        onClick={onNavigate}
        className="border-b border-white/10 py-2 text-sm text-warm-white/85"
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        className="flex w-full items-center justify-between py-2 text-left text-sm text-warm-white/85"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <div className="flex flex-col gap-1 pb-3 pl-3">
          {item.children.map((child) =>
            child.children ? (
              <div key={child.label}>
                <p className="pt-2 pb-1 text-xs tracking-wide text-gold-soft uppercase">{child.label}</p>
                {child.children.map((nested) => (
                  <NavLink
                    key={nested.href}
                    to={nested.href ?? "#"}
                    onClick={onNavigate}
                    className="block py-1 text-sm text-warm-white/70"
                  >
                    {nested.label}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink
                key={child.href}
                to={child.href ?? "#"}
                onClick={onNavigate}
                className="py-1 text-sm text-warm-white/70"
              >
                {child.label}
              </NavLink>
            ),
          )}
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const locationLine = [
    `${displayValue(currentConference.edition, "4th")} Edition`,
    displayValue(currentConference.city, "PUNE").toUpperCase(),
    displayValue(currentConference.country, "INDIA").toUpperCase(),
  ].join(" · ");

  return (
    <header className="sticky top-0 z-40 bg-deep-forest text-warm-white">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-6 px-4 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
          <img
            src={SITE_IMAGES.LOGO_AISC.src}
            alt={SITE_IMAGES.LOGO_AISC.alt}
            className="size-11 rounded-full border border-white/20 bg-warm-white object-contain p-0.5"
          />
          <span className="min-w-0">
            <p className="font-heading text-2xl leading-none tracking-wide text-warm-white uppercase">
              {currentConference.shortName}
            </p>
            <p className="mt-1 truncate text-[11px] tracking-[0.18em] text-gold-soft uppercase">
              {locationLine}
            </p>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navigationMenu.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <NavLink
                key={item.label}
                to={item.href ?? "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-semibold text-warm-white/85 transition-colors hover:text-gold-soft",
                    isActive && "text-gold-soft",
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="gold" className="hidden rounded-[10px] px-5 text-xs font-bold tracking-[0.14em] uppercase sm:inline-flex" asChild>
            <Link to={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="size-4" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 text-warm-white hover:bg-white/10 lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-l-white/10 bg-deep-forest text-warm-white">
              <SheetTitle className="text-warm-white">Navigate</SheetTitle>
              <nav className="mt-8 flex flex-col" aria-label="Mobile">
                {navigationMenu.map((item) => (
                  <MobileBranch key={item.label} item={item} onNavigate={() => setOpen(false)} />
                ))}
              </nav>
              <Button variant="gold" className="mt-8 w-full rounded-[10px] text-xs font-bold tracking-[0.14em] uppercase" asChild>
                <Link to={primaryCta.href} onClick={() => setOpen(false)}>
                  {primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
