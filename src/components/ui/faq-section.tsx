import type { FAQItem } from "@/data/types";

import { SectionIntro } from "./section-intro";

type FAQSectionProps = {
  eyebrow: string;
  title: string;
  body: string;
  items: FAQItem[];
  columns?: 1 | 2;
};

export function FAQSection({ eyebrow, title, body, items, columns = 1 }: FAQSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionIntro body={body} eyebrow={eyebrow} title={title} />
      <div className={columns === 2 ? "mt-10 grid gap-4 lg:grid-cols-2" : "mt-10 grid gap-4"}>
        {items.map((item) => (
          <article
            className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm"
            key={item.question}
          >
            <h3 className="font-serif text-2xl leading-snug tracking-normal text-ink">
              {item.question}
            </h3>
            <p className="mt-3 leading-7 text-neutral-700">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
