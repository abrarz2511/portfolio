"use client";

import {
  useRef,
  type MouseEvent,
  type ReactNode,
  type HTMLAttributes,
} from "react";

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function SpotlightCard({
  children,
  className = "",
  onMouseMove,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
    onMouseMove?.(event);
  }

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handlePointerMove}
      {...props}
    >
      {children}
    </div>
  );
}
