import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ProcessStepCard } from "@/components/ProcessStepCard";
import { DifferentiatorGrid } from "@/components/DifferentiatorGrid";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Button } from "@/components/Button";
import { processSteps, dashboardMetrics } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Stratégie, script, livrables : comment Cortiq produit des vidéos UGC IA livrées sous 72 h, avec un dashboard de suivi par angle.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Process</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            Rien ne se tourne avant que le script soit validé.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Trois étapes, un cycle mensuel, une boucle d'itération qui ne
            s'arrête jamais.
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
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
            <div>
              <Eyebrow>Dashboard</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-medium leading-tight tracking-tight text-fg md:text-[2.6rem]">
                Le suivi fait partie du livrable.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                Chaque pack inclut l'accès au dashboard : statut de chaque
                vidéo, et les KPI de votre choix une fois Meta ou TikTok
                connecté.
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

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pourquoi ce process</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Le produit, c'est le CPA — pas la vidéo
            </h2>
          </div>
          <div className="mt-14">
            <DifferentiatorGrid />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Prêt à tester un premier angle ?
            </h2>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Demander un devis</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
