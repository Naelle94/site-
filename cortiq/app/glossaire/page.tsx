import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { glossary } from "@/lib/content";

export const metadata: Metadata = {
  title: "Glossaire",
  description:
    "Test créatif, hook rate, angle publicitaire, UGC, persona, CPA, ROAS : les termes du labo Cortiq, définis simplement.",
};

export default function GlossairePage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Glossaire</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            Le lexique du labo, en clair.
          </h1>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl divide-y divide-line border-y border-line">
            {glossary.map((entry) => (
              <div key={entry.term} className="py-6">
                <h2 className="text-lg font-medium text-fg">{entry.term}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {entry.definition}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
