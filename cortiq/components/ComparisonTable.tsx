import { comparisonTable } from "@/lib/content";

export function ComparisonTable() {
  return (
    <div className="overflow-hidden border border-line">
      <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] bg-void px-5 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-white">
        <span>Agence</span>
        <span>Prix / vidéo</span>
        <span>Délai</span>
        <span>Prix public</span>
      </div>
      <div className="divide-y divide-line">
        {comparisonTable.map((row) => (
          <div
            key={row.name}
            className={`grid grid-cols-[1.3fr_1fr_1fr_1fr] items-center px-5 py-4 text-sm ${
              row.isUs ? "border-l-2 border-orange-500 bg-orange-500/[0.04]" : ""
            }`}
          >
            <span className={row.isUs ? "font-medium text-fg" : "text-fg/80"}>
              {row.name}
            </span>
            <span className="font-mono text-fg/80">{row.pricePerVideo}</span>
            <span className="text-fg/80">{row.delay}</span>
            <span className={row.pricesPublic ? "text-orange-600" : "text-muted"}>
              {row.pricesPublic ? "Oui" : "Non"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
