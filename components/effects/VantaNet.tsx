"use client";

import { useEffect, useRef } from "react";

export function VantaNet() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (
      !container ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 639px)").matches
    ) {
      return;
    }

    let cancelled = false;
    let visibleInZone = false;
    let generation = 0;
    let loading = false;
    let effect: { destroy: () => void } | undefined;
    let modules:
      | [
          typeof import("three"),
          typeof import("vanta/dist/vanta.net.min"),
        ]
      | undefined;

    const destroyEffect = () => {
      generation += 1;
      effect?.destroy();
      effect = undefined;
    };

    const createEffect = async () => {
      if (
        cancelled ||
        effect ||
        loading ||
        document.hidden ||
        !visibleInZone
      ) {
        return;
      }

      const currentGeneration = generation;
      loading = true;
      try {
        modules ??= await Promise.all([
          import("three"),
          import("vanta/dist/vanta.net.min"),
        ]);
        if (
          cancelled ||
          currentGeneration !== generation ||
          document.hidden ||
          !visibleInZone
        ) {
          return;
        }

        const [threeModule, vantaModule] = modules;
        const threeCompat = {
          ...threeModule,
          VertexColors: true,
        } as unknown as typeof threeModule;
        effect = vantaModule.default({
          el: container,
          THREE: threeCompat,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          color: 0xf4d30b,
          backgroundColor: 0x171717,
          points: 6,
          maxDistance: 16,
          spacing: 18,
          showDots: true,
          scale: 1,
          scaleMobile: 0.8,
        });
      } catch {
        // The CSS background remains as the progressive fallback.
      } finally {
        loading = false;
      }
    };

    const syncEffect = () => {
      if (document.hidden || !visibleInZone) {
        destroyEffect();
      } else {
        void createEffect();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleInZone = entry.isIntersecting;
        syncEffect();
      },
      { rootMargin: "240px" },
    );
    const handleVisibilityChange = () => syncEffect();

    observer.observe(container);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      cancelled = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      destroyEffect();
    };
  }, []);

  return <div ref={containerRef} className="vanta-layer" aria-hidden="true" />;
}
