import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cortiq.fr"),
  title: {
    default: "Cortiq · Des vidéos de pub qui donnent envie de cliquer",
    template: "%s · Cortiq",
  },
  description:
    "Des vidéos publicitaires prêtes à poster, écrites par une personne, fabriquées avec de l'intelligence artificielle, livrées en 72 h. Trois formules dès 790 € HT, expliquées simplement.",
  openGraph: {
    title: "Cortiq · Des vidéos de pub qui donnent envie de cliquer",
    description:
      "Vous n'avez pas besoin de comprendre la technique : c'est notre travail, du texte à la fabrication, livré en 72 h.",
    url: "https://cortiq.fr",
    siteName: "Cortiq",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
