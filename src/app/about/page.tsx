import { CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";

import { CTABand } from "@/components/ui/cta-band";
import { FAQSection } from "@/components/ui/faq-section";
import { PageHero } from "@/components/ui/page-hero";
import { SectionIntro } from "@/components/ui/section-intro";
import { faqSections } from "@/data/faqs";
import { brandPillars, siteConfig } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <PageHero
        body="Golden Glow Pro stands for professionalism, consistency, customer care, and premium presentation for discerning homeowners."
        eyebrow="About"
        imageSrc={siteConfig.membershipImage}
        title="Houston's trusted standard for elevated cleaning"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionIntro
            body="Golden Glow Cleaning Services was developed to provide top-tier cleaning solutions for Houston homes, apartments, offices, and newly completed properties, with a stronger focus on professionalism, consistency, customer care, and premium presentation than many standard cleaning companies."
            eyebrow="Our story"
            title="Built to deliver more than a basic clean"
          />
          <p className="mt-6 leading-8 text-neutral-700">
            The heart of the brand is simple: give homeowners a service that feels
            dependable, detail-oriented, easy to schedule, eco-conscious, and
            genuinely respectful of the space. That means showing up prepared,
            communicating clearly, treating the property with care, and delivering a
            finished result that feels calm, refreshed, and intentionally maintained.
          </p>
        </div>
        <div className="rounded-lg border border-ink/10 bg-white p-8 shadow-sm">
          <ShieldCheck aria-hidden className="h-7 w-7 text-champagne" />
          <div className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
            Brand positioning
          </div>
          <div className="mt-5 grid gap-4">
            {brandPillars.map((item) => (
              <div className="rounded-lg bg-ivory px-5 py-4 text-neutral-700 ring-1 ring-ink/10" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        body="These questions reinforce what makes Golden Glow different and why the brand is positioned around trust, consistency, and client experience."
        eyebrow="About Golden Glow"
        items={faqSections.company}
        title="Questions clients may ask before choosing us"
      />

      <CTABand
        body="A strong About page reassures the visitor that the company is real, credible, professional, and aligned with their standards."
        primary={{ label: "Book Now", href: "/booking", icon: CalendarCheck }}
        secondary={{ label: "Explore Services", href: "/services", icon: Sparkles }}
        title="Trust should make the next step feel obvious"
      />
    </>
  );
}
