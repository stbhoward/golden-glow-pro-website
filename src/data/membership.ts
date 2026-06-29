import type { MembershipPlan } from "./types";

export const membershipPlans: MembershipPlan[] = [
  {
    name: "Standard Membership",
    price: "$49/month",
    bestFor:
      "Clients who want premium service advantages, added convenience, and a more elevated recurring home care experience.",
    benefits: [
      "Priority scheduling",
      "Preferred rescheduling",
      "Exclusive member pricing",
      "Consistent home maintenance support",
      "Access to member-only perks and seasonal offers",
      "A more convenient and stress-free cleaning experience"
    ],
    note:
      "Weekly recurring cleaning clients receive complimentary Membership at no additional cost."
  }
];

export const membershipBenefits = [
  "Priority scheduling",
  "Preferred rescheduling",
  "Exclusive member pricing",
  "Consistent home maintenance",
  "Access to member-only perks and seasonal offers",
  "A more convenient and stress-free cleaning experience"
];

export const membershipOutcomes = [
  "Your home stays in better condition overall with consistent care",
  "Cleanings become more efficient as buildup is reduced",
  "Your space remains consistently fresh and inviting",
  "You spend less time reacting when life gets busy",
  "You gain convenience, comfort, and reduced stress",
  "Home care becomes smoother and more seamless throughout the year"
];
