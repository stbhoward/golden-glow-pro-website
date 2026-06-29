import React, { useState } from 'react';

type PageId = 'home' | 'services' | 'membership' | 'about' | 'contact';

type NavLink = {
  id: PageId;
  label: string;
};

type ServiceCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  audience: string[];
  includes: string[];
  price: string;
};

type MembershipPlan = {
  name: string;
  price: string;
  bestFor: string;
  benefits: string[];
};

type FAQItem = {
  question: string;
  answer: string;
};

type HomeFaqLink = FAQItem & {
  cta: string;
  target: PageId;
};

const SITE_CONFIG = {
  companyName: 'Golden Glow Pro',
  legalName: 'Golden Glow Cleaning Services',
  phone: '(414) 316-6567',
  email: 'inquiries@goldenglowpro.com',
  hours: 'Mon-Sat: 7AM - 7PM',
  serviceArea: 'Houston & Surrounding Areas',
  logoUrl: '/golden-glow-logo.png',
  calendarUrl: 'https://your-calendar-booking-link.com',
  stripeDepositUrl: 'https://buy.stripe.com/your-deposit-link',
};

function openExternal(url: string) {
  if (!url || url === '#') return;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">{eyebrow}</p>
      <h2 className="mt-2 text-4xl md:text-5xl font-serif tracking-tight text-neutral-900">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-neutral-700">{body}</p>
    </div>
  );
}

