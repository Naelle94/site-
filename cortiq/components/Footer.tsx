import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { tagline } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {tagline}
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Services
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/meta-ads" className="text-fg/80 hover:text-orange-600">
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link href="/google-ads" className="text-fg/80 hover:text-orange-600">
                  Google Ads
                </Link>
              </li>
              <li>
                <Link href="/crm-email" className="text-fg/80 hover:text-orange-600">
                  CRM / Email
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="text-fg/80 hover:text-orange-600">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="/seo" className="text-fg/80 hover:text-orange-600">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-fg/80 hover:text-orange-600">
                  Tous les tarifs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Offres vidéo
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/offres#test-creatif" className="text-fg/80 hover:text-orange-600">
                  Test créatif · 890 €
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
                <Link href="/startups-preseed" className="text-fg/80 hover:text-orange-600">
                  Startups pre-seed
                </Link>
              </li>
              <li>
                <Link href="/app-mobile-b2c" className="text-fg/80 hover:text-orange-600">
                  App mobile B2C
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
