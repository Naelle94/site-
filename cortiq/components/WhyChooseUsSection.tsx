import { Eyebrow } from "./Eyebrow";
import { PersonaCarousel } from "./PersonaCarousel";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUsSection() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Pourquoi nous choisir</Eyebrow>
        <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
          Un catalogue de personnages, pas un visage unique
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          Un aperçu de la diversité des personnages disponibles pour vos
          vidéos : âges, styles et univers variés.
        </p>
      </div>

      <div className="mt-12 -mx-6">
        <PersonaCarousel />
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
        {whyChooseUs.map((item) => (
          <div key={item.title} className="border border-line bg-bg p-6">
            <h3 className="text-[15px] font-medium text-fg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
