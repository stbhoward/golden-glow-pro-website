const env = process.env;

function isPresent(value: string | undefined) {
  return Boolean(value && value.trim().length > 0);
}

export const integrationConfig = {
  supabase: {
    label: "Supabase",
    publicUrl: env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    isConfigured:
      isPresent(env.NEXT_PUBLIC_SUPABASE_URL) &&
      isPresent(env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  },
  stripe: {
    label: "Stripe",
    publishableKey: env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "",
    depositPriceId: env.STRIPE_DEPOSIT_PRICE_ID ?? "",
    depositAmountCents: Number(env.STRIPE_DEPOSIT_AMOUNT_CENTS ?? "5000"),
    isConfigured:
      isPresent(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) &&
      isPresent(env.STRIPE_DEPOSIT_PRICE_ID)
  },
  calcom: {
    label: "Cal.com",
    eventTypeUrl: env.CALCOM_EVENT_TYPE_URL ?? "",
    namespace: env.NEXT_PUBLIC_CALCOM_NAMESPACE ?? "golden-glow-pro",
    isConfigured: isPresent(env.CALCOM_EVENT_TYPE_URL)
  }
} as const;

export type IntegrationKey = keyof typeof integrationConfig;
