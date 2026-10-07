import { caseStudies, caseStudyDisclaimer } from "@/lib/content";

export function CaseStudyCard() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      {caseStudies.map((cs) => (
        <div key={cs.name} className="border border-line bg-bg p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-medium tracking-tight text-fg">
              {cs.name}
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              {cs.sector}
            </span>
          </div>
          <span className="mt-2 inline-block rounded-full bg-orange-100 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-orange-700">
            {cs.channel}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-fg/80">
            {cs.challenge}
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {cs.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-lg font-medium tracking-tight text-fg md:text-xl">
                  {m.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted">{cs.note}</p>
        </div>
      ))}
      <p className="text-center text-xs leading-relaxed text-muted">
        {caseStudyDisclaimer}
      </p>
    </div>
  );
}
