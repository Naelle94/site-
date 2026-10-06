import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { TrustGrid } from "@/components/TrustGrid";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Cortiq produit des vidéos UGC par IA, scriptées par des humains et pilotées par la data — en assumant l'IA plutôt qu'en la cachant.",
};

export default function AProposPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Qui sommes-nous</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            Des créas UGC produites par IA, scriptées par des humains.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted md:text-lg">
            Pilotées par la data, livrées sous 72 h — sans jamais prétendre
            que l'IA n'existe pas.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-[15px] leading-relaxed text-fg/80 md:text-[17px]">
            <p>
              Entre les outils en libre-service que vous devez piloter seul et
              les agences UGC classiques, trop chères et trop lentes pour
              tester vite, il manquait un acteur clé en main : stratégie,
              script et production pilotés, à un prix qui permet de tester
              plusieurs angles en parallèle plutôt qu'un seul à la fois.
            </p>
            <p>
              L'IA n'est pas cachée : c'est elle qui rend ce rythme et ce prix
              possibles. Nous l'assumons dans notre discours comme dans nos
              livrables — label et mention IA activés sur chaque diffusion,
              conformément à l'AI Act. Un prospect qui découvre l'IA après
              signature se sent trompé ; nous préférons vous le dire avant.
            </p>
            <p>
              Le reste reste humain : une humaine francophone écrit chaque
              script, avec des références culturelles qui parlent à une
              audience française — la plupart des outils du marché pensent
              encore en anglais.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface/40 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Nos engagements</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Ce qu'on vous garantit par écrit
            </h2>
          </div>
          <div className="mx-auto mt-14 max-w-3xl">
            <TrustGrid />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              On vous dit tout, y compris comment c'est fait.
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
