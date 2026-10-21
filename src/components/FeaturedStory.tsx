export default function FeaturedStory() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pt-14 pb-4 sm:px-10">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Bon Vivant Journal
      </p>
      <h2 className="mt-3 max-w-2xl font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
        A Conversation on Slow Travel with Chef Elena Marchetti
      </h2>
      <a
        href="#journal"
        className="mt-4 inline-block border-b border-foreground/40 pb-0.5 text-xs uppercase tracking-[0.15em] text-foreground hover:border-foreground"
      >
        Discover more
      </a>
    </section>
  );
}