function FAQSection({
  eyebrow,
  title,
  body,
  items,
  columns = 1,
}: {
  eyebrow: string;
  title: string;
  body: string;
  items: FAQItem[];
  columns?: 1 | 2;
}) {
  return (
    <div>
      <SectionIntro eyebrow={eyebrow} title={title} body={body} />
      <div className={`mt-10 grid gap-4 ${columns === 2 ? 'lg:grid-cols-2' : ''}`}>
        {items.map((item) => (
          <div key={item.question} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-xl font-serif text-neutral-900">{item.question}</h3>
            <p className="mt-3 leading-7 text-neutral-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTA({
  title,
  body,
  buttonA,
  buttonB,
  onA,
  onB,
}: {
  title: string;
  body: string;
  buttonA: string;
  buttonB: string;
  onA: () => void;
  onB: () => void;
}) {
  return (
    <section className="rounded-[2rem] bg-neutral-900 text-white">
      <div className="grid items-center gap-8 px-8 py-12 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h3 className="text-3xl font-serif tracking-tight md:text-4xl">{title}</h3>
          <p className="mt-4 text-lg leading-8 text-neutral-300">{body}</p>
        </div>
        <div className="flex flex-wrap gap-4 lg:justify-end">
          <button onClick={onA} className="rounded-full bg-white px-6 py-3.5 font-medium text-neutral-900 hover:bg-stone-100">
            {buttonA}
          </button>
          <button onClick={onB} className="rounded-full border border-white/20 px-6 py-3.5 font-medium text-white hover:bg-white/5">
            {buttonB}
          </button>
        </div>
      </div>
    </section>
  );
}

function Logo() {
  return (
    <img
      src={SITE_CONFIG.logoUrl}
      alt={`${SITE_CONFIG.companyName} logo`}
      className="h-16 w-auto object-contain"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}

function BookNowButton({ className = '' }: { className?: string }) {
  return (
    <button
      onClick={() => openExternal(SITE_CONFIG.calendarUrl)}
      className={`rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-black ${className}`}
    >
      Book Now
    </button>
  );
}

function DepositButton({ className = '' }: { className?: string }) {
  return (
    <button
      onClick={() => openExternal(SITE_CONFIG.stripeDepositUrl)}
      className={`rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-stone-50 ${className}`}
    >
      Pay Deposit
    </button>
  );
}

export default function GoldenGlowWebsite(): JSX.Element {
  const [page, setPage] = useState<PageId>('home');

  const pageLinks: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'membership', label: 'Membership' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const topServices: { id: string; label: string }[] = [
    { id: 'initial', label: 'Premier Refresh Cleaning' },
    { id: 'recurring', label: 'Recurring Cleaning' },
    { id: 'deep', label: 'Deep Cleaning' },
    { id: 'move', label: 'Move-In / Move-Out Cleaning' },
  ];

  const serviceCards: ServiceCard[] = [
    {
      id: 'initial',
      title: 'Premier Refresh Cleaning',
      subtitle:
        'A professional first-time or occasional cleaning designed to refresh the home with a polished, elevated finish.',
      description:
        'This service is the best replacement for the idea of a random or one-time clean. Premier Refresh Cleaning feels more refined, polished, and aligned with a luxury service brand. It is designed for homes that need a full refresh before beginning recurring service, after travel, before events, after a busy season, or anytime the home needs to feel calm, clean, and reset again.',
      audience: [
        'First-time clients trying Golden Glow for the first visit',
        'Homes that are tidy but need a stronger overall reset',
        'Busy households preparing for guests, holidays, or special occasions',
        'Luxury homeowners who want a polished refresh without immediately starting recurring service',
      ],
      includes: [
        'Detailed dusting of visible surfaces, decor, ledges, trim, and accessible fixtures',
        'Vacuuming and mopping throughout main living areas, bedrooms, and bathrooms',
        'Kitchen wipe-downs, counters, appliance exteriors, sinks, and visible surfaces',
        'Bathroom sanitizing, mirror polishing, tub, shower, toilet, and sink cleaning',
        'General straightening, trash removal, and finishing touches that make the home feel reset',
      ],
      price: 'Starting from $180-$320+',
    },
    {
      id: 'recurring',
      title: 'Recurring Cleaning',
      subtitle:
        'Ongoing maintenance for homeowners who want a consistently beautiful home without the stress of catching up.',
      description:
        'Recurring cleaning should remain the emotional center of the website. This service is built for residents, luxury homeowners, condos, apartments, and busy families who want a predictable standard of cleanliness and a polished home environment all year long. It works best as the core long-term relationship service for Golden Glow.',
      audience: [
        'Families balancing busy schedules, kids, pets, and entertaining',
        'Professionals who want the home maintained without sacrificing time',
        'Luxury homeowners who expect a detail-focused standard on every visit',
        'Apartment and condo residents who want consistency and convenience',
      ],
      includes: [
        'Weekly, biweekly, or monthly maintenance options',
        'Dusting, vacuuming, mopping, kitchen upkeep, bathroom sanitizing, and surface care',
        'General reset of main living spaces, bedrooms, bathrooms, and kitchens',
        'A cleaner home that stays in better condition between visits',
        'A natural entry point into the membership program',
      ],
      price: 'Starting from $140-$260+',
    },
    {
      id: 'deep',
      title: 'Deep Cleaning',
      subtitle:
        'A top-to-bottom reset for homes that need more detail, more labor, and more care than standard maintenance service.',
      description:
        'Deep cleaning should be positioned as a stronger, more detailed service for homes that have gone too long without professional care or need more attention before recurring cleaning can hold the right standard. It is also ideal for seasonal resets, pre-holiday preparation, and homes with visible buildup or neglected details.',
      audience: [
        'Homes that have not been professionally cleaned recently',
        'Households preparing for events, guests, holidays, or major seasonal resets',
        'Clients who want a stronger first service before maintenance begins',
        'Luxury residences where a higher-detail first visit is important',
      ],
      includes: [
        'Baseboards, fixtures, trim, and more detailed dusting',
        'Higher-detail bathroom and kitchen cleaning',
        'More labor-intensive work than routine cleaning',
        'A stronger baseline that helps future recurring visits maintain the home more effectively',
      ],
      price: 'Starting from $220-$420+',
    },
    {
      id: 'move',
      title: 'Move-In / Move-Out Cleaning',
      subtitle:
        'Detailed empty-property cleaning for transitions, listings, turnovers, and fresh starts.',
      description:
        'This service should feel practical, detailed, and highly trustworthy. It is built for renters, homeowners, buyers, sellers, landlords, and property managers who need a home professionally reset before move-in, after move-out, or before a sale or handoff. This is one of the strongest local-intent service pages because the need is often urgent and outcome-focused.',
      audience: [
        'Tenants preparing to leave a property',
        'New buyers moving into a home',
        'Sellers and real estate professionals preparing listings',
        'Landlords and property managers handling turnovers',
      ],
      includes: [
        'Inside and outside of cabinets, drawers, and closets',
        'Detailed appliance-area cleaning when accessible',
        'Bathroom reset, trim, doors, frames, baseboards, and touchpoints',
        'An empty-space clean that makes the property feel truly ready for the next chapter',
      ],
      price: 'Starting from $260-$550+',
    },
  ];

  const propertyTypes: { title: string; body: string }[] = [
    {
      title: 'Homes & Luxury Residences',
      body:
        'Golden Glow should clearly speak to everyday homes, larger family houses, luxury residences, and high-end interiors that require more careful, detail-conscious upkeep. Messaging here should reflect privacy, premium-surface awareness, consistency, and calm professionalism.',
    },
    {
      title: 'Apartments, Condos & High-Rises',
      body:
        'The services page should make it clear that Golden Glow is also built for city living. Apartment and high-rise residents often want convenience, efficient scheduling, polished presentation, and a service that understands concierge access, elevator timing, and smaller-space detail work.',
    },
    {
      title: 'Post-Construction Cleaning',
      body:
        'Post-construction service should be positioned as a specialty offer for renovations, remodels, and new builds. It should emphasize fine dust removal, final detailing, healthier air quality, and making the property presentation-ready once work is complete.',
    },
    {
      title: 'Eco-Friendly Cleaning Standards',
      body:
        'Eco-friendly cleaning should be presented as a brand-wide preference, not a side note. Golden Glow should emphasize non-toxic, family-conscious, and environmentally responsible products whenever possible, while also making it clear that client-specified or client-provided products are welcomed.',
    },
    {
      title: 'Commercial & Office Cleaning',
      body:
        'Commercial cleaning should feel like a polished extension of the residential brand, not heavy industrial janitorial work. The strongest fit is small offices, professional suites, boutique workspaces, and client-facing environments that want dependable cleaning with minimal disruption.',
    },
    {
      title: 'Airbnb & Short-Term Rental Cleaning',
      body:
        'Short-term rental and Airbnb cleaning should be positioned as a guest-readiness service for hosts who need consistent turnovers, refreshed presentation, and a dependable standard that helps each stay begin well.',
    },
  ];

  const membershipPlans: MembershipPlan[] = [
    {
      name: 'Standard Membership',
      price: '$49/month',
      bestFor:
        'Clients who want premium service advantages, added convenience, and a more elevated recurring home care experience.',
      benefits: [
        'Priority scheduling',
        'Preferred rescheduling',
        'Exclusive member pricing',
        'Consistent home maintenance support',
        'Access to member-only perks and seasonal offers',
        'A more convenient and stress-free cleaning experience',
      ],
    },
  ];

  const homeFaqLinks: HomeFaqLink[] = [
    {
      question: 'What cleaning services do you offer?',
      answer:
        'We offer professional residential and commercial cleaning services including recurring cleaning, deep cleaning, move-in and move-out cleaning, Airbnb and short-term rental cleaning, and customized cleaning plans based on your property and goals.',
      cta: 'View Services',
      target: 'services',
    },
    {
      question: 'Do you offer recurring cleaning and Membership?',
      answer:
        'Yes. We offer weekly, biweekly, and monthly recurring cleaning, and our Membership program gives clients added convenience, premium benefits, and ongoing value.',
      cta: 'View Membership',
      target: 'membership',
    },
    {
      question: 'How do I book a cleaning?',
      answer:
        'You can book through the website, by phone, or by email. We will gather details about your property and recommend the best service for your needs.',
      cta: 'Book Now',
      target: 'contact',
    },
    {
      question: 'Do you clean homes, apartments, condos, and offices?',
      answer:
        'Yes. Golden Glow serves houses, apartments, condos, rental properties, luxury residences, and select commercial spaces.',
      cta: 'Explore Services',
      target: 'services',
    },
  ];

  const faqSections: Record<'services' | 'membership' | 'company' | 'booking', FAQItem[]> = {
    services: [
      {
        question: 'What cleaning services do you offer?',
        answer:
          'We offer professional residential and commercial cleaning services tailored to your needs. Our services include recurring cleaning, deep cleaning, move-in and move-out cleaning, Airbnb and short-term rental cleaning, and commercial cleaning. We also offer customized cleaning plans based on your property and goals.',
      },
      {
        question: 'Do you offer recurring cleaning services?',
        answer:
          'Yes. We offer recurring cleaning services on a weekly, biweekly, or monthly basis for clients who want their property consistently maintained.',
      },
      {
        question: 'Do you offer one-time cleanings?',
        answer: 'Yes. We offer one-time cleanings as well as recurring service options.',
      },
      {
        question: 'Do you offer deep cleaning services?',
        answer:
          'Yes. Deep cleaning is one of our most requested services and is ideal for first-time clients, homes that need extra attention, or properties that have not been professionally cleaned recently.',
      },
      {
        question: 'Do you offer move-in and move-out cleaning?',
        answer:
          'Yes. We provide move-in and move-out cleaning services to help prepare a property before or after occupancy.',
      },
      {
        question: 'Do you offer commercial cleaning?',
        answer:
          'Yes. We provide commercial cleaning services for offices, businesses, and professional spaces.',
      },
      {
        question: 'Do you clean Airbnb and short-term rental properties?',
        answer:
          'Yes. We provide cleaning services for Airbnb and short-term rental properties to help keep them guest-ready, refreshed, and professionally maintained.',
      },
      {
        question: 'Do you clean houses, apartments, and condos?',
        answer: 'Yes. We clean houses, apartments, condos, rental properties, and commercial spaces.',
      },
      {
        question: 'What is included in a standard cleaning?',
        answer:
          'A standard cleaning typically includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, surface cleaning, trash removal, and general tidying of the main living areas.',
      },
      {
        question: 'What is included in a deep cleaning?',
        answer:
          'A deep cleaning is a more detailed service designed to address buildup and areas that need extra attention. Deep cleaning may include baseboards, oven cleaning, refrigerator cleaning, interior windows, detailed bathroom and kitchen cleaning, buildup removal, and additional hand-detailing throughout the property.',
      },
      {
        question: 'What is the difference between standard cleaning and deep cleaning?',
        answer:
          'Standard cleaning is intended for ongoing maintenance. Deep cleaning is more detailed and thorough, focusing on buildup, neglected areas, and restoring the property to a higher baseline level of cleanliness.',
      },
      {
        question: 'Do you recommend a deep cleaning before recurring service?',
        answer:
          'Yes. We generally prefer to begin with a deep cleaning before starting recurring service so we can bring the property to our maintenance standard. However, this can be discussed during the onboarding process.',
      },
      {
        question: 'Can I customize my cleaning service?',
        answer:
          'Yes. We understand that every property is different. We can tailor your service based on your priorities, lifestyle, and the specific needs of your home or business.',
      },
      {
        question: 'Do you offer add-on services?',
        answer:
          'Yes. Additional detail services may be available depending on your property and needs. These can be discussed at the time of booking or during onboarding.',
      },
      {
        question: 'Do you clean inside ovens and refrigerators?',
        answer:
          'Yes. Oven and refrigerator cleaning can be included as part of a deep cleaning or added as a detail service, depending on your needs.',
      },
      {
        question: 'Do you clean interior windows?',
        answer:
          'Yes. Interior windows may be included as part of a deep cleaning or discussed as an additional detail service.',
      },
      {
        question: 'Do you clean baseboards?',
        answer: 'Yes. Baseboards are commonly included in deep cleaning services.',
      },
      {
        question: 'Do you do laundry, dishes, or organizing?',
        answer:
          'If there are light household tasks you would like discussed, please let us know in advance. Service details can be reviewed during booking or onboarding.',
      },
    ],
    membership: [
      {
        question: 'What is your Membership program?',
        answer:
          'Our Membership program is designed for clients who want recurring home care with added convenience, premium benefits, and ongoing value.',
      },
      {
        question: 'What are the benefits of Membership?',
        answer:
          'Membership benefits may include priority scheduling, preferred rescheduling, exclusive pricing opportunities, and access to member-only perks.',
      },
      {
        question: 'How much does Membership cost?',
        answer: 'Our standard Membership is $49 per month.',
      },
      {
        question: 'Who gets complimentary Membership?',
        answer:
          'Clients enrolled in weekly recurring service receive complimentary Membership at no additional cost.',
      },
      {
        question: 'Is Membership required to book a cleaning?',
        answer:
          'No. Membership is not required. Clients may still book one-time or recurring services without Membership.',
      },
      {
        question: 'Does Membership include free cleanings?',
        answer:
          'No. Membership does not include full cleanings at no charge. Instead, it provides value through premium benefits, convenience, and exclusive perks.',
      },
    ],
    company: [
      {
        question: 'Why choose your company?',
        answer:
          'We are committed to providing reliable, detail-oriented cleaning with a professional and personalized approach. From maintaining consistency with the same cleaner whenever possible to offering flexible product options and eco-friendly supplies, our goal is to make keeping your property clean feel easy, convenient, and dependable.',
      },
      {
        question: 'What makes your service different?',
        answer:
          'We focus on quality, consistency, and client experience. We aim to maintain the same cleaner for your property whenever possible, offer flexible product preferences, provide eco-friendly options, and tailor service plans to fit the specific needs of each client and property.',
      },
    ],
    booking: [
      {
        question: 'What areas do you serve?',
        answer:
          'We serve clients within our local service area. If you are unsure whether your property is within our service range, please contact us and we will be happy to confirm.',
      },
      {
        question: 'How do I book a cleaning?',
        answer:
          'You can book a cleaning by contacting us through our website, by phone, or by email. We will gather details about your property and recommend the best service for your needs.',
      },
      {
        question: 'How far in advance should I schedule?',
        answer:
          'We recommend booking as early as possible to secure your preferred appointment, especially for deep cleanings, recurring service, move-related cleanings, and high-demand times.',
      },
      {
        question: 'Can I choose a specific day and time?',
        answer:
          'We do our best to accommodate your preferred day and time based on availability. Recurring and membership clients may receive scheduling priority.',
      },
      {
        question: 'How long does a cleaning usually take?',
        answer:
          'Most cleanings take an average of 3 to 4 hours, although this can vary depending on the size of the property, the condition of the space, and the services being provided.',
      },
      {
        question: 'Do I need to be home during the cleaning?',
        answer:
          'No. Many clients choose to provide access while they are away. As long as we have an approved way to enter the property, you do not need to be present during the cleaning.',
      },
      {
        question: 'Will I have the same cleaner each time?',
        answer:
          'Yes. Once a cleaner is assigned to your property, we make every effort to maintain the same cleaner for consistency and familiarity.',
      },
      {
        question: 'What if a different cleaner needs to come?',
        answer:
          'If your regular cleaner is unavailable for any reason, we may send a different qualified cleaner to complete your service. We work to maintain the same high standard of quality every visit.',
      },
      {
        question: 'How should I prepare for my cleaning appointment?',
        answer:
          'We recommend picking up personal items, dishes, clothing, toys, and clutter before your appointment so we can focus as much time as possible on cleaning and detailing your space.',
      },
      {
        question: 'What if I have pets?',
        answer:
          'We are happy to work in homes with pets. We simply ask that you let us know ahead of time and ensure pets are secured if needed for their safety and ours.',
      },
      {
        question: 'Can I skip a recurring cleaning?',
        answer: 'Yes. You may skip a recurring cleaning as long as we receive at least 72 hours notice.',
      },
      {
        question: 'What if I need to reschedule?',
        answer:
          'We understand that plans change. If you need to reschedule, please contact us as soon as possible and we will do our best to accommodate your request.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'We require at least 48 hours notice for cancellations or rescheduling.',
      },
      {
        question: 'Do you offer same-day or last-minute cleaning?',
        answer:
          'Availability for same-day or last-minute appointments depends on our schedule. Please contact us directly and we will let you know if we can accommodate your request.',
      },
      {
        question: 'Are you insured?',
        answer: 'Yes. We are insured for your peace of mind and protection.',
      },
      {
        question: 'Do you bring your own cleaning supplies?',
        answer:
          'Yes. We bring our own professional cleaning supplies and equipment for each appointment.',
      },
      {
        question: 'Can I provide my own cleaning products?',
        answer: 'Yes. If you prefer that we use products you provide, we are happy to accommodate that.',
      },
      {
        question: 'Do you use eco-friendly products?',
        answer:
          'Yes. We offer eco-friendly cleaning products and can also provide a list of product options if you would like to choose alternatives beyond the supplies we typically use.',
      },
      {
        question: 'Can I request specific cleaning products?',
        answer:
          'Yes. If you have preferred products, sensitivities, or special requests, we are happy to discuss those before your appointment.',
      },
      {
        question: 'Do you move heavy furniture?',
        answer: 'No. For safety reasons, we do not move heavy furniture.',
      },
      {
        question: 'Are there any services you do not perform?',
        answer:
          'For safety and service-quality reasons, there may be certain tasks we do not perform. Heavy furniture moving is not included. Specialty requests can be discussed during onboarding or before booking.',
      },
      {
        question: 'What if I am not satisfied with my cleaning?',
        answer:
          'Client satisfaction is important to us. If you have any concerns, please contact us promptly so we can review the issue and work toward a resolution.',
      },
      {
        question: 'How much does cleaning cost?',
        answer:
          'Pricing varies based on the size of the property, the condition of the space, the type of service requested, the frequency of service, and any additional tasks requested. We are happy to provide a customized quote based on your needs.',
      },
      {
        question: 'Are first-time cleanings priced differently?',
        answer:
          'Yes. Initial cleanings or deep cleanings may be priced differently than recurring maintenance cleanings because they often require more time and detail.',
      },
      {
        question: 'Are recurring cleanings more affordable than one-time cleanings?',
        answer:
          'Yes. Recurring cleanings are often more cost-effective because the property is maintained regularly and generally requires less intensive work over time.',
      },
      {
        question: 'Do you charge by the hour or by the job?',
        answer:
          'Pricing is based on the scope of work, the size and condition of the property, and the type of service requested.',
      },
      {
        question: 'Do you offer free estimates?',
        answer: 'Yes. We provide estimates so you can understand the service and pricing before booking.',
      },
    ],
  };

  const contentGaps = [
    'Replace SITE_CONFIG.calendarUrl with your real booking calendar URL',
    'Replace SITE_CONFIG.stripeDepositUrl with your real Stripe deposit checkout URL',
    'Upload your logo into Lovable public assets as golden-glow-logo.png',
    'Confirm final service area list and any city-specific landing pages',
    'Confirm final pricing ranges by property size and service type',
    'Add real Google review excerpts and testimonials',
    'Confirm final policies for access, cancellations, rescheduling, and satisfaction guarantee',
    'Confirm final same-cleaner policy language and onboarding wording',
    'Add legal pages such as privacy policy and terms of service',
    'Decide whether Airbnb and short-term rental cleaning should become a dedicated service block',
  ];

  const header = (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="bg-neutral-900 text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 py-2 text-center">
          <span>Insured &amp; Bonded</span>
          <span>Luxury Residential Focus</span>
          <span>Eco-Friendly Product Preference</span>
          <span>Serving Greater Houston</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <button onClick={() => setPage('home')} className="flex items-center gap-4 text-left">
          <Logo />
          <div>
            <div className="text-2xl font-serif text-neutral-900 md:text-3xl">{SITE_CONFIG.companyName}</div>
            <div className="text-sm text-neutral-500">by {SITE_CONFIG.legalName}</div>
          </div>
        </button>

        <nav className="hidden items-center gap-3 text-sm text-neutral-700 xl:flex">
          {pageLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`rounded-full px-4 py-2 transition ${page === item.id ? 'bg-neutral-900 text-white' : 'hover:bg-stone-100'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <BookNowButton />
      </div>
    </header>
  );

  const footer = (
    <footer className="mt-16 bg-neutral-950 text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-2xl font-serif text-white">{SITE_CONFIG.companyName}</div>
          <div className="text-sm text-neutral-500">by {SITE_CONFIG.legalName}</div>
          <p className="mt-4 leading-7 text-neutral-400">
            Premium residential and specialty cleaning for Houston homes, luxury residences, apartments, condos, and select office spaces.
          </p>
        </div>
        <div>
          <div className="font-medium text-white">Site Pages</div>
          <ul className="mt-4 space-y-2 text-neutral-400">
            {pageLinks.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-medium text-white">Top Services</div>
          <ul className="mt-4 space-y-2 text-neutral-400">
            {topServices.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-medium text-white">Contact</div>
          <ul className="mt-4 space-y-2 text-neutral-400">
            <li>{SITE_CONFIG.phone}</li>
            <li>{SITE_CONFIG.email}</li>
            <li>{SITE_CONFIG.serviceArea}</li>
            <li>{SITE_CONFIG.hours}</li>
          </ul>
        </div>
      </div>
    </footer>
  );

  const currentPage =
    page === 'home' ? (
      <>
        <section className="relative overflow-hidden border-b border-black/5 bg-[linear-gradient(180deg,#fffaf1_0%,#f7f3eb_55%,#f8f6f1_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.04),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">
                Houston Luxury Home Cleaning
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-serif leading-[1.05] tracking-tight text-neutral-900 md:text-7xl">
                A Higher Standard of Clean for Houston Homes
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
                Golden Glow Pro provides elevated cleaning services for residents, luxury homeowners, apartments, high-rises, and select commercial spaces. From Premier Refresh Cleaning and recurring care to deep cleaning and move-in or move-out support, each visit is delivered with professionalism, discretion, and attention to detail.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <BookNowButton />
                <button
                  onClick={() => setPage('membership')}
                  className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-stone-50"
                >
                  View Membership
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <div className="flex min-h-[520px] flex-col justify-between rounded-[1.5rem] bg-[linear-gradient(135deg,#f3ecde,#ddd2c1)] p-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-neutral-500">Homepage media direction</div>
                  <h2 className="mt-4 text-3xl font-serif tracking-tight text-neutral-900">Luxury visual experience</h2>
                  <p className="mt-4 leading-7 text-neutral-700">
                    Use a muted video loop or editorial-style hero photography showing bright high-end kitchens, polished surfaces, styled beds, refined bathrooms, and subtle cleaner-at-work detail shots.
                  </p>
                </div>
                <div className="grid gap-3 text-sm text-neutral-700">
                  {['Muted luxury home video or refined still image', 'No cluttered coupon-style graphics', 'Gold accents, soft neutrals, editorial spacing', 'Book Now stays visually prominent'].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/75 px-4 py-3 ring-1 ring-black/5">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-4 md:grid-cols-4">
            {['Insured & Bonded', 'Luxury Residential Focus', 'Eco-Friendly Product Preference', 'Membership Savings Available'].map((item) => (
              <div key={item} className="rounded-2xl bg-white px-5 py-4 text-center text-sm font-medium text-neutral-700 shadow-sm ring-1 ring-black/5">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionIntro
            eyebrow="Why Golden Glow"
            title="Luxury-Forward Service With Everyday Dependability"
            body="Golden Glow Cleaning Services is built around more than basic cleaning. The business is positioned to deliver a polished experience through reliability, strong communication, attention to detail, eco-friendly product preferences, and service options that fit the rhythm of modern Houston households."
          />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionIntro
            eyebrow="Home FAQ"
            title="Quick Answers Before You Take The Next Step"
            body="The homepage FAQ should sit near the bottom of the page and act like a shortcut area for common questions. Each answer should help the visitor quickly decide where to go next."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {homeFaqLinks.map((item) => (
              <div key={item.question} className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <h3 className="text-2xl font-serif text-neutral-900">{item.question}</h3>
                <p className="mt-4 leading-7 text-neutral-700">{item.answer}</p>
                <button
                  onClick={() => setPage(item.target)}
                  className="mt-6 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-black"
                >
                  {item.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <CTA
            title="Explore Services, Membership, And Booking From One Clean Structure"
            body="The site is simplified to the core pages needed to build a cleaner Lovable-ready website: Home, Services, Membership, About Us, and Contact Us."
            buttonA="View Services"
            buttonB="Book Now"
            onA={() => setPage('services')}
            onB={() => openExternal(SITE_CONFIG.calendarUrl)}
          />
        </section>
      </>
    ) : page === 'services' ? (
      <>
        <section className="border-b border-black/5 bg-[linear-gradient(180deg,#fffaf1_0%,#f8f4eb_55%,#f7f5f0_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <SectionIntro
              eyebrow="Services"
              title="Professional Cleaning Services For Houston Homes, Apartments, High-Rises, And Workspaces"
              body="This page combines the full service introduction and service overview into one cleaner structure. It should help a visitor understand exactly what Golden Glow offers, who each service is for, and why the service fits their home, building, or workspace."
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionIntro
            eyebrow="Service overview"
            title="Designed For The Way People Actually Live And Work"
            body="Golden Glow is built to support residents in family homes, luxury estates, apartments, high-rises, urban condos, and select professional workspaces - with recurring upkeep, deep resets, specialty detail work, eco-friendly product preferences, and flexibility for client-specified products built into the experience."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {propertyTypes.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <h3 className="text-2xl font-serif text-neutral-900">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionIntro
              eyebrow="Core services"
              title="Choose The Cleaning Service That Best Fits Your Home And Schedule"
              body="Each core service below should help the client understand the purpose of the service, when it is the right fit, and why Golden Glow is a better choice than a generic cleaning provider. Every service includes a Book Now button so the path to action stays clear."
            />

            <div className="mt-10 grid gap-6">
              {serviceCards.map((service) => (
                <div key={service.id} className="rounded-[1.75rem] bg-stone-50 p-8 ring-1 ring-black/5">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-4xl">
                      <h3 className="text-3xl font-serif tracking-tight text-neutral-900">{service.title}</h3>
                      <p className="mt-3 text-lg leading-8 text-neutral-700">{service.subtitle}</p>
                      <p className="mt-4 leading-8 text-neutral-700">{service.description}</p>
                    </div>
                    <div className="lg:text-right">
                      <div className="inline-block rounded-full bg-amber-50 px-4 py-2 text-sm text-amber-900 ring-1 ring-amber-200">
                        {service.price}
                      </div>
                      <div className="mt-4">
                        <BookNowButton />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <div>
                      <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Best for</div>
                      <ul className="mt-4 space-y-3 text-neutral-700 leading-7">
                        {service.audience.map((item) => (
                          <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-600" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">What’s included</div>
                      <ul className="mt-4 space-y-3 text-neutral-700 leading-7">
                        {service.includes.map((item) => (
                          <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-600" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <FAQSection
            eyebrow="Services FAQ"
            title="Answers To The Most Common Service Questions"
            body="These questions help clarify what Golden Glow offers, which service is right for the client, and how service details can be customized based on the property and goals."
            items={faqSections.services}
            columns={2}
          />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <CTA
            title="Need Help Choosing The Right Service?"
            body="The Services page should make visitors feel informed, not overwhelmed. When they are ready, every service should lead naturally to booking."
            buttonA="Book Now"
            buttonB="Pay Deposit"
            onA={() => openExternal(SITE_CONFIG.calendarUrl)}
            onB={() => openExternal(SITE_CONFIG.stripeDepositUrl)}
          />
        </section>
      </>
    ) : page === 'membership' ? (
      <>
        <section className="border-b border-black/5 bg-[linear-gradient(180deg,#fffaf1_0%,#f8f4eb_55%,#f7f5f0_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <SectionIntro
              eyebrow="Membership"
              title="Elevated Home Care, Designed For Your Lifestyle"
              body="Our Membership is designed for clients who want more than an occasional cleaning. It is for those who value consistency, convenience, and the peace of mind that comes with knowing their home is always being cared for. A beautifully maintained home does more than look clean. It feels calmer, more welcoming, and easier to enjoy. Our Membership makes that experience effortless by combining recurring care, premium benefits, and added flexibility into one elevated service experience."
            />
            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              Rather than worrying about when to schedule your next cleaning or trying to catch up when life gets busy, Membership gives you a simpler, more seamless way to keep your home fresh, polished, and well maintained throughout the year. This is not just about cleaning. It is about creating comfort, saving time, reducing stress, and making home care feel easy.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div>
            <SectionIntro
              eyebrow="Why Choose Membership"
              title="A Dependable, Long-Term Solution For Maintaining Your Home At A High Standard"
              body="Membership is ideal for clients who want a dependable, long-term solution for maintaining their home at a high standard. When your home is cared for on a regular basis, it stays in better condition overall. Cleanings become more efficient, buildup is reduced, and your space remains consistently fresh and inviting. Instead of waiting until your home feels behind, Membership helps you stay ahead with a routine that supports your lifestyle."
            />
            <p className="mt-6 leading-8 text-neutral-700">
              For busy professionals, families, frequent hosts, and anyone who values a beautifully kept space, Membership offers a smarter and more convenient way to enjoy a consistently clean home.
            </p>
            <div className="mt-8 grid gap-4">
              {['Priority scheduling', 'Preferred rescheduling', 'Exclusive member pricing', 'Consistent home maintenance', 'Access to member-only perks and seasonal offers', 'A more convenient and stress-free cleaning experience'].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-neutral-900 p-8 text-white shadow-sm md:p-10">
            <h3 className="text-3xl font-serif tracking-tight">Why a homeowner would buy it</h3>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Consumers buy memberships when the value is obvious. For Golden Glow, that value should come from savings, convenience, preferred treatment, and the confidence of knowing their home care is easier to manage over time. It should feel like a smarter homeowner decision, not a pressured subscription.
            </p>
          </div>
        </section>

        <section className="border-y border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionIntro
              eyebrow="Membership Pricing"
              title="A Premium Service Advantage With Simple, Clear Value"
              body="Our Standard Membership is available for $49 per month. This membership is perfect for clients who want premium service advantages, added convenience, and a more elevated recurring home care experience. Clients enrolled in weekly recurring cleaning service receive complimentary Membership at no additional cost."
            />
            <p className="mt-6 max-w-4xl leading-8 text-neutral-700">
              That means weekly recurring clients enjoy all Membership benefits, including priority scheduling, preferred rescheduling, exclusive pricing opportunities, and member-only perks, without paying the monthly membership fee. This is our way of rewarding our most consistent clients with even greater value and service.
            </p>

            <div className="mt-10 grid max-w-2xl gap-6">
              {membershipPlans.map((plan) => (
                <div key={plan.name} className="rounded-[1.75rem] bg-stone-50 p-7 ring-1 ring-black/5">
                  <h3 className="text-3xl font-serif tracking-tight text-neutral-900">{plan.name}</h3>
                  <div className="mt-3 text-2xl font-serif text-amber-900">{plan.price}</div>
                  <p className="mt-4 leading-7 text-neutral-700">{plan.bestFor}</p>
                  <ul className="mt-5 space-y-3 text-neutral-700 leading-7">
                    {plan.benefits.map((item) => (
                      <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-600" /><span>{item}</span></li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl bg-white px-5 py-4 text-neutral-700 ring-1 ring-black/5">
                    Weekly recurring cleaning clients receive complimentary Membership at no additional cost.
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <BookNowButton />
                    <DepositButton />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <SectionIntro
              eyebrow="A Better Way to Maintain Your Home"
              title="Turn Cleaning From Something Reactive Into Something Proactive"
              body="A home that is cleaned regularly feels different. It feels lighter, calmer, and more comfortable to live in. It is easier to maintain between visits and more enjoyable to come home to each day. Membership turns cleaning from something reactive into something proactive. Instead of scheduling only when things begin to feel overwhelming, you have an ongoing care plan in place that helps your home stay beautifully maintained with less effort on your part."
            />
            <p className="mt-6 leading-8 text-neutral-700">
              It is a more thoughtful, more convenient way to care for your home - and for many clients, that consistency becomes one of the most valuable parts of the service.
            </p>
          </div>
          <div className="grid gap-4">
            {['Your home stays in better condition overall with consistent care', 'Cleanings become more efficient as buildup is reduced', 'Your space remains consistently fresh and inviting', 'You spend less time reacting when life gets busy', 'You gain convenience, comfort, and reduced stress', 'Home care becomes smoother and more seamless throughout the year'].map((item) => (
              <div key={item} className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 text-neutral-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <FAQSection
            eyebrow="Membership FAQ"
            title="Common Questions About Membership"
            body="These answers help explain what Membership is, how it works, and why it is valuable without creating confusion around what is and is not included."
            items={faqSections.membership}
            columns={2}
          />
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <CTA
            title="Experience A Higher Standard Of Home Care"
            body="Join our Membership for $49 per month, or enjoy complimentary Membership with weekly recurring service. Enjoy a home that stays consistently clean, a schedule that works smoothly, and the peace of mind that comes from knowing everything is already taken care of."
            buttonA="Book Now"
            buttonB="Pay Deposit"
            onA={() => openExternal(SITE_CONFIG.calendarUrl)}
            onB={() => openExternal(SITE_CONFIG.stripeDepositUrl)}
          />
        </section>
      </>
    ) : page === 'about' ? (
      <>
        <section className="border-b border-black/5 bg-[linear-gradient(180deg,#fffaf1_0%,#f8f4eb_55%,#f7f5f0_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <SectionIntro
              eyebrow="About Us"
              title="Houston’s Trusted Standard For Elevated Cleaning"
              body="The About page should feel refined, trustworthy, and personal without becoming overly casual. Its purpose is to explain what Golden Glow Pro stands for, why the company exists, and why discerning homeowners should feel confident inviting the brand into their homes."
            />
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div>
            <SectionIntro
              eyebrow="Our story"
              title="Built To Deliver More Than A Basic Clean"
              body="Golden Glow Cleaning Services was developed to provide top-tier cleaning solutions for Houston homes, apartments, offices, and newly completed properties, with a stronger focus on professionalism, consistency, customer care, and premium presentation than many standard cleaning companies."
            />
            <p className="mt-6 leading-8 text-neutral-700">
              The heart of the brand is simple: give homeowners a service that feels dependable, detail-oriented, easy to schedule, eco-conscious, and genuinely respectful of the space. That means showing up prepared, communicating clearly, treating the property with care, and delivering a finished result that feels calm, refreshed, and intentionally maintained.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="text-sm uppercase tracking-[0.22em] text-neutral-500">Brand positioning</div>
            <div className="mt-5 grid gap-4">
              {['Luxury residential cleaning with professional standards at the center', 'Built for residents, luxury homeowners, apartments, high-rises, and select specialty spaces', 'Eco-friendly product preference with flexibility for client-specified products', 'A strong fit for clients who want more than a generic cleaning experience'].map((item) => (
                <div key={item} className="rounded-2xl bg-stone-50 px-5 py-4 ring-1 ring-black/5 text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <FAQSection
            eyebrow="About Golden Glow"
            title="Questions Clients May Ask Before Choosing Us"
            body="These questions help reinforce what makes Golden Glow different and why the brand is positioned around trust, consistency, and client experience."
            items={faqSections.company}
          />
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <CTA
            title="Use The About Page To Build Trust, Then Guide The Visitor Into Action"
            body="A strong About page should reassure the visitor that the company is real, credible, professional, and aligned with their standards. From there, the next step should feel obvious."
            buttonA="Book Now"
            buttonB="Pay Deposit"
            onA={() => openExternal(SITE_CONFIG.calendarUrl)}
            onB={() => openExternal(SITE_CONFIG.stripeDepositUrl)}
          />
        </section>
      </>
    ) : (
      <>
        <section className="border-b border-black/5 bg-[linear-gradient(180deg,#fffaf1_0%,#f8f4eb_55%,#f7f5f0_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <SectionIntro
              eyebrow="Contact Us"
              title="Book Your Cleaning With Confidence"
              body="The Contact page should feel simple, premium, and action-oriented. It exists to make the next step easy for someone who is ready to book, ask a question, or confirm that Golden Glow serves their home and service type."
            />
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <SectionIntro
              eyebrow="Book or contact"
              title="A Polished Booking Experience Matters"
              body="The site should avoid a heavy quote-request flow and instead guide visitors toward a direct booking experience. Book Now should take clients to your calendar first. After booking, clients can pay their deposit through Stripe."
            />
            <div className="mt-8 grid gap-4">
              {['Primary CTA launches the live booking calendar', 'Deposit payment is handled through Stripe after booking', 'Membership can be positioned as an upgrade path during booking', 'Service details and pricing ranges support the booking decision'].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/5">
            <h3 className="text-3xl font-serif tracking-tight text-neutral-900">Booking panel</h3>
            <p className="mt-4 leading-7 text-neutral-700">
              Replace the placeholder links in SITE_CONFIG with your real calendar URL and Stripe deposit checkout URL. In Lovable, upload your logo asset into the public assets folder and name it golden-glow-logo.png.
            </p>
            <div className="mt-6 space-y-4">
              {[
                ['Phone', SITE_CONFIG.phone],
                ['Email', SITE_CONFIG.email],
                ['Hours', SITE_CONFIG.hours],
                ['Service Area', SITE_CONFIG.serviceArea],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-stone-50 px-4 py-4 ring-1 ring-black/5">
                  <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">{label}</div>
                  <div className="mt-1 font-medium text-neutral-900">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookNowButton />
              <DepositButton />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <FAQSection
            eyebrow="Booking & Scheduling FAQ"
            title="Answers To Common Booking, Scheduling, Supply, And Policy Questions"
            body="This section should reduce hesitation by helping visitors understand how booking works, what to expect, what products are used, and how scheduling and policies are handled."
            items={faqSections.booking}
            columns={2}
          />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionIntro
            eyebrow="What still needs to be developed"
            title="Additional Information Still Needed Before The Site Is Fully Launch-Ready"
            body="Below are the main areas where more information or final decisions still need to be developed so the code can become a more complete website build."
          />
          <div className="mt-8 grid gap-4">
            {contentGaps.map((item) => (
              <div key={item} className="rounded-2xl bg-stone-50 px-5 py-4 ring-1 ring-black/5 text-neutral-700">
                {item}
              </div>
            ))}
          </div>
        </section>
      </>
    );

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-800">
      {header}
      <main>{currentPage}</main>
      {footer}
    </div>
  );
}
