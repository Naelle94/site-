"use client";

import { useEffect, useRef } from "react";
import { personas } from "@/lib/content";

export function PersonaCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame: number;
    const speed = 0.4;

    function step() {
      if (track && !pausedRef.current) {
        track.scrollLeft += speed;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  function pause() {
    pausedRef.current = true;
  }

  function resume() {
    window.setTimeout(() => {
      pausedRef.current = false;
    }, 2500);
  }

  return (
    <div
      ref={trackRef}
      onPointerDown={pause}
      onPointerUp={resume}
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="flex gap-4 overflow-x-auto px-6 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {[...personas, ...personas].map((p, i) => (
        <figure
          key={`${p.id}-${i}`}
          className="w-[150px] shrink-0 snap-center md:w-[180px]"
        >
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt=""
              aria-hidden
              className="aspect-[9/16] w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 text-center text-xs leading-snug text-muted">
            {p.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
