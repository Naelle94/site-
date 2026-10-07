import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ExampleVideo } from "@/components/ExampleVideo";
import { Button } from "@/components/Button";
import { blindTest } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blind Test",
  description:
    "Quelle est la différence entre une vidéo UGC tournée par un humain et une vidéo UGC générée par IA ? Le Blind Test Cortiq compare les deux sur leur hook rate et leur CTR.",
};

export default function BlindTestPage() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Blind Test</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            {blindTest.title}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            {blindTest.description}
          </p>
        </Container>
      </section>

      {/* Format */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto w-full max-w-[220px]">
            <ExampleVideo caption="Exemple de format, pas le Blind Test réel" />
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-muted">
            Le vrai Blind Test mettra côte à côte une vidéo générée par IA et
            une vidéo tournée par un humain, sans dire laquelle est laquelle
            avant d'avoir vu les chiffres : hook rate et CTR, mesurés sur le
            même budget et la même audience.
          </p>
        </Container>
      </section>

      {/* Pourquoi ce format */}
      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pourquoi ce format</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Nous ne prétendons rien tant que les chiffres ne le disent pas
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              Nous n'écrivons jamais qu'une vidéo IA est aussi performante
              qu'une vidéo humaine sans preuve. Le Blind Test est la façon la
              plus honnête de le vérifier : à l'aveugle, sur vos propres
              critères.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Je teste mes angles
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Les premiers résultats du Blind Test seront publiés ici dès
              qu'ils existent.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Je lance mon test créatif</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
