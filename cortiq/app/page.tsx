import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { ProcessStepCard } from "@/components/ProcessStepCard";
import { DashboardPreview } from "@/components/DashboardPreview";
import { VideoSlot } from "@/components/VideoSlot";
import { PricingCard } from "@/components/PricingCard";
import { DifferentiatorGrid } from "@/components/DifferentiatorGrid";
import { TrustGrid } from "@/components/TrustGrid";
import {
  processSteps,
  dashboardMetrics,
  packs,
  comparisons,
  guarantee,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <Container className="relative pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Vidéos UGC pilotées par IA</Eyebrow>
            </div>
            <h1 className="mt-6 text-balance text-[2.5rem] font-medium leading-[1.05] tracking-tightest text-fg sm:text-6xl md:text-7xl">
              Un CPA qui baisse.
              <br />
              Pas des <span className="text-orange-500">vidéos</span> qui s'accumulent.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-balance text-[17px] leading-relaxed text-muted md:text-lg">
              Des créas UGC produites par IA, scriptées par des humains,
              pilotées par la data. Stratégie, script et production, livrés
              sous 72 h.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Demander un devis</Button>
              <Button href="/offres" variant="secondary">
                Voir les 3 packs
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section className="border-y border-line bg-surface/40">
        <Container className="grid divide-y divide-line py-0 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {comparisons.map((c) => (
            <div
              key={c.label}
              className={`px-6 py-8 text-center sm:px-8 ${
                c.highlight ? "bg-orange-500/[0.06]" : ""
              }`}
            >
              <div
                className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                  c.highlight ? "text-orange-400" : "text-muted"
                }`}
              >
                {c.label}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-fg/75">
                {c.detail}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Stratégie, script, livrables
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Trois étapes, un seul interlocuteur, aucune vidéo tournée avant
              que le script soit validé.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <ProcessStepCard key={step.index} step={step} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/process" variant="ghost">
              Voir le process en détail
            </Button>
          </div>
        </Container>
      </section>

      {/* Dashboard */}
      <section className="border-t border-line bg-surface/40 py-24 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
            <div>
              <Eyebrow>Dashboard client</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-medium leading-tight tracking-tight text-fg md:text-[2.6rem]">
                Vous voyez ce qui marche, sans nous demander.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                Connectez Meta ou TikTok et suivez les KPI de votre choix,
                angle par angle, vidéo par vidéo.
              </p>
              <ul className="mt-8 space-y-4">
                {dashboardMetrics.map((m) => (
                  <li key={m.label} className="flex gap-4">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <div>
                      <div className="text-sm font-medium text-fg">{m.label}</div>
                      <div className="text-sm text-muted">{m.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <DashboardPreview />
          </div>
        </Container>
      </section>

      {/* Video slots */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Vos vidéos</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Ces emplacements vous attendent.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Dès validation des scripts, chaque emplacement se remplit sous
              72 h — prêt à poster, formats 9:16 et 4:5.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            <VideoSlot label="Angle 01 — Hook A" />
            <VideoSlot label="Angle 01 — Hook B" />
            <VideoSlot label="Angle 02 — Hook A" />
            <VideoSlot label="Angle 02 — Hook B" />
            <VideoSlot label="Angle 03 — Hook A" />
            <VideoSlot label="Angle 03 — Hook B" />
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="border-t border-line bg-surface/40 py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>3 packs, sans engagement long</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Dès 790 € HT / mois
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {packs.map((pack) => (
              <PricingCard key={pack.id} pack={pack} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/offres" variant="ghost">
              Voir le détail des packs
            </Button>
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Différenciation</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Le produit, c'est le CPA — pas la vidéo
            </h2>
          </div>
          <div className="mt-14">
            <DifferentiatorGrid />
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="border-t border-line bg-surface/40 py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Transparence</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              On vous dit tout, y compris comment c'est fait.
            </h2>
          </div>
          <div className="mx-auto mt-14 max-w-3xl">
            <TrustGrid />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-line py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl">
              Testez un angle. Mesurez. Décidez.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
              {guarantee.description}
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact">Demander un devis</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
