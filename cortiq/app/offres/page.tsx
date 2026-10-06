import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/Button";
import {
  packs,
  packIncludes,
  packOptions,
  guarantee,
  excludedSectors,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "3 packs mensuels sans engagement long : Test (10 vidéos, 790 €), Growth (20 vidéos, 1 690 €), Scale (50 vidéos, 3 490 €). Stratégie, script, production et dashboard inclus.",
};

export default function OffresPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Nos offres</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            3 packs mensuels, sans engagement long.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Entre 70 et 85 € la vidéo — 2 à 4 fois moins cher qu'un créateur
            UGC humain. Vous changez de pack d'un mois sur l'autre selon votre
            volume d'angles à tester.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {packs.map((pack) => (
              <PricingCard key={pack.id} pack={pack} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface/40 py-20 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <Eyebrow>Inclus dans chaque pack</Eyebrow>
              <ul className="mt-6 space-y-4">
                {packIncludes.map((item, i) => (
                  <li key={i} className="flex gap-4 text-[15px] leading-relaxed text-fg/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Chaque reprise de script ne coûte rien ; faire valider les
                scripts avant production protège le prix du pack. Un tour de
                révision supplémentaire reste possible en option.
              </p>
            </div>

            <div>
              <Eyebrow>Options</Eyebrow>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {packOptions.map((opt) => (
                  <li
                    key={opt.label}
                    className="flex items-center justify-between py-4 text-sm"
                  >
                    <span className="text-fg/80">{opt.label}</span>
                    <span className="font-mono text-orange-400">{opt.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Prix en HT (facturation B2B). Facturation mensuelle d'avance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="border border-orange-500/30 bg-orange-500/[0.06] p-8 md:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">
              {guarantee.title}
            </span>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-fg/85 md:text-lg">
              {guarantee.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface/40 py-20 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Secteurs non accompagnés</Eyebrow>
              <h2 className="mt-5 text-2xl font-medium tracking-tight text-fg md:text-3xl">
                Quatre secteurs exclus, sans exception.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Modération publicitaire et risque légal trop élevés pour ces
                verticales : {excludedSectors.join(", ").toLowerCase()}.
              </p>
            </div>
            <div className="flex flex-col justify-between gap-6 border border-line bg-surface p-8">
              <p className="text-[15px] leading-relaxed text-fg/80">
                Un doute sur votre secteur ou votre claim produit ? On le
                regarde ensemble avant de signer, pas après.
              </p>
              <Button href="/contact" variant="secondary" className="self-start">
                Vérifier mon éligibilité
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
