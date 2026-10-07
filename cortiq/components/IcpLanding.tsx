import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { Button } from "./Button";
import { PricingCard } from "./PricingCard";
import { ComparisonCriteria } from "./ComparisonCriteria";
import { icps, packs, guarantee } from "@/lib/content";

export function IcpLanding({ id }: { id: (typeof icps)[number]["id"] }) {
  const icp = icps.find((i) => i.id === id)!;
  const testCreatif = packs.find((p) => p.id === "test-creatif")!;

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
          <div className="mx-auto max-w-md">
            <PricingCard pack={testCreatif} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-24">
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

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl border border-orange-500/30 bg-orange-500/[0.05] p-8 text-center md:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-600">
              {guarantee.title}
            </span>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg/85">
              {guarantee.description}
            </p>
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
              20 minutes, facultatif, pour regarder vos publicités actuelles ensemble.
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
