import Link from "next/link";

import { primaryNavigation, siteConfig, utilityNavigation } from "@/data/site";
import { topServices } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-serif text-3xl tracking-normal text-white">{siteConfig.companyName}</div>
          <div className="text-sm text-neutral-500">by {siteConfig.legalName}</div>
          <p className="mt-4 leading-7 text-neutral-400">
            Premium residential and specialty cleaning for Houston homes, luxury
            residences, apartments, condos, and select office spaces.
          </p>
        </div>
        <div>
          <div className="font-semibold text-white">Site Pages</div>
          <ul className="mt-4 space-y-2 text-neutral-400">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            {utilityNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Top Services</div>
          <ul className="mt-4 space-y-2 text-neutral-400">
            {topServices.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <ul className="mt-4 space-y-2 text-neutral-400">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.serviceArea}</li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-neutral-500">
        Placeholder integrations only. No live payments, account actions, or scheduling logic yet.
      </div>
    </footer>
  );
}
