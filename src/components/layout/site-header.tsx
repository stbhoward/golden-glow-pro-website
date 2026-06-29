"use client";

import { CalendarCheck, Menu, Sparkles, UserRound, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { primaryNavigation, siteConfig, trustSignals, utilityNavigation } from "@/data/site";
import { cn } from "@/lib/utils";

import { ButtonLink } from "../ui/button-link";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [...primaryNavigation, ...utilityNavigation];

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur-xl">
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6 gap-y-1 px-6 py-2 text-center text-xs font-medium sm:flex-wrap">
          {trustSignals.slice(0, 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          className="group flex min-w-0 items-center gap-3"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-soft-gold ring-1 ring-champagne/30">
            <Sparkles aria-hidden className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-2xl leading-none tracking-normal text-ink md:text-3xl">
              {siteConfig.companyName}
            </span>
            <span className="mt-1 block truncate text-xs text-neutral-500">
              by {siteConfig.legalName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-neutral-700 xl:flex">
          {primaryNavigation.map((item) => (
            <Link
              className={cn(
                "rounded-full px-4 py-2 transition hover:bg-pearl",
                pathname === item.href && "bg-ink text-white hover:bg-ink"
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/sign-in" icon={UserRound} variant="outline">
            Sign In
          </ButtonLink>
          <ButtonLink href="/booking" icon={CalendarCheck} variant="dark">
            Book Now
          </ButtonLink>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition hover:bg-pearl lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-white px-6 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-pearl",
                  pathname === item.href && "bg-ink text-white hover:bg-ink"
                )}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
