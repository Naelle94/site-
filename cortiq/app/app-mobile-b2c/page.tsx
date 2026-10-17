import type { Metadata } from "next";
import { IcpLanding } from "@/components/IcpLanding";

export const metadata: Metadata = {
  title: "Acquisition pour apps mobiles B2C",
  description:
    "Meta Ads, Instagram et CRM/Email pour votre app mobile B2C. Prix publics, pensés pour baisser votre coût par installation.",
};

export default function AppMobileB2cPage() {
  return <IcpLanding id="app-mobile-b2c" />;
}
