import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { ProcessStepCard } from "@/components/ProcessStepCard";
import { ExampleVideo } from "@/components/ExampleVideo";
import { PricingCard } from "@/components/PricingCard";
import { CheckList } from "@/components/CheckList";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ComparisonTable } from "@/components/ComparisonTable";
import { BlindTestTeaser } from "@/components/BlindTestTeaser";
import {
  packs,
  conceptSteps,
  recognitionPoints,
  guarantee,
  faqShort,
  tagline,
  experiencesNote,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <Container className="relative pb-16 pt-20 md:pb-20 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Crash-test créatif</Eyebrow>
            </div>
            <h1 className="mt-6 text-balance text-[2.4rem] font-medium leading-[1.1] tracking-tightest text-fg sm:text-5xl md:text-6xl">
              Le crash-test créatif de vos pubs.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-balance text-[17px] leading-relaxed text-muted md:text-lg">
              5 angles testés en vidéo IA en 5 jours. Vous ne dépensez gros
              que sur ce qui a déjà gagné.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/offres">Je lance mon crash-test</Button>
              <Button href="/process" variant="secondary">
                Voir comment ça marche
              </Button>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              {tagline}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-5 gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`aspect-[9/16] overflow-hidden rounded-lg border bg-surface ${
                  i === 2 ? "border-orange-500" : "border-line"
                }`}
              >
                {i === 2 ? (
                  <video
                    src="/exemple-ugc.mp4"
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <div className="flex h-full items-center justify-center font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                    Angle {i + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Bande de réassurance */}
      <section className="border-y border-line bg-void py-5">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white/90">
            <span>890 € HT</span>
            <span>5 jours ouvrés</span>
            <span>Produit par IA · Pensé par une humaine</span>
            <span>Garantie hook rate</span>
          </div>
        </Container>
      </section>

      {/* 3. Le problème nommé */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-3xl">
              Agence : 500 € la vidéo, 3 à 4 semaines. SaaS IA : vous faites
              tout seul. Cortiq : le test, pas le pari.
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <CheckList items={recognitionPoints} />
          </div>
        </Container>
      </section>

      {/* 4. Le concept en 3 étapes */}
      <section className="border-t border-line bg-surface py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Le concept</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Brief, test, winner tourné
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {conceptSteps.map((step) => (
              <ProcessStepCard key={step.index} step={step} />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Blind Test */}
      <section className="border-t border-line py-24 md:py-28">
        <Container>
          <BlindTestTeaser />
        </Container>
      </section>

      {/* 6. Les 3 offres */}
      <section className="border-t border-line bg-surface py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Les 3 formules</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Pas de pack 50, pas de sur-mesure opaque
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {packs.map((pack) => (
              <PricingCard key={pack.id} pack={pack} />
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Comparatif express */}
      <section className="border-t border-line py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Comparatif</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Combien coûte une vidéo UGC en France en 2026
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <ComparisonTable />
          </div>
          <div className="mt-8 flex justify-center">
            <Button href="/offres" variant="ghost">
              Voir le détail des formules
            </Button>
          </div>
        </Container>
      </section>

      {/* 8. Preuves bêta */}
      <section className="border-t border-line bg-surface py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl border border-line bg-bg p-8 text-center md:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-500">
              {experiencesNote.title}
            </span>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg/80">
              {experiencesNote.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Guarantee */}
      <section className="border-t border-line py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl border border-orange-500/30 bg-orange-500/[0.05] p-8 text-center md:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-600">
              Notre promesse
            </span>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-fg md:text-3xl">
              {guarantee.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg/85">
              {guarantee.description}
            </p>
          </div>
        </Container>
      </section>

      {/* 9. FAQ courte */}
      <section className="border-t border-line bg-surface py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Les questions qu'on nous pose le plus
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-xl">
            <FaqAccordion items={faqShort} />
          </div>
          <div className="mt-8 flex justify-center">
            <Button href="/faq" variant="ghost">
              Voir toutes les questions
            </Button>
          </div>
        </Container>
      </section>

      {/* 10. CTA final */}
      <section className="border-t border-line py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl">
              Je lance mon crash-test
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
              890 € HT, 5 jours. Dites-nous ce que vous vendez et à qui.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact">Je lance mon crash-test</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
