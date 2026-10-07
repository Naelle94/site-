import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cortiq.fr"),
  title: {
    default: "Cortiq · Le crash-test créatif de vos pubs",
    template: "%s · Cortiq",
  },
  description:
    "Testez 5 angles publicitaires en vidéo IA avant de payer un tournage. Crash-test 890 € HT, Lab 1 690 € HT/mois, à la demande 220 € HT/vidéo. Prix publics, livré en 5 jours.",
  openGraph: {
    title: "Cortiq · Le crash-test créatif de vos pubs",
    description:
      "5 angles testés en vidéo IA en 5 jours. Vous ne dépensez gros que sur ce qui a déjà gagné.",
    url: "https://cortiq.fr",
    siteName: "Cortiq",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cortiq",
  url: "https://cortiq.fr",
  logo: "https://cortiq.fr/favicon.svg",
  description:
    "Cortiq teste 5 angles publicitaires en vidéo générée par IA avant qu'une marque ne paie un tournage classique.",
  sameAs: ["https://www.linkedin.com"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
