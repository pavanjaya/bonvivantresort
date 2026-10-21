"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ROOM_TYPES = [
  { value: "any", label: "All Room Types" },
  { value: "garden", label: "Garden Room" },
  { value: "ocean", label: "Ocean Suite" },
  { value: "villa", label: "Private Villa" },
];

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6];

export default function BookingBar({
  className = "",
  id,
  defaultCheckIn = "",
  defaultCheckOut = "",
  defaultGuests = 2,
  defaultRoomType = "any",
}: {
  className?: string;
  id?: string;
  defaultCheckIn?: string;
  defaultCheckOut?: string;
  defaultGuests?: number;
  defaultRoomType?: string;
}) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [guests, setGuests] = useState(defaultGuests);
  const [roomType, setRoomType] = useState(defaultRoomType);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set("checkin", checkIn);
    if (checkOut) params.set("checkout", checkOut);
    params.set("guests", String(guests));
    if (roomType !== "any") params.set("type", roomType);
    router.push(`/rooms?${params.toString()}`);
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`scroll-mt-28 flex w-full max-w-4xl flex-col divide-y divide-border bg-background shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] sm:flex-row sm:divide-x sm:divide-y-0 ${className}`}
    >
      <label className="flex flex-1 flex-col gap-1 px-5 py-4">
        <span className="text-[10px] uppercase tracking-[0.15em] text-muted">
          Check In
        </span>
        <input
          type="date"
          required
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="bg-transparent text-sm text-foreground focus:outline-none"
        />
      </label>

      <label className="flex flex-1 flex-col gap-1 px-5 py-4">
        <span className="text-[10px] uppercase tracking-[0.15em] text-muted">
          Check Out
        </span>
        <input
          type="date"
          required
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="bg-transparent text-sm text-foreground focus:outline-none"
        />
      </label>

      <label className="flex flex-1 flex-col gap-1 px-5 py-4">
        <span className="text-[10px] uppercase tracking-[0.15em] text-muted">
          Guests
        </span>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="bg-transparent text-sm text-foreground focus:outline-none"
        >
          {GUEST_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-1 flex-col gap-1 px-5 py-4">
        <span className="text-[10px] uppercase tracking-[0.15em] text-muted">
          Room Type
        </span>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="bg-transparent text-sm text-foreground focus:outline-none"
        >
          {ROOM_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="shrink-0 bg-cta px-8 py-4 text-xs uppercase tracking-[0.15em] text-cta-foreground transition-colors hover:bg-accent"
      >
        Check Availability
      </button>
    </form>
  );
}
