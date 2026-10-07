import { pipelineSteps } from "@/lib/content";

export function PipelineDiagram() {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-2">
      {pipelineSteps.map((step, i) => (
        <div key={step} className="flex items-stretch gap-2">
          <div className="flex w-[150px] flex-col justify-center border border-line bg-bg p-4 text-center">
            <span className="font-mono text-[10px] text-orange-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-1.5 text-xs font-medium leading-snug text-fg">
              {step}
            </span>
          </div>
          {i < pipelineSteps.length - 1 && (
            <span
              aria-hidden
              className="flex items-center text-orange-400"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
