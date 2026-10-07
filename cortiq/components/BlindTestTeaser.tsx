import Link from "next/link";
import { ExampleVideo } from "./ExampleVideo";

export function BlindTestTeaser() {
  return (
    <div className="grid items-center gap-10 border border-line bg-surface p-8 md:grid-cols-[auto_1fr] md:gap-14 md:p-12">
      <div className="mx-auto w-full max-w-[160px] md:mx-0">
        <ExampleVideo caption="Laquelle est l'IA ?" />
      </div>
      <div>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange-500">
          Blind Test
        </span>
        <h3 className="mt-3 text-balance text-2xl font-medium leading-tight tracking-tight text-fg md:text-3xl">
          Vidéo IA ou vidéo humaine ? Jugez sur pièce.
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
          On compare une vidéo IA et une vidéo tournée par un humain, sans dire
          laquelle est laquelle, sur leur hook rate et leur CTR.
        </p>
        <Link
          href="/blind-test"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-orange-600"
        >
          Je vois le résultat
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
