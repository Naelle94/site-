export const clients = [
  "Gratia",
  "Badger",
  "Keez",
  "Fullphysio",
  "Overloop AI",
  "Skill Yoga",
  "YSL",
  "L'Oréal",
];

export const offers = [
  {
    index: "01",
    slug: "prospection-qualifiee",
    name: "Prospection qualifiée",
    tag: "Outbound",
    promise: "Un nombre de rendez-vous qualifiés livrés par mois, défini avant le début de la mission.",
    metric: "RDV honorés",
    metrics: ["RDV honorés", "Taux de réponse", "Taux de conversion RDV → opportunité"],
    playbookTitle: "Le playbook",
    playbook:
      "ICP, séquences email/LinkedIn testées, critères de qualification d'un RDV. Exécutable par un SDR freelance suivant le playbook, avec QA hebdomadaire de Cortiq sur les réponses et la liste.",
    channels: ["Cold email", "LinkedIn outbound", "Qualification"],
  },
  {
    index: "02",
    slug: "acquisition-payante-pilotee",
    name: "Acquisition payante pilotée",
    tag: "Meta / LinkedIn Ads",
    promise: "Un coût par lead ou par acquisition cible, atteint sous un délai fixé.",
    metric: "CPL / CAC",
    metrics: ["CPL", "CAC", "Volume de leads qualifiés"],
    playbookTitle: "Le playbook",
    playbook:
      "Structure de campagne, cadence de test créatif hebdomadaire, tracking. Exécutable par un media buyer freelance suivant le playbook, avec arbitrage budgétaire fait par Cortiq.",
    channels: ["Meta Ads", "LinkedIn Ads", "Tracking & tests créatifs"],
  },
] as const;

export const audit = {
  name: "Audit growth 90 jours",
  tagline: "La porte d'entrée",
  description:
    "Diagnostic chiffré qui priorise laquelle des deux offres a le meilleur ratio effort/impact pour ce stade de l'entreprise. Pas de troisième offre en parallèle : on choisit un levier, on le pousse à fond, on mesure.",
};

export const principles = [
  {
    index: "01",
    title: "Un chiffre, pas un dashboard",
    description:
      "Chaque offre a un seul indicateur de succès défini au départ. Le reporting existe pour suivre ce chiffre, pas pour impressionner.",
  },
  {
    index: "02",
    title: "Playbook avant freelance",
    description:
      "Aucune offre n'est vendue tant que son playbook n'est pas écrit et testé par Cortiq elle-même. L'externalisation devient fiable : le freelance exécute un process prouvé, il ne réinvente rien.",
  },
  {
    index: "03",
    title: "Cycles courts de 30 jours",
    description:
      "Plus courts que les sprints trimestriels classiques du marché : assez de temps pour un premier signal fiable, assez court pour ajuster vite si le levier ne prend pas.",
  },
  {
    index: "04",
    title: "QA systématique",
    description:
      "Cortiq relit les livrables du freelance chaque semaine (séquences, créas, ciblage) avant diffusion. La qualité ne dépend jamais d'un seul exécutant.",
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Génération de la demande",
    description:
      "Contenu de marque personnelle et études de cas chiffrées publiées après chaque cycle, pas de SEO programmatique.",
  },
  {
    index: "02",
    title: "Audit growth 90 jours",
    description: "Diagnostic qui tranche entre outbound et paid comme premier levier.",
  },
  {
    index: "03",
    title: "Écriture du playbook",
    description:
      "Si pas déjà existant pour ce type de client : Cortiq exécute elle-même le premier cycle pour valider le process avant de le déléguer.",
  },
  {
    index: "04",
    title: "Sourcing et qualification des freelances",
    description:
      "Critères fixes (références vérifiées, test sur un cas réel avant intégration au réseau), pour garantir la fiabilité annoncée au client.",
  },
  {
    index: "05",
    title: "Cycle d'exécution (30 jours)",
    description: "Le freelance suit le playbook, Cortiq fait la QA hebdomadaire et le pilotage stratégique.",
  },
  {
    index: "06",
    title: "Bilan de cycle",
    description:
      "Chiffre atteint ou non face à la promesse initiale, décision conjointe : reconduire le levier, ajuster le playbook, ou basculer sur l'autre offre.",
  },
  {
    index: "07",
    title: "Capitalisation",
    description:
      "Chaque cycle terminé enrichit le playbook (ce qui a marché, ce qui n'a pas marché) et alimente la prochaine étude de cas publiée.",
  },
];

export const audience = [
  "Startups pré-seed à Series A, B2B ou B2C, en France.",
  "Fondateurs sans CMO ni growth lead en interne, qui veulent un chiffre garanti plutôt qu'un accompagnement flou.",
  "Profils qui préfèrent un levier bien exécuté à une stratégie multi-canal diluée.",
];

export const differentiation = {
  features: {
    title: "Sur les features",
    description:
      "Deux offres au lieu d'un catalogue à la carte. La lisibilité devient l'argument commercial : le client sait exactement ce qu'il achète et à quel chiffre il doit s'attendre, ce qu'aucune agence multi-piliers ne peut offrir aussi simplement.",
  },
  pricing: {
    title: "Sur le prix",
    description:
      "Une base fixe qui couvre le playbook et le freelance, plus une part variable indexée sur le chiffre livré (par RDV qualifié, ou par lead au CPL cible atteint). C'est un prix qui parle le même langage que la promesse. Peu d'acteurs du marché structurent leur prix ainsi sur ce segment.",
  },
};
