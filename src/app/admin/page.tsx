import { CalendarDays, CreditCard, ListChecks, ShieldCheck, UsersRound } from "lucide-react";

import { IntegrationStatus } from "@/components/integrations/integration-status";
import { CheckList } from "@/components/ui/check-list";
import { PageHero } from "@/components/ui/page-hero";
import { SectionIntro } from "@/components/ui/section-intro";
import { siteConfig } from "@/data/site";

const adminSections = [
  {
    title: "Customers",
    icon: UsersRound,
    items: ["Customer contact details", "Property address", "Property notes"]
  },
  {
    title: "Bookings",
    icon: ListChecks,
    items: ["Services selected", "Add-ons selected", "Appointment status"]
  },
  {
    title: "Schedule",
    icon: CalendarDays,
    items: ["Appointment time", "Upcoming bookings", "Rescheduling status"]
  },
  {
    title: "Payments",
    icon: CreditCard,
    items: ["Deposit status", "Payment status", "Stripe reference"]
  }
];

export default function AdminPage() {
  return (
    <>
      <PageHero
        body="A first-pass admin structure for reviewing bookings, customers, deposits, appointments, and property notes after backend integrations are built."
        eyebrow="Admin"
        imageSrc={siteConfig.servicesImage}
        title="Operational visibility for Golden Glow Pro"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro
          body="The admin route is a structural placeholder only. Future work should protect this page with authentication and role-based access before real customer data appears."
          eyebrow="Admin needs"
          title="Prepared for booking and customer visibility"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {adminSections.map((section) => {
            const Icon = section.icon;
            return (
              <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm" key={section.title}>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-soft-gold">
                  <Icon aria-hidden className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-serif text-2xl tracking-normal text-ink">{section.title}</h2>
                <div className="mt-5">
                  <CheckList items={section.items} />
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-10 rounded-lg border border-dashed border-champagne/70 bg-soft-gold/10 p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck aria-hidden className="h-5 w-5 text-champagne" />
            <h2 className="font-semibold text-ink">Access guard required before launch</h2>
          </div>
          <p className="mt-3 leading-7 text-neutral-700">
            This route should be gated by Supabase Auth and admin role checks before
            connecting live customer, booking, or payment data.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <IntegrationStatus />
      </section>
    </>
  );
}
