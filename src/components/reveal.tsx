"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) return;

    element.dataset.revealReady = "true";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          element.dataset.revealVisible = "true";
          observer.unobserve(element);
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -36px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style = delay ? ({ transitionDelay: `${delay}ms` } satisfies CSSProperties) : undefined;

  return (
    <div ref={elementRef} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
