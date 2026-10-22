"use client";

import { useState, type PointerEvent, type ReactNode } from "react";

type SpotlightPanelProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightPanel({ children, className = "" }: SpotlightPanelProps) {
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setSpot({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
  }

  return (
    <div
      className={`group relative isolate h-full overflow-hidden rounded-[1.75rem] border border-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
      onPointerMove={handlePointerMove}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        style={{
          background: `radial-gradient(380px circle at ${spot.x}px ${spot.y}px, rgb(160 206 255 / 14%), transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
