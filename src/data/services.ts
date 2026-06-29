import type { AddOn, PropertyType, ServiceCard } from "./types";

export const topServices = [
  { id: "initial", label: "Premier Refresh Cleaning" },
  { id: "recurring", label: "Recurring Cleaning" },
  { id: "deep", label: "Deep Cleaning" },
  { id: "move", label: "Move-In / Move-Out Cleaning" }
];

export const serviceCards: ServiceCard[] = [
  {
    id: "initial",
    title: "Premier Refresh Cleaning",
    subtitle:
      "A professional first-time or occasional cleaning designed to refresh the home with a polished, elevated finish.",
    description:
      "This service is the best replacement for the idea of a random or one-time clean. Premier Refresh Cleaning feels more refined, polished, and aligned with a luxury service brand. It is designed for homes that need a full refresh before beginning recurring service, after travel, before events, after a busy season, or anytime the home needs to feel calm, clean, and reset again.",
    audience: [
      "First-time clients trying Golden Glow for the first visit",
      "Homes that are tidy but need a stronger overall reset",
      "Busy households preparing for guests, holidays, or special occasions",
      "Luxury homeowners who want a polished refresh without immediately starting recurring service"
    ],
    includes: [
      "Detailed dusting of visible surfaces, decor, ledges, trim, and accessible fixtures",
      "Vacuuming and mopping throughout main living areas, bedrooms, and bathrooms",
      "Kitchen wipe-downs, counters, appliance exteriors, sinks, and visible surfaces",
      "Bathroom sanitizing, mirror polishing, tub, shower, toilet, and sink cleaning",
      "General straightening, trash removal, and finishing touches that make the home feel reset"
    ],
    price: "Starting from $180-$320+"
  },
  {
    id: "recurring",
    title: "Recurring Cleaning",
    subtitle:
      "Ongoing maintenance for homeowners who want a consistently beautiful home without the stress of catching up.",
    description:
      "Recurring cleaning should remain the emotional center of the website. This service is built for residents, luxury homeowners, condos, apartments, and busy families who want a predictable standard of cleanliness and a polished home environment all year long. It works best as the core long-term relationship service for Golden Glow.",
    audience: [
      "Families balancing busy schedules, kids, pets, and entertaining",
      "Professionals who want the home maintained without sacrificing time",
      "Luxury homeowners who expect a detail-focused standard on every visit",
      "Apartment and condo residents who want consistency and convenience"
    ],
    includes: [
      "Weekly, biweekly, or monthly maintenance options",
      "Dusting, vacuuming, mopping, kitchen upkeep, bathroom sanitizing, and surface care",
      "General reset of main living spaces, bedrooms, bathrooms, and kitchens",
      "A cleaner home that stays in better condition between visits",
      "A natural entry point into the membership program"
    ],
    price: "Starting from $140-$260+"
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    subtitle:
      "A top-to-bottom reset for homes that need more detail, more labor, and more care than standard maintenance service.",
    description:
      "Deep cleaning should be positioned as a stronger, more detailed service for homes that have gone too long without professional care or need more attention before recurring cleaning can hold the right standard. It is also ideal for seasonal resets, pre-holiday preparation, and homes with visible buildup or neglected details.",
    audience: [
      "Homes that have not been professionally cleaned recently",
      "Households preparing for events, guests, holidays, or major seasonal resets",
      "Clients who want a stronger first service before maintenance begins",
      "Luxury residences where a higher-detail first visit is important"
    ],
    includes: [
      "Baseboards, fixtures, trim, and more detailed dusting",
      "Higher-detail bathroom and kitchen cleaning",
      "More labor-intensive work than routine cleaning",
      "A stronger baseline that helps future recurring visits maintain the home more effectively"
    ],
    price: "Starting from $220-$420+"
  },
  {
    id: "move",
    title: "Move-In / Move-Out Cleaning",
    subtitle:
      "Detailed empty-property cleaning for transitions, listings, turnovers, and fresh starts.",
    description:
      "This service should feel practical, detailed, and highly trustworthy. It is built for renters, homeowners, buyers, sellers, landlords, and property managers who need a home professionally reset before move-in, after move-out, or before a sale or handoff. This is one of the strongest local-intent service pages because the need is often urgent and outcome-focused.",
    audience: [
      "Tenants preparing to leave a property",
      "New buyers moving into a home",
      "Sellers and real estate professionals preparing listings",
      "Landlords and property managers handling turnovers"
    ],
    includes: [
      "Inside and outside of cabinets, drawers, and closets",
      "Detailed appliance-area cleaning when accessible",
      "Bathroom reset, trim, doors, frames, baseboards, and touchpoints",
      "An empty-space clean that makes the property feel truly ready for the next chapter"
    ],
    price: "Starting from $260-$550+"
  }
];

export const propertyTypes: PropertyType[] = [
  {
    title: "Homes & Luxury Residences",
    body:
      "Golden Glow should clearly speak to everyday homes, larger family houses, luxury residences, and high-end interiors that require more careful, detail-conscious upkeep. Messaging here should reflect privacy, premium-surface awareness, consistency, and calm professionalism."
  },
  {
    title: "Apartments, Condos & High-Rises",
    body:
      "The services page should make it clear that Golden Glow is also built for city living. Apartment and high-rise residents often want convenience, efficient scheduling, polished presentation, and a service that understands concierge access, elevator timing, and smaller-space detail work."
  },
  {
    title: "Post-Construction Cleaning",
    body:
      "Post-construction service should be positioned as a specialty offer for renovations, remodels, and new builds. It should emphasize fine dust removal, final detailing, healthier air quality, and making the property presentation-ready once work is complete."
  },
  {
    title: "Eco-Friendly Cleaning Standards",
    body:
      "Eco-friendly cleaning should be presented as a brand-wide preference, not a side note. Golden Glow should emphasize non-toxic, family-conscious, and environmentally responsible products whenever possible, while also making it clear that client-specified or client-provided products are welcomed."
  },
  {
    title: "Commercial & Office Cleaning",
    body:
      "Commercial cleaning should feel like a polished extension of the residential brand, not heavy industrial janitorial work. The strongest fit is small offices, professional suites, boutique workspaces, and client-facing environments that want dependable cleaning with minimal disruption."
  },
  {
    title: "Airbnb & Short-Term Rental Cleaning",
    body:
      "Short-term rental and Airbnb cleaning should be positioned as a guest-readiness service for hosts who need consistent turnovers, refreshed presentation, and a dependable standard that helps each stay begin well."
  }
];

export const addOns: AddOn[] = [
  {
    name: "Inside Oven Cleaning",
    description:
      "Available as part of a deep cleaning or added as a detail service depending on the property and scope."
  },
  {
    name: "Inside Refrigerator Cleaning",
    description:
      "A detail add-on for clients who want appliance interiors refreshed during a larger cleaning visit."
  },
  {
    name: "Interior Windows",
    description:
      "Interior glass can be discussed as a deep-cleaning detail or custom add-on before booking."
  },
  {
    name: "Baseboards & Trim",
    description:
      "Commonly included in deep cleaning and available as an added detail focus for selected areas."
  },
  {
    name: "Client-Specified Products",
    description:
      "Golden Glow can accommodate preferred products, sensitivities, or client-provided supplies."
  },
  {
    name: "Specialty Requests",
    description:
      "Light household tasks, organizing, or property-specific requests can be reviewed during onboarding."
  }
];
