import { clients } from "@/lib/content";

export function LogosMarquee() {
  const loop = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden border-y border-line bg-paper py-7">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />
      <div className="flex w-max animate-marquee gap-14">
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.12em] text-ink/35"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
