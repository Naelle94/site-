import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  packs,
  packIncludes,
  packOptions,
  guarantee,
  goodFit,
  badFit,
  faq,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Nos formules",
  description:
    "Trois formules mensuelles sans engagement long : Test (10 vidéos, 790 €), Growth (20 vidéos, 1 690 €), Scale (50 vidéos, 3 490 €). Tout est expliqué simplement.",
};

export default function OffresPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Nos formules</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            Trois façons de tester vos pubs, sans vous engager pour un an.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Vous changez de formule tous les mois si besoin. On vous facture
            avant de commencer, et ce que vous recevez est toujours écrit
            noir sur blanc avant que vous payiez.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-medium text-fg">C'est pour vous si…</h2>
              <div className="mt-5">
                <CheckList items={goodFit} />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium text-fg">
                Ce n'est (probablement) pas pour vous si…
              </h2>
              <div className="mt-5">
                <CheckList items={badFit} variant="cross" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface/40 py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {packs.map((pack) => (
              <PricingCard key={pack.id} pack={pack} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <Eyebrow>Ce que vous recevez</Eyebrow>
              <ul className="mt-6 space-y-4">
                {packIncludes.map((item, i) => (
                  <li key={i} className="flex gap-4 text-[15px] leading-relaxed text-fg/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
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
                Les prix sont en HT (hors taxes, la TVA s'ajoute si vous
                êtes une entreprise). Facturation avant le début de chaque
                mois.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface/40 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl border border-orange-500/30 bg-orange-500/[0.06] p-8 text-center md:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">
              {guarantee.title}
            </span>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg/85 md:text-lg">
              On compare vos vidéos à votre publicité actuelle sur un seul
              chiffre simple : combien de personnes cliquent. Si aucune de
              nos vidéos ne fait mieux, vous récupérez la moitié de votre
              argent. Pas de petites lignes, pas de conditions cachées.
            </p>
          </div>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-20 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Les questions qu'on nous pose
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-xl">
            <FaqAccordion items={faq} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Prêt à tester une formule ?
            </h2>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Demander un devis gratuit</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
