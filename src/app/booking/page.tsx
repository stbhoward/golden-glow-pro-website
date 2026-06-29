import { CalendarCheck, CreditCard, Home, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import type { Metadata } from "next";

import { IntegrationStatus } from "@/components/integrations/integration-status";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckList } from "@/components/ui/check-list";
import { PageHero } from "@/components/ui/page-hero";
import { SectionIntro } from "@/components/ui/section-intro";
import { bookingFlow, siteConfig } from "@/data/site";
import { addOns, serviceCards } from "@/data/services";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Start the Golden Glow Pro booking flow for service selection, add-ons, property details, account setup, deposit preparation, and future appointment scheduling."
};

const collectionGroups = [
  {
    title: "Customer details",
    icon: UserRound,
    items: ["Name", "Email", "Phone", "Account status"]
  },
  {
    title: "Property details",
    icon: Home,
    items: ["Property address", "Property type", "Access notes", "Property notes"]
  },
  {
    title: "Service details",
    icon: Sparkles,
    items: ["Selected service", "Selected add-ons", "Frequency", "Priority areas"]
  },
  {
    title: "Payment and schedule",
    icon: CreditCard,
    items: ["Deposit status", "Payment status", "Appointment time", "Confirmation status"]
  }
];

export default function BookingPage() {
  return (
    <>
      <PageHero
        body="The first production route prepares the required customer flow without collecting live payments or scheduling appointments yet."
        eyebrow="Booking"
        imageSrc={siteConfig.heroImage}
        title="A refined booking path for premium home care"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro
          body={`All appointments will eventually require a flat ${siteConfig.depositAmount} deposit through Stripe before customers select an appointment time through Cal.com.`}
          eyebrow="Customer flow"
          title="Built around the required booking sequence"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-7">
          {bookingFlow.map((step, index) => (
            <article className="border-t border-ink/10 py-5" key={step.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-soft-gold">
                {index + 1}
              </div>
              <h2 className="mt-5 text-2xl font-semibold leading-tight text-ink">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{step.body}</p>
              {step.integration ? (
                <div className="mt-4 inline-flex bg-soft-gold/30 px-3 py-1 text-xs font-semibold text-ink">
                  {step.integration}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            body="This page keeps the selection model visible for the next PR while avoiding unfinished checkout or account behavior."
            eyebrow="Prepared selections"
            title="Services and add-ons are ready for integration"
          />
          <div className="grid gap-4">
            {serviceCards.map((service) => (
              <div className="border-t border-ink/10 py-5" key={service.id}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-ink">{service.title}</h2>
                    <p className="mt-1 text-sm text-neutral-600">{service.price}</p>
                  </div>
                  <ButtonLink href="/sign-up" icon={ShieldCheck} variant="outline">
                    Continue
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <SectionIntro
            body="Add-on selections are structured as data now so the eventual booking form can render them without duplicating content."
            eyebrow="Add-ons"
            title="Detail options for a tailored visit"
          />
          <div className="mt-8">
            <CheckList items={addOns.map((item) => item.name)} />
          </div>
        </div>
        <div className="grid gap-4">
          {collectionGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="border-t border-ink/10 py-6" key={group.title}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-soft-gold">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <h2 className="text-2xl font-semibold text-ink">{group.title}</h2>
                </div>
                <div className="mt-5">
                  <CheckList items={group.items} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro
          body="The environment placeholders are ready for future implementation work. No API keys are stored in source."
          eyebrow="Integration readiness"
          title="Supabase, Stripe, and Cal.com placeholders"
        />
        <div className="mt-10">
          <IntegrationStatus />
        </div>
        <div className="mt-10">
          <ButtonLink href="/contact" icon={CalendarCheck} variant="dark">
            Contact Golden Glow
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
