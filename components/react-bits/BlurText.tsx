"use client";

import { useEffect, useState } from "react";

type BlurTextProps = {
  text: string;
  className?: string;
};

export function BlurText({ text, className = "" }: BlurTextProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!reducedMotion) {
      const frame = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(frame);
    }
  }, []);

  return (
    <span
      className={`blur-text ${animate ? "blur-text--animate" : ""} ${className}`}
      aria-label={text}
    >
      {text.split(" ").map((word, index) => (
        <span
          aria-hidden="true"
          className="blur-text__word"
          style={{ "--word-index": index } as React.CSSProperties}
          key={`${word}-${index}`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
