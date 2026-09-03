"use client";

export type TabKey = "bdev" | "forms";

export function Tabs({
  active,
  onChange,
  counts,
}: {
  active: TabKey;
  onChange: (tab: TabKey) => void;
  counts: { bdev: number; forms: number };
}) {
  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: "bdev", label: "Leads [BDev] (MQL)", count: counts.bdev },
    { key: "forms", label: "New Form Submissions", count: counts.forms },
  ];

  return (
    <div className="flex gap-2 border-b border-ink-600/50">
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`relative flex items-center gap-2 rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-ink-800 text-paper-50"
                : "text-paper-100/50 hover:text-paper-100/80"
            }`}
          >
            {tab.label}
            <span
              className={`rounded-full px-1.5 py-0.5 text-[11px] ${
                isActive ? "bg-gold-500/20 text-gold-400" : "bg-ink-600/50 text-paper-100/50"
              }`}
            >
              {tab.count}
            </span>
            {isActive && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-gold-500" />
            )}
          </button>
        );
      })}
    </div>
  );
}
