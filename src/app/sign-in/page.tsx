import { LogIn, ShieldCheck } from "lucide-react";

import { IntegrationStatus } from "@/components/integrations/integration-status";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionIntro } from "@/components/ui/section-intro";
import { siteConfig } from "@/data/site";

export default function SignInPage() {
  return (
    <>
      <PageHero
        body="The customer sign-in route is ready for Supabase Auth wiring in a later backend-focused PR."
        eyebrow="Sign In"
        imageSrc={siteConfig.membershipImage}
        title="Customer access prepared for secure account care"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          body="Future customers will sign in to view profile details, property information, selected services, deposits, appointment history, and upcoming bookings."
          eyebrow="Supabase Auth placeholder"
          title="No live authentication logic yet"
        />
        <div className="rounded-lg border border-ink/10 bg-white p-8 shadow-sm">
          <ShieldCheck aria-hidden className="h-7 w-7 text-champagne" />
          <h2 className="mt-5 font-serif text-3xl tracking-normal text-ink">
            Auth boundary ready
          </h2>
          <p className="mt-4 leading-7 text-neutral-700">
            This route intentionally avoids fake credential handling. The next auth
            PR can replace this panel with Supabase email, password, magic link, or
            OAuth flows.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/account" icon={LogIn}>
              View Account Shell
            </ButtonLink>
            <ButtonLink href="/sign-up" variant="outline">
              Create Account
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
