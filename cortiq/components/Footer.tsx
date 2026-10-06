import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Des créas UGC produites par IA, scriptées par des humains,
              pilotées par la data. Livrées sous 72 h.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Offres
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/offres#test" className="text-fg/80 hover:text-orange-400">
                  Pack Test — 790 €
                </Link>
              </li>
              <li>
                <Link href="/offres#growth" className="text-fg/80 hover:text-orange-400">
                  Pack Growth — 1 690 €
                </Link>
              </li>
              <li>
                <Link href="/offres#scale" className="text-fg/80 hover:text-orange-400">
                  Pack Scale — 3 490 €
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Cortiq
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/process" className="text-fg/80 hover:text-orange-400">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-fg/80 hover:text-orange-400">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-fg/80 hover:text-orange-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Contact
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="mailto:hello@cortiq.fr" className="text-fg/80 hover:text-orange-400">
                  hello@cortiq.fr
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  className="text-fg/80 hover:text-orange-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Cortiq. Tous droits réservés.</p>
          <p>Vidéos IA conformes à l'AI Act · Mention et label IA sur chaque diffusion</p>
        </div>
      </Container>
    </footer>
  );
}
