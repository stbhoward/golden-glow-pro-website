import { CalendarCheck, PlusCircle, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { CheckList } from "@/components/ui/check-list";
import { CTABand } from "@/components/ui/cta-band";
import { FAQSection } from "@/components/ui/faq-section";
import { PageHero } from "@/components/ui/page-hero";
import { SectionIntro } from "@/components/ui/section-intro";
import { faqSections } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { addOns, propertyTypes, serviceCards } from "@/data/services";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description:
    "Explore Golden Glow Pro residential cleaning services, recurring cleaning, deep cleaning, move-in and move-out cleaning, commercial cleaning, Airbnb cleaning, and detail add-ons."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        body="Understand what Golden Glow offers, who each service is for, and why the service fits your home, building, or workspace."
        eyebrow="Services"
        imageSrc={siteConfig.servicesImage}
        title="Professional cleaning for Houston homes and refined spaces"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionIntro
            body="Golden Glow supports residents in family homes, luxury estates, apartments, high-rises, urban condos, and select professional workspaces - with recurring upkeep, deep resets, specialty detail work, eco-friendly product preferences, and flexibility for client-specified products built into the experience."
            eyebrow="Service overview"
            title="Designed for the way people actually live and work"
          />
          <div className="mt-8">
            <ButtonLink href="/booking" icon={CalendarCheck} variant="dark">
              Start Booking
            </ButtonLink>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-lg shadow-glow">
          <Image
            alt="Polished bathroom and bedroom suite after a Golden Glow Pro cleaning"
            className="h-full w-full object-cover"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            src={siteConfig.servicesImage}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {propertyTypes.map((item) => (
            <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm" key={item.title}>
              <h2 className="font-serif text-2xl leading-tight tracking-normal text-ink">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionIntro
            body="Each service explains the purpose, best-fit client, and expected scope while keeping the route ready for a future booking flow."
            eyebrow="Core services"
            title="Service content preserved from the prototype"
          />
          <div className="mt-10 grid gap-6">
            {serviceCards.map((service) => (
              <article className="rounded-lg bg-ivory p-6 ring-1 ring-ink/10 md:p-8" key={service.id}>
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl">
                    <h2 className="font-serif text-3xl leading-tight tracking-normal text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-lg leading-8 text-neutral-700">{service.subtitle}</p>
                    <p className="mt-4 leading-8 text-neutral-700">{service.description}</p>
                  </div>
                  <div className="lg:text-right">
                    <div className="inline-flex rounded-full bg-soft-gold/30 px-4 py-2 text-sm font-semibold text-ink ring-1 ring-champagne/40">
                      {service.price}
                    </div>
                    <div className="mt-4">
                      <ButtonLink href="/booking" icon={CalendarCheck}>
                        Book Now
                      </ButtonLink>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                      Best for
                    </div>
                    <div className="mt-4">
                      <CheckList items={service.audience} />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                      What is included
                    </div>
                    <div className="mt-4">
                      <CheckList items={service.includes} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro
          body="Add-ons are ready for the future booking flow but do not collect payment or schedule appointments in this first PR."
          eyebrow="Add-on services"
          title="Detail services prepared for booking"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {addOns.map((item) => (
            <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm" key={item.name}>
              <PlusCircle aria-hidden className="h-5 w-5 text-champagne" />
              <h2 className="mt-4 font-serif text-2xl tracking-normal text-ink">{item.name}</h2>
              <p className="mt-3 leading-7 text-neutral-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <FAQSection
        body="These questions clarify what Golden Glow offers, which service is right for the client, and how details can be customized based on the property and goals."
        columns={2}
        eyebrow="Services FAQ"
        items={faqSections.services}
        title="Answers to the most common service questions"
      />

      <CTABand
        body="The service route should help visitors feel informed, not overwhelmed. When they are ready, every service leads naturally to booking."
        primary={{ label: "Book Now", href: "/booking", icon: CalendarCheck }}
        secondary={{ label: "View Membership", href: "/membership", icon: Sparkles }}
        title="Need help choosing the right service?"
      />
    </>
  );
}
