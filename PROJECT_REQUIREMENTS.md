\# Golden Glow Pro Website Requirements



\## Business Context



Golden Glow Pro is a premium cleaning company focused on residential cleaning for homes, apartments, penthouses, high-rises, and luxury residences.



The site should also include commercial cleaning, Airbnb and short-term rental cleaning, and specialty cleaning, but the main brand focus should remain residential cleaning and luxury home care.



The brand should feel:

\- Premium

\- Modern

\- Clean

\- Professional

\- Warm

\- Trustworthy

\- Luxury-forward

\- Residential-first



The site should not feel like a generic coupon cleaning site.



\## Customer Flow



The required customer flow is:



1\. Customer visits website

2\. Customer selects a cleaning service

3\. Customer selects add-on services

4\. Customer enters property details

5\. Customer creates an account or signs in

6\. Customer pays a flat $50 deposit

7\. Customer selects appointment date/time

8\. Customer receives confirmation

9\. Admin can view booking, customer details, deposit status, and appointment status



\## Deposit



All appointments require a flat $50 deposit.



The deposit should be processed through Stripe.



The business does not currently have a Stripe account, so Stripe should be built using placeholder environment variables until the account is created.



\## Scheduling



The business does not currently have Calendly, Cal.com, or another scheduling tool.



Preferred recommendation:

Use Cal.com if it is the best balance of robust features, developer flexibility, and cost effectiveness.



Scheduling should eventually connect to the booking flow after the customer pays the deposit.



\## Customer Accounts



Customers should create an account after selecting their service and add-ons.



Customer account should include:

\- Name

\- Email

\- Phone

\- Property address

\- Property type

\- Selected service

\- Selected add-ons

\- Appointment history

\- Upcoming bookings

\- Deposit/payment status



\## Admin Needs



Admin should eventually be able to see:

\- Customers

\- Bookings

\- Services selected

\- Add-ons selected

\- Appointment time

\- Deposit status

\- Payment status

\- Customer contact details

\- Property notes



\## Preferred Technical Stack



Use:

\- Next.js

\- TypeScript

\- Tailwind CSS

\- Vercel

\- Supabase Auth

\- Supabase database

\- Stripe Checkout

\- Cal.com scheduling

\- AI-generated luxury visuals



Do not use stock images.



\## Visual Direction



Use AI-generated or custom luxury visuals.



Visual themes:

\- Luxury homes

\- High-rise apartments

\- Penthouses

\- Bright kitchens

\- Polished bathrooms

\- Styled bedrooms

\- City living

\- Premium residential interiors

\- Clean commercial spaces as a secondary focus



Design should use:

\- Warm neutrals

\- Black

\- White

\- Soft gold accents

\- Editorial spacing

\- Large premium imagery

\- Smooth modern layout

\- Mobile-first responsive design



\## Current Prototype



The current prototype code is saved in:



prototype/GoldenGlowWebsite.tsx



The prototype should be used as the content and design foundation, but it should be converted into a real production Next.js App Router website.



\## First Codex Task



Codex should first create a production-ready frontend structure before building the deeper backend integrations.



First priority:

\- Create real routes

\- Clean up file structure

\- Add responsive navigation

\- Improve modern luxury design

\- Preserve existing content

\- Prepare for Vercel

\- Prepare placeholder integration points for Supabase, Stripe, and Cal.com



Do not hard-code secret keys.

Do not add real Stripe or Supabase secrets into the repo.

