import Link from "next/link";
import { offers } from "@/lib/content";

export function OfferCard({ offer }: { offer: (typeof offers)[number] }) {
  return (
    <div
      id={offer.slug}
      className="group relative flex scroll-mt-24 flex-col justify-between overflow-hidden border border-line bg-white p-8 transition-colors hover:border-orange-500/60 md:p-10"
    >
      <div>
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs text-ink/30">{offer.index}</span>
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            {offer.tag}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-medium tracking-tight text-ink md:text-[28px]">
          {offer.name}
        </h3>

        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          {offer.promise}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {offer.metrics.map((m) => (
            <span
              key={m}
              className="rounded-full bg-orange-50 px-3 py-1 font-mono text-[11px] text-orange-700"
            >
              {m}
            </span>
          ))}
        </div>

        <div className="mt-7 border-t border-line pt-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">
            {offer.playbookTitle}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {offer.playbook}
          </p>
        </div>
      </div>

      <Link
        href="/contact"
        className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-orange-600"
      >
        Discuter de cette offre
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>

      <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/0 transition-colors duration-300 group-hover:bg-orange-500/5" />
    </div>
  );
}
