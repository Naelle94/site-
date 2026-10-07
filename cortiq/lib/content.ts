export const tagline =
  "Pensé par une humaine, produit par IA, jugé par vos chiffres.";

export const heroReassurances = [
  "Sans engagement",
  "Modifications illimitées sur le script",
  "Publicité et organique",
];

export const packs = [
  {
    id: "test-creatif",
    name: "Test créatif",
    tagline: "Le test avant la dépense",
    videos: 5,
    price: 890,
    priceUnit: "HT",
    pricePerVideo: 178,
    delay: "5 jours ouvrés",
    description:
      "5 angles différents testés en vidéo, pour à peu près le prix de deux vidéos d'agence.",
    includes: [
      "Fiche ADN de marque et étude de votre psychologie client",
      "Casting à la carte parmi notre catalogue de personnages",
      "5 scripts écrits par une personne, pas générés",
      "Une vidéo pilote validée avant le reste de la production",
      "Formats vertical et carré, sous-titrés à vos couleurs",
      "Modifications illimitées sur chaque script avant tournage",
      "Une révision gratuite par vidéo après livraison",
      "Mention IA activée, conforme à l'AI Act",
      "Rapport de lecture des résultats à la livraison",
    ],
    cta: "Je commence mon test créatif",
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
      "10 vidéos testées chaque mois, construites sur les angles qui ont déjà convaincu.",
    includes: [
      "Tout ce qui est dans Test créatif",
      "Angles proposés chaque mois à partir des résultats du mois précédent",
      "Scripts validés avant tournage, comme pour Test créatif",
      "Un rapport d'une page : qui a convaincu, qui n'a pas marché, pourquoi",
      "Dashboard live inclus si vous connectez Meta ou TikTok",
      "Accès prioritaire aux nouveaux personnages du catalogue",
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
      "Une vidéo de plus, sans engagement, réservée aux clients déjà passés par un test créatif.",
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
  { label: "Dashboard live connecté à vos comptes de pub (hors Lab)", price: "+150 € / mois" },
  { label: "Livraison express, 72 h au lieu de 5 jours", price: "+30 %" },
  { label: "Livraison ultra-express, 24 h", price: "+60 %" },
  { label: "Personnage supplémentaire hors catalogue standard", price: "+120 €" },
  { label: "Révision supplémentaire (au-delà de celle incluse)", price: "+90 €" },
  { label: "Une version dans une autre langue", price: "+30 € / vidéo" },
  { label: "Format carré ou paysage en plus (1:1 ou 16:9)", price: "+15 € / vidéo" },
  { label: "Marque blanche, livré sous votre nom", price: "Sur devis" },
] as const;

export const comparisonTable = [
  { name: "Cortiq", pricePerVideo: "178 à 220 €", delay: "5 jours", isUs: true },
  { name: "Agence Short", pricePerVideo: "≈ 500 €", delay: "3 à 4 semaines", isUs: false },
  { name: "Hoocq", pricePerVideo: "400 à 450 €", delay: "15 à 20 jours", isUs: false },
  { name: "Cosmy", pricePerVideo: "Sur devis", delay: "Variable", isUs: false },
  { name: "Takema", pricePerVideo: "Sur devis", delay: "Variable", isUs: false },
] as const;

export const comparisonCriteria = [
  {
    criterion: "Prix par vidéo",
    cortiq: "178 à 220 € HT, écrit avant la commande",
    classic: "400 à 500 € en moyenne, souvent sur devis",
    edge: "cortiq",
  },
  {
    criterion: "Délai de livraison",
    cortiq: "3 à 5 jours ouvrés",
    classic: "2 à 4 semaines selon la charge du créateur",
    edge: "cortiq",
  },
  {
    criterion: "Angles testés avant de produire en volume",
    cortiq: "5 angles différents dès la première commande",
    classic: "Généralement 1 angle, 1 script, 1 tournage",
    edge: "cortiq",
  },
  {
    criterion: "Transparence des prix",
    cortiq: "Prix publics, affichés sur le site",
    classic: "Devis au cas par cas, prix rarement publics",
    edge: "cortiq",
  },
  {
    criterion: "Diversité des personnages",
    cortiq: "Catalogue de personnages variés (âge, style, univers)",
    classic: "Dépend du carnet d'adresses du créateur ou de l'agence",
    edge: "cortiq",
  },
  {
    criterion: "Garantie sur le résultat",
    cortiq: "Remboursement partiel si aucun angle ne bat votre pub actuelle",
    classic: "Rarement proposée",
    edge: "cortiq",
  },
  {
    criterion: "Mention IA et conformité AI Act",
    cortiq: "Activée par défaut, checklist fournie",
    classic: "Non concerné (tournage humain)",
    edge: "neutral",
  },
  {
    criterion: "Historique de cas clients vérifiés et publiés",
    cortiq: "En cours de constitution, rien n'est publié tant que ce n'est pas vérifié",
    classic: "Portfolios et références bâtis depuis plusieurs années",
    edge: "classic",
  },
  {
    criterion: "Présence humaine réelle à l'écran",
    cortiq: "Visages générés par IA, jamais une vraie personne",
    classic: "Vraie personne, ce qui peut rassurer certains publics",
    edge: "classic",
  },
] as const;

export const processSteps = [
  {
    index: "Étape 1",
    title: "Appel découverte (facultatif)",
    summary: "20 minutes pour regarder vos publicités actuelles ensemble, si vous le souhaitez.",
    why: "Ce n'est pas obligatoire : si votre brief est déjà clair, on peut commencer directement à l'étape suivante. L'appel sert surtout à repérer vite ce qui n'a pas marché jusqu'ici.",
  },
  {
    index: "Étape 2",
    title: "Fiche ADN et 5 angles",
    summary: "On formalise votre marque et on propose 5 angles vraiment différents.",
    why: "Un angle, c'est la psychologie derrière le message : le prix, la preuve sociale, le problème résolu, la démonstration, l'urgence. Tester 5 angles au lieu d'un seul, c'est ce qui change la probabilité de tomber sur celui qui parle à votre audience.",
  },
  {
    index: "Étape 3",
    title: "Scripts",
    summary: "Une personne écrit le texte de chaque vidéo, pas une IA.",
    why: "L'IA fabrique l'image et la voix, jamais le message. Le texte est écrit à partir de ce qui fait réagir votre audience (douleur, désir, objection), pas généré au hasard.",
  },
  {
    index: "Étape 4",
    title: "Validation client",
    summary: "Vous validez chaque script avant qu'il ne soit tourné.",
    why: "Rien n'est produit sur un texte que vous n'avez pas approuvé. Vous pouvez demander autant de modifications que nécessaire à ce stade, sans frais.",
  },
  {
    index: "Étape 5",
    title: "Vidéo pilote",
    summary: "Une première vidéo validée avant de lancer le reste de la production.",
    why: "C'est le point de contrôle qui protège tout le monde : si le ton ne va pas, on corrige avant d'avoir tourné les 4 autres, pas après.",
  },
  {
    index: "Étape 6",
    title: "Production",
    summary: "Les 4 autres angles sont fabriqués une fois le pilote approuvé.",
    why: "C'est ici que la précision de l'IA fait la différence : on peut produire 5 variantes de personnages, de décors et de tons pour le prix d'un seul tournage classique.",
  },
  {
    index: "Étape 7",
    title: "Livraison",
    summary: "5 vidéos livrées, vertical et carré, sous-titrées, mention IA activée.",
    why: "Prêtes à poster, sans travail de montage supplémentaire de votre côté.",
  },
  {
    index: "Étape 8",
    title: "Mesure des résultats",
    summary: "On regarde ensemble quel angle a le meilleur hook rate et le meilleur CTR.",
    why: "C'est la seule chose qui compte au final : pas notre avis sur la vidéo, mais ce que vos chiffres disent. En formule Lab, l'angle gagnant devient la base du mois suivant.",
  },
] as const;

export const pipelineSteps = [
  "Collecte de data (concurrents, écosystème, avis clients, golden nuggets)",
  "Définition de l'ICP et des personas",
  "Choix du segment prioritaire",
  "Scripts et angles",
  "Validation client",
  "Production",
  "Livraison",
  "Mesure des résultats",
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
    title: "Déploiement",
    summary: "L'angle qui convainc devient la base de votre prochaine vague, en Lab ou à la demande.",
  },
] as const;

export const complianceChecklist = [
  "La mention IA est déjà activée sur chaque vidéo livrée.",
  "Une checklist de conformité vous accompagne pour l'appliquer sur vos comptes publicitaires.",
  "Les visages générés sont vérifiés avant chaque livraison, pour ne ressembler à personne d'identifiable.",
];

export const complianceWhy = {
  title: "Pourquoi on précise que c'est fait par IA",
  description:
    "Depuis le 2 août 2026, l'AI Act européen impose d'indiquer qu'une publicité vidéo est générée par IA. Cette mention concerne uniquement l'image et la voix (générées), jamais le texte (écrit par une personne). Pour la grande majorité des audiences B2C et B2B, elle n'a aucun impact mesuré sur la conversion : c'est une mention de transparence, pas un frein à la performance.",
};

export const labLoopPoints = [
  "Les angles qui ont le mieux convaincu deviennent la base des scripts du mois suivant.",
  "Un rapport d'une page résume ce qui a convaincu, ce qui n'a pas marché, et pourquoi.",
  "Vous ajustez ou arrêtez la formule d'un mois sur l'autre, sans frais de sortie.",
];

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
  "Vous préférez un prix et un délai écrits plutôt qu'un devis sur mesure.",
  "Vous avez déjà tourné une publicité qui n'a pas donné les résultats espérés.",
  "Vous ne maîtrisez pas l'IA, mais vous voulez tester plusieurs angles sans apprendre un nouvel outil.",
  "Vous vendez un produit ou un service et voulez savoir quel message convertit avant de miser gros dessus.",
  "Vous trouvez qu'un tournage UGC classique coûte cher et prend du temps pour un seul essai.",
  "Vous voulez des visuels prêts à poster en publicité et en organique, sans travail de montage en plus.",
];

