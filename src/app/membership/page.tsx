import { CalendarCheck, CreditCard, Gem } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { CheckList } from "@/components/ui/check-list";
import { CTABand } from "@/components/ui/cta-band";
import { FAQSection } from "@/components/ui/faq-section";
import { PageHero } from "@/components/ui/page-hero";
import { SectionIntro } from "@/components/ui/section-intro";
import { faqSections } from "@/data/faqs";
import { membershipBenefits, membershipOutcomes, membershipPlans } from "@/data/membership";
import { siteConfig } from "@/data/site";

export default function MembershipPage() {
  return (
    <>
      <PageHero
        body="Our Membership is designed for clients who want more than an occasional cleaning: consistency, convenience, and peace of mind that the home is always cared for."
        eyebrow="Membership"
        imageSrc={siteConfig.membershipImage}
        title="Elevated home care, designed for your lifestyle"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionIntro
            body="When your home is cared for on a regular basis, it stays in better condition overall. Cleanings become more efficient, buildup is reduced, and your space remains consistently fresh and inviting."
            eyebrow="Why choose Membership"
            title="A dependable, long-term solution for maintaining your home"
          />
          <p className="mt-6 leading-8 text-neutral-700">
            For busy professionals, families, frequent hosts, and anyone who values a
            beautifully kept space, Membership offers a smarter and more convenient
            way to enjoy a consistently clean home.
          </p>
        </div>
        <div className="rounded-lg bg-ink p-8 text-white shadow-glow md:p-10">
          <Gem aria-hidden className="h-7 w-7 text-soft-gold" />
          <h2 className="mt-5 font-serif text-3xl leading-tight tracking-normal">
            Why a homeowner would buy it
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            The value comes from savings, convenience, preferred treatment, and the
            confidence of knowing home care is easier to manage over time. It should
            feel like a smarter homeowner decision, not a pressured subscription.
          </p>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            body="Our Standard Membership is available for $49 per month. Weekly recurring cleaning clients receive complimentary Membership at no additional cost."
            eyebrow="Membership pricing"
            title="A premium service advantage with simple, clear value"
          />
          <div className="grid gap-6">
            {membershipPlans.map((plan) => (
              <article className="rounded-lg bg-ivory p-7 ring-1 ring-ink/10" key={plan.name}>
                <h2 className="font-serif text-3xl tracking-normal text-ink">{plan.name}</h2>
                <div className="mt-3 text-2xl font-semibold text-champagne">{plan.price}</div>
                <p className="mt-4 leading-7 text-neutral-700">{plan.bestFor}</p>
                <div className="mt-6">
                  <CheckList items={plan.benefits} />
                </div>
                <div className="mt-6 rounded-lg border border-ink/10 bg-white px-5 py-4 text-neutral-700">
                  {plan.note}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="/booking" icon={CalendarCheck}>
                    Book Now
                  </ButtonLink>
                  <ButtonLink href="/booking" icon={CreditCard} variant="outline">
                    Deposit Step
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <SectionIntro
            body="A home that is cleaned regularly feels lighter, calmer, and more comfortable to live in. Membership turns cleaning from something reactive into something proactive."
            eyebrow="A better way to maintain your home"
            title="Home care that stays ahead of life"
          />
          <div className="mt-8">
            <CheckList items={membershipBenefits} />
          </div>
        </div>
        <div className="grid gap-4">
          {membershipOutcomes.map((item) => (
            <div className="rounded-lg border border-ink/10 bg-white px-5 py-4 text-neutral-700 shadow-sm" key={item}>
              {item}
            </div>
          ))}
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
        primary={{ label: "Book Now", href: "/booking", icon: CalendarCheck }}
        secondary={{ label: "View Services", href: "/services", icon: Gem }}
        title="Experience a higher standard of home care"
      />
    </>
  );
}
