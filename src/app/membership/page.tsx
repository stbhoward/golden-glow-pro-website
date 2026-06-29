import { CalendarCheck, CreditCard, Gem } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { CheckList } from "@/components/ui/check-list";
import { CTABand } from "@/components/ui/cta-band";
import { FAQSection } from "@/components/ui/faq-section";
import { PageHero } from "@/components/ui/page-hero";
import { faqSections } from "@/data/faqs";
import { membershipBenefits, membershipOutcomes, membershipPlans } from "@/data/membership";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Learn about Golden Glow Pro Membership, a premium recurring home care program with priority scheduling, preferred rescheduling, exclusive member pricing, and ongoing value."
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        body="For clients who value consistency, convenience, and the peace of mind that their home is always being cared for."
        eyebrow="Membership"
        imageSrc={siteConfig.membershipImage}
        title="Home care that feels planned, calm, and beautifully maintained."
      />

      <section className="section-rule mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold text-bronze">Why choose Membership</p>
          <h2 className="mt-4 text-5xl font-semibold leading-tight text-ink">
            Cleaning becomes lighter when it is no longer reactive.
          </h2>
        </div>
        <div>
          <p className="text-xl leading-9 text-neutral-700">
            When your home is cared for on a regular basis, it stays in better
            condition overall. Cleanings become more efficient, buildup is reduced,
            and your space remains consistently fresh and inviting.
          </p>
          <p className="mt-6 leading-8 text-neutral-700">
            For busy professionals, families, frequent hosts, and anyone who values a
            beautifully kept space, Membership offers a smarter and more convenient
            way to enjoy a consistently clean home.
          </p>
        </div>
      </section>

      <section className="bg-porcelain">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[600px] overflow-hidden shadow-soft">
            <Image
              alt="Luxury living room maintained through Golden Glow Pro Membership"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              src={siteConfig.membershipImage}
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-bronze">Membership value</p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight text-ink">
              Preferred care for clients who want the home to stay ready.
            </h2>
            <div className="mt-10 border-t border-ink/10">
              {membershipBenefits.map((item) => (
                <div className="border-b border-ink/10 py-5 text-lg text-neutral-700" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-bronze">Membership pricing</p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight text-ink">
              Simple monthly value, with weekly clients rewarded.
            </h2>
          </div>
          <div className="border-t border-ink/10">
            {membershipPlans.map((plan) => (
              <article className="border-b border-ink/10 py-8" key={plan.name}>
                <div className="grid gap-8 md:grid-cols-[0.35fr_0.65fr]">
                  <div>
                    <h3 className="text-3xl font-semibold text-ink">{plan.name}</h3>
                    <div className="mt-3 text-3xl font-semibold text-bronze">{plan.price}</div>
                  </div>
                  <div>
                    <p className="leading-8 text-neutral-700">{plan.bestFor}</p>
                    <div className="mt-6">
                      <CheckList items={plan.benefits} />
                    </div>
                    <p className="mt-6 border-l-2 border-champagne pl-5 leading-7 text-neutral-700">
                      {plan.note}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <ButtonLink href={siteConfig.bookingUrl} icon={CalendarCheck}>
                        Book Now
                      </ButtonLink>
                      <ButtonLink href={siteConfig.stripeDepositUrl} icon={CreditCard} variant="outline">
                        Deposit Placeholder
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold text-soft-gold">A better rhythm</p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight">
              The home stays ahead of the week.
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            {membershipOutcomes.map((item) => (
              <div className="border-t border-white/15 pt-5 leading-7 text-white/72" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        body="These answers explain what Membership is, how it works, and why it is valuable without creating confusion around what is and is not included."
        columns={2}
        eyebrow="Membership FAQ"
        items={faqSections.membership}
        title="Common questions about Membership"
      />

      <CTABand
        body="Join our Membership for $49 per month, or enjoy complimentary Membership with weekly recurring service."
        primary={{ label: "Book Now", href: siteConfig.bookingUrl, icon: CalendarCheck }}
        secondary={{ label: "View Services", href: "/services", icon: Gem }}
        title="Experience a higher standard of home care"
      />
    </>
  );
}
