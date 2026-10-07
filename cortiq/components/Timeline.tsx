import { processSteps } from "@/lib/content";

export function Timeline() {
  return (
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-4 lg:grid-cols-8">
      {processSteps.map((step, i) => (
        <div key={i} className="flex flex-col gap-2 bg-bg p-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-orange-500">
            {step.index}
          </span>
          <h3 className="text-[13px] font-medium leading-snug text-fg">
            {step.title}
          </h3>
          <p className="text-xs leading-relaxed text-muted">{step.summary}</p>
        </div>
      ))}
    </div>
  );
}
