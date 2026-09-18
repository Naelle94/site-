import { audit } from "@/lib/content";
import { Button } from "./Button";

export function AuditBanner() {
  return (
    <div
      id="audit"
      className="relative scroll-mt-24 overflow-hidden rounded-none border border-ink bg-ink px-8 py-12 text-white md:px-14 md:py-16"
    >
      <div className="absolute inset-0 noise" />
      <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-12">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">
            {audit.tagline}
          </span>
          <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">
            {audit.name}
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">
            {audit.description}
          </p>
        </div>
        <div className="md:shrink-0">
          <Button href="/contact" variant="primary" className="w-full md:w-auto">
            Réserver l'audit
          </Button>
        </div>
      </div>
    </div>
  );
}
