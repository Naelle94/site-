export const tagline =
  "Pensé par une humaine, produit par IA, jugé par vos chiffres.";

export const packs = [
  {
    id: "crash-test",
    name: "Crash-test",
    tagline: "Le test avant la dépense",
    videos: 5,
    price: 890,
    priceUnit: "HT",
    pricePerVideo: 178,
    delay: "5 jours ouvrés",
    description:
      "5 angles différents testés en vidéo, pour à peu près le prix de deux vidéos d'agence.",
    includes: [
      "Casting à la carte parmi nos visages IA",
      "Une vidéo pilote validée avant le reste de la production",
      "Scripts écrits par une personne, pas générés",
      "Formats vertical et carré, sous-titrés",
      "Une révision gratuite par vidéo",
      "Mention IA activée, conforme à l'AI Act",
    ],
    cta: "Je lance mon crash-test",
    highlight: false,
  },
  {
    id: "lab",
    name: "Lab",
    tagline: "Le plus choisi",
    videos: 10,
    price: 1690,
    priceUnit: "HT / mois",
    pricePerVideo: 169,
    delay: "Boucle mensuelle",
    description:
      "10 vidéos testées chaque mois, construites sur les angles qui ont déjà gagné.",
    includes: [
      "Tout ce qui est dans Crash-test",
      "Angles proposés chaque mois à partir des résultats du mois précédent",
      "Scripts validés avant tournage, comme pour Crash-test",
      "Un rapport d'une page : qui a gagné, qui a perdu, pourquoi",
      "Dashboard live si vous connectez Meta ou TikTok",
    ],
    cta: "Je démarre mon Lab",
    highlight: true,
  },
  {
    id: "a-la-demande",
    name: "À la demande",
    tagline: "Pour clients déjà lancés",
    videos: 1,
    price: 220,
    priceUnit: "HT / vidéo",
    pricePerVideo: 220,
    delay: "3 jours ouvrés",
    description:
      "Une vidéo de plus, sans engagement, réservée aux clients déjà passés par un crash-test.",
    includes: [
      "Réservé aux clients déjà onboardés chez Cortiq",
      "Même script validé avant tournage",
      "Une révision gratuite",
      "Livrée en 3 jours ouvrés",
    ],
    cta: "Je commande une vidéo",
    highlight: false,
  },
] as const;

export const packOptions = [
  { label: "Révision supplémentaire (au-delà de celle incluse)", price: "+90 €" },
  { label: "Une version dans une autre langue", price: "+30 € / vidéo" },
  { label: "Format carré ou paysage en plus (1:1 ou 16:9)", price: "+15 € / vidéo" },
  { label: "Livraison express en 72 h au lieu de 5 jours", price: "+30 %" },
  { label: "Dashboard live connecté à vos comptes de pub", price: "Inclus en Lab" },
  { label: "Marque blanche, livré sous votre nom", price: "Sur devis" },
];

export const comparisonTable = [
  {
    name: "Cortiq",
    pricePerVideo: "178 à 220 €",
    delay: "5 jours",
    pricesPublic: true,
    isUs: true,
  },
  {
    name: "Agence Short",
    pricePerVideo: "≈ 500 €",
    delay: "3 à 4 semaines",
    pricesPublic: false,
    isUs: false,
  },
  {
    name: "Hoocq",
    pricePerVideo: "400 à 450 €",
    delay: "15 à 20 jours",
    pricesPublic: false,
    isUs: false,
  },
  {
    name: "Cosmy",
    pricePerVideo: "Sur devis",
    delay: "Variable",
    pricesPublic: false,
    isUs: false,
  },
  {
    name: "Takema",
    pricePerVideo: "Sur devis",
    delay: "Variable",
    pricesPublic: false,
    isUs: false,
  },
] as const;

