import { useState } from "react";
import { formations } from "../../data/formations.data";
import type { Formation } from "../../Interfaces/formationstype";
import FormationCard from "./FormationCard";

const categories = ["Toutes", ...Array.from(new Set(formations.map((f) => f.categorie)))];

type Props = {
  onSelect: (formation: Formation) => void;
};

export default function FormationsCatalogue({ onSelect }: Props) {
  const [activeCategorie, setActiveCategorie] = useState("Toutes");

  const filtered =
    activeCategorie === "Toutes"
      ? formations
      : formations.filter((f) => f.categorie === activeCategorie);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Titre section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-black text-neutral-800 tracking-tight mb-2">
          Catalogue des formations
        </h2>
        <p className="text-neutral-500 text-[15px]">
          Cliquez sur une formation pour consulter le programme complet et vous inscrire.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategorie(cat)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-150 ${
              activeCategorie === cat
                ? "bg-[#0C3823] text-white shadow-md shadow-green-900/20"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((formation) => (
          <FormationCard
            key={formation.id}
            formation={formation}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}