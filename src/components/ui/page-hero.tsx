import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
};

export function PageHero({ eyebrow, title, body, imageSrc }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        priority
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fill
        sizes="100vw"
        src={imageSrc}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-soft-gold">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-tight tracking-normal md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">{body}</p>
        </div>
      </div>
    </section>
  );
}
