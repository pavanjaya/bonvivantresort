import PlaceholderImage from "./PlaceholderImage";

const CARDS = [
  {
    tone: "charcoal" as const,
    eyebrow: "Bon Vivant Gift Card",
    title: "Thoughtful Gestures",
    description:
      "Prompting new adventures, a Bon Vivant Gift Card is the perfect token of gratitude.",
    cta: "Shop now",
    href: "#gift-card",
  },
  {
    tone: "ocean" as const,
    eyebrow: "Vineyard Tours",
    title: "Walk the Estate",
    description:
      "A guided walk through our vineyards and cellar, ending with a tasting of wines made from grapes grown right here in Nashik.",
    cta: "Discover more",
    href: "#vineyard-tours",
  },
  {
    tone: "sand" as const,
    eyebrow: "Bon Vivant Boutique",
    title: "The Table Linens Edit",
    description:
      "Discover our new edit of hand-loomed linens and tableware, made for gathering at home.",
    cta: "Shop now",
    href: "#boutique",
  },
];

export default function WorldGrid() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-20 sm:px-10">
      <h2 className="text-center font-serif text-3xl font-light text-foreground sm:text-4xl">
        Beyond Your Room
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {CARDS.map((card) => (
          <article key={card.title}>
            <PlaceholderImage
              tone={card.tone}
              className="aspect-[4/5] w-full"
            />
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted">
              {card.eyebrow}
            </p>
            <h3 className="mt-2 font-serif text-xl font-light text-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {card.description}
            </p>
            <a
              href={card.href}
              className="mt-3 inline-block w-fit border-b border-foreground/40 pb-0.5 text-xs uppercase tracking-[0.15em] text-foreground hover:border-foreground"
            >
              {card.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
