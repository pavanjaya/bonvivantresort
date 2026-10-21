"use client";

export default function Newsletter() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center sm:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground">
            Get inspired
          </p>
          <p className="mt-1 max-w-md text-sm text-foreground/70">
            To receive updates about exclusive experiences, events, and new
            destinations, please register your interest.
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-sm items-stretch gap-0 border border-foreground/30 sm:w-auto"
        >
          <input
            type="email"
            required
            placeholder="Email address"
            className="w-full min-w-0 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 bg-cta px-6 py-2.5 text-xs uppercase tracking-[0.15em] text-cta-foreground transition-colors hover:bg-accent"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}
