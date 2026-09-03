"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Tabs, type TabKey } from "@/components/Tabs";
import { BDevBoard } from "@/components/BDevBoard";
import { FormSubmissionsPanel } from "@/components/FormSubmissionsPanel";
import { ClayOpsPanel } from "@/components/ClayOpsPanel";
import { BDEV_LEADS, FORM_SUBMISSIONS } from "@/lib/seed-data";

const SNAPSHOT_DATE = "September 3, 2026";

export default function Page() {
  const [tab, setTab] = useState<TabKey>("bdev");

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <Tabs
          active={tab}
          onChange={setTab}
          counts={{ bdev: BDEV_LEADS.length, forms: FORM_SUBMISSIONS.length }}
        />
        <div className="pt-5">
          {tab === "bdev" && <BDevBoard />}
          {tab === "forms" && <FormSubmissionsPanel />}
          {tab === "clay" && <ClayOpsPanel />}
        </div>
        <footer className="mt-10 border-t border-surface-600/40 pt-4 text-xs text-paper-100/30">
          HubSpot snapshot as of {SNAPSHOT_DATE} (Gratia portal). Statuses and
          reclassifications you choose are saved in this browser.
        </footer>
      </main>
    </div>
  );
}
