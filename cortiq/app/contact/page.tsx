import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "20 minutes pour regarder vos publicités actuelles ensemble. Réponse sous 48h, sans jargon et sans engagement.",
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
              20 minutes pour regarder vos pubs actuelles ensemble.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              Dites-nous ce que vous vendez, un lien vers votre bibliothèque
              publicitaire Meta ou votre site, et votre budget pub mensuel.
              Nous vous répondons sous 48h.
            </p>

            <div className="mt-10 space-y-5 border-t border-line pt-8">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Email</span>
                <a href="mailto:hello@cortiq.fr" className="font-medium text-fg hover:text-orange-600">
                  hello@cortiq.fr
                </a>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Réponse</span>
                <span className="font-medium text-fg">Sous 48h</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Engagement</span>
                <span className="font-medium text-fg">Aucun pour en discuter</span>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-muted">
              Pas de production avant paiement. Paiement d'avance, prix HT.
              Détail des conditions sur la page{" "}
              <Link href="/cgv" className="text-fg underline underline-offset-2 hover:text-orange-600">
                Conditions, en bref
              </Link>
              .
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
