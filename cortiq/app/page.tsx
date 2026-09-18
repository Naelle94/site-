import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { LogosMarquee } from "@/components/LogosMarquee";
import { OfferCard } from "@/components/OfferCard";
import { AuditBanner } from "@/components/AuditBanner";
import { PrincipleGrid } from "@/components/PrincipleGrid";
import { offers, differentiation, audience } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Growth partner fractional</Eyebrow>
            </div>
            <h1 className="mt-6 text-balance text-[2.6rem] font-medium leading-[1.05] tracking-tightest text-ink sm:text-6xl md:text-7xl">
              Un chiffre garanti.
              <br />
              Pas un catalogue de <span className="text-orange-500">prestations</span>.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-balance text-[17px] leading-relaxed text-muted md:text-lg">
              Cortiq est le partenaire growth fractional des startups
              early-stage : pas de compte-manager, pas de 24 prestations à la
              carte — un stratège senior, deux leviers, un chiffre défini
              avant de commencer.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Réserver l'audit growth 90 jours</Button>
              <Button href="/offres" variant="secondary">
                Voir les deux offres
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <LogosMarquee />

      {/* L'anti-agence */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
            <div>
              <Eyebrow>L'anti-agence</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-medium leading-tight tracking-tight text-ink md:text-[2.6rem]">
                Un stratège senior directement au contact du fondateur.
              </h2>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <span className="font-mono text-xs text-orange-500">01</span>
                <h3 className="mt-3 text-lg font-medium text-ink">
                  Zéro couche compte-manager
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Pas d'intermédiaire entre la stratégie et son exécution.
                  Vous parlez à la personne qui pilote, pas à un chef de
                  projet qui relaie.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-orange-500">02</span>
                <h3 className="mt-3 text-lg font-medium text-ink">
                  Un studio à playbooks
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Chaque offre est documentée en process reproductible,
                  exécuté par un réseau restreint de freelances vetted, sous
                  supervision directe.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-orange-500">03</span>
                <h3 className="mt-3 text-lg font-medium text-ink">
                  Références qui vont loin
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  De startups en amorçage — Gratia, Badger, Keez, Fullphysio,
                  Overloop AI, Skill Yoga — jusqu'à des marques grand groupe
                  comme YSL et L'Oréal.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-orange-500">04</span>
                <h3 className="mt-3 text-lg font-medium text-ink">
                  La stratégie reste chez nous
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Le stratège garde la main sur la stratégie et la qualité, le
                  playbook garantit que l'exécution reste constante d'un
                  freelance à l'autre.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Offers */}
      <section className="border-t border-line bg-white py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Deux offres, un chiffre chacune</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-ink md:text-[2.6rem]">
              Ce qu'on fait
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Volontairement resserrées, chacune adossée à un seul chiffre
              garanti plutôt qu'à une liste de tâches.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {offers.map((offer) => (
              <OfferCard key={offer.slug} offer={offer} />
            ))}
          </div>

          <div className="mt-6">
            <AuditBanner />
          </div>
        </Container>
      </section>

      {/* Comment on le fait */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Comment on le fait</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-ink md:text-[2.6rem]">
              Quatre principes, aucune exception
            </h2>
          </div>
          <div className="mt-14">
            <PrincipleGrid />
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/methode" variant="ghost">
              Voir le process complet
            </Button>
          </div>
        </Container>
      </section>

      {/* Differentiation */}
      <section className="border-t border-line bg-white py-24 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-6">
            <div className="border border-line p-8 md:p-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange-600">
                Features
              </span>
              <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink">
                {differentiation.features.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {differentiation.features.description}
              </p>
            </div>
            <div className="border border-line bg-ink p-8 text-white md:p-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange-400">
                Prix
              </span>
              <h3 className="mt-4 text-2xl font-medium tracking-tight">
                {differentiation.pricing.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                {differentiation.pricing.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Audience */}
      <section className="py-24 md:py-28">
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

      {/* Final CTA */}
      <section className="border-t border-line bg-ink py-24 text-white md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-medium tracking-tight md:text-5xl">
              Choisissez un levier. Poussez-le à fond. Mesurez.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
              L'audit growth 90 jours tranche entre outbound et paid comme
              premier levier, avec un plan chiffré à la clé.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact">Réserver l'audit growth 90 jours</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
