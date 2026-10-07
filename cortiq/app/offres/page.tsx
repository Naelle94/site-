import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/Button";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DashboardPreview } from "@/components/DashboardPreview";
import {
  packs,
  packOptions,
  guarantee,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Offres et prix",
  description:
    "Trois offres, prix publics : Crash-test (5 vidéos, 890 € HT, 5 jours), Lab (10 vidéos/mois, 1 690 € HT), À la demande (220 € HT/vidéo). C'est l'alternative la moins chère à une agence UGC en France.",
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: packs.map((pack, i) => ({
    "@type": "Offer",
    position: i + 1,
    name: `Cortiq ${pack.name}`,
    price: pack.price,
    priceCurrency: "EUR",
    url: `https://cortiq.fr/offres#${pack.id}`,
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
          <Eyebrow>Offres et prix</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            Trois offres. Pas de pack 50, pas de sur-mesure opaque.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            178 à 220 € la vidéo selon la formule, contre 400 à 500 € en
            moyenne chez une agence UGC classique en France en 2026. Les
            trois prix sont publics, écrits ici, sans devis caché.
          </p>
        </Container>
      </section>

      {/* 2. Table des 3 offres + cartes */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {packs.map((pack) => (
              <PricingCard key={pack.id} pack={pack} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Options */}
      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Options</Eyebrow>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {packOptions.map((opt) => (
              <li
                key={opt.label}
                className="flex items-center justify-between py-4 text-sm"
              >
                <span className="text-fg/80">{opt.label}</span>
                <span className="font-mono text-orange-600">{opt.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Les prix sont en HT (hors taxes, la TVA s'ajoute si vous êtes une
            entreprise). Paiement d'avance, avant le début de chaque
            production.
          </p>
        </Container>
      </section>

      {/* Lab zoom : rapport d'une page */}
      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
            <div>
              <Eyebrow>Zoom sur Lab</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-medium leading-tight tracking-tight text-fg md:text-[2.6rem]">
                Un rapport d'une page, chaque mois
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                {lab.description} Si vous connectez Meta ou TikTok, le
                dashboard est à jour en direct.
              </p>
            </div>
            <DashboardPreview />
          </div>
        </Container>
      </section>

      {/* 7. Garantie */}
      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl border border-orange-500/30 bg-orange-500/[0.05] p-8 text-center md:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-600">
              {guarantee.title}
            </span>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg/85 md:text-lg">
              {guarantee.description}
            </p>
          </div>
        </Container>
      </section>

      {/* 8. Comparatif prix complet */}
      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Quelles agences UGC IA affichent leurs prix</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Le comparatif complet face aux agences
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <ComparisonTable />
          </div>
        </Container>
      </section>

      {/* 9. CTA final */}
      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Prêt à tester vos premiers angles ?
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
