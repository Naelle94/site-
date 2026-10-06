import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ProcessStepCard } from "@/components/ProcessStepCard";
import { ExampleVideo } from "@/components/ExampleVideo";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Button } from "@/components/Button";
import { processSteps, dashboardMetrics } from "@/lib/content";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "Ce qui se passe entre votre « oui » et votre première vidéo : trois étapes, expliquées simplement, sans jargon.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Comment ça marche</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            Ce qui se passe entre votre « oui » et votre première vidéo.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Trois étapes. Rien n'est filmé avant que vous ayez dit oui au
            texte.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <ProcessStepCard key={step.index} step={step} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface/40 py-20 md:py-24">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Eyebrow>Un exemple, pour que ce soit concret</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Ce n'est pas une vidéo d'un de nos clients
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
              C'est un exemple du format : quelqu'un qui parle caméra, un
              sous-titre qui accroche dès la première seconde.
            </p>
          </div>
          <div className="mt-12">
            <ExampleVideo />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
            <div>
              <Eyebrow>Le suivi, expliqué simplement</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-medium leading-tight tracking-tight text-fg md:text-[2.6rem]">
                Comment vous savez si ça marche
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                Si vous connectez votre compte de publicité (Meta ou TikTok),
                vous voyez en direct :
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

      <section className="border-t border-line bg-surface/40 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              On ne repart jamais de zéro
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              Les vidéos qui ont le mieux marché ce mois-ci deviennent la
              base des textes du mois prochain. Chaque mois, on devrait
              savoir un peu mieux ce qui fonctionne pour vous.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Prêt à essayer ?
            </h2>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Demander un devis gratuit</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
