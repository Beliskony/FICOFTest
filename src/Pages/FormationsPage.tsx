"use client";

import { useState } from "react";
import type { Formation } from "../Interfaces/formationstype";
import FormationsHero from "../Components/formation/FormationHero";
import FormationsCatalogue from "../Components/formation/FormationCatalogue";
import FormationDetail from "../Components/formation/Formationdetail";
import FormulaireInscription from "../Components/formation/FormationInscription";
import FormationsCTA from "../Components/formation/FormationCTA";


export default function FormationsPage() {
  const [formationSelectionnee, setFormationSelectionnee] = useState<Formation | null>(null);
  const [showFormulaire, setShowFormulaire] = useState(false);
  const [formationPourInscription, setFormationPourInscription] = useState<Formation | undefined>(undefined);

  // Ouvrir le détail d'une formation
  const handleSelectFormation = (formation: Formation) => {
    setFormationSelectionnee(formation);
  };

  // Ouvrir le formulaire depuis le détail
  const handleInscrireDepuisDetail = (formation: Formation) => {
    setFormationSelectionnee(null);
    setFormationPourInscription(formation);
    setShowFormulaire(true);
  };

  // Ouvrir le formulaire sans formation pré-sélectionnée (depuis le CTA)
  const handleInscrireGeneral = () => {
    setFormationPourInscription(undefined);
    setShowFormulaire(true);
  };

  // Fermer tous les modals
  const handleFermerDetail = () => setFormationSelectionnee(null);
  const handleFermerFormulaire = () => {
    setShowFormulaire(false);
    setFormationPourInscription(undefined);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* 1 — Hero */}
      <FormationsHero />

      {/* 2 — Catalogue avec filtres et grille de cartes */}
      <FormationsCatalogue onSelect={handleSelectFormation} />

      {/* 3 — CTA bas de page */}
      <FormationsCTA onInscrire={handleInscrireGeneral} />

      {/* 4 — Modal détail (objectifs, programme, modalités) */}
      {formationSelectionnee && (
        <FormationDetail
          formation={formationSelectionnee}
          onClose={handleFermerDetail}
          onInscrire={handleInscrireDepuisDetail}
        />
      )}

      {/* 5 — Modal formulaire d'inscription */}
      {showFormulaire && (
        <FormulaireInscription
          formationPreSelectionnee={formationPourInscription}
          onClose={handleFermerFormulaire}
        />
      )}
    </div>
  );
}