export const badFit = [
  "Vous êtes dans la santé réglementée, la crypto, la politique ou l'alcool : l'AI Act est trop strict pour ce qu'on peut vous proposer aujourd'hui.",
  "Vous voulez une seule vidéo, une fois, sans vouloir tester ni comparer d'angles.",
];

export const founderNote =
  "Cortiq est fondé par une growth marketer qui a piloté l'acquisition et la stratégie créative d'une dizaine de startups B2B et B2C avant de lancer l'agence.";

export const references = [
  {
    name: "HAT Music",
    sector: "App B2C · music tech",
    result: "CPA ÷3 · CPI de 2,50 € à 0,80 €",
  },
  {
    name: "Gratia",
    sector: "Marketplace B2B · consulting",
    result: "Leads qualifiés de 4 à 10 par mois",
  },
  {
    name: "Keez",
    sector: "App mobile B2C · dating",
    result: "+10 000 utilisateurs en 3 mois",
  },
  {
    name: "Fullphysio",
    sector: "SaaS B2B · healthtech",
    result: "Newsletter à 21 000 abonnés",
  },
  {
    name: "Yves Saint Laurent",
    sector: "E-commerce · luxe (L'Oréal)",
    result: "Optimisation pages produits et A/B testing",
  },
  {
    name: "Badger",
    sector: "SaaS B2B",
    result: "Leads Meta Ads et outbound",
  },
  {
    name: "RealAdvisor",
    sector: "Proptech",
    result: "Go-to-market My Home",
  },
  {
    name: "Overloop AI",
    sector: "SaaS B2B",
    result: "Stratégie AARRR complète",
  },
] as const;

