export const packs = [
  {
    id: "test",
    name: "Test",
    tagline: "Pour commencer",
    videos: 10,
    price: 790,
    pricePerVideo: 79,
    description: "Pour tester un premier message avant de vous engager plus.",
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
      "Pour tester plusieurs idées en même temps et garder ce qui marche.",
    highlight: true,
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Pour aller plus loin",
    videos: 50,
    price: 3490,
    pricePerVideo: 70,
    description:
      "Pour quelqu'un qui a déjà trouvé ce qui marche et veut en produire beaucoup.",
    highlight: false,
  },
] as const;

export const packIncludes = [
  "On regarde vos publicités actuelles et celles de votre secteur, et on vous propose 3 à 5 idées différentes à tester (on les appelle des « angles » : des façons différentes de présenter la même chose).",
  "On écrit le texte de chaque vidéo. Vous le lisez et vous dites oui, ou vous demandez des changements, gratuitement, une fois.",
  "On fabrique les vidéos : 2 à 3 visages différents pour ne pas lasser votre audience, au format vertical (comme Instagram ou TikTok) et au format carré.",
  "Si une vidéo ne vous convient pas une fois faite, on la refait une fois gratuitement. Et comme refaire un texte ne coûte rien, on préfère toujours bien valider le texte avant de tourner.",
  "Livraison 72 heures ouvrées après la validation du texte, pas après la signature du contrat.",
  "Un espace en ligne où vous suivez tout, avec un vrai suivi si vous connectez vos comptes de pub (Meta, TikTok).",
];

export const packOptions = [
  { label: "Format carré ou paysage en plus (1:1 ou 16:9)", price: "+15 € / vidéo" },
  { label: "Une version dans une autre langue", price: "+30 € / vidéo" },
  { label: "Besoin en 24 h au lieu de 72 h", price: "+30 %" },
  { label: "Une vidéo refaite en plus de celle incluse", price: "+90 €" },
  { label: "Un appel d'1h chaque mois pour regarder vos résultats ensemble", price: "+250 €" },
];

export const processSteps = [
  {
    index: "01",
    title: "On trouve quoi dire",
    summary: "Rien ne se tourne avant d'avoir une idée qui tient debout.",
    details: [
      "On regarde ce que font vos concurrents, et ce que vous avez déjà essayé.",
      "On propose 3 à 5 façons différentes de présenter votre produit, pas 30 variantes de la même idée, mais plusieurs idées vraiment différentes.",
      "On s'appuie sur ce que vos clients disent déjà de vous, s'ils ont laissé des avis.",
    ],
  },
  {
    index: "02",
    title: "On écrit le texte",
    summary: "Une personne, pas une IA, écrit ce qui sera dit dans chaque vidéo.",
    details: [
      "On pense d'abord aux 3 premières secondes : c'est le moment où les gens décident de rester ou de passer à autre chose.",
      "Vous validez le texte avant qu'on tourne quoi que ce soit.",
      "Changer un texte ne coûte rien ; changer une vidéo déjà faite, oui. Autant bien faire le texte d'abord.",
    ],
  },
  {
    index: "03",
    title: "On fabrique la vidéo",
    summary: "72 heures ouvrées après votre validation, prête à poster.",
    details: [
      "2 à 3 visages différents par mois, pour ne pas lasser votre audience avec toujours la même personne.",
      "Formats vertical et carré, sous-titrés à vos couleurs, livrés dans votre espace en ligne.",
      "Les vidéos qui marchent le mieux ce mois-ci deviennent la base des textes du mois prochain.",
    ],
  },
];

export const dashboardMetrics = [
  { label: "Combien de gens cliquent", description: "Vidéo par vidéo, idée par idée" },
  { label: "Combien restent après 3 secondes", description: "Le moment où on décide de rester ou pas" },
  { label: "Prix moyen par client obtenu", description: "Pour chaque idée testée" },
  { label: "Où en est chaque vidéo", description: "Texte → fabrication → livrée" },
];

export const recognitionPoints = [
  "J'ai essayé de faire des pubs moi-même, et je ne sais pas pourquoi ça ne marche pas.",
  "Je paie un créateur UGC humain, c'est cher et ça prend 2 à 3 semaines par vidéo.",
  "Je ne comprends rien aux chiffres qu'on me montre, et je n'ose pas demander.",
];

export const goodFit = [
  "Vous vendez un produit ou un service, en ligne ou pas, et vous voulez tester des vidéos de pub.",
  "Vous n'avez jamais fait de pub, ou ça ne vous a rien donné jusqu'ici.",
  "Vous préférez qu'on vous explique plutôt que de deviner.",
];

export const badFit = [
  "Vous êtes dans la santé réglementée, la crypto, la politique ou l'alcool : la loi est trop stricte pour ce qu'on peut vous proposer aujourd'hui.",
  "Vous voulez une seule vidéo, une fois, sans vouloir tester ni ajuster ensuite.",
];

export const trustPoints = [
  {
    title: "On vous le dit, que c'est fait par IA",
    description:
      "Sur chaque vidéo, sans exception. On préfère que vous le sachiez avant plutôt qu'après.",
  },
  {
    title: "On respecte la loi",
    description:
      "La mention IA est activée à chaque diffusion. Une liste de vérification vous est fournie à la livraison.",
  },
  {
    title: "Jamais un vrai visage",
    description:
      "Les visages sont vérifiés avant chaque envoi : jamais quelqu'un de reconnaissable, jamais une célébrité, jamais un faux témoignage avec un nom.",
  },
  {
    title: "Les vidéos sont à vous",
    description:
      "Le droit de les utiliser en publicité vous appartient, écrit dans le contrat, sans limite de durée.",
  },
];

export const guarantee = {
  title: "Et si ça ne marche pas ?",
  description:
    "Avec la formule Test, si aucune de nos vidéos ne fait mieux cliquer que votre publicité actuelle, on vous rembourse la moitié. On préfère perdre un peu d'argent sur votre premier mois que vous laisser payer pour rien.",
};

export const faq = [
  {
    question: "Est-ce que c'est légal, une pub faite par IA ?",
    answer:
      "Oui. Depuis août 2026, la loi européenne demande juste qu'on le dise clairement, ce qu'on fait déjà sur chaque vidéo.",
  },
  {
    question: "Les visages dans les vidéos, ce sont de vraies personnes ?",
    answer:
      "Non, ce sont des visages générés, vérifiés avant chaque livraison pour qu'ils ne ressemblent à personne de connu ou d'identifiable.",
  },
  {
    question: "Qui possède les vidéos une fois livrées ?",
    answer:
      "Vous. Le droit de les utiliser dans vos publicités vous est donné dans le contrat, sans limite de durée.",
  },
  {
    question: "Et si je n'aime pas le ton d'une vidéo ?",
    answer:
      "On corrige le texte et on la refait, gratuitement, une fois par vidéo.",
  },
  {
    question: "Je dois m'engager combien de temps ?",
    answer:
      "Un mois. Vous changez de formule ou vous arrêtez quand vous voulez, d'un mois sur l'autre.",
  },
  {
    question: "Combien de temps avant ma première vidéo ?",
    answer:
      "72 heures ouvrées après la validation du texte, pas après la signature du contrat.",
  },
];

export const faqShort = faq.slice(0, 3);
