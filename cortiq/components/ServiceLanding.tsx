import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { Button } from "./Button";
import { ServicePricingCard } from "./ServicePricingCard";
import { services } from "@/lib/content";

export function ServiceLanding({ id }: { id: (typeof services)[number]["id"] }) {
  const service = services.find((s) => s.id === id)!;

  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>{service.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-fg md:text-6xl">
            {service.h1}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            {service.promise}
          </p>
          <div className="mt-10">
            <Button href="/contact">{service.cta}</Button>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Méthode</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Comment on s'y prend
            </h2>
          </div>
          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {service.method.map((item) => (
              <li
                key={item}
                className="flex gap-4 text-[15px] leading-relaxed text-fg/80"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Tarifs</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Des prix publics, pas un devis au cas par cas
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              Tous les prix sont HT.
            </p>
          </div>
          <div
            className={`mt-12 grid gap-6 ${
              service.packs.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"
            }`}
          >
            {service.packs.map((pack) => (
              <ServicePricingCard key={pack.name} pack={pack} />
            ))}
          </div>

          {(service.setup || service.options.length > 0) && (
            <div className="mx-auto mt-10 max-w-2xl space-y-6">
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

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              {service.cta}
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
              20 minutes, facultatif, pour regarder où vous en êtes aujourd'hui.
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
