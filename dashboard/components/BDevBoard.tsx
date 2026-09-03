"use client";

import { useEffect, useMemo, useState } from "react";
import { BDEV_LEADS, hubspotContactUrl } from "@/lib/seed-data";
import { formatDate, relativeFromNow } from "@/lib/format";
import { readBDevStatuses, writeBDevStatus, type BDevStatus } from "@/lib/storage";
import { STATUS_LABEL, NEXT_STATUS, PREV_STATUS } from "@/lib/bdev";
import { StatTile } from "./StatTile";
import { MonthBadge, MonthlyRecap } from "./MonthlyRecap";

const COLUMNS: { key: BDevStatus; title: string; accent: string; dot: string }[] = [
  { key: "mql", title: "MQL — new", accent: "border-signal-info/40", dot: "bg-signal-info" },
  { key: "converti", title: "Converted", accent: "border-brand-500/40", dot: "bg-brand-500" },
  { key: "signe", title: "Signed", accent: "border-signal-success/40", dot: "bg-signal-success" },
];

export function BDevBoard() {
  const [statuses, setStatuses] = useState<Record<string, BDevStatus>>({});
  const [query, setQuery] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setStatuses(readBDevStatuses());
    setHydrated(true);
  }, []);

  function move(id: string, status: BDevStatus) {
    setStatuses((prev) => ({ ...prev, [id]: status }));
    writeBDevStatus(id, status);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return BDEV_LEADS;
    return BDEV_LEADS.filter((lead) => {
      const haystack = `${lead.firstname} ${lead.lastname} ${lead.email} ${lead.jobtitle ?? ""} ${lead.city ?? ""}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  const byColumn = useMemo(() => {
    const grouped: Record<BDevStatus, typeof BDEV_LEADS> = { mql: [], converti: [], signe: [] };
    for (const lead of filtered) {
      const status = statuses[lead.id] ?? "mql";
      grouped[status].push(lead);
    }
    return grouped;
  }, [filtered, statuses]);

  const totalCounts = useMemo(() => {
    const counts: Record<BDevStatus, number> = { mql: 0, converti: 0, signe: 0 };
    for (const lead of BDEV_LEADS) {
      const status = statuses[lead.id] ?? "mql";
      counts[status] += 1;
    }
    return counts;
  }, [statuses]);

  const newLast7d = BDEV_LEADS.filter((l) => relativeIsRecent(l.createdate, 7)).length;

  return (
    <div className="space-y-8">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile label="Total leads [BDev]" value={BDEV_LEADS.length} accent="info" />
          <StatTile label="MQL pending" value={totalCounts.mql} accent="info" />
          <StatTile label="Converted" value={totalCounts.converti} accent="brand" />
          <StatTile label="Signed" value={totalCounts.signe} accent="success" hint={`${newLast7d} new (7d)`} />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper-100/45">
            Source: HubSpot contacts from <code className="rounded bg-surface-800 px-1.5 py-0.5 text-brand-400/90">BDev Ventures by WinDifferent</code>
            {" — "}treated as MQL by default. Move a card to change its status; the choice is saved automatically in this browser.
          </p>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a lead…"
            className="w-full rounded-lg border border-surface-600 bg-surface-800 px-3 py-1.5 text-sm text-paper-50 placeholder:text-paper-100/30 focus:border-brand-500/60 focus:outline-none sm:w-64"
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.key} className={`rounded-xl border bg-surface-900/60 p-3 ${col.accent}`}>
              <div className="mb-3 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${col.dot}`} />
                  <h3 className="text-sm font-semibold text-paper-50">{col.title}</h3>
                </div>
                <span className="text-xs text-paper-100/40">{byColumn[col.key].length}</span>
              </div>

              <div className="space-y-2.5">
                {hydrated && byColumn[col.key].length === 0 && (
                  <p className="rounded-lg border border-dashed border-surface-600 px-3 py-6 text-center text-xs text-paper-100/30">
                    No leads here
                  </p>
                )}
                {byColumn[col.key].map((lead) => (
                  <LeadCard key={lead.id} lead={lead} status={col.key} onMove={move} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <MonthlyRecap leads={BDEV_LEADS} statuses={statuses} />
    </div>
  );
}

function relativeIsRecent(iso: string, days: number) {
  const diff = (Date.now() - new Date(iso).getTime()) / 86400000;
  return diff <= days;
}

function LeadCard({
  lead,
  status,
  onMove,
}: {
  lead: (typeof BDEV_LEADS)[number];
  status: BDevStatus;
  onMove: (id: string, status: BDevStatus) => void;
}) {
  const next = NEXT_STATUS[status];
  const prev = PREV_STATUS[status];
  const domain = lead.email.split("@")[1] ?? "";

  return (
    <div className="rounded-lg border border-surface-600/60 bg-surface-800/80 p-3 shadow-card">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-paper-50">
            {lead.firstname} {lead.lastname}
          </p>
          <a
            href={`mailto:${lead.email}`}
            className="block truncate text-xs text-paper-100/50 hover:text-brand-400"
          >
            {lead.email}
          </a>
        </div>
        <span
          className="shrink-0 rounded-full bg-surface-700 px-2 py-0.5 text-[10px] font-medium text-paper-100/60"
          title="Domain"
        >
          {domain}
        </span>
      </div>

      {(lead.jobtitle || lead.city) && (
        <p className="mt-1.5 text-xs text-paper-100/45">
          {[lead.jobtitle, [lead.city, lead.country].filter(Boolean).join(", ")]
            .filter(Boolean)
            .join(" · ")}
        </p>
      )}

      <div className="mt-2 flex items-center justify-between text-[11px]">
        <MonthBadge iso={lead.createdate} />
        <span className="text-paper-100/35" title={formatDate(lead.createdate)}>
          {relativeFromNow(lead.createdate)}
        </span>
      </div>

      <div className="mt-2 flex items-center justify-between text-[11px] text-paper-100/35">
        <a
          href={hubspotContactUrl(lead.id)}
          target="_blank"
          rel="noreferrer"
          className="text-signal-info/80 hover:text-signal-info"
        >
          HubSpot ↗
        </a>
      </div>

      <div className="mt-2.5 flex items-center gap-1.5">
        {prev && (
          <button
            onClick={() => onMove(lead.id, prev)}
            className="rounded-md border border-surface-600 px-2 py-1 text-[11px] text-paper-100/60 hover:border-surface-500 hover:text-paper-50"
          >
            ← {STATUS_LABEL[prev]}
          </button>
        )}
        {next && (
          <button
            onClick={() => onMove(lead.id, next)}
            className="flex-1 rounded-md bg-brand-500/15 px-2 py-1 text-[11px] font-medium text-brand-400 hover:bg-brand-500/25"
          >
            → {STATUS_LABEL[next]}
          </button>
        )}
      </div>
    </div>
  );
}
