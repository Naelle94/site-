import Link from "next/link";
import { packs } from "@/lib/content";

export function PricingCard({ pack }: { pack: (typeof packs)[number] }) {
  return (
    <div
      id={pack.id}
      className={`group relative flex scroll-mt-24 flex-col justify-between overflow-hidden border p-8 transition-colors md:p-9 ${
        pack.highlight
          ? "border-orange-500/60 bg-gradient-to-b from-orange-500/[0.08] to-transparent"
          : "border-line bg-surface hover:border-fg/20"
      }`}
    >
      {pack.highlight && (
        <span className="absolute right-6 top-6 rounded-full bg-orange-500 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white">
          {pack.tagline}
        </span>
      )}

      <div>
        {!pack.highlight && (
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
            {pack.tagline}
          </span>
        )}
        <h3 className="mt-3 text-2xl font-medium tracking-tight text-fg md:text-[28px]">
          {pack.name}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          {pack.description}
        </p>

        <div className="mt-8 flex items-baseline gap-2">
          <span className="text-4xl font-medium tracking-tight text-fg">
            {pack.price.toLocaleString("fr-FR")} €
          </span>
          <span className="text-sm text-muted">HT / mois</span>
        </div>
        <div className="mt-2 font-mono text-xs text-muted">
          {pack.videos} vidéos · soit {pack.pricePerVideo} € / vidéo
        </div>
      </div>

      <Link
        href="/contact"
        className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
          pack.highlight
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "border border-fg/15 text-fg hover:border-fg/40"
        }`}
      >
        Choisir {pack.name}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
