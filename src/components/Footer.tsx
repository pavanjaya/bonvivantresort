import SocialIcon, { SocialPlatform } from "./SocialIcon";
import Logo from "./Logo";

const MORE_INFO = [
  "About Bon Vivant",
  "Careers",
  "Leadership",
  "Sustainability",
  "Press",
  "Privacy Notice",
  "Contact Us",
];

const VISIT_US = [
  "Bon Vivant Resort & Spa",
  "Gangapur–Savargaon Road",
  "Nashik, Maharashtra 422222",
  "India",
];

const CONTACT = [
  "+91 253 000 0000",
  "reservations@bonvivantresort.com",
  "Nearest Airport: Nashik (ISK), 24 km",
];

const NEARBY = [
  "Sula & Vallonné Vineyards",
  "Trimbakeshwar Temple",
  "Pandavleni Caves",
  "Godavari Ghat, Panchavati",
];

const SOCIALS: SocialPlatform[] = [
  "instagram",
  "facebook",
  "youtube",
  "x",
  "linkedin",
  "pinterest",
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-background">
      <div
        id="visit"
        className="mx-auto grid max-w-[1600px] scroll-mt-24 grid-cols-1 gap-10 px-6 py-14 text-sm sm:grid-cols-4 sm:px-10"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground">
            More Information
          </p>
          <ul className="mt-4 space-y-2 text-foreground/70">
            {MORE_INFO.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-foreground">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground">
            Visit Us
          </p>
          <ul className="mt-4 space-y-2 text-foreground/70">
            {VISIT_US.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-foreground/70">
            {CONTACT.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground">
            Nearby
          </p>
          <ul className="mt-4 space-y-2 text-foreground/70">
            {NEARBY.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-10">
          <Logo height={34} />
          <div className="flex items-center gap-4 text-foreground/60">
            {SOCIALS.map((platform) => (
              <a
                key={platform}
                href="#"
                aria-label={platform}
                className="hover:text-foreground"
              >
                <SocialIcon platform={platform} size={16} />
              </a>
            ))}
          </div>
          <span className="text-xs text-foreground/50">
            Copyright 2026, Bon Vivant Hospitality Pvt. Ltd.
          </span>
        </div>
      </div>
    </footer>
  );
}
