"use client";

import { useEffect, useMemo, useState } from "react";
import { FORM_SUBMISSIONS, hubspotContactUrl, type FormSubmission } from "@/lib/seed-data";
import { classifyEmail, domainOf, type EmailClass } from "@/lib/email-classifier";
import { formatDate, relativeFromNow } from "@/lib/format";
import { readFormOverrides, writeFormOverride } from "@/lib/storage";
import { StatTile } from "./StatTile";
import { MonthBadge } from "./MonthlyRecap";

type Bucket = "business" | "personal";

type ClassifiedSubmission = FormSubmission & {
  bucket: EmailClass;
  autoClass: EmailClass;
  wasOverridden: boolean;
};

export function FormSubmissionsPanel() {
  const [overrides, setOverrides] = useState<Record<string, Bucket>>({});
  const [query, setQuery] = useState("");
  const [showInternal, setShowInternal] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setOverrides(readFormOverrides());
    setHydrated(true);
  }, []);

  function toggle(id: string, current: Bucket) {
    const next: Bucket = current === "business" ? "personal" : "business";
    setOverrides((prev) => ({ ...prev, [id]: next }));
    writeFormOverride(id, next);
  }

  const classified: ClassifiedSubmission[] = useMemo(() => {
    return FORM_SUBMISSIONS.map((sub): ClassifiedSubmission => {
      const auto = classifyEmail(sub.email);
      const bucket: EmailClass = overrides[sub.id] ?? auto;
      return { ...sub, bucket, autoClass: auto, wasOverridden: Boolean(overrides[sub.id]) };
    });
  }, [overrides]);

  const filtered: ClassifiedSubmission[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return classified;
    return classified.filter((sub) => {
      const haystack = `${sub.firstname} ${sub.lastname} ${sub.email} ${sub.formName}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [classified, query]);

  const business = filtered.filter((s) => s.bucket === "business");
  const personal = filtered.filter((s) => s.bucket === "personal");
  const internal = filtered.filter((s) => s.bucket === "internal");

  const totalBusiness = classified.filter((s) => s.bucket === "business").length;
  const totalPersonal = classified.filter((s) => s.bucket === "personal").length;
  const totalInternal = classified.filter((s) => s.bucket === "internal").length;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label="Total submissions" value={FORM_SUBMISSIONS.length} accent="info" />
        <StatTile label="Business / verified" value={totalBusiness} accent="success" />
        <StatTile label="Trash / personal" value={totalPersonal} accent="danger" />
        <StatTile label="Internal (gogratia.com test)" value={totalInternal} accent="brand" hint="excluded from totals above" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-paper-100/45">
          Source: the <code className="rounded bg-surface-800 px-1.5 py-0.5 text-brand-400/90">Scope your project</code> form
          {" — "}auto-classified by email domain. Click &quot;Reclassify&quot; to correct by hand.
        </p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a submission…"
          className="w-full rounded-lg border border-surface-600 bg-surface-800 px-3 py-1.5 text-sm text-paper-50 placeholder:text-paper-100/30 focus:border-brand-500/60 focus:outline-none sm:w-64"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SubmissionColumn
          title="Business / verified"
          dot="bg-signal-success"
          border="border-signal-success/40"
          rows={business}
          hydrated={hydrated}
          onToggle={toggle}
          toggleLabel="→ Trash"
        />
        <SubmissionColumn
          title="Trash / personal"
          dot="bg-signal-danger"
          border="border-signal-danger/40"
          rows={personal}
          hydrated={hydrated}
          onToggle={toggle}
          toggleLabel="→ Business"
        />
      </div>

      {totalInternal > 0 && (
        <div className="rounded-lg border border-surface-600/60 bg-surface-900/40">
          <button
            onClick={() => setShowInternal((v) => !v)}
            className="flex w-full items-center justify-between px-4 py-2.5 text-xs text-paper-100/45 hover:text-paper-100/70"
          >
            <span>{totalInternal} internal @gogratia.com submission(s) (team tests, excluded from totals)</span>
            <span>{showInternal ? "hide −" : "show +"}</span>
          </button>
          {showInternal && (
            <div className="space-y-2 border-t border-surface-600/40 px-4 py-3">
              {internal.map((sub) => (
                <SubmissionRow key={sub.id} sub={sub} onToggle={toggle} toggleLabel="" hideToggle />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SubmissionColumn({
  title,
  dot,
  border,
  rows,
  hydrated,
  onToggle,
  toggleLabel,
}: {
  title: string;
  dot: string;
  border: string;
  rows: ClassifiedSubmission[];
  hydrated: boolean;
  onToggle: (id: string, current: Bucket) => void;
  toggleLabel: string;
}) {
  return (
    <div className={`rounded-xl border bg-surface-900/60 p-3 ${border}`}>
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${dot}`} />
          <h3 className="text-sm font-semibold text-paper-50">{title}</h3>
        </div>
        <span className="text-xs text-paper-100/40">{rows.length}</span>
      </div>
      <div className="max-h-[32rem] space-y-2 overflow-y-auto scrollbar-thin pr-1">
        {hydrated && rows.length === 0 && (
          <p className="rounded-lg border border-dashed border-surface-600 px-3 py-6 text-center text-xs text-paper-100/30">
            No submissions here
          </p>
        )}
        {rows.map((sub) => (
          <SubmissionRow key={sub.id} sub={sub} onToggle={onToggle} toggleLabel={toggleLabel} />
        ))}
      </div>
    </div>
  );
}

function SubmissionRow({
  sub,
  onToggle,
  toggleLabel,
  hideToggle,
}: {
  sub: ClassifiedSubmission;
  onToggle: (id: string, current: Bucket) => void;
  toggleLabel: string;
  hideToggle?: boolean;
}) {
  const domain = domainOf(sub.email);
  return (
    <div className="rounded-lg border border-surface-600/60 bg-surface-800/80 p-3 shadow-card">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-paper-50">
            {sub.firstname} {sub.lastname}
          </p>
          <a href={`mailto:${sub.email}`} className="block truncate text-xs text-paper-100/50 hover:text-brand-400">
            {sub.email}
          </a>
        </div>
        <span className="shrink-0 rounded-full bg-surface-700 px-2 py-0.5 text-[10px] font-medium text-paper-100/60">
          {domain}
        </span>
      </div>
      {sub.jobtitle && <p className="mt-1.5 text-xs text-paper-100/45">{sub.jobtitle}</p>}
      <div className="mt-2 flex items-center justify-between text-[11px]">
        <MonthBadge iso={sub.createdate} />
        <span className="text-paper-100/35" title={formatDate(sub.createdate)}>
          {relativeFromNow(sub.createdate)}
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between text-[11px] text-paper-100/35">
        <a href={hubspotContactUrl(sub.id)} target="_blank" rel="noreferrer" className="text-signal-info/80 hover:text-signal-info">
          HubSpot ↗
        </a>
      </div>
      {!hideToggle && (
        <button
          onClick={() => onToggle(sub.id, sub.bucket as Bucket)}
          className="mt-2.5 w-full rounded-md border border-surface-600 px-2 py-1 text-[11px] text-paper-100/60 hover:border-surface-500 hover:text-paper-50"
        >
          Reclassify {toggleLabel}
        </button>
      )}
      {sub.wasOverridden && (
        <p className="mt-1.5 text-[10px] text-brand-400/70">manually reclassified</p>
      )}
    </div>
  );
}
