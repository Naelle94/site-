import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { LogosMarquee } from "@/components/LogosMarquee";
import { Button } from "@/components/Button";
import { audience } from "@/lib/content";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Cortiq est un partenaire growth fractional pour startups early-stage, pensé comme l'anti-agence.",
};

export default function AProposPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Qui sommes-nous</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-ink md:text-6xl">
            L'anti-agence, pensée pour les fondateurs.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted md:text-lg">
            Pas de couche compte-manager, pas de catalogue de 24 prestations :
            un stratège senior directement au contact du fondateur.
          </p>
        </Container>
      </section>

      <LogosMarquee />

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-[15px] leading-relaxed text-ink/80 md:text-[17px]">
            <p>
              Le noyau, c'est une pratique construite sur des leviers
              d'acquisition mesurables par nature — Meta et LinkedIn ads, cold
              outbound, email marketing, growth audits, analyse de
              performance multi-source — avec des références qui vont de
              startups en amorçage (Gratia, Badger, Keez, Fullphysio,
              Overloop AI, Skill Yoga) jusqu'à des marques grand groupe (YSL,
              L'Oréal).
            </p>
            <p>
              Autour de ce noyau, Cortiq fonctionne comme un{" "}
              <strong className="font-medium text-ink">studio à playbooks</strong>{" "}
              : chaque offre est documentée en process reproductible,
              exécutable par un réseau restreint de freelances vetted, sous
              supervision et contrôle qualité directs. C'est ce qui permet de
              scaler sans se transformer en agence lourde : le stratège garde
              la main sur la stratégie et la qualité, le playbook garantit
              que l'exécution reste constante d'un freelance à l'autre.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-20 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
            <div>
              <Eyebrow>À qui on le vend</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-medium leading-tight tracking-tight text-ink md:text-[2.6rem]">
                Pas pour tout le monde. Volontairement.
              </h2>
            </div>
            <ul className="space-y-6">
              {audience.map((line, i) => (
                <li key={i} className="flex gap-5 border-b border-line pb-6 last:border-none">
                  <span className="font-mono text-sm text-orange-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink/80">{line}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ink py-20 text-white md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight md:text-4xl">
              On préfère un levier bien exécuté à une stratégie diluée.
            </h2>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Parler à Cortiq</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
