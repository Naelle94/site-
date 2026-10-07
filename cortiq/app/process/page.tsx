import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ExampleVideo } from "@/components/ExampleVideo";
import { Timeline } from "@/components/Timeline";
import { Button } from "@/components/Button";
import { processSteps, pilotExplainer, packs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "5 jours ouvrés, une vidéo pilote validée au jour 3. Comment tester plusieurs angles publicitaires en vidéo avant de payer un tournage, étape par étape.",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment tester plusieurs angles publicitaires avant de payer un tournage",
  description:
    "Le parcours crash-test Cortiq, de l'appel découverte à la lecture des résultats.",
  step: processSteps.map((s) => ({
    "@type": "HowToStep",
    name: `${s.index} · ${s.title}`,
    text: s.summary,
  })),
};

export default function ProcessPage() {
  const lab = packs.find((p) => p.id === "lab")!;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* 1. Intro */}
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Comment ça marche</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            5 jours ouvrés, une vidéo pilote validée au jour 3.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Pour tester plusieurs angles publicitaires en vidéo avant de
            payer un tournage classique, on suit 9 étapes, de l'appel
            découverte à la lecture des résultats.
          </p>
        </Container>
      </section>

      {/* 2. Timeline */}
      <section className="py-20 md:py-24">
        <Container>
          <Timeline />
        </Container>
      </section>

      {/* 3. Zoom vidéo pilote */}
      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
            <div>
              <Eyebrow>Point de contrôle</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-medium leading-tight tracking-tight text-fg md:text-[2.6rem]">
                {pilotExplainer.title}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                {pilotExplainer.description}
              </p>
            </div>
            <ExampleVideo caption="Exemple de vidéo pilote, format réel" />
          </div>
        </Container>
      </section>

      {/* 4. Zoom mention IA et conformité */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Conformité</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              La mention IA est activée dès la livraison
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              Depuis le 2 août 2026, l'AI Act européen impose d'indiquer
              qu'une publicité vidéo est générée par IA. Chaque vidéo livrée
              par Cortiq l'affiche déjà, et une checklist de conformité vous
              accompagne pour l'appliquer sur vos comptes publicitaires.
            </p>
            <div className="mt-8">
              <Link
                href="/faq#droits-et-conformite"
                className="text-sm font-medium text-fg hover:text-orange-600"
              >
                Voir la page conformité dans la FAQ →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Résumé de la boucle mensuelle Lab */}
      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>La boucle Lab</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Chaque mois reprend sur l'angle qui a gagné
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              {lab.description} On ne repart jamais de zéro : les angles qui
              ont le mieux marché deviennent la base des scripts du mois
              suivant.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/offres#lab" variant="ghost">
                Voir le détail de Lab
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CTA */}
      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Je réserve mon appel découverte
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
              20 minutes pour regarder vos publicités actuelles ensemble.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Je réserve mon appel découverte</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
