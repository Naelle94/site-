import { differentiators } from "@/lib/content";

export function DifferentiatorGrid() {
  return (
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {differentiators.map((d) => (
        <div key={d.index} className="bg-surface p-7">
          <span className="font-mono text-xs text-orange-400">{d.index}</span>
          <h3 className="mt-4 text-base font-medium tracking-tight text-fg">
            {d.title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">
            {d.description}
          </p>
        </div>
      ))}
    </div>
  );
}
