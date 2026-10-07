const kpis = [
  { label: "Hook rate moyen", value: "41 %", bars: [40, 65, 55, 80, 70] },
  { label: "CTR moyen", value: "3,8 %", bars: [55, 60, 58, 72, 68] },
  { label: "Coût par client obtenu", value: "18,40 €", bars: [90, 75, 60, 50, 45] },
  { label: "Vidéos livrées ce mois", value: "7 / 10", bars: [20, 40, 60, 80, 100] },
];

const angles = [
  { name: "Angle « prix »", score: 86, status: "Winner" },
  { name: "Angle « avant / après »", score: 64, status: "" },
  { name: "Angle « preuve sociale »", score: 48, status: "" },
];

export function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-bg">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-fg/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg/10" />
        <span className="ml-3 font-mono text-[11px] text-muted">
          dashboard.cortiq.fr
        </span>
      </div>

      <div className="grid gap-px bg-line p-px sm:grid-cols-2">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="flex flex-col justify-between bg-bg p-5">
            <div className="flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  {kpi.label}
                </div>
                <div className="mt-2 text-2xl font-medium tracking-tight text-fg">
                  {kpi.value}
                </div>
              </div>
              <div className="flex items-end gap-1">
                {kpi.bars.map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h * 0.32}px` }}
                    className="w-1.5 rounded-sm bg-orange-500/50 last:bg-orange-500"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-line p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
          Hook rate par angle testé
        </div>
        <div className="mt-4 space-y-3">
          {angles.map((angle) => (
            <div key={angle.name}>
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="text-fg/80">
                  {angle.name}
                  {angle.status && (
                    <span className="ml-2 rounded-full bg-orange-100 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-orange-700">
                      {angle.status}
                    </span>
                  )}
                </span>
                <span className="font-mono text-muted">{angle.score}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-line">
                <div
                  style={{ width: `${angle.score}%` }}
                  className="h-full rounded-full bg-orange-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line px-5 py-3 text-right font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
        Aperçu illustratif
      </div>
    </div>
  );
}
