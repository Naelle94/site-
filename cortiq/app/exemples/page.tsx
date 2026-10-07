import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ExampleVideo } from "@/components/ExampleVideo";
import { Button } from "@/components/Button";
import { experiencesNote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Exemples",
  description:
    "Les fiches d'expérience (EXP-0xx) de Cortiq : angle testé, hook rate, winner ou perdant. Publiées dès les premiers crash-tests clients, perdants assumés compris.",
};

export default function ExemplesPage() {
  return (
    <>
      {/* 1. Intro */}
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Exemples</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            Une fiche par expérience, perdants compris.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Chaque crash-test devient une fiche d'expérience (EXP-0xx) :
            l'angle testé, le hook rate obtenu, et s'il a gagné ou perdu.
          </p>
        </Container>
      </section>

      {/* 2 & 3. Fiches d'expérience, perdants assumés */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
            <div className="mx-auto w-full max-w-[200px] md:mx-0">
              <ExampleVideo caption="Exemple de format, pas une fiche d'expérience réelle" />
            </div>
            <div className="mx-auto max-w-xl border border-line bg-surface p-8 text-center md:mx-0 md:text-left">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-500">
                {experiencesNote.title}
              </span>
              <p className="mt-4 text-[15px] leading-relaxed text-fg/80">
                {experiencesNote.description}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                On préfère une page vide à un chiffre gonflé : si un résultat
                n'est pas vérifié, on ne l'affiche pas, winner ou perdant.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CTA */}
      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Je teste un angle sur ma marque
            </h2>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Je lance mon crash-test</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
