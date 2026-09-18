import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Partenaire growth fractional pour startups early-stage. Un
              levier, un chiffre garanti, zéro couche compte-manager.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Offres
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/offres#prospection-qualifiee" className="text-ink/80 hover:text-orange-600">
                  Prospection qualifiée
                </Link>
              </li>
              <li>
                <Link href="/offres#acquisition-payante-pilotee" className="text-ink/80 hover:text-orange-600">
                  Acquisition payante
                </Link>
              </li>
              <li>
                <Link href="/offres#audit" className="text-ink/80 hover:text-orange-600">
                  Audit growth 90 jours
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
                <Link href="/methode" className="text-ink/80 hover:text-orange-600">
                  Méthode
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-ink/80 hover:text-orange-600">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink/80 hover:text-orange-600">
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
                <a href="mailto:hello@cortiq.fr" className="text-ink/80 hover:text-orange-600">
                  hello@cortiq.fr
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  className="text-ink/80 hover:text-orange-600"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Cortiq. Tous droits réservés.</p>
          <p>Basé en France · Startups pré-seed à Series A</p>
        </div>
      </Container>
    </footer>
  );
}
