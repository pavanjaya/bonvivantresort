import Link from "next/link";
import { Maximize, Users } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import type { Room } from "@/lib/rooms";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <article className="flex flex-col">
      <Link href={`/rooms/${room.slug}`} className="block">
        <PlaceholderImage tone={room.tone} className="aspect-[4/3] w-full" />
      </Link>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
            {room.roomCount} Rooms Available
          </p>
          <h3 className="mt-2 font-serif text-2xl font-light text-foreground">
            <Link href={`/rooms/${room.slug}`} className="hover:opacity-80">
              {room.name}
            </Link>
          </h3>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-serif text-2xl font-light text-foreground">
            ${room.pricePerNight.toLocaleString()}
          </p>
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted">
            per night
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-5 text-xs uppercase tracking-[0.1em] text-foreground/60">
        <span className="flex items-center gap-1.5">
          <Maximize size={13} />
          {room.sizeSqm} m²
        </span>
        <span className="flex items-center gap-1.5">
          <Users size={13} />
          Up to {room.maxGuests} guests
        </span>
      </div>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/70">
        {room.description}
      </p>

      <div className="mt-4 flex items-center gap-6">
        <Link
          href={`/rooms/${room.slug}`}
          className="inline-block w-fit border-b border-foreground/40 pb-0.5 text-xs uppercase tracking-[0.15em] text-foreground hover:border-foreground"
        >
          View Details
        </Link>
        <a
          href={`/rooms?type=${room.slug}#booking`}
          className="inline-block w-fit border-b border-foreground/40 pb-0.5 text-xs uppercase tracking-[0.15em] text-foreground hover:border-foreground"
        >
          Reserve This Room
        </a>
      </div>
    </article>
  );
}
