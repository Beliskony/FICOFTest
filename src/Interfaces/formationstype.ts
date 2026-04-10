import type { ElementType } from "react";

export type Formation = {
  id: string;
  titre: string;
  categorie: string;
  icon: ElementType;
  couleur: string;
  duree: string;
  niveau: string;
  modalite: string;
  prix: string;
  objectifs: string[];
  programme: { module: string; contenu: string[] }[];
  inscription: {
    prerequis: string;
    sessions: string[];
    lieu: string;
  };
};

export type InscriptionForm = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  formation: string;
  session: string;
  niveau: string;
  message: string;
};