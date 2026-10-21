const TONES = {
  terracotta: "linear-gradient(135deg, #b3654b 0%, #8a4a37 60%, #5f3226 100%)",
  sand: "linear-gradient(135deg, #d8c6a3 0%, #c1a97c 55%, #a68c5c 100%)",
  olive: "linear-gradient(135deg, #6b7458 0%, #4a5238 60%, #333a26 100%)",
  charcoal: "linear-gradient(135deg, #4a4842 0%, #2c2a26 60%, #17160f 100%)",
  gold: "linear-gradient(135deg, #cbab6d 0%, #a4813f 55%, #74592a 100%)",
  ocean: "linear-gradient(135deg, #5b7a80 0%, #3c545a 60%, #23343a 100%)",
} as const;

export type PlaceholderTone = keyof typeof TONES;

export default function PlaceholderImage({
  tone = "sand",
  className = "",
  label,
}: {
  tone?: PlaceholderTone;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: TONES[tone] }}
    >
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {label ? (
        <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.15em] text-white/50">
          {label}
        </span>
      ) : null}
    </div>
  );
}
