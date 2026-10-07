import type { Metadata } from "next";
import { IcpLanding } from "@/components/IcpLanding";

export const metadata: Metadata = {
  title: "Test créatif pour apps mobiles B2C",
  description:
    "Testez 5 angles publicitaires en vidéo IA avant de pousser du budget sur votre app mobile B2C. Prix publics, livré en 5 jours.",
};

export default function AppMobileB2cPage() {
  return <IcpLanding id="app-mobile-b2c" />;
}
