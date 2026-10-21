import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingBar from "@/components/BookingBar";
import RoomCard from "@/components/RoomCard";
import { ROOMS } from "@/lib/rooms";

export const metadata: Metadata = {
  title: "Rooms & Suites — Bon Vivant Resort & Spa",
  description:
    "70 rooms across three categories at Bon Vivant Resort & Spa — Garden Room, Ocean Suite, and Private Villa.",
};

export default async function RoomsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const asString = (v: string | string[] | undefined) =>
    Array.isArray(v) ? v[0] : v;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-[1600px] px-6 pt-14 pb-8 sm:px-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
            70 Rooms &amp; Suites
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            Rooms &amp; Suites
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/70">
            Three categories, seventy rooms, one standard of quiet comfort.
            Check availability below or browse each room type in detail.
          </p>
        </section>

        <section className="mx-auto flex max-w-[1600px] justify-center px-4 sm:px-10">
          <BookingBar
            id="booking"
            defaultCheckIn={asString(params.checkin) ?? ""}
            defaultCheckOut={asString(params.checkout) ?? ""}
            defaultGuests={Number(asString(params.guests)) || 2}
            defaultRoomType={asString(params.type) ?? "any"}
          />
        </section>

        <section className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 sm:px-10 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
