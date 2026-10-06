import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Dites-nous ce que vous vendez et à qui. Nous répondons sous 48h, sans jargon et sans engagement.",
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
              Dites-nous ce que vous vendez, et à qui.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              Nous vous répondons sous 48h. Pas de jargon au téléphone, pas
              de pression pour signer tout de suite.
            </p>

            <div className="mt-10 space-y-5 border-t border-line pt-8">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Email</span>
                <a href="mailto:hello@cortiq.fr" className="font-medium text-fg hover:text-orange-400">
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
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
