# Gratia — Leads Dashboard

Internal dashboard (Next.js 14 / App Router) tracking two HubSpot lead flows, styled
to match gogratia.com's brand identity (deep emerald surface, bright mint/emerald
accent, white nav pill with the "↗" logo mark).

1. **Leads [BDev]** — contacts created via the *BDev Ventures by WinDifferent*
   integration (`hs_object_source_detail_1 = "BDev Ventures by WinDifferent"`),
   treated as MQL. Each lead can be moved **MQL → Converted → Signed** (and back);
   the status is saved in the browser (`localStorage`). Below the board, a
   **monthly recap** shows a color-coded bar per month plus a full sortable table
   of every MQL lead (month badge, date, name, email, title, status, HubSpot link).
   Month colors are fixed per calendar month (never re-cycled) so "April" is
   always the same color everywhere.
2. **New Form Submissions** — contacts created via the *Scope your project* form
   (`hs_object_source_label = "FORM"`), auto-split into **Business/verified** vs
   **Trash/personal** by email domain (gmail, yahoo, hotmail, common typos like
   `gmaio.com`/`36gmail.com`, etc.). Each can be corrected by hand ("Reclassify"),
   also saved. The 5 `@gogratia.com` addresses (internal team tests) are counted
   separately, collapsed by default.
3. **Ops Campaign (Clay)** — placeholder tab for a campaign being built in Clay
   (not live yet). Links out to the Clay workbook; once the campaign sends, its
   leads get the same MQL → Converted → Signed board as [BDev].

## Data

The BDev/Form data is a **frozen snapshot** pulled from HubSpot on Sept 3, 2026
(`lib/seed-data.ts`) — 18 [BDev] leads, 41 form submissions. It is not a live
connection.

### Going live (optional)

1. Create a HubSpot Private App with the `crm.objects.contacts.read` scope.
2. Add `HUBSPOT_PRIVATE_APP_TOKEN` as a Vercel env var.
3. Replace the `lib/seed-data.ts` read with a server call (`app/api/.../route.ts`)
   to `POST /crm/v3/objects/contacts/search` using the same filters
   (`hs_object_source_detail_1 = BDev Ventures by WinDifferent` /
   `hs_object_source_label = FORM`).
4. For "Converted / Signed" and reclassifications to sync back into HubSpot
   instead of the browser, write the status to a dedicated HubSpot property via
   `PATCH /crm/v3/objects/contacts/{id}` on each move.
5. For the Clay Ops Campaign tab, this session's Clay connection only reaches
   Clay Audiences (accounts/contacts/deals synced from a CRM), not raw workbook
   table rows — so the linked workbook's leads aren't readable from here yet.
   The simplest path once the campaign is live: route its leads into HubSpot
   (same as [BDev]/the form) so the existing data model just picks them up.

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed to Vercel with **password protection** (Vercel Deployment Protection) —
the app itself has no built-in auth.
