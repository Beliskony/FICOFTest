import {
  Calculator,
  TrendingUp,
  Users,
  Eye,
  Lightbulb,
  DollarSign,
  Briefcase,
  BookOpen,
} from "lucide-react";
import type { Formation } from "../Interfaces/formationstype";

export const formations: Formation[] = [
  {
    id: "comptabilite",
    titre: "Formation en comptabilité approfondie",
    categorie: "Comptabilité",
    icon: Calculator,
    couleur: "#0C3823",
    duree: "5 jours (40h)",
    niveau: "Intermédiaire à avancé",
    modalite: "Présentiel / En ligne",
    prix: "150 000 FCFA",
    objectifs: [
      "Maîtriser les normes comptables OHADA et IFRS",
      "Produire des états financiers complets et conformes",
      "Analyser et interpréter les résultats financiers",
      "Gérer les opérations comptables complexes",
    ],
    programme: [
      {
        module: "Module 1 – Fondamentaux OHADA",
        contenu: [
          "Révision du plan comptable OHADA",
          "Traitement des opérations courantes",
          "Rapprochements bancaires avancés",
        ],
      },
      {
        module: "Module 2 – États financiers",
        contenu: [
          "Bilan, compte de résultat, tableau des flux",
          "Notes annexes et rapport de gestion",
          "Consolidation des comptes",
        ],
      },
      {
        module: "Module 3 – Analyse financière",
        contenu: [
          "Ratios de rentabilité et de liquidité",
          "Tableau de bord financier",
          "Cas pratiques d'entreprises ivoiriennes",
        ],
      },
    ],
    inscription: {
      prerequis: "BTS Comptabilité ou équivalent",
      sessions: ["15 – 19 Janvier 2025", "10 – 14 Mars 2025", "12 – 16 Mai 2025"],
      lieu: "Siège FICOF, Abidjan Plateau",
    },
  },
  {
    id: "fiscalite",
    titre: "Formation en fiscalité approfondie et E-IMPÔTS",
    categorie: "Fiscalité",
    icon: BookOpen,
    couleur: "#1a5c38",
    duree: "4 jours (32h)",
    niveau: "Tous niveaux",
    modalite: "Présentiel / Hybride",
    prix: "120 000 FCFA",
    objectifs: [
      "Comprendre et appliquer la législation fiscale ivoirienne",
      "Maîtriser la plateforme E-IMPÔTS de la DGI",
      "Optimiser la charge fiscale de l'entreprise légalement",
      "Gérer les contrôles et contentieux fiscaux",
    ],
    programme: [
      {
        module: "Module 1 – Fiscalité des entreprises",
        contenu: [
          "Impôt sur les bénéfices industriels et commerciaux (BIC)",
          "TVA : collecte, déduction, déclaration",
          "Patente et taxes locales",
        ],
      },
      {
        module: "Module 2 – E-IMPÔTS en pratique",
        contenu: [
          "Navigation et fonctionnalités de la plateforme",
          "Dépôt des déclarations en ligne",
          "Suivi des avis et des remboursements",
        ],
      },
      {
        module: "Module 3 – Optimisation et contrôle",
        contenu: [
          "Techniques d'optimisation fiscale légale",
          "Gestion du contrôle fiscal",
          "Recours et contentieux administratifs",
        ],
      },
    ],
    inscription: {
      prerequis: "Notion de comptabilité recommandée",
      sessions: ["22 – 25 Janvier 2025", "17 – 20 Mars 2025"],
      lieu: "Siège FICOF, Abidjan Plateau",
    },
  },
  {
    id: "paie",
    titre: "Formation paie et E-CNPS",
    categorie: "Ressources Humaines",
    icon: Users,
    couleur: "#2d7a4f",
    duree: "3 jours (24h)",
    niveau: "Débutant à intermédiaire",
    modalite: "Présentiel",
    prix: "90 000 FCFA",
    objectifs: [
      "Maîtriser les règles de calcul de la paie en Côte d'Ivoire",
      "Utiliser efficacement la plateforme E-CNPS",
      "Produire des bulletins de paie conformes",
      "Gérer les déclarations sociales mensuelles",
    ],
    programme: [
      {
        module: "Module 1 – Calcul de la paie",
        contenu: [
          "Éléments constitutifs du salaire",
          "Cotisations CNPS et impôts sur salaires",
          "Congés, absences et indemnités",
        ],
      },
      {
        module: "Module 2 – E-CNPS",
        contenu: [
          "Inscription et paramétrage du compte",
          "Déclarations nominatives des salariés",
          "Paiement des cotisations en ligne",
        ],
      },
      {
        module: "Module 3 – Cas pratiques",
        contenu: [
          "Simulation de bulletins de paie complets",
          "Gestion des cas particuliers (expatriés, CDD…)",
          "Clôture de paie mensuelle",
        ],
      },
    ],
    inscription: {
      prerequis: "Aucun prérequis particulier",
      sessions: ["5 – 7 Février 2025", "2 – 4 Avril 2025"],
      lieu: "Siège FICOF, Abidjan Plateau",
    },
  },
  {
    id: "finance-marche",
    titre: "Formation en finance de marché et finance personnelle",
    categorie: "Finance",
    icon: TrendingUp,
    couleur: "#0f4a2d",
    duree: "5 jours (40h)",
    niveau: "Intermédiaire",
    modalite: "Présentiel / En ligne",
    prix: "180 000 FCFA",
    objectifs: [
      "Comprendre le fonctionnement des marchés financiers (BRVM)",
      "Analyser et gérer un portefeuille d'actifs",
      "Appliquer les principes de la finance personnelle",
      "Maîtriser les outils d'investissement disponibles en CI",
    ],
    programme: [
      {
        module: "Module 1 – Marchés financiers",
        contenu: [
          "Structure et fonctionnement de la BRVM",
          "Actions, obligations, produits dérivés",
          "Analyse technique et fondamentale",
        ],
      },
      {
        module: "Module 2 – Gestion de portefeuille",
        contenu: [
          "Construction et diversification d'un portefeuille",
          "Mesure et gestion du risque",
          "Stratégies d'investissement à long terme",
        ],
      },
      {
        module: "Module 3 – Finance personnelle",
        contenu: [
          "Budget personnel et épargne",
          "Produits d'épargne et d'assurance en CI",
          "Planification de la retraite",
        ],
      },
    ],
    inscription: {
      prerequis: "Notions de comptabilité ou finance",
      sessions: ["3 – 7 Février 2025", "7 – 11 Avril 2025"],
      lieu: "Siège FICOF, Abidjan Plateau",
    },
  },
  {
    id: "management-rh",
    titre: "Formation en management et gestion des ressources humaines",
    categorie: "Management",
    icon: Briefcase,
    couleur: "#145c35",
    duree: "4 jours (32h)",
    niveau: "Tous niveaux",
    modalite: "Présentiel / Hybride",
    prix: "130 000 FCFA",
    objectifs: [
      "Développer ses compétences managériales et de leadership",
      "Maîtriser les fondamentaux de la GRH",
      "Recruter, former et fidéliser les talents",
      "Gérer les conflits et améliorer la performance des équipes",
    ],
    programme: [
      {
        module: "Module 1 – Leadership et management",
        contenu: [
          "Styles de management et leadership situationnel",
          "Communication managériale efficace",
          "Gestion du changement en entreprise",
        ],
      },
      {
        module: "Module 2 – GRH opérationnelle",
        contenu: [
          "Recrutement et intégration des collaborateurs",
          "Évaluation des performances et entretiens annuels",
          "Formation et développement des compétences",
        ],
      },
      {
        module: "Module 3 – Relations sociales",
        contenu: [
          "Droit du travail ivoirien : obligations de l'employeur",
          "Gestion des conflits et médiation",
          "Dialogue social et institutions représentatives",
        ],
      },
    ],
    inscription: {
      prerequis: "Expérience professionnelle recommandée",
      sessions: ["10 – 13 Février 2025", "14 – 17 Avril 2025"],
      lieu: "Siège FICOF, Abidjan Plateau",
    },
  },
  {
    id: "veille",
    titre: "Formation en veille stratégique",
    categorie: "Stratégie",
    icon: Eye,
    couleur: "#0a2e1a",
    duree: "2 jours (16h)",
    niveau: "Intermédiaire à avancé",
    modalite: "Présentiel",
    prix: "80 000 FCFA",
    objectifs: [
      "Comprendre les enjeux et la démarche de veille stratégique",
      "Mettre en place un dispositif de veille adapté",
      "Collecter, analyser et diffuser l'information utile",
      "Utiliser les outils numériques de veille",
    ],
    programme: [
      {
        module: "Module 1 – Fondamentaux de la veille",
        contenu: [
          "Définition, typologies et enjeux de la veille",
          "Cycle du renseignement et processus de veille",
          "Sources d'information et leur fiabilité",
        ],
      },
      {
        module: "Module 2 – Mise en œuvre",
        contenu: [
          "Outils numériques de veille (Google Alerts, Feedly…)",
          "Analyse et synthèse de l'information",
          "Diffusion et valorisation des résultats",
        ],
      },
    ],
    inscription: {
      prerequis: "Aucun prérequis particulier",
      sessions: ["20 – 21 Février 2025", "22 – 23 Mai 2025"],
      lieu: "Siège FICOF, Abidjan Plateau",
    },
  },
  {
    id: "intelligence-eco",
    titre: "Formation en intelligence économique",
    categorie: "Stratégie",
    icon: Lightbulb,
    couleur: "#0C3823",
    duree: "3 jours (24h)",
    niveau: "Avancé",
    modalite: "Présentiel",
    prix: "110 000 FCFA",
    objectifs: [
      "Comprendre les concepts et enjeux de l'intelligence économique",
      "Protéger le patrimoine informationnel de l'entreprise",
      "Développer une stratégie d'influence et de lobbying",
      "Anticiper les menaces et saisir les opportunités de marché",
    ],
    programme: [
      {
        module: "Module 1 – Concepts fondamentaux",
        contenu: [
          "Définition et histoire de l'intelligence économique",
          "Les acteurs de l'IE en Côte d'Ivoire et en Afrique",
          "Cadre légal et éthique",
        ],
      },
      {
        module: "Module 2 – Protection & Influence",
        contenu: [
          "Sécurité de l'information et contre-espionnage industriel",
          "Stratégies d'influence et de réputation",
          "Réseaux et lobbying institutionnel",
        ],
      },
      {
        module: "Module 3 – Applications pratiques",
        contenu: [
          "Analyse concurrentielle avancée",
          "Cartographie des parties prenantes",
          "Études de cas africains",
        ],
      },
    ],
    inscription: {
      prerequis: "Formation en veille stratégique recommandée",
      sessions: ["24 – 26 Février 2025", "26 – 28 Mai 2025"],
      lieu: "Siège FICOF, Abidjan Plateau",
    },
  },
  {
    id: "conseils",
    titre: "Conseils et orientations",
    categorie: "Conseil",
    icon: DollarSign,
    couleur: "#1e6b42",
    duree: "Sur mesure",
    niveau: "Tous profils",
    modalite: "Présentiel / À distance",
    prix: "Sur devis",
    objectifs: [
      "Orienter les professionnels vers la formation adaptée à leur profil",
      "Accompagner les entreprises dans leur stratégie de formation",
      "Fournir un diagnostic des besoins en compétences",
      "Proposer des parcours de formation personnalisés",
    ],
    programme: [
      {
        module: "Étape 1 – Diagnostic",
        contenu: [
          "Entretien individuel ou collectif",
          "Évaluation des compétences actuelles",
          "Identification des besoins et objectifs",
        ],
      },
      {
        module: "Étape 2 – Plan de formation",
        contenu: [
          "Proposition de parcours personnalisé",
          "Sélection des formations adaptées",
          "Calendrier et modalités sur mesure",
        ],
      },
    ],
    inscription: {
      prerequis: "Aucun",
      sessions: ["Sur rendez-vous toute l'année"],
      lieu: "Siège FICOF ou à distance",
    },
  },
];