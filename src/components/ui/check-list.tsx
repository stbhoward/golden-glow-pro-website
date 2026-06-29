import { Check } from "lucide-react";

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 leading-7 text-neutral-700">
      {items.map((item) => (
        <li className="flex gap-3" key={item}>
          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-bronze">
            <Check aria-hidden className="h-3.5 w-3.5" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
