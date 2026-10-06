import { processSteps } from "@/lib/content";

export function ProcessStepCard({
  step,
}: {
  step: (typeof processSteps)[number];
}) {
  return (
    <div className="border border-line bg-surface p-8 md:p-9">
      <span className="font-mono text-xs text-orange-400">{step.index}</span>
      <h3 className="mt-4 text-xl font-medium tracking-tight text-fg">
        {step.title}
      </h3>
      <p className="mt-2 text-sm text-muted">{step.summary}</p>
      <ul className="mt-6 space-y-3 border-t border-line pt-6">
        {step.details.map((d, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-fg/75">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
