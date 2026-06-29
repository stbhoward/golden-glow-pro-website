import { CalendarDays, CreditCard, Home, Sparkles, UserRound } from "lucide-react";
import type { Metadata } from "next";

import { IntegrationStatus } from "@/components/integrations/integration-status";
import { CheckList } from "@/components/ui/check-list";
import { PageHero } from "@/components/ui/page-hero";
import { SectionIntro } from "@/components/ui/section-intro";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer Account",
  description:
    "Customer account shell for future Golden Glow Pro profile details, property information, selected services, deposits, and appointment history."
};

const accountSections = [
  {
    title: "Profile",
    icon: UserRound,
    items: ["Name", "Email", "Phone"]
  },
  {
    title: "Property",
    icon: Home,
    items: ["Property address", "Property type", "Access notes"]
  },
  {
    title: "Services",
    icon: Sparkles,
    items: ["Selected service", "Selected add-ons", "Frequency"]
  },
  {
    title: "Payments",
    icon: CreditCard,
    items: ["Deposit status", "Payment status", "Receipts"]
  },
  {
    title: "Appointments",
    icon: CalendarDays,
    items: ["Appointment history", "Upcoming bookings", "Confirmation status"]
  }
];

export default function AccountPage() {
  return (
    <>
      <PageHero
        body="A customer account shell for future Supabase-backed profile, booking, payment, and appointment history."
        eyebrow="Customer Account"
        imageSrc={siteConfig.membershipImage}
        title="A calm view of home care details"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro
          body="This page captures the shape of the customer account without requiring auth, database, payment, or scheduling logic in the first PR."
          eyebrow="Account structure"
          title="Prepared for the required customer fields"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {accountSections.map((section) => {
            const Icon = section.icon;
            return (
              <article className="border-t border-ink/10 py-6" key={section.title}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-soft-gold">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
                </div>
                <div className="mt-5">
                  <CheckList items={section.items} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <IntegrationStatus />
      </section>
    </>
  );
}
