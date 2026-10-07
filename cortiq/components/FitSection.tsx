import { Eyebrow } from "./Eyebrow";
import { CheckList } from "./CheckList";
import { goodFit, badFit } from "@/lib/content";

export function FitSection() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Pour qui</Eyebrow>
        <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
          Cortiq est fait pour vous
        </h2>
      </div>
      <div className="mx-auto mt-14 grid max-w-3xl gap-10 md:grid-cols-2">
        <div className="border border-line bg-bg p-8">
          <h3 className="text-center text-lg font-medium text-fg">
            Cortiq est fait pour vous si…
          </h3>
          <div className="mt-6">
            <CheckList items={goodFit} />
          </div>
        </div>
        <div className="border border-line bg-surface p-8">
          <h3 className="text-center text-lg font-medium text-fg">
            Ce n'est (probablement) pas pour vous si…
          </h3>
          <div className="mt-6">
            <CheckList items={badFit} variant="cross" />
          </div>
        </div>
      </div>
    </div>
  );
}
