export function ProcessStepCard({
  step,
}: {
  step: { index: string; title: string; summary: string };
}) {
  return (
    <div className="border border-line bg-bg p-8 md:p-9">
      <span className="font-mono text-xs text-orange-500">{step.index}</span>
      <h3 className="mt-4 text-xl font-medium tracking-tight text-fg">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{step.summary}</p>
    </div>
  );
}
