import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { OfferCard } from "@/components/OfferCard";
import { AuditBanner } from "@/components/AuditBanner";
import { Button } from "@/components/Button";
import { offers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Deux offres, un chiffre chacune : prospection qualifiée (outbound) et acquisition payante pilotée (Meta / LinkedIn Ads).",
};

export default function OffresPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Nos offres</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-ink md:text-6xl">
            Deux offres seulement, volontairement resserrées.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Chacune adossée à un seul chiffre garanti plutôt qu'à une liste de
            tâches. La lisibilité est l'argument commercial : vous savez
            exactement ce que vous achetez, et à quel chiffre vous attendre.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {offers.map((offer) => (
              <OfferCard key={offer.slug} offer={offer} />
            ))}
          </div>
          <div className="mt-6">
            <AuditBanner />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-20 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Comment on choisit</Eyebrow>
              <h2 className="mt-5 text-2xl font-medium tracking-tight text-ink md:text-3xl">
                Pas de troisième offre en parallèle.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                L'audit growth 90 jours priorise laquelle des deux offres a le
                meilleur ratio effort/impact pour votre stade. On choisit un
                levier, on le pousse à fond, on mesure — avant de basculer sur
                l'autre si besoin.
              </p>
            </div>
            <div className="flex flex-col justify-between gap-6 border border-line p-8">
              <p className="text-[15px] leading-relaxed text-ink/80">
                Base fixe qui couvre le playbook et le freelance, plus une
                part variable indexée sur le chiffre livré — par RDV qualifié,
                ou par lead au CPL cible atteint.
              </p>
              <Button href="/contact" variant="secondary" className="self-start">
                Discuter du pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
