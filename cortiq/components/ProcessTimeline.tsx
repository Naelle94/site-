import { processSteps } from "@/lib/content";

export function ProcessTimeline() {
  return (
    <ol className="relative border-l border-line pl-8 md:pl-10">
      {processSteps.map((step, i) => (
        <li key={step.index} className={`relative pb-12 ${i === processSteps.length - 1 ? "pb-0" : ""}`}>
          <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-paper font-mono text-[11px] text-ink/50 md:-left-[49px] md:h-10 md:w-10">
            {step.index}
          </span>
          <h3 className="text-lg font-medium tracking-tight text-ink">
            {step.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