export const caseStudies = [
  {
    name: "HAT Music",
    sector: "App B2C · music tech · Milan",
    channel: "Meta Ads",
    challenge:
      "Le coût d'acquisition par installation augmentait, et l'agence voulait savoir si de nouveaux angles créatifs pouvaient inverser la tendance.",
    metrics: [
      { label: "CPA", value: "÷ 3" },
      { label: "CPI", value: "2,50 € → 0,80 €" },
      { label: "Utilisateurs sur 3 mois", value: "3 500 → 6 000 (+71 %)" },
    ],
    note: "Chiffres issus d'une refonte de l'acquisition Meta Ads pilotée par la fondatrice de Cortiq, avant la création de l'agence.",
  },
] as const;

export const caseStudyDisclaimer =
  "Nous n'affichons pas d'avis clients ni de photos sur ces fiches tant que nous n'avons pas de contenu réel et vérifié à montrer. On préfère une fiche incomplète à une fiche inventée.";

export const icps = [
  {
    id: "app-mobile-b2c",
    label: "App mobile B2C",
    h1: "Le test créatif pour les apps mobiles B2C",
    painPoint:
      "Vous dépensez sur l'acquisition Meta ou TikTok sans savoir à l'avance quel hook va retenir vos utilisateurs avant l'installation.",
    pitch:
      "On teste 5 angles différents (douleur, preuve sociale, démonstration) en vidéo avant que vous ne poussiez du budget derrière un seul.",
    subSegments: [
      "Apps de rencontre et social",
      "Apps musique, streaming et créativité",
      "Apps fitness, santé et bien-être",
      "Apps utilitaires et productivité",
    ],
    whyUs: [
      "Une growth marketer qui a déjà piloté l'acquisition d'apps B2C a conçu la méthode : pas un prestataire vidéo générique.",
      "Testé en conditions réelles : CPA divisé par 3 et CPI de 2,50 € à 0,80 € sur une app musicale (HAT Music), +10 000 utilisateurs en 3 mois sur une app de rencontre (Keez).",
      "5 angles testés pour le prix d'une seule vidéo d'agence, pour trouver le hook qui baisse votre CPI avant de scaler le budget.",
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    h1: "Le test créatif pour l'e-commerce",
    painPoint:
      "Vous payez 400 à 500 € une vidéo UGC par créateur, sans garantie qu'elle batte votre créa actuelle.",
    pitch:
      "5 angles produit testés pour le prix de deux vidéos d'agence, avec une garantie si aucune ne fait mieux que votre publicité actuelle.",
    subSegments: [
      "Beauté et cosmétique",
      "Maison et décoration",
      "Mode et accessoires",
      "Bien-être et nutrition",
    ],
    whyUs: [
      "Expérience concrète en e-commerce : optimisation des pages produits et catégories et stratégie d'A/B testing pour Yves Saint Laurent (L'Oréal).",
      "Le bon angle produit change selon le secteur (prix pour la maison, preuve sociale pour la beauté, démonstration pour la mode) : nos 5 angles sont pensés pour votre sous-secteur, pas génériques.",
      "Comparatif prix public dès la page Offres : vous savez ce que vous payez avant de commander.",
    ],
  },
] as const;

export const personas = [
  {
    id: 1,
    image: "/personas/persona-1.webp",
    label: "25-35 ans · lifestyle, bien-être, quotidien",
  },
  {
    id: 2,
    image: "/personas/persona-2.webp",
    label: "30-40 ans · tech, SaaS, profils corporate",
  },
  {
    id: 3,
    image: "/personas/persona-3.webp",
    label: "25-35 ans · mode, beauté homme, lifestyle urbain",
  },
  {
    id: 4,
    image: "/personas/persona-4.webp",
    label: "18-25 ans · mode, streetwear, génération Z",
  },
  {
    id: 5,
    image: "/personas/persona-5.webp",
    label: "18-25 ans · sport, gaming, génération Z",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Un catalogue de personnages, pas un seul visage",
    description:
      "Des profils variés en âge, style et univers, pour coller à votre cible plutôt qu'à un visage générique.",
  },
  {
    title: "Un travail de fond sur la psychologie client",
    description:
      "Chaque angle part d'un déclencheur d'achat réel (prix, preuve sociale, urgence, démonstration), pas d'une idée au hasard.",
  },
  {
    title: "Une fondatrice qui a piloté la croissance de 7 startups",
    description:
      "Avant Cortiq, growth marketing et stratégie créative pour des apps B2C et des SaaS B2B, avec des résultats chiffrés et vérifiables.",
  },
  {
    title: "La précision permise par l'IA",
    description:
      "Produire 5 variantes de script, de décor et de personnage coûte le prix d'un seul tournage classique : c'est ce qui rend le test possible.",
  },
];

export const guarantee = {
  title: "Et si aucun angle ne convainc ?",
  description:
    "Avec Test créatif, si aucune de nos 5 vidéos ne bat le hook rate de votre publicité actuelle au bout de 5 jours, on vous rembourse la moitié. On préfère perdre un peu d'argent sur votre premier test que vous laisser payer pour rien.",
};

export const faqByTheme = [
  {
    theme: "IA et confiance",
    items: [
      {
        question: "Qu'est-ce qu'un test créatif ?",
        answer:
          "C'est le fait de tester 5 angles publicitaires différents en vidéo avant de payer un tournage classique. Vous ne misez gros que sur l'angle qui a déjà convaincu.",
      },
      {
        question: "Les visages dans les vidéos, ce sont de vraies personnes ?",
        answer:
          "Non. Ce sont des personnages générés par IA, vérifiés avant chaque livraison pour qu'ils ne ressemblent à personne de connu ou d'identifiable.",
      },
      {
        question: "Une vidéo IA est-elle aussi performante qu'une vidéo tournée par un humain ?",
        answer:
          "Nous ne l'affirmons pas tant que nous n'avons pas assez de cas clients vérifiés pour le prouver sur la durée. Nos vidéos sont conçues pour être testées contre vos meilleures publicités actuelles : c'est vos chiffres qui tranchent, pas notre avis.",
      },
      {
        question: "Pourquoi choisir l'IA plutôt qu'un créateur UGC humain ?",
        answer:
          "Pas pour remplacer le format UGC, mais pour tester 5 angles au prix et au délai d'une seule vidéo tournée par un humain. Une fois l'angle gagnant identifié, rien n'empêche de le faire tourner ensuite par un vrai créateur.",
      },
      {
        question: "Qui écrit les scripts, une IA ou une personne ?",
        answer:
          "Une personne. L'IA fabrique l'image et la voix une fois le texte validé ; elle ne décide jamais du message ni de l'angle.",
      },
      {
        question: "Et si un angle ne respecte pas l'image de ma marque ?",
        answer:
          "Vous validez chaque script avant tournage, avec autant de modifications que nécessaire. Rien n'est produit sur un texte que vous n'avez pas approuvé.",
      },
      {
        question: "Pourquoi la vidéo générée par IA est-elle une solution d'avenir ?",
        answer:
          "Parce qu'elle rend le test d'angles accessible financièrement : au lieu de miser tout votre budget créatif sur une seule idée, vous pouvez en vérifier plusieurs avant de scaler. C'est un changement de méthode, pas juste un changement d'outil.",
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
          "Test créatif est un achat ponctuel. Lab s'arrête ou se change d'un mois sur l'autre. À la demande n'a aucun engagement.",
      },
      {
        question: "Quelle formule choisir pour commencer ?",
        answer:
          "Test créatif si vous testez un premier produit ou un nouveau marché. Lab si vous avez déjà un budget pub régulier et voulez itérer chaque mois. À la demande si vous êtes déjà client et voulez juste une vidéo de plus.",
      },
      {
        question: "Y a-t-il des frais cachés ?",
        answer:
          "Non. Les seuls coûts en plus des trois formules sont les options listées sur la page Offres (dashboard, livraison express, personnage supplémentaire, langue, format), toutes à prix public.",
      },
      {
        question: "Le dashboard est-il inclus ?",
        answer:
          "Il est inclus en formule Lab. Pour Test créatif et À la demande, c'est une option payante à 150 €/mois, si vous voulez suivre vos résultats en direct.",
      },
      {
        question: "Proposez-vous des devis sur mesure ?",
        answer:
          "Au-delà de la marque blanche, non. Les trois formules et leurs options couvrent l'essentiel des besoins, avec un prix écrit avant que vous payiez.",
      },
      {
        question: "Travaillez-vous avec des agences ou en marque blanche ?",
        answer:
          "Oui, en option. Les vidéos sont alors livrées sous votre nom, sans mention Cortiq visible pour votre client final.",
      },
    ],
  },
  {
    theme: "Process et délais",
    items: [
      {
        question: "Comment tester plusieurs angles avant de payer un tournage ?",
        answer:
          "Avec Test créatif : on écrit 5 scripts différents, on valide une vidéo pilote, puis on tourne les 4 autres angles une fois le pilote approuvé. Voir la page Comment ça marche pour le détail des 8 étapes.",
      },
      {
        question: "Et si je n'aime pas le ton d'une vidéo ?",
        answer:
          "On corrige le script et on la refait, gratuitement, une fois par vidéo.",
      },
      {
        question: "Combien de temps avant ma première vidéo ?",
        answer: "5 jours ouvrés pour Test créatif et Lab, 3 jours ouvrés pour une vidéo à la demande.",
      },
      {
        question: "L'appel découverte est-il obligatoire ?",
        answer:
          "Non. C'est une étape facultative. Si votre brief est déjà clair, on peut démarrer directement sur la fiche ADN et les 5 angles.",
      },
      {
        question: "Dois-je fournir des assets (logo, charte, photos) ?",
        answer:
          "Un logo et votre charte suffisent pour démarrer. Tout le reste (visages, voix, décors) est généré par Cortiq, à partir de notre catalogue de personnages.",
      },
      {
        question: "Qui valide le script avant tournage ?",
        answer:
          "Vous. Aucune vidéo n'est produite avant votre validation écrite du script correspondant, et vous pouvez demander des modifications illimitées à ce stade.",
      },
      {
        question: "Puis-je demander des modifications après livraison ?",
        answer:
          "Oui, une révision gratuite par vidéo. Au-delà, une révision supplémentaire est facturée 90 €.",
      },
      {
        question: "Comment choisissez-vous les 5 angles à tester ?",
        answer:
          "À partir de votre fiche ADN, des données disponibles sur votre marché (concurrents, avis clients, signaux publicitaires) et des déclencheurs d'achat les plus courants pour votre type de produit.",
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
        question: "La mention IA fait-elle baisser les performances ?",
        answer:
          "Nous n'avons pas de donnée propre assez large pour l'affirmer dans un sens ou dans l'autre. C'est une mention de transparence imposée par la loi, pas un choix marketing.",
      },
      {
        question: "Qui possède les vidéos une fois livrées ?",
        answer:
          "Vous. Le droit de les utiliser dans vos publicités est donné dans le contrat, sans limite de durée.",
      },
      {
        question: "Puis-je utiliser les vidéos sur d'autres canaux que Meta ou TikTok ?",
        answer:
          "Oui. Le droit d'usage couvre tous vos canaux publicitaires et organiques, sans limite de plateforme.",
      },
      {
        question: "Que se passe-t-il si mon secteur est refusé ?",
        answer:
          "Nous ne produisons pas pour la santé réglementée, la crypto, la politique ou l'alcool, où l'AI Act est trop strict pour notre offre actuelle. Voir la page Conditions générales de vente.",
      },
      {
        question: "Mes données sont-elles revendues ou partagées ?",
        answer:
          "Non. Vos informations ne servent qu'à produire vos vidéos et à vous facturer, conformément au RGPD. Voir les Conditions générales de vente.",
      },
    ],
  },
] as const;

export const faq: { question: string; answer: string }[] = faqByTheme.flatMap(
  (t) => t.items as unknown as { question: string; answer: string }[]
);
export const faqShort = faq.slice(0, 3);

export const glossary = [
  {
    term: "Test créatif",
    definition:
      "Le fait de tester plusieurs angles publicitaires en vidéo avant de payer un tournage classique. On ne mise gros que sur l'angle qui a déjà convaincu.",
  },
  {
    term: "Hook rate",
    definition:
      "La part de personnes qui continuent de regarder une vidéo après les 3 premières secondes. C'est le chiffre qui dit si un angle accroche ou non.",
  },
  {
    term: "Angle",
    definition:
      "Une façon différente de présenter le même produit : par le prix, par le problème résolu, par la preuve sociale. Un test créatif teste plusieurs angles en même temps.",
  },
  {
    term: "UGC (publicité)",
    definition:
      "Un format de vidéo publicitaire qui imite un contenu amateur, filmé caméra au poing par une personne qui parle de son expérience avec le produit.",
  },
  {
    term: "Vidéo pilote",
    definition:
      "La première vidéo d'un test créatif, validée avant de lancer la production des autres angles. Elle protège le client d'un script qui ne lui convient pas.",
  },
  {
    term: "Persona",
    definition:
      "Un profil-type de personnage (âge, style, univers) choisi pour incarner une vidéo. Un catalogue de personas large permet de coller à différents publics.",
  },
  {
    term: "CTR (click-through rate)",
    definition:
      "La part de personnes qui cliquent sur une publicité après l'avoir vue. C'est le deuxième chiffre, après le hook rate, qui juge un angle.",
  },
  {
    term: "CPA (coût par acquisition)",
    definition:
      "Ce que coûte un client obtenu grâce à une publicité donnée. Un bon angle fait baisser le CPA sans augmenter le budget.",
  },
  {
    term: "CPM (coût pour mille impressions)",
    definition:
      "Ce que coûtent mille affichages d'une publicité, avant même qu'on sache si elle convertit. Il varie selon la plateforme et la saison.",
  },
  {
    term: "CPI (coût par installation)",
    definition:
      "Ce que coûte une installation d'application obtenue grâce à une publicité. Le repère de référence pour les apps mobiles B2C.",
  },
  {
    term: "ROAS (retour sur dépense publicitaire)",
    definition:
      "Le chiffre d'affaires généré pour chaque euro dépensé en publicité. Un ROAS de 3 veut dire 3 € de chiffre d'affaires pour 1 € dépensé.",
  },
  {
    term: "Creative fatigue",
    definition:
      "La baisse de performance d'une publicité à force d'être vue par la même audience. Elle se corrige en apportant régulièrement de nouveaux angles.",
  },
  {
    term: "Scroll-stopper",
    definition:
      "Le détail visuel ou verbal des 3 premières secondes d'une vidéo qui arrête le défilement. C'est ce que le hook rate mesure.",
  },
  {
    term: "Native ad (publicité native)",
    definition:
      "Une publicité conçue pour ressembler au contenu organique du fil d'actualité plutôt qu'à une pub classique. L'UGC en est la forme la plus courante.",
  },
  {
    term: "A/B test créatif",
    definition:
      "Le fait de diffuser deux versions d'une publicité au même public pour comparer leurs résultats. Un test créatif Cortiq revient à un A/B test à 5 branches, fait avant diffusion.",
  },
  {
    term: "Lookalike audience",
    definition:
      "Un public publicitaire construit pour ressembler aux clients qui ont déjà converti. Son efficacité dépend directement de la qualité de l'angle testé.",
  },
  {
    term: "Retargeting",
    definition:
      "Le fait de re-diffuser une publicité aux personnes qui ont déjà visité le site sans acheter. Un angle différent du premier contact y fonctionne souvent mieux.",
  },
  {
    term: "AARRR (pirate funnel)",
    definition:
      "Un cadre de croissance en 5 étapes : Acquisition, Activation, Rétention, Recommandation, Revenu. Les vidéos Cortiq jouent sur l'étape Acquisition.",
  },
  {
    term: "Growth loop",
    definition:
      "Un mécanisme où le résultat d'une action (un utilisateur acquis) nourrit directement l'action suivante (plus d'acquisition). La boucle Lab en est un, appliqué à la création publicitaire.",
  },
  {
    term: "ICP (Ideal Customer Profile)",
    definition:
      "Le profil-type de client pour lequel une offre est pensée. Cortiq définit ses angles différemment selon que l'ICP est une app B2C ou un e-commerce.",
  },
  {
    term: "AI Act",
    definition:
      "Le règlement européen sur l'intelligence artificielle, entré en application le 2 août 2026, qui impose entre autres la mention claire d'un contenu généré par IA.",
  },
] as const;

export const blindTest = {
  title: "Vidéo IA ou vidéo humaine ? Le Blind Test Cortiq tranche avec vos chiffres",
  description:
    "On met une vidéo IA et une vidéo tournée par un humain, sans indiquer laquelle est laquelle, et on compare leur hook rate et leur CTR. Les premiers résultats seront publiés ici dès qu'ils existent, pas avant.",
  cta: "Voir le format",
};

export const experiencesNote = {
  title: "Suivez les premiers tests créatifs",
  description:
    "Chaque fiche d'expérience (EXP-0xx) affichera l'angle testé, le hook rate obtenu, et s'il a convaincu ou non, perdants compris. Les premières fiches seront publiées dès les premiers tests créatifs clients.",
};

export const cgvSections = [
  {
    title: "Article 1 — Objet",
    body: [
      "Les présentes conditions générales de vente (CGV) s'appliquent à toute commande d'une formule Test créatif, Lab ou À la demande auprès de Cortiq, exploitée en nom propre par Naëlle Sounouvou.",
      "Toute commande implique l'acceptation pleine et entière des présentes CGV, qui prévalent sur tout autre document sauf accord écrit contraire.",
    ],
  },
  {
    title: "Article 2 — Offres et prix",
    body: [
      "Les trois formules (Test créatif, Lab, À la demande) et leurs options sont décrites avec leur prix sur la page Offres. Les prix sont exprimés en euros, hors taxes (HT) ; la TVA s'applique selon le statut du client.",
      "Les prix sont fermes au moment de la commande. Toute évolution tarifaire ne s'applique qu'aux commandes passées après sa publication.",
    ],
  },
  {
    title: "Article 3 — Commande et paiement",
    body: [
      "La commande est confirmée à réception du paiement intégral, effectué d'avance et avant le début de toute production.",
      "Pour la formule Lab, la facturation est mensuelle et intervient avant le début de chaque boucle. Le client peut arrêter ou changer de formule d'un mois sur l'autre, sans préavis ni pénalité.",
      "Le paiement s'effectue par les moyens indiqués lors de la commande. Tout retard de paiement peut suspendre la production en cours.",
    ],
  },
  {
    title: "Article 4 — Délais de livraison",
    body: [
      "Les délais indiqués (5 jours ouvrés pour Test créatif et Lab, 3 jours ouvrés pour une vidéo à la demande) courent à compter de la validation écrite du dernier script par le client, et non de la commande ou du paiement.",
      "Un retard de validation des scripts par le client décale d'autant le délai de livraison, sans que Cortiq en soit responsable.",
    ],
  },
  {
    title: "Article 5 — Révisions",
    body: [
      "Les modifications demandées avant tournage, sur un script non encore validé, sont illimitées et gratuites.",
      "Une fois la vidéo tournée, une révision gratuite est incluse par vidéo livrée, limitée à une correction du script et un nouveau tournage. Elle doit être demandée dans les 7 jours suivant la livraison.",
      "Toute révision supplémentaire au-delà de celle incluse est facturée 90 € par vidéo, au tarif en vigueur au moment de la demande.",
    ],
  },
  {
    title: "Article 6 — Garantie Test créatif",
    body: [
      "Pour la formule Test créatif uniquement : si, 5 jours ouvrés après livraison, aucune des 5 vidéos ne dépasse le hook rate de la publicité de référence fournie par le client, la moitié du prix payé est remboursée sur simple demande.",
      "Cette garantie suppose que le client ait diffusé les 5 vidéos dans des conditions comparables (même budget, même audience) et fourni les chiffres de sa publicité de référence avant diffusion.",
    ],
  },
  {
    title: "Article 7 — Propriété intellectuelle et droits d'usage",
    body: [
      "Le droit d'utiliser les vidéos livrées dans les publicités et communications du client est cédé à ce dernier dès la livraison et le paiement intégral, sans limite de durée ni de territoire.",
      "Cortiq conserve le droit de mentionner, sans en divulguer le contenu, avoir travaillé avec le client à des fins de référence commerciale, sauf opposition écrite de ce dernier.",
      "Les personnages générés par IA utilisés dans les vidéos restent la propriété des outils et modèles sous-jacents ; Cortiq garantit uniquement leur absence de ressemblance avec une personne réelle identifiable.",
    ],
  },
  {
    title: "Article 8 — Conformité et mention IA",
    body: [
      "Conformément à l'AI Act européen, chaque vidéo livrée comporte la mention de son origine générée par IA. Il appartient au client de maintenir cette mention visible lors de la diffusion.",
      "Une checklist de conformité est fournie à la livraison pour accompagner son application sur les comptes publicitaires du client.",
    ],
  },
  {
    title: "Article 9 — Secteurs exclus",
    body: [
      "Cortiq ne produit pas de contenu pour les secteurs de la santé réglementée, de la crypto-monnaie, de la politique ou de l'alcool, pour lesquels l'encadrement réglementaire actuel ne permet pas de garantir une conformité suffisante.",
      "Cortiq se réserve le droit de refuser ou d'interrompre une commande dont l'objet relèverait de l'un de ces secteurs, ou plus largement d'un contenu trompeur ou illicite.",
    ],
  },
  {
    title: "Article 10 — Responsabilité",
    body: [
      "La responsabilité de Cortiq est limitée au montant effectivement payé par le client pour la commande concernée.",
      "Cortiq ne garantit pas les résultats publicitaires obtenus par le client (ventes, installations, abonnés) au-delà de la garantie Test créatif décrite à l'article 6.",
    ],
  },
  {
    title: "Article 11 — Données personnelles",
    body: [
      "Les données transmises par le client (identité, coordonnées, éléments de marque) sont utilisées uniquement pour produire les vidéos commandées et assurer la facturation, conformément au RGPD.",
      "Ces données ne sont ni revendues ni partagées avec des tiers à des fins commerciales. Le client peut demander leur accès, leur rectification ou leur suppression à tout moment, par écrit.",
    ],
  },
  {
    title: "Article 12 — Résiliation",
    body: [
      "Test créatif et À la demande sont des commandes ponctuelles, sans reconduction.",
      "Lab se résilie à tout moment, avec effet à la fin de la boucle mensuelle en cours ; aucune nouvelle facturation n'intervient après la résiliation.",
    ],
  },
  {
    title: "Article 13 — Droit applicable et litiges",
    body: [
      "Les présentes CGV sont soumises au droit français.",
      "En cas de litige, les parties rechercheront une solution amiable avant toute action judiciaire ; à défaut, les tribunaux français compétents seront seuls saisis.",
    ],
  },
] as const;
