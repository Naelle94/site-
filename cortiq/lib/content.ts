export const packs = [
  {
    id: "test",
    name: "Test",
    tagline: "1er mois",
    videos: 10,
    price: 790,
    pricePerVideo: 79,
    description:
      "Pour valider l'angle et le format avant de monter en volume.",
    highlight: false,
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Le plus choisi",
    videos: 20,
    price: 1690,
    pricePerVideo: 84,
    description:
      "Pour tester plusieurs angles en parallèle et faire tourner la boucle d'itération.",
    highlight: true,
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Volume",
    videos: 50,
    price: 3490,
    pricePerVideo: 70,
    description:
      "Pour saturer vos emplacements pub avec un flux constant de créas neuves.",
    highlight: false,
  },
] as const;

export const packIncludes = [
  "Brief stratégique : audit de vos pubs actuelles, 3 à 5 angles d'attaque, personas.",
  "Scripts : 1 hook principal + 2 variantes de hook par concept.",
  "Production : 2 à 3 avatars différents, formats 9:16 et 4:5, sous-titres à la charte.",
  "1 tour de révision sur les scripts + 1 tour sur les vidéos.",
  "Livraison sous 72 h ouvrées après validation des scripts.",
  "Accès au dashboard de suivi.",
];

export const packOptions = [
  { label: "Format additionnel (1:1 ou 16:9)", price: "+15 € / vidéo" },
  { label: "Version langue étrangère", price: "+30 € / vidéo" },
  { label: "Livraison en 24 h", price: "+30 %" },
  { label: "Tour de révision supplémentaire", price: "+90 €" },
  { label: "Analyse mensuelle approfondie en visio", price: "+250 €" },
];

export const processSteps = [
  {
    index: "01",
    title: "Stratégie",
    summary: "On ne tourne rien avant d'avoir un angle qui tient debout.",
    details: [
      "Audit de vos publicités actuelles et de celles qui marchent dans votre secteur.",
      "3 à 5 angles d'attaque distincts, pas 30 variantes du même angle.",
      "Personas et preuves à exploiter : ce que vos clients disent déjà de vous.",
    ],
  },
  {
    index: "02",
    title: "Script",
    summary: "Écrit par une humaine francophone, validé avant toute production.",
    details: [
      "1 hook principal + 2 variantes par concept, pensés pour les 3 premières secondes.",
      "Un tour de révision inclus sur les scripts, avant que la moindre vidéo soit générée.",
      "Réviser un script ne coûte rien ; réviser une vidéo déjà tournée, si.",
    ],
  },
  {
    index: "03",
    title: "Livrables",
    summary: "72 h ouvrées après validation, prêts à poster.",
    details: [
      "2 à 3 avatars différents par pack pour éviter la lassitude publicitaire.",
      "Formats 9:16 et 4:5, sous-titres à votre charte, livrés dans le dashboard.",
      "Les vidéos gagnantes du mois nourrissent les scripts du mois suivant.",
    ],
  },
];

export const dashboardMetrics = [
  { label: "CTR", description: "Taux de clic par vidéo et par angle" },
  { label: "Hook rate", description: "% qui regarde au-delà des 3 premières secondes" },
  { label: "CPA par angle", description: "Coût d'acquisition, angle par angle" },
  { label: "Statut de livraison", description: "Script → production → livré" },
];

export const differentiators = [
  {
    index: "01",
    title: "Des concepts, pas des fichiers",
    description:
      "Un pack, c'est 3 à 5 angles différents déclinés en hooks. Trente variantes du même angle n'apprennent qu'une chose ; dix angles en apprennent dix.",
  },
  {
    index: "02",
    title: "Un dashboard, pas un drive partagé",
    description:
      "Vidéos livrées, statut, CTR, hook rate, CPA par angle si vous connectez Meta ou TikTok. Vous voyez ce qui marche sans nous demander.",
  },
  {
    index: "03",
    title: "Une boucle d'itération",
    description:
      "Chaque mois, les vidéos gagnantes nourrissent les scripts suivants. C'est ce qui justifie un abonnement plutôt qu'un achat ponctuel.",
  },
  {
    index: "04",
    title: "72 h, pas 2 à 3 semaines",
    description:
      "Le délai d'une agence UGC classique sert à caster des créateurs humains. Nous, non.",
  },
  {
    index: "05",
    title: "Diversité de visages",
    description:
      "2 à 3 avatars par pack minimum, pour éviter l'effet « toujours le même visage » qui use vos audiences.",
  },
  {
    index: "06",
    title: "Scripté en France, pour la France",
    description:
      "Références culturelles locales, écrit par une humaine francophone — la plupart des outils du marché pensent en anglais.",
  },
];

export const comparisons = [
  {
    label: "Outils self-service",
    detail: "Vous pilotez seul le script, les angles et les tests.",
  },
  {
    label: "Créateur UGC humain",
    detail: "2 à 4 fois plus cher, délai de 1 à 3 semaines.",
  },
  {
    label: "Cortiq",
    detail: "Stratégie, script et production pilotés, livrés sous 72 h.",
    highlight: true,
  },
];

export const trustPoints = [
  {
    title: "IA assumée",
    description:
      "Des créas UGC produites par IA, scriptées par des humains, pilotées par la data. On vous dit tout, y compris comment c'est fait.",
  },
  {
    title: "Conforme AI Act",
    description:
      "Mention et label IA activés sur chaque diffusion, checklist fournie à la livraison.",
  },
  {
    title: "Jamais de visage réel",
    description:
      "Nos avatars sont vérifiés avant livraison : aucun visage reconnaissable, aucune célébrité, aucun faux témoignage nominatif.",
  },
  {
    title: "Droits cédés",
    description:
      "Les droits d'exploitation publicitaire des vidéos livrées vous sont cédés dans le contrat.",
  },
];

export const guarantee = {
  title: "Garantie de lancement",
  description:
    "Si aucune vidéo du Pack Test ne bat le CTR de votre publicité actuelle, il est remboursé à 50 %.",
};

export const excludedSectors = [
  "Santé réglementée",
  "Crypto-actifs",
  "Politique",
  "Alcool",
];
