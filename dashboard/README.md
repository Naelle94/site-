# Gratia — Leads Dashboard

Dashboard interne (Next.js 14 / App Router) pour suivre deux flux de leads HubSpot :

1. **Leads [BDev]** — contacts créés via l'intégration *BDev Ventures by WinDifferent*
   (`hs_object_source_detail_1 = "BDev Ventures by WinDifferent"`), traités comme MQL.
   Chaque lead peut être déplacé **MQL → Converti → Signé** (et inversement) ; le statut
   est sauvegardé dans le navigateur (`localStorage`).
2. **New Form Submissions** — contacts créés via le formulaire *Scope your project*
   (`hs_object_source_label = "FORM"`), classés automatiquement en **Entreprise / vérifié**
   vs **Poubelle / personnel** selon le domaine d'email (gmail, yahoo, hotmail, etc.).
   Chaque classement peut être corrigé à la main ("Reclasser"), également sauvegardé.
   Les adresses `@gogratia.com` (tests internes) sont comptées à part.

## Données

Les données sont un **instantané** extrait de HubSpot le 3 septembre 2026
(`lib/seed-data.ts`) — 18 leads [BDev], 41 soumissions de formulaire. Elles ne se
raffraîchissent pas automatiquement : ce n'est pas une connexion live à HubSpot.

### Passer en données live (optionnel)

Pour brancher le dashboard directement sur l'API HubSpot :

1. Créer une Private App HubSpot avec le scope `crm.objects.contacts.read`.
2. Ajouter la variable d'environnement `HUBSPOT_PRIVATE_APP_TOKEN` dans le projet Vercel.
3. Remplacer la lecture de `lib/seed-data.ts` par un appel serveur (`app/api/.../route.ts`)
   vers `POST /crm/v3/objects/contacts/search` avec les mêmes filtres
   (`hs_object_source_detail_1 = BDev Ventures by WinDifferent` /
   `hs_object_source_label = FORM`).
4. Pour que "Converti / Signé" et les reclassements se synchronisent réellement dans
   HubSpot (au lieu du navigateur), écrire ce statut dans une propriété HubSpot dédiée
   via l'API `PATCH /crm/v3/objects/contacts/{id}` au moment du déplacement.

## Développement

```bash
npm install
npm run dev
```

## Déploiement

Déployé sur Vercel avec **protection par mot de passe** (Vercel Deployment Protection),
donc aucune authentification n'est gérée par l'application elle-même.
