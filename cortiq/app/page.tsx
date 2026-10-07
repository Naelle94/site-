import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { PricingCard } from "@/components/PricingCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ComparisonCriteria } from "@/components/ComparisonCriteria";
import { ReferencesBand } from "@/components/ReferencesBand";
import { FitSection } from "@/components/FitSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import {
  packs,
  faqShort,
  tagline,
  heroReassurances,
  icps,
  references,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero + réassurances */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <Container className="relative pb-16 pt-20 md:pb-20 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Test créatif</Eyebrow>
            </div>
            <h1 className="mt-6 text-balance text-[2.4rem] font-medium leading-[1.1] tracking-tightest text-fg sm:text-5xl md:text-6xl">
              Potentiellement le même résultat qu'une pub classique, pour moins cher.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-balance text-[17px] leading-relaxed text-muted md:text-lg">
              5 angles testés en vidéo IA en 5 jours. Ça vaut le coup
              d'essayer avant de miser gros sur un seul tournage.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/offres">Je lance mon test créatif</Button>
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

      <section className="border-y border-line bg-void py-5">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white/90">
            {heroReassurances.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Accroche */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>2026-2027</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              L'accompagnement vidéo le plus efficace de 2026-2027
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              Nous ne disons pas que toutes nos vidéos performent : nous
              disons que ce format coûte nettement moins cher qu'un tournage
              classique pour tester une idée. Et ça, ça vaut le coup
              d'essayer.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Bandeau de logos clients */}
      <section className="border-y border-line bg-surface py-8">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-16">
            {[...references, ...references].map((ref, i) => (
              <span
                key={`${ref.name}-${i}`}
                className="whitespace-nowrap text-lg font-semibold tracking-tight text-fg/70"
              >
                {ref.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Social proof et case studies */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Preuves</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Des résultats vérifiables, pas des promesses
            </h2>
          </div>
          <div className="mt-14">
            <ReferencesBand />
          </div>
          <div className="mt-16">
            <CaseStudyCard />
          </div>
        </Container>
      </section>

      {/* 4.5 Pourquoi nous choisir */}
      <section className="border-t border-line bg-surface py-24 md:py-28">
        <Container>
          <WhyChooseUsSection />
        </Container>
      </section>

      {/* 5. Fait pour vous */}
      <section className="py-24 md:py-28">
        <Container>
          <FitSection />
        </Container>
      </section>

      {/* 6. Comment ça marche, condensé */}
      <section className="border-t border-line bg-surface py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Comment ça marche</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              De votre brief à vos résultats, en 8 étapes
            </h2>
          </div>
          <div className="mt-12 overflow-x-auto pb-2">
            <PipelineDiagram />
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/process" variant="ghost">
              Voir le détail des 8 étapes
            </Button>
          </div>
        </Container>
      </section>

      {/* 7. Nos offres */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Nos offres</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Comment on vous accompagne
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {packs.map((pack) => (
              <PricingCard key={pack.id} pack={pack} />
            ))}
          </div>
        </Container>
      </section>

      {/* Comparatif */}
      <section className="border-t border-line bg-surface py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Comparatif</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Cortiq face à une agence UGC classique
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <ComparisonCriteria />
          </div>
          <div className="mt-8 flex justify-center">
            <Button href="/offres" variant="ghost">
              Voir le détail des formules
            </Button>
          </div>
        </Container>
      </section>

      {/* Secteurs */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Par secteur</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Pensé pour votre secteur
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 md:mx-auto md:max-w-2xl">
            {icps.map((icp) => (
              <Link
                key={icp.id}
                href={`/${icp.id}`}
                className="group border border-line bg-bg p-8 transition-colors hover:border-fg/25"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-orange-500">
                  {icp.label}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-fg/80">
                  {icp.painPoint}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fg group-hover:text-orange-600">
                  Voir l'offre
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. FAQ et réassurances */}
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
          <div className="mx-auto mt-14 max-w-xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              Sans engagement · Modifications illimitées · Pub et organique
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Je lance mon test créatif</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
