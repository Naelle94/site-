import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cortiq.vercel.app"),
  title: {
    default: "Cortiq — Growth partner fractional pour startups",
    template: "%s · Cortiq",
  },
  description:
    "Cortiq est un partenaire growth fractional pour startups early-stage. Deux offres, un chiffre garanti : prospection qualifiée et acquisition payante pilotée.",
  openGraph: {
    title: "Cortiq — Un chiffre garanti. Pas un catalogue de prestations.",
    description:
      "Partenaire growth fractional pour startups pré-seed à Series A. Prospection qualifiée, acquisition payante pilotée, audit growth 90 jours.",
    url: "https://cortiq.vercel.app",
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
