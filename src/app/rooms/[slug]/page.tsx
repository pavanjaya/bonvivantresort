import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, BedDouble, Check, Eye, Maximize, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ROOMS, getRoomBySlug } from "@/lib/rooms";

export function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: `${room.name} — Bon Vivant Resort & Spa`,
    description: room.description,
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  const specs = [
    { icon: Maximize, label: `${room.sizeSqm} m²` },
    { icon: Users, label: `Up to ${room.maxGuests} guests` },
    { icon: BedDouble, label: room.bedConfig },
    { icon: Eye, label: room.view },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="w-full px-4 pt-4 sm:px-8 sm:pt-8">
          <div className="relative h-[50vh] min-h-[320px] w-full overflow-hidden sm:h-[60vh]">
            <PlaceholderImage tone={room.tone} className="h-full w-full" />
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 pt-8 sm:px-10">
          <a
            href="/rooms"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Rooms &amp; Suites
          </a>

          <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                {room.roomCount} Rooms Available
              </p>
              <h1 className="mt-3 font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
                {room.name}
              </h1>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <p className="font-serif text-3xl font-light text-foreground">
                ${room.pricePerNight.toLocaleString()}
              </p>
              <p className="text-[11px] uppercase tracking-[0.15em] text-muted">
                per night
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-border/80 py-5 text-xs uppercase tracking-[0.1em] text-foreground/70">
            {specs.map((spec) => (
              <span key={spec.label} className="flex items-center gap-2">
                <spec.icon size={15} />
                {spec.label}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-foreground/70">
            {room.longDescription}
          </p>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 py-14 sm:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {room.gallery.map((tone, i) => (
              <PlaceholderImage
                key={`${tone}-${i}`}
                tone={tone}
                className="aspect-square w-full"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 pb-14 sm:px-10">
          <h2 className="font-serif text-2xl font-light text-foreground">
            Amenities
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {room.amenities.map((amenity) => (
              <li
                key={amenity}
                className="flex items-center gap-2.5 text-sm text-foreground/80"
              >
                <Check size={15} className="shrink-0 text-cta" />
                {amenity}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto flex max-w-[1600px] justify-center px-6 pb-16 sm:px-10">
          <a
            href={`/rooms?type=${room.slug}#booking`}
            className="bg-cta px-10 py-4 text-xs uppercase tracking-[0.15em] text-cta-foreground transition-colors hover:bg-accent"
          >
            Reserve This Room
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
