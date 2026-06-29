import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";

import { cn } from "@/lib/utils";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline" | "gold";
  icon?: IconType;
  className?: string;
  external?: boolean;
};

const variants = {
  dark: "bg-ink text-white hover:bg-black",
  light: "bg-white text-ink hover:bg-pearl",
  outline: "border border-ink/15 bg-white/80 text-ink hover:bg-white",
  gold: "bg-champagne text-ink hover:bg-soft-gold"
};

export function ButtonLink({
  href,
  children,
  variant = "dark",
  icon: Icon,
  className,
  external = false
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {Icon ? <Icon aria-hidden className="h-4 w-4" /> : null}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {Icon ? <Icon aria-hidden className="h-4 w-4" /> : null}
      <span>{children}</span>
    </Link>
  );
}
