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
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-soft-gold">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">{body}</p>
        </div>
      </div>
    </section>
  );
}
