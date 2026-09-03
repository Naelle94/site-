"use client";

export type TabKey = "bdev" | "forms" | "clay";

export function Tabs({
  active,
  onChange,
  counts,
}: {
  active: TabKey;
  onChange: (tab: TabKey) => void;
  counts: { bdev: number; forms: number };
}) {
  const tabs: { key: TabKey; label: string; count?: number; badge?: string }[] = [
    { key: "bdev", label: "Leads [BDev] (MQL)", count: counts.bdev },
    { key: "forms", label: "New Form Submissions", count: counts.forms },
    { key: "clay", label: "Ops Campaign (Clay)", badge: "Soon" },
  ];

  return (
    <div className="flex flex-wrap gap-2 border-b border-surface-600/50">
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`relative flex items-center gap-2 rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-surface-800 text-paper-50"
                : "text-paper-100/50 hover:text-paper-100/80"
            }`}
          >
            {tab.label}
            {typeof tab.count === "number" && (
              <span
                className={`rounded-full px-1.5 py-0.5 text-[11px] ${
                  isActive ? "bg-brand-500/20 text-brand-400" : "bg-surface-600/50 text-paper-100/50"
                }`}
              >
                {tab.count}
              </span>
            )}
            {tab.badge && (
              <span className="rounded-full bg-signal-info/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-signal-info">
                {tab.badge}
              </span>
            )}
            {isActive && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand-500" />
            )}
          </button>
        );
      })}
    </div>
  );
}
