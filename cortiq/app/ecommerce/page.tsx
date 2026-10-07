import type { Metadata } from "next";
import { IcpLanding } from "@/components/IcpLanding";

export const metadata: Metadata = {
  title: "Test créatif pour l'e-commerce",
  description:
    "5 angles produit testés en vidéo IA pour le prix de deux vidéos d'agence, avec garantie si aucune ne bat votre publicité actuelle.",
};

export default function EcommercePage() {
  return <IcpLanding id="ecommerce" />;
}
