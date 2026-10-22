"use client";

import type { PointerEvent, ReactNode } from "react";

type SpotlightPanelProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightPanel({ children, className = "" }: SpotlightPanelProps) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <div className={`spotlight-panel ${className}`} onPointerMove={handlePointerMove}>
      {children}
    </div>
  );
}
