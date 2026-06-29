import { CalendarCheck, UserPlus } from "lucide-react";

import { IntegrationStatus } from "@/components/integrations/integration-status";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckList } from "@/components/ui/check-list";
import { PageHero } from "@/components/ui/page-hero";
import { SectionIntro } from "@/components/ui/section-intro";
import { siteConfig } from "@/data/site";

const accountFields = [
  "Name",
  "Email",
  "Phone",
  "Property address",
  "Property type",
  "Selected service",
  "Selected add-ons"
];

export default function SignUpPage() {
  return (
    <>
      <PageHero
        body="Account creation will eventually happen after service and add-on selection, before the Stripe deposit and Cal.com scheduling steps."
        eyebrow="Sign Up"
        imageSrc={siteConfig.heroImage}
        title="Create a customer account with care"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          body="The account creation route is structured for the required customer flow while keeping live auth work out of this first PR."
          eyebrow="Account setup"
          title="Prepared fields for the future Supabase profile"
        />
        <div className="rounded-lg border border-ink/10 bg-white p-8 shadow-sm">
          <UserPlus aria-hidden className="h-7 w-7 text-champagne" />
          <h2 className="mt-5 font-serif text-3xl tracking-normal text-ink">
            Customer profile data
          </h2>
          <div className="mt-6">
            <CheckList items={accountFields} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/booking" icon={CalendarCheck}>
              Continue Booking
            </ButtonLink>
            <ButtonLink href="/sign-in" variant="outline">
              Sign In
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <IntegrationStatus keys={["supabase"]} />
      </section>
    </>
  );
}
