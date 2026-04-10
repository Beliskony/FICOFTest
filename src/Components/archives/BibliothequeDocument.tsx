import { useMemo } from "react";
import { Download, FileText, FileSpreadsheet, Presentation, File } from "lucide-react";
import type { Document } from "../../Interfaces/archivetype";
import { usePaginatedFilter } from "../../hooks/UsePaginationFilter";
import ArchiveFilters from "./ArchiveFilter";
import Pagination from "./Pagination";

type Props = { documents: Document[] };

const SEARCH_KEYS: (keyof Document)[] = ["titre", "description", "categorie"];

// Affichage liste dense (pas de grille) : adapté pour des milliers de docs
const PAGE_SIZE = 30;

export default function BibliothequeDocuments({ documents }: Props) {
  const categories = useMemo(() => [...new Set(documents.map((d) => d.categorie))], [documents]);
  const annees = useMemo(() => [...new Set(documents.map((d) => d.annee))].sort((a, b) => b - a), [documents]);

  const { paginated, filtered, filters, updateFilter, page, setPage, totalPages } =
    usePaginatedFilter(documents, SEARCH_KEYS, PAGE_SIZE);

  return (
    <section>
      <div className="mb-6">
        <ArchiveFilters
          filters={filters}
          onFilter={updateFilter}
          categories={categories}
          annees={annees}
          total={documents.length}
          filteredTotal={filtered.length}
          placeholder="Rechercher un document…"
        />
      </div>

      {paginated.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="divide-y divide-neutral-100 border border-neutral-100 rounded-2xl overflow-hidden bg-white">
          {paginated.map((doc) => (
            <DocumentRow key={doc.id} doc={doc} />
          ))}
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </section>
  );
}

// ─── Ligne document ───────────────────────────────────────────────────────────
function DocumentRow({ doc }: { doc: Document }) {
  return (
    <div className="flex items-center gap-4 px-5 py-4 hover:bg-neutral-50 transition-colors group">
      {/* Icône type */}
      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-neutral-100 group-hover:bg-[#0C3823]/10 transition-colors">
        <DocIcon type={doc.type} />
      </div>

      {/* Infos */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[13px] text-neutral-800 truncate">{doc.titre}</p>
        {doc.description && (
          <p className="text-[12px] text-neutral-400 truncate mt-0.5">{doc.description}</p>
        )}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] font-bold text-[#0C3823] bg-[#0C3823]/8 px-2 py-0.5 rounded-full">
            {doc.categorie}
          </span>
          <span className="text-[11px] text-neutral-400">{doc.annee}</span>
          <span className="text-[11px] text-neutral-300">·</span>
          <span className="text-[11px] text-neutral-400">{doc.taille}</span>
        </div>
      </div>

      {/* Badge type + bouton télécharger */}
      <div className="flex items-center gap-3 shrink-0">
        <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${typeColor(doc.type)}`}>
          {doc.type}
        </span>
        <a
          href={doc.url}
          download
          className="w-9 h-9 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-400 hover:bg-[#0C3823] hover:border-[#0C3823] hover:text-white transition-all duration-150"
          title={`Télécharger ${doc.titre}`}
        >
          <Download size={15} strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}

function DocIcon({ type }: { type: Document["type"] }) {
  const props = { size: 16, strokeWidth: 1.8, className: "" };
  switch (type) {
    case "PDF":  return <FileText {...props} className="text-red-500" />;
    case "XLSX": return <FileSpreadsheet {...props} className="text-emerald-600" />;
    case "PPTX": return <Presentation {...props} className="text-orange-500" />;
    default:     return <File {...props} className="text-blue-500" />;
  }
}

function typeColor(type: Document["type"]) {
  switch (type) {
    case "PDF":  return "bg-red-50 text-red-500";
    case "XLSX": return "bg-emerald-50 text-emerald-600";
    case "PPTX": return "bg-orange-50 text-orange-500";
    default:     return "bg-blue-50 text-blue-500";
  }
}

function EmptyState() {
  return (
    <div className="text-center py-24 text-neutral-400">
      <p className="font-semibold text-neutral-500">Aucun document trouvé</p>
      <p className="text-[13px] mt-1">Modifiez vos critères de recherche</p>
    </div>
  );
}