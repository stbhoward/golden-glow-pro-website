import type { ComponentType, SVGProps } from "react";

import { ButtonLink } from "./button-link";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type CTABandProps = {
  title: string;
  body: string;
  primary: {
    label: string;
    href: string;
    icon?: IconType;
  };
  secondary?: {
    label: string;
    href: string;
    icon?: IconType;
  };
};

export function CTABand({ title, body, primary, secondary }: CTABandProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-lg bg-ink text-white shadow-glow">
        <div className="grid items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-3xl leading-tight tracking-normal md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href={primary.href} icon={primary.icon} variant="light">
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} icon={secondary.icon} variant="gold">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
