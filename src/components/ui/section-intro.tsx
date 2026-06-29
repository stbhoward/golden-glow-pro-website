import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  className
}: SectionIntroProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="text-sm font-semibold text-bronze">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-neutral-700 md:text-lg">{body}</p>
    </div>
  );
}