export const processSteps = [
  {
    index: "J0",
    title: "Appel découverte",
    summary: "20 minutes pour regarder vos publicités actuelles ensemble.",
  },
  {
    index: "J0",
    title: "Paiement",
    summary: "Vous payez d'avance, prix HT. Aucune production ne démarre avant.",
  },
  {
    index: "J1",
    title: "Fiche ADN et 5 angles",
    summary: "On formalise votre marque et on propose 5 angles vraiment différents.",
  },
  {
    index: "J1",
    title: "Scripts",
    summary: "Une personne écrit le texte de chaque vidéo, pas une IA.",
  },
  {
    index: "J3",
    title: "Vidéo pilote",
    summary: "Une première vidéo validée avant de lancer le reste de la production.",
  },
  {
    index: "J3",
    title: "Production",
    summary: "Les 4 autres angles sont fabriqués une fois le pilote approuvé.",
  },
  {
    index: "J5",
    title: "Livraison",
    summary: "5 vidéos livrées, vertical et carré, sous-titrées, mention IA activée.",
  },
  {
    index: "J5",
    title: "Lecture des résultats",
    summary: "On regarde ensemble quel angle a le meilleur hook rate.",
  },
  {
    index: "J+12",
    title: "Boucle suivante",
    summary: "En Lab, les angles gagnants deviennent la base du mois suivant.",
  },
] as const;

export const conceptSteps = [
  {
    index: "01",
    title: "Brief",
    summary: "Vous nous dites ce que vous vendez et à qui. On en tire 5 angles différents.",
  },
  {
    index: "02",
    title: "Test",
    summary: "5 vidéos IA, un script validé par vidéo. On mesure le hook rate de chacune.",
  },
  {
    index: "03",
    title: "Winner tourné",
    summary: "L'angle qui gagne devient la base de votre prochaine vague, en Lab ou à la demande.",
  },
] as const;

export const pilotExplainer = {
  title: "Pourquoi la vidéo pilote protège tout le monde",
  description:
    "On valide une vidéo avant de lancer les quatre autres. Si le ton ne va pas, on corrige le script et on refait le pilote, gratuitement. Changer un texte ne coûte rien ; changer quatre vidéos déjà tournées, oui. C'est ce point de contrôle qui protège votre marge et la nôtre.",
};

export const dashboardMetrics = [
  { label: "Hook rate", description: "La part de gens qui regardent plus de 3 secondes, par angle" },
  { label: "CTR", description: "Qui clique, vidéo par vidéo" },
  { label: "Coût par client obtenu", description: "Pour chaque angle testé" },
  { label: "Où en est chaque vidéo", description: "Script → pilote → production → livrée" },
];

export const recognitionPoints = [
  "J'ai déjà payé un tournage pour une pub qui n'a pas marché, et je ne veux pas recommencer.",
  "Un créateur UGC humain me facture 400 à 500 € la vidéo, et je dois attendre 2 à 3 semaines.",
  "Je ne sais pas quel angle va fonctionner avant de l'avoir vu en vidéo.",
];

export const goodFit = [
  "Vous vendez un produit ou un service et vous voulez tester plusieurs angles avant de miser gros sur un seul.",
  "Vous avez déjà tourné une publicité qui n'a pas donné ce que vous espériez.",
  "Vous préférez un prix public et un délai écrit plutôt qu'un devis sur mesure.",
];

export const badFit = [
  "Vous êtes dans la santé réglementée, la crypto, la politique ou l'alcool : l'AI Act est trop strict pour ce qu'on peut vous proposer aujourd'hui.",
  "Vous voulez une seule vidéo, une fois, sans vouloir tester ni comparer d'angles.",
];

export const guarantee = {
  title: "Et si aucune vidéo ne gagne ?",
  description:
    "Avec Crash-test, si aucune de nos 5 vidéos ne bat le hook rate de votre publicité actuelle au bout de 5 jours, on vous rembourse la moitié. On préfère perdre un peu d'argent sur votre premier test que vous laisser payer pour rien.",
};

