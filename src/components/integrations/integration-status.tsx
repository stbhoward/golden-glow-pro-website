import { CalendarDays, CreditCard, Database, PlugZap } from "lucide-react";

import { integrationConfig, type IntegrationKey } from "@/lib/integrations";

const icons = {
  supabase: Database,
  stripe: CreditCard,
  calcom: CalendarDays
};

export function IntegrationStatus({ keys }: { keys?: IntegrationKey[] }) {
  const selected = keys ?? (Object.keys(integrationConfig) as IntegrationKey[]);

  return (
    <div className="grid gap-8 border-t border-ink/10 md:grid-cols-3">
      {selected.map((key) => {
        const item = integrationConfig[key];
        const Icon = icons[key];
        return (
          <article className="py-6" key={key}>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{item.label}</h3>
                <p className="text-sm text-neutral-500">
                  {item.isConfigured ? "Configured" : "Placeholder ready"}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              {item.isConfigured
                ? "Environment values are present. Live logic is intentionally deferred."
                : "Environment variables are defined in .env.example. No secret values are committed."}
            </p>
          </article>
        );
      })}
      <article className="border-t border-champagne/50 py-6 md:border-t-0">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-champagne text-ink">
            <PlugZap aria-hidden className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-semibold text-ink">No live logic yet</h3>
            <p className="text-sm text-neutral-600">First PR scope guard</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-neutral-600">
          Payment, account, database, and scheduling actions are placeholders until the
          backend integration PRs are approved.
        </p>
      </article>
    </div>
  );
}
