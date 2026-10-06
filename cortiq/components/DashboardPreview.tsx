const kpis = [
  { label: "Qui clique", value: "3,8 sur 100", bars: [40, 65, 55, 80, 70] },
  { label: "Qui reste après 3 s", value: "62 sur 100", bars: [55, 60, 58, 72, 68] },
  { label: "Prix par client obtenu", value: "18,40 €", bars: [90, 75, 60, 50, 45] },
  { label: "Vidéos livrées ce mois", value: "12 / 20", bars: [20, 40, 60, 80, 100] },
];

const angles = [
  { name: "Idée « avant / après »", score: 86 },
  { name: "Idée « le prix fait peur »", score: 64 },
  { name: "Idée « d'autres l'ont déjà testé »", score: 48 },
];

export function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        <span className="ml-3 font-mono text-[11px] text-muted">
          dashboard.cortiq.fr
        </span>
      </div>

      <div className="grid gap-px bg-line p-px sm:grid-cols-2">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="flex flex-col justify-between bg-surface p-5">
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
                    className="w-1.5 rounded-sm bg-orange-500/70 last:bg-orange-500"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-line p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
          Prix par client, pour chaque idée testée
        </div>
        <div className="mt-4 space-y-3">
          {angles.map((angle) => (
            <div key={angle.name}>
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="text-fg/80">{angle.name}</span>
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
