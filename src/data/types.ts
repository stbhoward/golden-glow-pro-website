export type NavItem = {
  label: string;
  href: string;
  eyebrow?: string;
};

export type ServiceCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  audience: string[];
  includes: string[];
  price: string;
};

export type PropertyType = {
  title: string;
  body: string;
};

export type AddOn = {
  name: string;
  description: string;
};

export type MembershipPlan = {
  name: string;
  price: string;
  bestFor: string;
  benefits: string[];
  note: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type HomeFAQLink = FAQItem & {
  cta: string;
  href: string;
};

export type BookingStep = {
  title: string;
  body: string;
  integration?: "supabase" | "stripe" | "calcom";
};
