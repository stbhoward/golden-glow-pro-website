# Golden Glow Pro Website

Production-ready Next.js App Router foundation for Golden Glow Pro, a premium
residential-first cleaning service serving Houston and surrounding areas.

Golden Glow Pro is focused mainly on residential cleaning for homes, apartments,
penthouses, high-rises, and luxury residences. The site also prepares room for
commercial cleaning, Airbnb cleaning, and specialty cleaning while keeping the
brand centered on residential luxury home care.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel-ready project structure
- Placeholder integration configuration for Supabase, Stripe, and Cal.com

## First Build Scope

- Real routes for Home, Services, Membership, About, Contact, Booking, Sign In,
  Sign Up, Customer Account, and Admin
- Responsive navigation
- Luxury visual design foundation with generated interior imagery
- Service, membership, and FAQ content moved into typed data files
- Placeholder integration points for Supabase Auth, Stripe Checkout, and Cal.com
- No hard-coded secrets or live payment, account, scheduling, or database logic

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Validation

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Environment

Copy `.env.example` to `.env.local` and fill in real values when the accounts
exist. The production site URL is `https://goldenglowpro.com`. Do not commit
real Supabase, Stripe, or Cal.com secrets.
