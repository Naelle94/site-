import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PrincipleGrid } from "@/components/PrincipleGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Méthode",
  description:
    "Quatre principes non négociables et un process en sept étapes, du sourcing des freelances à la capitalisation de chaque cycle.",
};

export default function MethodePage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-24">
        <Container>
          <Eyebrow>Méthode</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-ink md:text-6xl">
            Comment on le fait.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Un playbook avant chaque freelance, un chiffre avant chaque
            dashboard, des cycles courts pour ajuster vite.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <PrincipleGrid />
        </Container>
      </section>

      <section className="border-t border-line bg-white py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Process interne</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-ink md:text-[2.6rem]">
              Sept étapes, un cycle de 30 jours
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <ProcessTimeline />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ink py-20 text-white md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-medium tracking-tight md:text-4xl">
              Chaque cycle terminé enrichit le playbook suivant.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
              Ce qui a marché, ce qui n'a pas marché — capitalisé dans la
              prochaine étude de cas publiée.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Réserver l'audit growth 90 jours</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
