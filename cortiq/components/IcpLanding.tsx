import Link from "next/link";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { Button } from "./Button";
import { icps, services } from "@/lib/content";

export function IcpLanding({ id }: { id: (typeof icps)[number]["id"] }) {
  const icp = icps.find((i) => i.id === id)!;
  const recommended = services.filter((s) =>
    (icp.recommendedServices as readonly string[]).includes(s.id)
  );

  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>{icp.label}</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            {icp.h1}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            {icp.painPoint}
          </p>
          <div className="mt-10">
            <Button href="/contact">Je réserve un appel découverte</Button>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-3xl">
              {icp.pitch}
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <Eyebrow>Secteurs concernés</Eyebrow>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {icp.subSegments.map((s) => (
                <li
                  key={s}
                  className="flex gap-3 text-sm leading-relaxed text-fg/80"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pourquoi Cortiq</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Pourquoi nous plutôt qu'une autre solution
            </h2>
          </div>
          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {icp.whyUs.map((reason) => (
              <li
                key={reason}
                className="flex gap-4 text-[15px] leading-relaxed text-fg/80"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                {reason}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Recommandé pour vous</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
              Les services qu'on vous conseille
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              {icp.recommendedNote}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {recommended.map((service) => (
              <Link
                key={service.id}
                href={`/${service.slug}`}
                className="group rounded-2xl border border-line bg-bg p-7 shadow-card transition-colors hover:border-fg/25"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-orange-500">
                  {service.eyebrow}
                </span>
                <h3 className="mt-3 text-xl font-medium tracking-tight text-fg">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg/80">
                  {service.promise}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fg group-hover:text-orange-600">
                  Voir les tarifs
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Je réserve un appel découverte
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
