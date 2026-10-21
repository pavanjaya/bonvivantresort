export default function Logo({
  className = "",
  height = 34,
}: {
  className?: string;
  height?: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="Bon Vivant"
      style={{ height }}
      className={`w-auto object-contain ${className}`}
    />
  );
}
