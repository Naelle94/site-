import { principles } from "@/lib/content";

export function PrincipleGrid() {
  return (
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
      {principles.map((p) => (
        <div key={p.index} className="bg-white p-8 md:p-9">
          <span className="font-mono text-xs text-orange-500">{p.index}</span>
          <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">
            {p.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {p.description}
          </p>
        </div>
      ))}
    </div>
  );
}
