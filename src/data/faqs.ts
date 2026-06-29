import type { FAQItem, HomeFAQLink } from "./types";

export const homeFaqLinks: HomeFAQLink[] = [
  {
    question: "What cleaning services do you offer?",
    answer:
      "We offer professional residential and commercial cleaning services including recurring cleaning, deep cleaning, move-in and move-out cleaning, Airbnb and short-term rental cleaning, and customized cleaning plans based on your property and goals.",
    cta: "View Services",
    href: "/services"
  },
  {
    question: "Do you offer recurring cleaning and Membership?",
    answer:
      "Yes. We offer weekly, biweekly, and monthly recurring cleaning, and our Membership program gives clients added convenience, premium benefits, and ongoing value.",
    cta: "View Membership",
    href: "/membership"
  },
  {
    question: "How do I book a cleaning?",
    answer:
      "You can book through the website, by phone, or by email. We will gather details about your property and recommend the best service for your needs.",
    cta: "Book Now",
    href: "/booking"
  },
  {
    question: "Do you clean homes, apartments, condos, and offices?",
    answer:
      "Yes. Golden Glow serves houses, apartments, condos, rental properties, luxury residences, and select commercial spaces.",
    cta: "Explore Services",
    href: "/services"
  }
];

export const faqSections: Record<"services" | "membership" | "company" | "booking", FAQItem[]> = {
  services: [
    {
      question: "What cleaning services do you offer?",
      answer:
        "We offer professional residential and commercial cleaning services tailored to your needs. Our services include recurring cleaning, deep cleaning, move-in and move-out cleaning, Airbnb and short-term rental cleaning, and commercial cleaning. We also offer customized cleaning plans based on your property and goals."
    },
    {
      question: "Do you offer recurring cleaning services?",
      answer:
        "Yes. We offer recurring cleaning services on a weekly, biweekly, or monthly basis for clients who want their property consistently maintained."
    },
    {
      question: "Do you offer one-time cleanings?",
      answer: "Yes. We offer one-time cleanings as well as recurring service options."
    },
    {
      question: "Do you offer deep cleaning services?",
      answer:
        "Yes. Deep cleaning is one of our most requested services and is ideal for first-time clients, homes that need extra attention, or properties that have not been professionally cleaned recently."
    },
    {
      question: "Do you offer move-in and move-out cleaning?",
      answer:
        "Yes. We provide move-in and move-out cleaning services to help prepare a property before or after occupancy."
    },
    {
      question: "Do you offer commercial cleaning?",
      answer:
        "Yes. We provide commercial cleaning services for offices, businesses, and professional spaces."
    },
    {
      question: "Do you clean Airbnb and short-term rental properties?",
      answer:
        "Yes. We provide cleaning services for Airbnb and short-term rental properties to help keep them guest-ready, refreshed, and professionally maintained."
    },
    {
      question: "Do you clean houses, apartments, and condos?",
      answer:
        "Yes. We clean houses, apartments, condos, rental properties, and commercial spaces."
    },
    {
      question: "What is included in a standard cleaning?",
      answer:
        "A standard cleaning typically includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, surface cleaning, trash removal, and general tidying of the main living areas."
    },
    {
      question: "What is included in a deep cleaning?",
      answer:
        "A deep cleaning is a more detailed service designed to address buildup and areas that need extra attention. Deep cleaning may include baseboards, oven cleaning, refrigerator cleaning, interior windows, detailed bathroom and kitchen cleaning, buildup removal, and additional hand-detailing throughout the property."
    },
    {
      question: "What is the difference between standard cleaning and deep cleaning?",
      answer:
        "Standard cleaning is intended for ongoing maintenance. Deep cleaning is more detailed and thorough, focusing on buildup, neglected areas, and restoring the property to a higher baseline level of cleanliness."
    },
    {
      question: "Do you recommend a deep cleaning before recurring service?",
      answer:
        "Yes. We generally prefer to begin with a deep cleaning before starting recurring service so we can bring the property to our maintenance standard. However, this can be discussed during the onboarding process."
    },
    {
      question: "Can I customize my cleaning service?",
      answer:
        "Yes. We understand that every property is different. We can tailor your service based on your priorities, lifestyle, and the specific needs of your home or business."
    },
    {
      question: "Do you offer add-on services?",
      answer:
        "Yes. Additional detail services may be available depending on your property and needs. These can be discussed at the time of booking or during onboarding."
    },
    {
      question: "Do you clean inside ovens and refrigerators?",
      answer:
        "Yes. Oven and refrigerator cleaning can be included as part of a deep cleaning or added as a detail service, depending on your needs."
    },
    {
      question: "Do you clean interior windows?",
      answer:
        "Yes. Interior windows may be included as part of a deep cleaning or discussed as an additional detail service."
    },
    {
      question: "Do you clean baseboards?",
      answer: "Yes. Baseboards are commonly included in deep cleaning services."
    },
    {
      question: "Do you do laundry, dishes, or organizing?",
      answer:
        "If there are light household tasks you would like discussed, please let us know in advance. Service details can be reviewed during booking or onboarding."
    }
  ],
  membership: [
    {
      question: "What is your Membership program?",
      answer:
        "Our Membership program is designed for clients who want recurring home care with added convenience, premium benefits, and ongoing value."
    },
    {
      question: "What are the benefits of Membership?",
      answer:
        "Membership benefits may include priority scheduling, preferred rescheduling, exclusive pricing opportunities, and access to member-only perks."
    },
    {
      question: "How much does Membership cost?",
      answer: "Our standard Membership is $49 per month."
    },
    {
      question: "Who gets complimentary Membership?",
      answer:
        "Clients enrolled in weekly recurring service receive complimentary Membership at no additional cost."
    },
    {
      question: "Is Membership required to book a cleaning?",
      answer:
        "No. Membership is not required. Clients may still book one-time or recurring services without Membership."
    },
    {
      question: "Does Membership include free cleanings?",
      answer:
        "No. Membership does not include full cleanings at no charge. Instead, it provides value through premium benefits, convenience, and exclusive perks."
    }
  ],
  company: [
    {
      question: "Why choose your company?",
      answer:
        "We are committed to providing reliable, detail-oriented cleaning with a professional and personalized approach. From maintaining consistency with the same cleaner whenever possible to offering flexible product options and eco-friendly supplies, our goal is to make keeping your property clean feel easy, convenient, and dependable."
    },
    {
      question: "What makes your service different?",
      answer:
        "We focus on quality, consistency, and client experience. We aim to maintain the same cleaner for your property whenever possible, offer flexible product preferences, provide eco-friendly options, and tailor service plans to fit the specific needs of each client and property."
    }
  ],
  booking: [
    {
      question: "What areas do you serve?",
      answer:
        "We serve clients within our local service area. If you are unsure whether your property is within our service range, please contact us and we will be happy to confirm."
    },
    {
      question: "How do I book a cleaning?",
      answer:
        "You can book a cleaning by contacting us through our website, by phone, or by email. We will gather details about your property and recommend the best service for your needs."
    },
    {
      question: "How far in advance should I schedule?",
      answer:
        "We recommend booking as early as possible to secure your preferred appointment, especially for deep cleanings, recurring service, move-related cleanings, and high-demand times."
    },
    {
      question: "Can I choose a specific day and time?",
      answer:
        "We do our best to accommodate your preferred day and time based on availability. Recurring and membership clients may receive scheduling priority."
    },
    {
      question: "How long does a cleaning usually take?",
      answer:
        "Most cleanings take an average of 3 to 4 hours, although this can vary depending on the size of the property, the condition of the space, and the services being provided."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer:
        "No. Many clients choose to provide access while they are away. As long as we have an approved way to enter the property, you do not need to be present during the cleaning."
    },
    {
      question: "Will I have the same cleaner each time?",
      answer:
        "Yes. Once a cleaner is assigned to your property, we make every effort to maintain the same cleaner for consistency and familiarity."
    },
    {
      question: "What if a different cleaner needs to come?",
      answer:
        "If your regular cleaner is unavailable for any reason, we may send a different qualified cleaner to complete your service. We work to maintain the same high standard of quality every visit."
    },
    {
      question: "How should I prepare for my cleaning appointment?",
      answer:
        "We recommend picking up personal items, dishes, clothing, toys, and clutter before your appointment so we can focus as much time as possible on cleaning and detailing your space."
    },
    {
      question: "What if I have pets?",
      answer:
        "We are happy to work in homes with pets. We simply ask that you let us know ahead of time and ensure pets are secured if needed for their safety and ours."
    },
    {
      question: "Can I skip a recurring cleaning?",
      answer:
        "Yes. You may skip a recurring cleaning as long as we receive at least 72 hours notice."
    },
    {
      question: "What if I need to reschedule?",
      answer:
        "We understand that plans change. If you need to reschedule, please contact us as soon as possible and we will do our best to accommodate your request."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 48 hours notice for cancellations or rescheduling."
    },
    {
      question: "Do you offer same-day or last-minute cleaning?",
      answer:
        "Availability for same-day or last-minute appointments depends on our schedule. Please contact us directly and we will let you know if we can accommodate your request."
    },
    {
      question: "Are you insured?",
      answer: "Yes. We are insured for your peace of mind and protection."
    },
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes. We bring our own professional cleaning supplies and equipment for each appointment."
    },
    {
      question: "Can I provide my own cleaning products?",
      answer:
        "Yes. If you prefer that we use products you provide, we are happy to accommodate that."
    },
    {
      question: "Do you use eco-friendly products?",
      answer:
        "Yes. We offer eco-friendly cleaning products and can also provide a list of product options if you would like to choose alternatives beyond the supplies we typically use."
    },
    {
      question: "Can I request specific cleaning products?",
      answer:
        "Yes. If you have preferred products, sensitivities, or special requests, we are happy to discuss those before your appointment."
    },
    {
      question: "Do you move heavy furniture?",
      answer: "No. For safety reasons, we do not move heavy furniture."
    },
    {
      question: "Are there any services you do not perform?",
      answer:
        "For safety and service-quality reasons, there may be certain tasks we do not perform. Heavy furniture moving is not included. Specialty requests can be discussed during onboarding or before booking."
    },
    {
      question: "What if I am not satisfied with my cleaning?",
      answer:
        "Client satisfaction is important to us. If you have any concerns, please contact us promptly so we can review the issue and work toward a resolution."
    },
    {
      question: "How much does cleaning cost?",
      answer:
        "Pricing varies based on the size of the property, the condition of the space, the type of service requested, the frequency of service, and any additional tasks requested. We are happy to provide a customized quote based on your needs."
    },
    {
      question: "Are first-time cleanings priced differently?",
      answer:
        "Yes. Initial cleanings or deep cleanings may be priced differently than recurring maintenance cleanings because they often require more time and detail."
    },
    {
      question: "Are recurring cleanings more affordable than one-time cleanings?",
      answer:
        "Yes. Recurring cleanings are often more cost-effective because the property is maintained regularly and generally requires less intensive work over time."
    },
    {
      question: "Do you charge by the hour or by the job?",
      answer:
        "Pricing is based on the scope of work, the size and condition of the property, and the type of service requested."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes. We provide estimates so you can understand the service and pricing before booking."
    }
  ]
};
