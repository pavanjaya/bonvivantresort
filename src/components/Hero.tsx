import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section id="top" className="w-full px-4 pt-4 sm:px-8 sm:pt-8">
      <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden sm:h-[85vh]">
        <HeroVideo src="/hero-video.mp4" poster="/hero.png" />
        <div className="absolute inset-0 flex flex-col items-center justify-end gap-6 bg-gradient-to-t from-black/60 via-black/10 to-transparent pb-16 text-center text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">
            Bon Vivant Resort, Nashik
          </p>
          <h1 className="max-w-2xl px-6 font-serif text-4xl font-light leading-tight sm:text-6xl">
            The Art of Living Well
          </h1>
        </div>
      </div>
    </section>
  );
}
