import { ArrowRight, CalendarCheck, Gem, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { CTABand } from "@/components/ui/cta-band";
import { homeFaqLinks } from "@/data/faqs";
import { brandPillars, siteConfig, trustSignals } from "@/data/site";
import { serviceCards } from "@/data/services";

export const metadata: Metadata = {
  title: "Houston Luxury Home Cleaning",
  description:
    "Golden Glow Pro provides elevated residential cleaning, recurring home care, deep cleaning, and move-in or move-out service for Houston homes and luxury residences."
};

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          priority
          alt="Luxury kitchen and living space cleaned by Golden Glow Pro"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fill
          sizes="100vw"
          src={siteConfig.heroImage}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/78 to-ink/30" />
        <div className="mx-auto grid min-h-[760px] max-w-7xl content-center px-6 py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-soft-gold">Houston luxury home cleaning</p>
            <h1 className="mt-5 max-w-4xl text-6xl font-semibold leading-tight md:text-8xl">
              A quieter standard of clean for refined homes.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/78">
              Golden Glow Pro cares for homes, apartments, high-rises, penthouses,
              and luxury residences with polish, discretion, and dependable detail.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.bookingUrl} icon={CalendarCheck} variant="gold">
                Book a Cleaning
              </ButtonLink>
              <ButtonLink href="/services" icon={Sparkles} variant="light">
                Explore Services
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="border-t border-white/15 bg-ink/72 backdrop-blur">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 md:grid-cols-4">
            {trustSignals.map((item) => (
              <div className="text-sm text-white/76" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold text-bronze">Residential-first</p>
          <h2 className="mt-4 max-w-xl text-5xl font-semibold leading-tight text-ink">
            Built for homes that deserve more than a basic clean.
          </h2>
        </div>
        <div className="grid gap-8">
          <p className="max-w-3xl text-xl leading-9 text-neutral-700">
            Golden Glow Cleaning Services is positioned around reliability, strong
            communication, attention to detail, eco-friendly product preferences,
            and service options that fit the rhythm of modern Houston households.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {brandPillars.map((item) => (
              <div className="border-t border-ink/12 pt-4 leading-7 text-neutral-700" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-porcelain">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[620px] overflow-hidden">
            <Image
              alt="Elegant living room maintained by Golden Glow Pro"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              src={siteConfig.membershipImage}
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-bronze">Signature services</p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight text-ink">
              A service menu shaped around real residential life.
            </h2>
            <div className="mt-10 border-t border-ink/10">
              {serviceCards.map((service) => (
                <Link
                  className="group grid gap-5 border-b border-ink/10 py-6 md:grid-cols-[0.8fr_1fr]"
                  href="/services"
                  key={service.id}
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-ink">{service.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-bronze">{service.price}</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="leading-7 text-neutral-700">{service.subtitle}</p>
                    <ArrowRight
                      aria-hidden
                      className="mt-1 h-5 w-5 shrink-0 text-champagne transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold text-bronze">Membership</p>
          <h2 className="mt-4 max-w-2xl text-5xl font-semibold leading-tight text-ink">
            Consistent home care with priority, flexibility, and calm built in.
          </h2>
        </div>
        <div>
          <p className="text-xl leading-9 text-neutral-700">
            Membership turns cleaning from something reactive into something
            proactive. It is for busy professionals, families, frequent hosts, and
            anyone who wants a beautifully maintained space without constantly
            catching up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/membership" icon={Gem} variant="dark">
              View Membership
            </ButtonLink>
            <ButtonLink href={siteConfig.bookingUrl} icon={CalendarCheck} variant="outline">
              Start Booking
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-soft-gold">Client questions</p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight">
              Clear answers before the next step.
            </h2>
          </div>
          <div className="border-t border-white/15">
            {homeFaqLinks.map((item) => (
              <article className="border-b border-white/15 py-7" key={item.question}>
                <h3 className="text-2xl font-semibold">{item.question}</h3>
                <p className="mt-3 leading-7 text-white/68">{item.answer}</p>
                <Link
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-soft-gold"
                  href={item.href}
                >
                  {item.cta}
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        body="Start with the service that fits your home. The deeper payment, account, and scheduling integrations stay intentionally deferred until the next phase."
        primary={{ label: "Book a Cleaning", href: siteConfig.bookingUrl, icon: CalendarCheck }}
        secondary={{ label: "Explore Services", href: "/services", icon: Sparkles }}
        title="Bring the Golden Glow standard into your home."
      />
    </>
  );
}
