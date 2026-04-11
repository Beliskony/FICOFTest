export type Article = {
  titre: string;
  source: string;
  date: string;
  url: string;
};

export type Rapport = {
  titre: string;
  description: string;
  fichier: string;
  couverture?: string;
};

export type Edition = {
  annee: number;
  theme: string;
  // Date complète pour l'affichage textuel (ex: "12 – 14 mars 2025")
  date: string;
  // Pour la carte : jour et mois séparés (ex: day: "12", month: "Mars")
  day: string;
  month: string;
  lieu: string;
  participants: number;
  // Image de couverture de l'édition (pour la carte)
  image: string;
  // Places restantes pour la prochaine édition (null = édition passée)
  spotsRestants: number | null;
  rapport?: Rapport;
  articles: Article[];
};

export type Evenement = {
  slug: "afcom" | "cjp" | "rem";
  sigle: string;
  nomComplet: string;
  description: string;
  presentation: string[];
  stats: { val: string; label: string }[];
  editions: Edition[];
};