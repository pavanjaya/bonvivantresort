import type { PlaceholderTone } from "@/components/PlaceholderImage";

export type Room = {
  slug: string;
  tone: PlaceholderTone;
  gallery: PlaceholderTone[];
  name: string;
  roomCount: number;
  sizeSqm: number;
  maxGuests: number;
  pricePerNight: number;
  bedConfig: string;
  view: string;
  description: string;
  longDescription: string;
  amenities: string[];
};

export const ROOMS: Room[] = [
  {
    slug: "garden",
    tone: "sand",
    gallery: ["sand", "olive", "terracotta", "charcoal"],
    name: "Garden Room",
    roomCount: 30,
    sizeSqm: 45,
    maxGuests: 2,
    pricePerNight: 420,
    bedConfig: "1 King Bed or 2 Twin Beds",
    view: "Garden View",
    description:
      "Set among the resort's landscaped gardens, each room opens onto a private terrace with views of the grounds — a calm, understated base for your stay.",
    longDescription:
      "Set among the resort's landscaped gardens, the Garden Room opens onto a private terrace overlooking manicured lawns and flowering trees. Finished in warm, natural materials, it's a calm and understated base for exploring Nashik's wine country — close enough to the main house for easy access to dining and the pool, quiet enough to still feel like a retreat.",
    amenities: [
      "Private terrace",
      "Rain shower",
      "Minibar",
      "Air conditioning",
      "High-speed WiFi",
      "In-room safe",
      "Tea & coffee maker",
      "Daily housekeeping",
    ],
  },
  {
    slug: "ocean",
    tone: "ocean",
    gallery: ["ocean", "charcoal", "sand", "gold"],
    name: "Ocean Suite",
    roomCount: 25,
    sizeSqm: 65,
    maxGuests: 3,
    pricePerNight: 680,
    bedConfig: "1 King Bed",
    view: "Poolside Water View",
    description:
      "A separate living area and a wraparound balcony facing the water, with soaking tub and daybed — for travelers who want the sea close at hand.",
    longDescription:
      "The Ocean Suite pairs a separate living area with a wraparound balcony that faces the resort's reflecting pool and water gardens. Inside, a soaking tub and daybed extend the room's living space, making it as suited to a slow afternoon in as it is to a night out at the estate's dining room.",
    amenities: [
      "Private balcony",
      "Soaking tub",
      "Daybed",
      "Rain shower",
      "Minibar",
      "Air conditioning",
      "High-speed WiFi",
      "In-room safe",
      "Bathrobe & slippers",
    ],
  },
  {
    slug: "villa",
    tone: "gold",
    gallery: ["gold", "terracotta", "olive", "charcoal"],
    name: "Private Villa",
    roomCount: 15,
    sizeSqm: 120,
    maxGuests: 4,
    pricePerNight: 1450,
    bedConfig: "2–3 Bedrooms, King Beds",
    view: "Vineyard View",
    description:
      "Freestanding villas with a private plunge pool and dedicated host, set apart from the main resort for guests seeking full privacy.",
    longDescription:
      "Freestanding and set apart from the main resort, each Private Villa comes with its own plunge pool, private garden, and a dedicated villa host for the length of the stay. Floor-to-ceiling windows open onto uninterrupted vineyard views — built for families and small groups who want the resort's service without sharing the grounds.",
    amenities: [
      "Private plunge pool",
      "Dedicated villa host",
      "Full kitchen",
      "Private garden",
      "Rain shower",
      "Air conditioning",
      "High-speed WiFi",
      "In-room safe",
      "Butler service on request",
    ],
  },
];

export function getRoomBySlug(slug: string) {
  return ROOMS.find((room) => room.slug === slug);
}
