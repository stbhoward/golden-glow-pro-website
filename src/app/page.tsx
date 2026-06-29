import { ArrowRight, CalendarCheck, Gem, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { CTABand } from "@/components/ui/cta-band";
import { SectionIntro } from "@/components/ui/section-intro";
import { homeFaqLinks } from "@/data/faqs";
import { brandPillars, siteConfig, trustSignals } from "@/data/site";
import { serviceCards } from "@/data/services";

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
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-soft-gold backdrop-blur">
              <Sparkles aria-hidden className="h-4 w-4" />
              Houston Luxury Home Cleaning
            </div>
            <h1 className="mt-6 font-serif text-6xl leading-tight tracking-normal md:text-8xl">
              Golden Glow Pro
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/80 md:text-2xl">
              A higher standard of clean for Houston homes, apartments, high-rises,
              penthouses, and luxury residences.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              From Premier Refresh Cleaning and recurring care to deep cleaning and
              move-in or move-out support, each visit is delivered with
              professionalism, discretion, and attention to detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/booking" icon={CalendarCheck} variant="gold">
                Book Now
              </ButtonLink>
              <ButtonLink href="/membership" icon={Gem} variant="light">
                View Membership
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 md:grid-cols-4">
          {trustSignals.map((item) => (
            <div
              className="rounded-lg border border-ink/10 bg-white px-5 py-4 text-center text-sm font-semibold text-neutral-700 shadow-sm"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          body="Golden Glow Cleaning Services is built around more than basic cleaning. The business is positioned to deliver a polished experience through reliability, strong communication, attention to detail, eco-friendly product preferences, and service options that fit the rhythm of modern Houston households."
          eyebrow="Why Golden Glow"
          title="Luxury-forward service with everyday dependability"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {brandPillars.map((item) => (
            <article className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm" key={item}>
              <Sparkles aria-hidden className="h-5 w-5 text-champagne" />
              <p className="mt-4 leading-7 text-neutral-700">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionIntro
            body="These core services anchor the first production structure. Each one can later connect to service selection, add-ons, account creation, deposit payment, and scheduling."
            eyebrow="Signature services"
            title="Choose the cleaning service that best fits your home"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {serviceCards.map((service) => (
              <Link
                className="group rounded-lg border border-ink/10 bg-ivory p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
                href="/services"
                key={service.id}
              >
                <h3 className="font-serif text-2xl leading-tight tracking-normal text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-neutral-600">{service.subtitle}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-champagne">
                  Explore service <ArrowRight aria-hidden className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro
          body="The homepage FAQ acts like a shortcut area for common questions. Each answer helps the visitor quickly decide where to go next."
          eyebrow="Home FAQ"
          title="Quick answers before you take the next step"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {homeFaqLinks.map((item) => (
            <article className="rounded-lg border border-ink/10 bg-white p-7 shadow-sm" key={item.question}>
              <h3 className="font-serif text-2xl leading-tight tracking-normal text-ink">
                {item.question}
              </h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.answer}</p>
              <ButtonLink className="mt-6" href={item.href} icon={ArrowRight}>
                {item.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <CTABand
        body="Start with service selection and keep the path clean through account creation, deposit, scheduling, and confirmation as integrations are added."
        primary={{ label: "View Services", href: "/services", icon: Sparkles }}
        secondary={{ label: "Book Now", href: "/booking", icon: CalendarCheck }}
        title="A refined structure for premium home care"
      />
    </>
  );
}