export const faqByTheme = [
  {
    theme: "IA et confiance",
    items: [
      {
        question: "Qu'est-ce que le crash-test créatif ?",
        answer:
          "C'est le fait de tester 5 angles publicitaires différents en vidéo avant de payer un tournage classique. Vous ne misez gros que sur l'angle qui a déjà gagné.",
      },
      {
        question: "Les visages dans les vidéos, ce sont de vraies personnes ?",
        answer:
          "Non. Ce sont des personnages générés par IA, vérifiés avant chaque livraison pour qu'ils ne ressemblent à personne de connu ou d'identifiable.",
      },
      {
        question: "Une vidéo IA est-elle aussi performante qu'une vidéo tournée par un humain ?",
        answer:
          "Nous ne l'affirmons pas tant que nous n'avons pas trois cas clients pour le prouver. Nos vidéos sont conçues pour être testées contre vos meilleures publicités actuelles, et le Blind Test compare les deux à l'aveugle.",
      },
    ],
  },
  {
    theme: "Offres et prix",
    items: [
      {
        question: "Combien coûte une vidéo chez Cortiq ?",
        answer:
          "178 à 220 € la vidéo selon la formule, contre 400 à 500 € en moyenne chez une agence UGC classique en France en 2026. Les trois prix sont publics, sur la page Offres.",
      },
      {
        question: "Je dois m'engager combien de temps ?",
        answer:
          "Crash-test est un achat ponctuel. Lab se arrête ou se change d'un mois sur l'autre. À la demande n'a aucun engagement.",
      },
    ],
  },
  {
    theme: "Process et délais",
    items: [
      {
        question: "Comment tester plusieurs angles avant de payer un tournage ?",
        answer:
          "Avec Crash-test : on écrit 5 scripts différents, on valide une vidéo pilote, puis on tourne les 4 autres angles une fois le pilote approuvé. Voir la page Comment ça marche pour le détail des 9 étapes.",
      },
      {
        question: "Et si je n'aime pas le ton d'une vidéo ?",
        answer:
          "On corrige le script et on la refait, gratuitement, une fois par vidéo.",
      },
      {
        question: "Combien de temps avant ma première vidéo ?",
        answer: "5 jours ouvrés pour Crash-test et Lab, 3 jours ouvrés pour une vidéo à la demande.",
      },
    ],
  },
  {
    theme: "Droits et conformité",
    items: [
      {
        question:
          "Comment afficher la mention IA obligatoire sur Meta depuis l'AI Act du 2 août 2026 ?",
        answer:
          "Chaque vidéo livrée inclut la mention IA déjà activée, et une checklist de conformité vous est fournie à la livraison pour l'appliquer sur vos comptes publicitaires.",
      },
      {
        question: "Qui possède les vidéos une fois livrées ?",
        answer:
          "Vous. Le droit de les utiliser dans vos publicités est donné dans le contrat, sans limite de durée.",
      },
    ],
  },
];

export const faq: { question: string; answer: string }[] = faqByTheme.flatMap(
  (t) => t.items
);
export const faqShort = faq.slice(0, 3);

export const glossary = [
  {
    term: "Crash-test créatif",
    definition:
      "Le fait de tester plusieurs angles publicitaires en vidéo avant de payer un tournage classique. On ne mise gros que sur l'angle qui a déjà gagné le test.",
  },
  {
    term: "Hook rate",
    definition:
      "La part de personnes qui continuent de regarder une vidéo après les 3 premières secondes. C'est le chiffre qui dit si un angle accroche ou non.",
  },
  {
    term: "Angle",
    definition:
      "Une façon différente de présenter le même produit : par le prix, par le problème résolu, par la preuve sociale. Un crash-test teste plusieurs angles en même temps.",
  },
  {
    term: "UGC (publicité)",
    definition:
      "Un format de vidéo publicitaire qui imite un contenu amateur, filmé caméra au poing par une personne qui parle de son expérience avec le produit.",
  },
  {
    term: "Vidéo pilote",
    definition:
      "La première vidéo d'un crash-test, validée avant de lancer la production des autres angles. Elle protège le client d'un script qui ne lui convient pas.",
  },
  {
    term: "Winner",
    definition:
      "L'angle d'un crash-test qui obtient le meilleur hook rate ou le meilleur CTR. Il devient la base des scripts du mois suivant en formule Lab.",
  },
] as const;

export const blindTest = {
  title: "Vidéo IA ou vidéo humaine ? Le Blind Test Cortiq tranche avec vos chiffres",
  description:
    "On met une vidéo IA et une vidéo tournée par un humain, sans indiquer laquelle est laquelle, et on compare leur hook rate et leur CTR. Les premiers résultats seront publiés ici dès qu'ils existent, pas avant.",
  cta: "Voir le format",
};

export const experiencesNote = {
  title: "Suivez les premiers crash-tests",
  description:
    "Chaque fiche d'expérience (EXP-0xx) affichera l'angle testé, le hook rate obtenu, et si l'angle a gagné ou perdu, perdants compris. Les premières fiches seront publiées dès les premiers crash-tests clients.",
};
