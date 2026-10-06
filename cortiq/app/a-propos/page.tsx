import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { TrustGrid } from "@/components/TrustGrid";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Qui est derrière Cortiq",
  description:
    "Cortiq fabrique vos vidéos de pub avec de l'intelligence artificielle, et explique chaque étape sans jargon.",
};

export default function AProposPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Qui est derrière Cortiq</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            Nous fabriquons vos vidéos de pub avec de l'intelligence
            artificielle. Nous expliquons tout, sans jargon.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted md:text-lg">
            Avant de lancer Cortiq, nous avons vu trop de fondateurs se
            battre seuls avec leurs publicités, sans jamais comprendre
            pourquoi ça ne marchait pas. C'est pour ça que nous expliquons
            chaque étape, et que nous ne vous demandons jamais de nous
            faire confiance sur un mot que vous ne comprenez pas.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-[15px] leading-relaxed text-fg/80 md:text-[17px]">
            <Eyebrow>Pourquoi l'IA, expliqué simplement</Eyebrow>
            <h2 className="pt-2 text-2xl font-medium tracking-tight text-fg">
              L'intelligence artificielle, ici, ça sert à quoi exactement ?
            </h2>
            <p>
              Elle sert à fabriquer l'image et la voix de la vidéo, une fois
              que le texte est écrit par une personne. Elle ne décide de
              rien toute seule : elle exécute un texte qu'on a validé
              ensemble.
            </p>
            <p>
              Et on vous le dit toujours : sur chaque vidéo, une mention
              indique qu'elle est faite par IA, comme la loi européenne le
              demande depuis août 2026. On préfère vous le dire avant que
              vous le découvriez après coup, et vos clients aussi méritent
              de le savoir.
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
              <Button href="/contact">Nous parler directement</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
