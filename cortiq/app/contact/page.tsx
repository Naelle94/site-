import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Demandez un devis à Cortiq : dites-nous votre produit, votre cible, et le pack qui vous intéresse.",
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-5xl">
              Parlons de votre premier angle.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              Dites-nous où vous en êtes. On revient vers vous sous 48h pour
              caler le pack adapté ou répondre directement à votre question.
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
                <span className="text-muted">Zone</span>
                <span className="font-medium text-fg">France</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
