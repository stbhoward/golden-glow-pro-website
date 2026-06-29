import { CalendarCheck, PlusCircle, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { CheckList } from "@/components/ui/check-list";
import { CTABand } from "@/components/ui/cta-band";
import { FAQSection } from "@/components/ui/faq-section";
import { PageHero } from "@/components/ui/page-hero";
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
        body="Residential-first cleaning for homes, luxury residences, apartments, condos, high-rises, and polished professional spaces."
        eyebrow="Services"
        imageSrc={siteConfig.servicesImage}
        title="Detailed care for the way your home is actually lived in."
      />

      <section className="section-rule mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold text-bronze">Service philosophy</p>
          <h2 className="mt-4 text-5xl font-semibold leading-tight text-ink">
            Thoughtful cleaning for privacy, surfaces, schedules, and standards.
          </h2>
          <div className="mt-8">
            <ButtonLink href={siteConfig.bookingUrl} icon={CalendarCheck} variant="dark">
              Start Booking
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-10">
          <p className="max-w-3xl text-xl leading-9 text-neutral-700">
            Golden Glow supports family homes, luxury estates, apartments,
            high-rises, urban condos, and select professional workspaces with
            recurring upkeep, deep resets, specialty detail work, eco-friendly
            product preferences, and client-specified product flexibility.
          </p>
          <div className="relative min-h-[460px] overflow-hidden shadow-soft">
            <Image
              alt="Polished bathroom and bedroom suite after a Golden Glow Pro cleaning"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              src={siteConfig.servicesImage}
            />
          </div>
        </div>
      </section>

      <section className="bg-porcelain">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-bronze">Property types</p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight text-ink">
              A premium standard across residential and specialty spaces.
            </h2>
          </div>
          <div className="mt-12 border-t border-ink/10">
            {propertyTypes.map((item) => (
              <article className="grid gap-6 border-b border-ink/10 py-7 lg:grid-cols-[0.36fr_0.64fr]" key={item.title}>
                <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="leading-8 text-neutral-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-bronze">Core services</p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight text-ink">
              Choose the level of care that fits the moment.
            </h2>
          </div>
          <p className="text-xl leading-9 text-neutral-700">
            The prototype service content is preserved, but the presentation now
            reads like a premium service guide instead of a catalog wall.
          </p>
        </div>
        <div className="mt-14 border-t border-ink/10">
          {serviceCards.map((service) => (
            <article className="border-b border-ink/10 py-10" key={service.id}>
              <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
                <div>
                  <h3 className="text-3xl font-semibold leading-tight text-ink">{service.title}</h3>
                  <p className="mt-4 inline-flex bg-soft-gold/30 px-4 py-2 text-sm font-semibold text-ink">
                    {service.price}
                  </p>
                </div>
                <div>
                  <p className="text-xl leading-8 text-neutral-800">{service.subtitle}</p>
                  <p className="mt-5 leading-8 text-neutral-700">{service.description}</p>
                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-bronze">Best for</p>
                      <div className="mt-4">
                        <CheckList items={service.audience} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-bronze">What is included</p>
                      <div className="mt-4">
                        <CheckList items={service.includes} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <ButtonLink href={siteConfig.bookingUrl} icon={CalendarCheck}>
                      Book This Service
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-soft-gold">Add-on services</p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight">
              Fine details for homes that need a more tailored visit.
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {addOns.map((item) => (
              <article className="border-t border-white/15 pt-5" key={item.name}>
                <PlusCircle aria-hidden className="h-5 w-5 text-soft-gold" />
                <h3 className="mt-4 text-2xl font-semibold">{item.name}</h3>
                <p className="mt-3 leading-7 text-white/68">{item.description}</p>
              </article>
            ))}
          </div>
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
        primary={{ label: "Book Now", href: siteConfig.bookingUrl, icon: CalendarCheck }}
        secondary={{ label: "View Membership", href: "/membership", icon: Sparkles }}
        title="Need help choosing the right service?"
      />
    </>
  );
}
