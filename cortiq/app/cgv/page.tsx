import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { cgvSections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Les conditions générales de vente de Cortiq : prix, paiement, délais, révisions, garantie, propriété intellectuelle, conformité, données personnelles et droit applicable.",
};

export default function CgvPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Conditions générales de vente</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
            Conditions générales de vente
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Applicables à toute commande d'une formule Test créatif, Lab ou À
            la demande auprès de Cortiq. En vigueur à la date de votre
            commande.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl space-y-10">
            {cgvSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-medium text-fg">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-fg/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
