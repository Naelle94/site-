import { trustPoints } from "@/lib/content";

export function TrustGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {trustPoints.map((t) => (
        <div key={t.title} className="flex gap-4 border border-line bg-surface p-6">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-500/30 text-orange-400">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8.5 6.5 12 13 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h3 className="text-[15px] font-medium text-fg">{t.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {t.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
