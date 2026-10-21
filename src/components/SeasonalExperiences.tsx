import PlaceholderImage from "./PlaceholderImage";

const EXPERIENCES = [
  {
    tone: "olive" as const,
    eyebrow: "Nashik Wine Country",
    title: "A Harvest Table",
    description:
      "Join our estate's winemakers for a seasonal supper among the vines, paired with our own label from the vineyards of Nashik.",
    href: "#harvest",
  },
  {
    tone: "charcoal" as const,
    eyebrow: "Wellness Retreats",
    title: "The Sommelier's Wellness Programme",
    description:
      "A three-day retreat pairing restorative spa rituals with mindful tasting, led by our resident sommelier and wellness advisor.",
    href: "#wellness-programme",
  },
  {
    tone: "gold" as const,
    eyebrow: "Bon Vivant Villas",
    title: "Private Villas",
    description:
      "Three- to six-bedroom villas with private pools and dedicated villa hosts, set apart from the main resort for complete privacy.",
    href: "#villas",
  },
];

export default function SeasonalExperiences() {
  return (
    <section
      id="experiences"
      className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10"
    >
      <div className="max-w-xl">
        <h2 className="font-serif text-3xl font-light text-foreground sm:text-4xl">
          Seasonal Experiences
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">
          Across the estate, discover new and noteworthy experiences that
          provide an authentic connection to Nashik's wine country.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {EXPERIENCES.map((item) => (
          <article key={item.title}>
            <PlaceholderImage
              tone={item.tone}
              className="aspect-[3/4] w-full"
            />
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted">
              {item.eyebrow}
            </p>
            <h3 className="mt-2 font-serif text-xl font-light text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {item.description}
            </p>
            <a
              href={item.href}
              className="mt-3 inline-block w-fit border-b border-foreground/40 pb-0.5 text-xs uppercase tracking-[0.15em] text-foreground hover:border-foreground"
            >
              Discover more
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
