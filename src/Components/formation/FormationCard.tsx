import { Clock, ChevronRight } from "lucide-react";
import type { Formation } from "../../Interfaces/formationstype";

type Props = {
  formation: Formation;
  onSelect: (formation: Formation) => void;
};

export default function FormationCard({ formation, onSelect }: Props) {
  const Icon = formation.icon;

  return (
    <article
      onClick={() => onSelect(formation)}
      className="group bg-white border border-neutral-100 rounded-2xl p-6 cursor-pointer hover:border-[#0C3823]/20 hover:shadow-xl hover:shadow-[#0C3823]/8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${formation.couleur}15` }}
        >
          <Icon size={22} style={{ color: formation.couleur }} strokeWidth={1.8} />
        </div>
        <span
          className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full"
          style={{
            backgroundColor: `${formation.couleur}12`,
            color: formation.couleur,
          }}
        >
          {formation.categorie}
        </span>
      </div>

      {/* Titre */}
      <h3 className="font-bold text-neutral-800 text-[15px] leading-snug mb-4 group-hover:text-[#0C3823] transition-colors">
        {formation.titre}
      </h3>

      {/* Méta */}
      <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-neutral-100">
        <div className="flex items-center gap-1.5 text-neutral-500 text-[12px]">
          <Clock size={13} strokeWidth={2} />
          <span>{formation.duree}</span>
        </div>
        <div className="text-[12px] text-neutral-400">•</div>
        <div className="text-[12px] text-neutral-500">{formation.modalite}</div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100">
        <span className="text-[#0C3823] font-black text-[15px]">{formation.prix}</span>
        <button className="flex items-center gap-1 text-[12px] font-bold text-[#0C3823] group-hover:gap-2 transition-all">
          Voir détails
          <ChevronRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
}