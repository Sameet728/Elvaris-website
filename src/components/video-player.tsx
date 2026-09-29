"use client";

import { useRef, useEffect } from "react";

interface VideoPlayerProps {
  poster: string;
  label: string;
  aspect: string;
  sources: { src: string; type: string; media?: string }[];
}

export function VideoPlayer({ poster, label, aspect, sources }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
          observer.unobserve(vid);
        }
      },
      { threshold: 0.2 }
    );

    vid.addEventListener("loadeddata", () => {
      vid.dataset.loaded = "true";
    });

    observer.observe(vid);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative" style={{ aspectRatio: aspect }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        aria-hidden
        decoding="async"
        className="absolute inset-0 block h-full w-full object-cover"
      />
      <video
        ref={videoRef}
        className="relative block h-full w-full transition-opacity duration-500 opacity-0"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      >
        {sources.map((s) => (
          <source key={s.src} src={s.src} type={s.type} media={s.media} />
        ))}
      </video>
    </div>
  );
}
