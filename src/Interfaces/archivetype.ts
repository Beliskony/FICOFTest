export type ArchiveSection = "galerie" | "videos" | "documents" | "liens";

export type Photo = {
  id: string;
  src: string;
  thumb: string;
  alt: string;
  categorie: string;
  annee: number;
};

export type Video = {
  id: string;
  youtubeId: string;
  titre: string;
  categorie: string;
  annee: number;
  duree: string;
};

export type Document = {
  id: string;
  titre: string;
  description: string;
  categorie: string;
  annee: number;
  type: "PDF" | "DOCX" | "XLSX" | "PPTX";
  taille: string;
  url: string;
};

export type LienUtile = {
  id: string;
  titre: string;
  description: string;
  url: string;
  categorie: string;
};

export type Filters = {
  search: string;
  categorie: string;
  annee: string;
};