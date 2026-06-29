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
      <div className={columns === 2 ? "mt-10 grid border-t border-ink/10 lg:grid-cols-2" : "mt-10 border-t border-ink/10"}>
        {items.map((item) => (
          <article
            className="border-b border-ink/10 py-7 lg:pr-10"
            key={item.question}
          >
            <h3 className="text-xl font-semibold leading-snug text-ink">{item.question}</h3>
            <p className="mt-3 leading-7 text-neutral-700">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
