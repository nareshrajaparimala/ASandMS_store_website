"use client";

import { useEffect, useRef, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;         // ms
  duration?: number;      // ms
  direction?: Direction;
  distance?: number;      // px
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 600,
  direction = "up",
  distance = 30,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const dx = direction === "left" ? distance : direction === "right" ? -distance : 0;
    const dy = direction === "up" ? distance : direction === "down" ? -distance : 0;

    // Initial hidden state
    el.style.opacity = "0";
    el.style.transform = `translate(${dx}px, ${dy}px)`;
    el.style.transition = `opacity ${duration}ms cubic-bezier(.16,1,.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(.16,1,.3,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0, 0)";
          if (once) observer.disconnect();
        } else if (!once) {
          el.style.opacity = "0";
          el.style.transform = `translate(${dx}px, ${dy}px)`;
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, direction, distance, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Stagger wrapper: applies incremental delays to direct children */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  baseDelay?: number;
  step?: number;
  direction?: Direction;
}

export function StaggerReveal({
  children,
  className = "",
  baseDelay = 0,
  step = 100,
  direction = "up",
}: StaggerProps) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={className}>
      {items.map((child, i) => (
        <ScrollReveal key={i} delay={baseDelay + i * step} direction={direction}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
