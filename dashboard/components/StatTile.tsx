export function StatTile({
  label,
  value,
  accent = "brand",
  hint,
}: {
  label: string;
  value: string | number;
  accent?: "brand" | "success" | "danger" | "info";
  hint?: string;
}) {
  const accentClass = {
    brand: "text-brand-400",
    success: "text-signal-success",
    danger: "text-signal-danger",
    info: "text-signal-info",
  }[accent];

  return (
    <div className="rounded-xl border border-surface-600/60 bg-surface-800/70 px-4 py-3 shadow-card sm:px-5 sm:py-4">
      <p className="text-[11px] font-medium uppercase tracking-wider text-paper-100/50">{label}</p>
      <p className={`mt-1 text-2xl font-bold sm:text-3xl ${accentClass}`}>{value}</p>
      {hint && <p className="mt-0.5 text-xs text-paper-100/40">{hint}</p>}
    </div>
  );
}
