import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { ProcessStepCard } from "@/components/ProcessStepCard";
import { ExampleVideo } from "@/components/ExampleVideo";
import { PricingCard } from "@/components/PricingCard";
import { CheckList } from "@/components/CheckList";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  processSteps,
  packs,
  recognitionPoints,
  guarantee,
  faqShort,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <Container className="relative pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Vidéos publicitaires, faites pour vendre</Eyebrow>
            </div>
            <h1 className="mt-6 text-balance text-[2.4rem] font-medium leading-[1.1] tracking-tightest text-fg sm:text-5xl md:text-6xl">
              Des vidéos qui donnent envie de cliquer. Vous n'avez pas besoin
              de comprendre la technique — c'est mon travail.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-balance text-[17px] leading-relaxed text-muted md:text-lg">
              Je vous fournis des vidéos publicitaires prêtes à poster,
              écrites par une personne, fabriquées avec de l'intelligence
              artificielle, livrées en 3 jours. Vous me dites ce que vous
              vendez, je m'occupe du reste.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact">Demander un devis gratuit</Button>
              <Button href="/offres" variant="secondary">
                Voir les 3 formules
              </Button>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              Réponse sous 48h · Aucun engagement
            </p>
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <section className="border-y border-line bg-surface/40 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-3xl">
              Si une de ces phrases vous parle, on devrait discuter
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <CheckList items={recognitionPoints} />
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Ce qu'on fait, en clair</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Trois choses, dans cet ordre
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Rien n'est filmé avant que vous ayez validé le texte. Vous ne
              découvrez jamais une vidéo dont vous n'avez pas déjà approuvé
              le contenu.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <ProcessStepCard key={step.index} step={step} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/process" variant="ghost">
              Voir comment ça marche en détail
            </Button>
          </div>
        </Container>
      </section>

      {/* Example */}
      <section className="border-t border-line bg-surface/40 py-24 md:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
            <div>
              <Eyebrow>Exemple concret</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-medium leading-tight tracking-tight text-fg md:text-[2.6rem]">
                À quoi ça ressemble, une vidéo
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                Quelqu'un qui parle caméra, un sous-titre qui attrape
                l'attention dans les 3 premières secondes, un ton naturel.
                Chaque vidéo est différente selon votre produit et votre
                cible.
              </p>
            </div>
            <ExampleVideo />
          </div>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Les 3 formules, en bref</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Selon combien de vidéos vous voulez tester par mois
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {packs.map((pack) => (
              <PricingCard key={pack.id} pack={pack} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/offres" variant="ghost">
              Voir le détail des formules
            </Button>
          </div>
        </Container>
      </section>

      {/* Guarantee */}
      <section className="border-t border-line bg-surface/40 py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl border border-orange-500/30 bg-orange-500/[0.06] p-8 text-center md:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">
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

      {/* FAQ teaser */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Les questions qu'on nous pose tout le temps
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-xl">
            <FaqAccordion items={faqShort} />
          </div>
          <div className="mt-8 flex justify-center">
            <Button href="/offres#faq" variant="ghost">
              Voir toutes les questions
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-line py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl">
              On en parle ?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
              Dites-moi ce que vous vendez et à qui. Je vous dis honnêtement
              si je peux vous aider.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact">Demander un devis gratuit</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
