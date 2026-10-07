import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { tagline } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {tagline}
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Offres
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/offres#crash-test" className="text-fg/80 hover:text-orange-600">
                  Crash-test · 890 €
                </Link>
              </li>
              <li>
                <Link href="/offres#lab" className="text-fg/80 hover:text-orange-600">
                  Lab · 1 690 €
                </Link>
              </li>
              <li>
                <Link href="/offres#a-la-demande" className="text-fg/80 hover:text-orange-600">
                  À la demande · 220 €
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Secteurs
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/app-mobile-b2c" className="text-fg/80 hover:text-orange-600">
                  App mobile B2C
                </Link>
              </li>
              <li>
                <Link href="/saas-b2b" className="text-fg/80 hover:text-orange-600">
                  SaaS B2B
                </Link>
              </li>
              <li>
                <Link href="/ecommerce" className="text-fg/80 hover:text-orange-600">
                  E-commerce
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
                <Link href="/process" className="text-fg/80 hover:text-orange-600">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="/exemples" className="text-fg/80 hover:text-orange-600">
                  Exemples
                </Link>
              </li>
              <li>
                <Link href="/blind-test" className="text-fg/80 hover:text-orange-600">
                  Blind Test
                </Link>
              </li>
              <li>
                <Link href="/glossaire" className="text-fg/80 hover:text-orange-600">
                  Glossaire
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-fg/80 hover:text-orange-600">
                  FAQ
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
                <a href="mailto:hello@cortiq.fr" className="text-fg/80 hover:text-orange-600">
                  hello@cortiq.fr
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  className="text-fg/80 hover:text-orange-600"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/cgv" className="text-fg/80 hover:text-orange-600">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Cortiq. Tous droits réservés.</p>
          <p>Mention IA activée sur chaque vidéo, conforme à l'AI Act européen</p>
        </div>
      </Container>
    </footer>
  );
}
