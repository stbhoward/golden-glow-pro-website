"use client";

import { CalendarCheck, Menu, UserRound, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-porcelain/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <Link
          className="group flex min-w-0 items-baseline gap-3"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="min-w-0">
            <span className="block text-2xl font-semibold leading-none text-ink md:text-3xl">
              {siteConfig.companyName}
            </span>
            <span className="mt-1 hidden text-sm text-neutral-500 sm:block">
              Luxury residential cleaning
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 xl:flex">
          {primaryNavigation.map((item) => (
            <Link
              className={cn(
                "transition hover:text-ink",
                pathname === item.href && "text-ink"
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
          <ButtonLink href={siteConfig.bookingUrl} icon={CalendarCheck} variant="dark">
            Book Now
          </ButtonLink>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-transparent text-ink transition hover:bg-pearl lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-porcelain px-6 py-5 lg:hidden">
          <div className="mb-4 flex flex-wrap gap-2 text-xs text-neutral-500">
            {trustSignals.slice(0, 3).map((item) => (
              <span className="border border-ink/10 px-3 py-1" key={item}>
                {item}
              </span>
            ))}
          </div>
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                className={cn(
                  "border-b border-ink/10 px-1 py-3 text-base font-medium text-neutral-700 transition hover:text-ink",
                  pathname === item.href && "text-ink"
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
