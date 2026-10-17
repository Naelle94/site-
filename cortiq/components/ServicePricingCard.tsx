import type { services } from "@/lib/content";

type Service = (typeof services)[number];
type Pack = Service["packs"][number];

export function ServicePricingCard({ pack }: { pack: Pack }) {
  const highlight = "highlight" in pack && pack.highlight;

  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 shadow-card transition-colors md:p-8 ${
        highlight
          ? "border-orange-500/70 bg-gradient-to-b from-orange-500/[0.06] to-transparent"
          : "border-line bg-bg"
      }`}
    >
      {highlight && (
        <span className="absolute right-6 top-6 rounded-full bg-orange-500 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white">
          Recommandé
        </span>
      )}

      <div>
        <h3 className="text-xl font-medium tracking-tight text-fg md:text-2xl">
          {pack.name}
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
          {pack.audience}
        </p>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-3xl font-medium tracking-tight text-fg">
            {pack.price.toLocaleString("fr-FR")} €
          </span>
          <span className="text-sm text-muted">{pack.priceUnit}</span>
        </div>
        {"budget" in pack && pack.budget && (
          <p className="mt-2 text-xs text-muted">{pack.budget}</p>
        )}

        <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
          {pack.includes.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-fg/80">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
