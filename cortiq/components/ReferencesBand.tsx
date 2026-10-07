import Link from "next/link";
import { references, founderNote } from "@/lib/content";

export function ReferencesBand() {
  return (
    <div>
      <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-muted">
        {founderNote}
      </p>
      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
        {references.map((ref) => (
          <div key={ref.name} className="flex flex-col gap-1.5 bg-bg p-5">
            <span className="text-[15px] font-semibold tracking-tight text-fg">
              {ref.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
              {ref.sector}
            </span>
            <span className="mt-1 text-xs text-orange-600">{ref.result}</span>
          </div>
        ))}
        <Link
          href="/contact"
          className="group flex flex-col justify-center gap-1.5 bg-surface p-5 transition-colors hover:bg-bg"
        >
          <span className="text-[15px] font-medium text-fg">
            Votre marque ici ?
          </span>
          <span className="text-xs text-muted group-hover:text-orange-600">
            Je réserve un appel découverte →
          </span>
        </Link>
      </div>
    </div>
  );
}
