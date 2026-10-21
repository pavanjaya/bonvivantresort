"use client";

import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Dining", href: "/#dining" },
  { label: "Wellness", href: "/#wellness" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Location", href: "/#visit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 sm:px-10">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-foreground/80 hover:text-foreground"
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
          <span>Menu</span>
        </button>

        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <Logo height={36} />
        </a>

        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className="hidden text-foreground/80 hover:text-foreground sm:block"
          >
            <Search size={16} />
          </button>
          <a
            href="/rooms#booking"
            className="border border-cta bg-cta px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-cta-foreground transition-colors hover:bg-accent hover:border-accent"
          >
            Reserve
          </a>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/80 bg-background">
          <ul className="mx-auto flex max-w-[1600px] flex-col divide-y divide-border/60 px-6 sm:flex-row sm:divide-y-0 sm:divide-x sm:px-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="flex-1">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm uppercase tracking-[0.1em] text-foreground/80 hover:text-foreground sm:px-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
