import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/Button";
import { ComparisonCriteria } from "@/components/ComparisonCriteria";
import { DashboardPreview } from "@/components/DashboardPreview";
import { packs, packOptions, guarantee } from "@/lib/content";

export const metadata: Metadata = {
  title: "Offres et prix",
  description:
    "Test créatif (5 vidéos, 890 € HT, 5 jours), Lab (boucle mensuelle) ou à la demande. Prix publics, options payantes détaillées, sans engagement.",
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: packs.map((pack, i) => ({
    "@type": "Offer",
    position: i + 1,
    name: pack.name,
    price: pack.price,
    priceCurrency: "EUR",
    description: pack.description,
  })),
};

export default function OffresPage() {
  const lab = packs.find((p) => p.id === "lab")!;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* 1. Intro */}
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Nos offres</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            Comment on vous accompagne
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Trois façons de travailler avec nous, du premier test à
            l'accompagnement mensuel. Prix publics, écrits avant la commande,
            pas de devis à rallonge. Sans engagement : vous arrêtez quand vous
            voulez.
          </p>
        </Container>
      </section>

      {/* 2. Les 3 offres */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {packs.map((pack) => (
              <PricingCard key={pack.id} pack={pack} />
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-muted">
            Vous ne savez pas laquelle choisir ? Presque tout le monde commence
            par <strong className="text-fg">Test créatif</strong> : c'est le
            seul moyen de savoir, avant de vous engager plus loin, si le format
            fonctionne pour votre produit.
          </p>
        </Container>
      </section>

      {/* 3. Options payantes */}
      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Options payantes</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Des options, pas des bonus
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              Chaque offre couvre déjà l'essentiel. Si vous voulez aller plus
              vite, suivre vos résultats en direct, ou tester plus de
              personnages, voici ce qui s'ajoute, à un prix affiché.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl overflow-hidden border border-line">
            <div className="divide-y divide-line">
              {packOptions.map((option) => (
                <div
                  key={option.label}
                  className="flex items-center justify-between gap-6 bg-bg px-6 py-5"
                >
                  <span className="text-sm leading-relaxed text-fg/80">
                    {option.label}
                  </span>
                  <span className="shrink-0 whitespace-nowrap font-mono text-sm font-medium text-orange-600">
                    {option.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Lab zoom */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Zoom sur Lab</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              {lab.description}
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <DashboardPreview />
          </div>
          <div className="mx-auto mt-8 max-w-xl text-center">
            <p className="text-[15px] leading-relaxed text-muted">
              Le rapport mensuel suit le hook rate, le CTR et le coût par
              client obtenu, angle par angle. Sur le seul cas où nous avons un
              historique de résultats vérifiable (HAT Music, avant même la
              création de l'agence), le changement d'angles créatifs a fait
              baisser le coût d'acquisition par installation de{" "}
              <strong className="text-fg">68 %</strong> (CPI de 2,50 € à
              0,80 €), avec un CPA divisé par 3. Nous ne publions pas de
              moyenne inventée sur d'autres clients : c'est le seul chiffre que
              nous pouvons aujourd'hui garantir comme vérifié.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. Garantie */}
      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow>Garantie</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              {guarantee.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              {guarantee.description}
            </p>
          </div>
        </Container>
      </section>

      {/* 6. Comparatif */}
      <section className="py-20 md:py-24">
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
        </Container>
      </section>

      {/* 7. CTA final */}
      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Je lance mon test créatif
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Sans engagement. Vous recevez vos 5 premières vidéos en 5 jours
              ouvrés.
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
