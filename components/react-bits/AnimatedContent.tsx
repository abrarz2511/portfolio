"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimatedContentProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedContent({
  children,
  className = "",
  delay = 0,
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    element.dataset.enhanced = "true";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`animated-content ${entered ? "is-entered" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
