import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

const ITEMS = [
  {
    tone: "sand" as const,
    image: "/031.png",
    eyebrow: "Rooms & Villas",
    title: "70 Rooms Among the Vines",
    description:
      "Garden Rooms, Ocean Suites, and Private Villas set across the estate's vineyard grounds in Nashik — each shaped by the same standard of quiet comfort.",
    href: "/rooms",
  },
  {
    tone: "charcoal" as const,
    image: "/wedding.png",
    eyebrow: "Weddings & Celebrations",
    title: "Destination Weddings at Bon Vivant",
    description:
      "Terraced lawns, a private vineyard backdrop, and dedicated event planning make Bon Vivant one of Nashik's most sought-after venues for weddings and celebrations.",
    href: "#weddings",
  },
];

export default function TwoColumnFeature() {
  return (
    <section className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 sm:px-10">
      {ITEMS.map((item) => (
        <article key={item.title} className="flex flex-col">
          {item.image ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <PlaceholderImage tone={item.tone} className="aspect-[4/3] w-full" />
          )}
          <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted">
            {item.eyebrow}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-light text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/70">
            {item.description}
          </p>
          <a
            href={item.href}
            className="mt-4 inline-block w-fit border-b border-foreground/40 pb-0.5 text-xs uppercase tracking-[0.15em] text-foreground hover:border-foreground"
          >
            Discover more
          </a>
        </article>
      ))}
    </section>
  );
}
