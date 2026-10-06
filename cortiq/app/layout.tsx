import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cortiq.fr"),
  title: {
    default: "Cortiq — Des UGC IA qui font baisser votre CPA",
    template: "%s · Cortiq",
  },
  description:
    "Des créas UGC produites par IA, scriptées par des humains, pilotées par la data. Stratégie, script et production, livrés sous 72 h. 3 packs dès 790 € HT.",
  openGraph: {
    title: "Cortiq — Des UGC IA qui font baisser votre CPA",
    description:
      "Stratégie, script et production de vidéos UGC, livrées sous 72 h. Dashboard CTR / hook rate / CPA par angle inclus.",
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
