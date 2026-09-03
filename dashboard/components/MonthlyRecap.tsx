"use client";

import { useMemo } from "react";
import type { BDevLead } from "@/lib/seed-data";
import { hubspotContactUrl } from "@/lib/seed-data";
import { formatDate } from "@/lib/format";
import { monthColor, monthIndex, yearMonthKey, yearMonthLabel } from "@/lib/month-colors";
import { STATUS_LABEL, STATUS_COLOR_CLASS } from "@/lib/bdev";
import type { BDevStatus } from "@/lib/storage";

export function MonthBadge({ iso }: { iso: string }) {
  const color = monthColor(monthIndex(iso));
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium"
      style={{ backgroundColor: `${color}29`, color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {yearMonthLabel(iso)}
    </span>
  );
}

export function MonthlyRecap({
  leads,
  statuses,
}: {
  leads: BDevLead[];
  statuses: Record<string, BDevStatus>;
}) {
  const groups = useMemo(() => {
    const byMonth = new Map<string, BDevLead[]>();
    for (const lead of leads) {
      const key = yearMonthKey(lead.createdate);
      const list = byMonth.get(key) ?? [];
      list.push(lead);
      byMonth.set(key, list);
    }
    return Array.from(byMonth.entries())
      .map(([key, monthLeads]) => ({
        key,
        label: yearMonthLabel(monthLeads[0].createdate),
        color: monthColor(monthIndex(monthLeads[0].createdate)),
        leads: monthLeads.sort((a, b) => (a.createdate < b.createdate ? 1 : -1)),
      }))
      .sort((a, b) => (a.key < b.key ? 1 : -1)); // most recent month first
  }, [leads]);

  const maxCount = Math.max(...groups.map((g) => g.leads.length), 1);

  const sortedLeads = useMemo(
    () => [...leads].sort((a, b) => (a.createdate < b.createdate ? 1 : -1)),
    [leads]
  );

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-surface-600/60 bg-surface-900/60 p-4">
        <h3 className="mb-3 text-sm font-semibold text-paper-50">Leads by month</h3>
        <div className="space-y-2">
          {groups.map((g) => (
            <div key={g.key} className="flex items-center gap-3">
              <span className="w-20 shrink-0 text-xs text-paper-100/55">{g.label}</span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-700/60">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(g.leads.length / maxCount) * 100}%`,
                    backgroundColor: g.color,
                  }}
                />
              </div>
              <span className="w-6 shrink-0 text-right text-xs font-semibold text-paper-100/70">
                {g.leads.length}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-surface-600/60 bg-surface-900/60">
        <h3 className="px-4 pt-4 text-sm font-semibold text-paper-50">
          All MQL leads — full recap ({leads.length})
        </h3>
        <table className="mt-3 w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-y border-surface-600/50 text-[11px] uppercase tracking-wide text-paper-100/40">
              <th className="px-4 py-2 font-medium">Month</th>
              <th className="px-4 py-2 font-medium">Date</th>
              <th className="px-4 py-2 font-medium">Name</th>
              <th className="px-4 py-2 font-medium">Email</th>
              <th className="px-4 py-2 font-medium">Title</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {sortedLeads.map((lead) => {
              const status = statuses[lead.id] ?? "mql";
              return (
                <tr key={lead.id} className="border-b border-surface-700/40 last:border-0">
                  <td className="px-4 py-2">
                    <MonthBadge iso={lead.createdate} />
                  </td>
                  <td className="px-4 py-2 text-paper-100/60">{formatDate(lead.createdate)}</td>
                  <td className="px-4 py-2 font-medium text-paper-50">
                    {lead.firstname} {lead.lastname}
                  </td>
                  <td className="px-4 py-2 text-paper-100/60">{lead.email}</td>
                  <td className="px-4 py-2 text-paper-100/50">{lead.jobtitle ?? "—"}</td>
                  <td className={`px-4 py-2 font-medium ${STATUS_COLOR_CLASS[status]}`}>
                    {STATUS_LABEL[status]}
                  </td>
                  <td className="px-4 py-2 text-right">
                    <a
                      href={hubspotContactUrl(lead.id)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-signal-info/80 hover:text-signal-info"
                    >
                      HubSpot ↗
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
