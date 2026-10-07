import { processSteps } from "@/lib/content";

export function Timeline() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {processSteps.map((step, i) => (
        <div
          key={i}
          className="grid gap-2 py-7 md:grid-cols-[120px_1fr] md:gap-8"
        >
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-orange-500">
            {step.index}
          </span>
          <div>
            <h3 className="text-lg font-medium tracking-tight text-fg">
              {step.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-fg/80">
              {step.summary}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {step.why}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
