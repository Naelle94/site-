import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Réservez l'audit growth 90 jours et discutez avec Cortiq de votre stade et de vos leviers d'acquisition.",
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
              Parlons de votre premier levier.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              Dites-nous où vous en êtes. On revient vers vous sous 48h pour
              caler l'audit growth 90 jours ou répondre directement à votre
              question.
            </p>

            <div className="mt-10 space-y-5 border-t border-line pt-8">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Email</span>
                <a href="mailto:hello@cortiq.fr" className="font-medium text-ink hover:text-orange-600">
                  hello@cortiq.fr
                </a>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Réponse</span>
                <span className="font-medium text-ink">Sous 48h</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Zone</span>
                <span className="font-medium text-ink">France</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
