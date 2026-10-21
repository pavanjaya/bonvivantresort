"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroVideo({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // Browsers only autoplay muted video, and React doesn't render the
    // `muted` attribute on the server (Safari then blocks autoplay).
    video.muted = true;
    video.defaultMuted = true;
    video.play().catch(() => {});
  }, []);

  function toggleSound() {
    const video = ref.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
    if (video.paused) video.play().catch(() => {});
  }

  return (
    <>
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
        className="absolute bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur transition-colors hover:bg-black/50"
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </>
  );
}
