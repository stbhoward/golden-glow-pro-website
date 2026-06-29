import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { CTABand } from "@/components/ui/cta-band";
import { FAQSection } from "@/components/ui/faq-section";
import { PageHero } from "@/components/ui/page-hero";
import { SectionIntro } from "@/components/ui/section-intro";
import { contentGaps, siteConfig } from "@/data/site";
import { faqSections } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Golden Glow Pro to ask about premium residential cleaning, service areas, booking, membership, and cleaning options for Houston homes."
};

const contactRows = [
  { label: "Phone", value: siteConfig.phone, icon: Phone },
  { label: "Email", value: siteConfig.email, icon: Mail },
  { label: "Service Area", value: siteConfig.serviceArea, icon: MapPin },
  { label: "Hours", value: siteConfig.hours, icon: CalendarCheck }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        body="A simple, premium, action-oriented path for clients who are ready to book, ask a question, or confirm service fit."
        eyebrow="Contact"
        imageSrc={siteConfig.heroImage}
        title="Book your cleaning with confidence"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionIntro
            body="The site should guide visitors toward a direct booking experience. Book Now starts the booking structure, with Stripe deposit and Cal.com scheduling prepared as future integration points."
            eyebrow="Book or contact"
            title="A polished booking experience matters"
          />
          <div className="mt-8 grid gap-4">
            {[
              "Primary CTA launches the booking route",
              "Deposit payment will be handled through Stripe after service selection",
              "Membership can be positioned as an upgrade path during booking",
              "Service details and pricing ranges support the booking decision"
            ].map((item) => (
              <div className="rounded-lg border border-ink/10 bg-white px-5 py-4 text-neutral-700 shadow-sm" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-lg border border-ink/10 bg-white p-8 shadow-sm">
          <h2 className="font-serif text-3xl tracking-normal text-ink">Booking panel</h2>
          <p className="mt-4 leading-7 text-neutral-700">
            Use the booking route for the first structured conversion path. Real
            calendar and deposit actions will be connected after the business has
            Cal.com and Stripe accounts.
          </p>
          <div className="mt-6 space-y-4">
            {contactRows.map((row) => {
              const Icon = row.icon;
              return (
                <div className="rounded-lg bg-ivory px-4 py-4 ring-1 ring-ink/10" key={row.label}>
                  <div className="flex items-center gap-3">
                    <Icon aria-hidden className="h-4 w-4 text-champagne" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        {row.label}
                      </div>
                      <div className="mt-1 font-semibold text-ink">{row.value}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6">
            <ButtonLink href="/booking" icon={CalendarCheck}>
              Book Now
            </ButtonLink>
          </div>
        </aside>
      </section>

      <FAQSection
        body="This section reduces hesitation by helping visitors understand how booking works, what to expect, what products are used, and how scheduling and policies are handled."
        columns={2}
        eyebrow="Booking & Scheduling FAQ"
        items={faqSections.booking}
        title="Answers to common booking, scheduling, supply, and policy questions"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro
          body="These are the main items to confirm before the site becomes fully launch-ready."
          eyebrow="Launch readiness"
          title="Final information still needed"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {contentGaps.map((item) => (
            <div className="rounded-lg border border-ink/10 bg-white px-5 py-4 text-neutral-700 shadow-sm" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <CTABand
        body="The first production structure keeps the next step simple while leaving room for payment, scheduling, and account integrations."
        primary={{ label: "Start Booking", href: "/booking", icon: CalendarCheck }}
        title="Ready when the client is ready"
      />
    </>
  );
}
