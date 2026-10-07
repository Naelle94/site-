import { comparisonCriteria } from "@/lib/content";

export function ComparisonCriteria() {
  return (
    <div className="overflow-hidden border border-line">
      <div className="hidden bg-void px-5 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-white md:grid md:grid-cols-[1.1fr_1.2fr_1.2fr]">
        <span>Critère</span>
        <span>Cortiq</span>
        <span>Agence UGC classique</span>
      </div>
      <div className="divide-y divide-line">
        {comparisonCriteria.map((row) => (
          <div
            key={row.criterion}
            className="grid gap-2 px-5 py-5 text-sm md:grid-cols-[1.1fr_1.2fr_1.2fr] md:items-start md:gap-4"
          >
            <span className="font-medium text-fg">{row.criterion}</span>
            <span
              className={
                row.edge === "cortiq"
                  ? "font-medium text-orange-600"
                  : "text-fg/70"
              }
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-orange-500 md:hidden">
                Cortiq ·{" "}
              </span>
              {row.cortiq}
            </span>
            <span
              className={
                row.edge === "classic" ? "font-medium text-fg" : "text-muted"
              }
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted md:hidden">
                Agence classique ·{" "}
              </span>
              {row.classic}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
