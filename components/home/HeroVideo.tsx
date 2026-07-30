"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

function subscribeToMotionPreference(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getVideoEnabledSnapshot() {
  const saveData = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection?.saveData;
  return (
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !saveData
  );
}

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const enabled = useSyncExternalStore(
    subscribeToMotionPreference,
    getVideoEnabledSnapshot,
    () => false,
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "120px", threshold: 0.01 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/hero-poster.webp"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/videos/hero.webm" type="video/webm" />
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}
