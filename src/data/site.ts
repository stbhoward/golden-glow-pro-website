import type { BookingStep, NavItem } from "./types";

export const siteConfig = {
  companyName: "Golden Glow Pro",
  legalName: "Golden Glow Cleaning Services",
  phone: "(414) 316-6567",
  email: "inquiries@goldenglowpro.com",
  hours: "Mon-Sat: 7AM - 7PM",
  serviceArea: "Houston & Surrounding Areas",
  depositAmount: "$50",
  heroImage: "/images/hero-luxury-kitchen.png",
  servicesImage: "/images/service-suite.png",
  membershipImage: "/images/membership-living-room.png"
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Membership", href: "/membership" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const utilityNavigation: NavItem[] = [
  { label: "Booking", href: "/booking" },
  { label: "Sign In", href: "/sign-in" },
  { label: "Sign Up", href: "/sign-up" },
  { label: "Account", href: "/account" },
  { label: "Admin", href: "/admin" }
];

export const trustSignals = [
  "Insured & Bonded",
  "Luxury Residential Focus",
  "Eco-Friendly Product Preference",
  "Membership Savings Available"
];

export const brandPillars = [
  "Premium residential cleaning with professional standards at the center",
  "Built for homes, apartments, high-rises, penthouses, and luxury residences",
  "Eco-friendly product preference with flexibility for client-specified products",
  "A refined alternative to generic coupon-style cleaning services"
];

export const bookingFlow: BookingStep[] = [
  {
    title: "Select a cleaning service",
    body: "Customers begin by choosing Premier Refresh, Recurring Cleaning, Deep Cleaning, Move-In / Move-Out Cleaning, or a specialty service."
  },
  {
    title: "Choose add-on services",
    body: "The booking flow will support detail add-ons such as oven, refrigerator, interior window, baseboard, and specialty requests."
  },
  {
    title: "Enter property details",
    body: "Customers will provide property type, address, square footage guidance, access notes, pets, and priority areas."
  },
  {
    title: "Create an account or sign in",
    body: "Supabase Auth will eventually own secure account creation and sign-in.",
    integration: "supabase"
  },
  {
    title: "Pay the appointment deposit",
    body: "Stripe Checkout will eventually collect the flat $50 appointment deposit before scheduling.",
    integration: "stripe"
  },
  {
    title: "Select appointment date and time",
    body: "Cal.com will eventually provide the scheduling surface after the deposit is complete.",
    integration: "calcom"
  },
  {
    title: "Receive confirmation",
    body: "The account and admin views will eventually show booking, deposit, appointment, and confirmation status."
  }
];

export const contentGaps = [
  "Replace placeholder calendar configuration with the real Cal.com event type URL",
  "Replace placeholder Stripe configuration after the Stripe account is created",
  "Connect Supabase Auth and database tables for customers, bookings, services, and deposits",
  "Confirm final service area list and any city-specific landing pages",
  "Confirm final pricing ranges by property size and service type",
  "Add real Google review excerpts and testimonials",
  "Confirm final policies for access, cancellations, rescheduling, and satisfaction guarantee",
  "Confirm final same-cleaner policy language and onboarding wording",
  "Add legal pages such as privacy policy and terms of service",
  "Decide whether Airbnb and short-term rental cleaning should become a dedicated service block"
];
