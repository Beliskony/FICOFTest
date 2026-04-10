import { useMemo, useState } from "react";
import { ExternalLink, Search, X } from "lucide-react";
import type { LienUtile } from "../../Interfaces/archivetype";

type Props = { liens: LienUtile[] };

export default function LiensUtiles({ liens }: Props) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return liens;
    return liens.filter(
      (l) =>
        l.titre.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.categorie.toLowerCase().includes(q)
    );
  }, [liens, search]);

  // Grouper par catégorie
  const grouped = useMemo(() => {
    const map = new Map<string, LienUtile[]>();
    for (const lien of filtered) {
      if (!map.has(lien.categorie)) map.set(lien.categorie, []);
      map.get(lien.categorie)!.push(lien);
    }
    return map;
  }, [filtered]);

  return (
    <section>
      {/* Recherche simple */}
      <div className="relative max-w-md mb-8">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" strokeWidth={2} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un lien…"
          className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-neutral-200 bg-white text-[13px] focus:outline-none focus:border-[#0C3823] transition-colors"
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
            <X size={14} strokeWidth={2.5} />
          </button>
        )}
      </div>

      {grouped.size === 0 ? (
        <div className="text-center py-16 text-neutral-400">
          <p className="font-semibold text-neutral-500">Aucun lien trouvé</p>
        </div>
      ) : (
        <div className="space-y-10">
          {[...grouped.entries()].map(([categorie, items]) => (
            <div key={categorie}>
              <h3 className="text-[11px] font-black text-[#0C3823] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#0C3823]/10">
                {categorie}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((lien) => (
                  <a
                    key={lien.id}
                    href={lien.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-4 rounded-xl border border-neutral-100 bg-white hover:border-[#0C3823]/25 hover:shadow-md hover:shadow-[#0C3823]/5 transition-all duration-200"
                  >
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[13px] text-neutral-800 group-hover:text-[#0C3823] transition-colors flex items-center gap-1.5">
                        {lien.titre}
                        <ExternalLink size={11} strokeWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </p>
                      <p className="text-[12px] text-neutral-400 mt-0.5 line-clamp-2 leading-relaxed">
                        {lien.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}