import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { badFit } from "@/lib/content";

export const metadata: Metadata = {
  title: "Conditions, en bref",
  description:
    "Révisions, secteurs refusés, droits sur les vidéos : les conditions essentielles de Cortiq, résumées simplement.",
};

export default function CgvPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Conditions, en bref</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
            Ce que nos conditions générales disent, résumé simplement.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Ceci est un résumé, pas le contrat complet. Le contrat détaillé
            vous est transmis avant tout paiement.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl space-y-10">
            <div>
              <h2 className="text-lg font-medium text-fg">Révisions</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-fg/80">
                Une révision gratuite par vidéo si le ton ne vous convient
                pas. On corrige le script et on refait la vidéo une fois,
                sans frais. Une révision supplémentaire au-delà de celle
                incluse est facturée 90 €.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-fg">Secteurs refusés</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-fg/80">
                Nous n'intervenons pas dans les secteurs où l'AI Act et la
                réglementation publicitaire sont trop stricts pour notre
                offre actuelle :
              </p>
              <ul className="mt-4 space-y-2">
                {badFit.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-fg/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium text-fg">Droits sur les vidéos</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-fg/80">
                Le droit d'utiliser les vidéos livrées en publicité vous
                appartient, sans limite de durée, écrit dans le contrat dès
                la livraison et le paiement effectués.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-fg">Paiement</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-fg/80">
                Paiement d'avance, prix HT. Aucune production ne démarre
                avant le paiement. Pour Lab, facturation mensuelle avant le
                début de chaque boucle ; vous arrêtez ou changez de formule
                d'un mois sur l'autre.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-fg">Garantie Crash-test</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-fg/80">
                Si aucune des 5 vidéos ne bat le hook rate de votre publicité
                actuelle au bout de 5 jours, la moitié du prix du Crash-test
                vous est remboursée.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
