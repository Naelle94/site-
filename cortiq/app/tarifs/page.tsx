import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { ServicePricingCard } from "@/components/ServicePricingCard";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tous nos tarifs, service par service : Meta Ads, Google Ads, CRM/Email, Instagram, SEO. Prix publics HT, sans devis au cas par cas.",
};

export default function TarifsPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Tarifs</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-tight text-fg md:text-6xl">
              Tous nos prix, affichés, service par service
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
              Pas de devis au cas par cas. Tous les prix ci-dessous sont HT.
            </p>
          </div>
        </Container>
      </section>

      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.slug}
          className={`scroll-mt-24 py-20 md:py-24 ${i % 2 === 1 ? "border-t border-line bg-surface" : ""}`}
        >
          <Container>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>{service.eyebrow}</Eyebrow>
                <h2 className="mt-4 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.4rem]">
                  {service.name}
                </h2>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
                  {service.promise}
                </p>
              </div>
              <Link
                href={`/${service.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-orange-600"
              >
                Voir la méthode en détail
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div
              className={`mt-10 grid gap-6 ${
                service.packs.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {service.packs.map((pack) => (
                <ServicePricingCard key={pack.name} pack={pack} />
              ))}
            </div>

            {(service.setup || service.options.length > 0) && (
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {service.setup && (
                  <div className="rounded-2xl border border-line bg-bg p-6 text-sm leading-relaxed text-fg/80">
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-orange-600">
                      {service.setup.label} · {service.setup.price.toLocaleString("fr-FR")} {service.setup.priceUnit}
                    </span>
                    <p className="mt-2">{service.setup.note}</p>
                  </div>
                )}
                {service.options.length > 0 && (
                  <div className="rounded-2xl border border-line bg-bg p-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                      Options
                    </span>
                    <ul className="mt-4 space-y-2">
                      {service.options.map((opt) => (
                        <li
                          key={opt.label}
                          className="flex items-baseline justify-between gap-4 text-sm text-fg/80"
                        >
                          <span>{opt.label}</span>
                          <span className="whitespace-nowrap font-medium text-fg">
                            {opt.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </Container>
        </section>
      ))}

      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Un besoin sur plusieurs canaux ?
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
              20 minutes, facultatif, pour regarder où vous en êtes et quelle combinaison a du sens.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Je réserve un appel découverte</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
