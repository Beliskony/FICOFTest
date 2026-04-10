import { Search, X } from "lucide-react";
import type { Filters } from "../../Interfaces/archivetype";

type Props = {
  filters: Filters;
  onFilter: (key: keyof Filters, value: string) => void;
  categories: string[];
  annees: number[];
  total: number;
  filteredTotal: number;
  placeholder?: string;
};

export default function ArchiveFilters({
  filters,
  onFilter,
  categories,
  annees,
  total,
  filteredTotal,
  placeholder = "Rechercher…",
}: Props) {
  const hasActiveFilter =
    filters.search || filters.categorie || filters.annee;

  const reset = () => {
    onFilter("search", "");
    onFilter("categorie", "");
    onFilter("annee", "");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      {/* Search */}
      <div className="relative flex-1 min-w-0">
        <Search
          size={15}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
          strokeWidth={2}
        />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => onFilter("search", e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-[13px] text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#0C3823] transition-colors"
        />
      </div>

      {/* Catégorie */}
      <select
        value={filters.categorie}
        onChange={(e) => onFilter("categorie", e.target.value)}
        className="px-3 py-2.5 rounded-xl border border-neutral-200 bg-white text-[13px] text-neutral-700 focus:outline-none focus:border-[#0C3823] transition-colors"
      >
        <option value="">Toutes les catégories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* Année */}
      <select
        value={filters.annee}
        onChange={(e) => onFilter("annee", e.target.value)}
        className="px-3 py-2.5 rounded-xl border border-neutral-200 bg-white text-[13px] text-neutral-700 focus:outline-none focus:border-[#0C3823] transition-colors"
      >
        <option value="">Toutes les années</option>
        {annees.map((a) => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>

      {/* Reset + Compteur */}
      <div className="flex items-center gap-3 shrink-0">
        {hasActiveFilter && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-[12px] text-neutral-500 hover:text-[#0C3823] font-medium transition-colors"
          >
            <X size={13} strokeWidth={2.5} />
            Réinitialiser
          </button>
        )}
        <span className="text-[12px] text-neutral-400 font-medium whitespace-nowrap">
          {filteredTotal === total
            ? `${total} résultats`
            : `${filteredTotal} / ${total}`}
        </span>
      </div>
    </div>
  );
}