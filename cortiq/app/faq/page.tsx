import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Button } from "@/components/Button";
import { faqByTheme, faq } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Toutes les questions sur le test créatif Cortiq : IA et confiance, offres et prix, process et délais, droits et conformité.",
};

const themeSlugs: Record<string, string> = {
  "IA et confiance": "ia-et-confiance",
  "Offres et prix": "offres-et-prix",
  "Process et délais": "process-et-delais",
  "Droits et conformité": "droits-et-conformite",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Intro */}
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl">
            Les questions qu'on nous pose.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Des réponses courtes et chiffrées, classées par thème.
          </p>
        </Container>
      </section>

      {/* 2 & 3. Accordéon par thème */}
      {faqByTheme.map((group, i) => (
        <section
          key={group.theme}
          id={themeSlugs[group.theme]}
          className={`scroll-mt-20 py-16 md:py-20 ${
            i % 2 === 1 ? "border-t border-line bg-surface" : i > 0 ? "border-t border-line" : ""
          }`}
        >
          <Container>
            <div className="mx-auto max-w-xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange-500">
                {group.theme}
              </span>
              <div className="mt-6">
                <FaqAccordion items={group.items} />
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* 4. CTA */}
      <section className="border-t border-line py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
              Une autre question ?
            </h2>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Écrivez-nous</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
