import { Eyebrow } from "./Eyebrow";
import { CheckList } from "./CheckList";
import { goodFit } from "@/lib/content";

export function FitSection() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Pour qui</Eyebrow>
        <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-fg md:text-[2.6rem]">
          C'est fait pour vous si…
        </h2>
      </div>
      <div className="mx-auto mt-14 max-w-2xl border border-line bg-bg p-8 md:p-10">
        <CheckList items={goodFit} />
      </div>
    </div>
  );
}
