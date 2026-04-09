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
  date: string;
  lieu: string;
  participants: number;
  rapport?: Rapport;
  articles: Article[];
};

export type Evenement = {
  slug: "afcom" | "cjp" | "rem";
  sigle: string;
  nomComplet: string;
  description: string;
  presentation: string[];     // chaque élément = un paragraphe
  stats: { val: string; label: string }[];
  image?: string;
  editions: Edition[];
};