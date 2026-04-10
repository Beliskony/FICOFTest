import { useState, useMemo } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "../../Interfaces/archivetype";
import {usePaginatedFilter} from "../../hooks/UsePaginationFilter"
import ArchiveFilters from "./ArchiveFilter";
import Pagination from "./Pagination";

type Props = { photos: Photo[] };

const SEARCH_KEYS: (keyof Photo)[] = ["alt", "categorie", "evenement" as keyof Photo];

export default function GaleriePhotos({ photos }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null); // index dans filtered

  const categories = useMemo(() => [...new Set(photos.map((p) => p.categorie))], [photos]);
  const annees = useMemo(() => [...new Set(photos.map((p) => p.annee))].sort((a, b) => b - a), [photos]);

  const { paginated, filtered, filters, updateFilter, page, setPage, totalPages } =
    usePaginatedFilter(photos, SEARCH_KEYS, 24);

  // Navigation lightbox dans les résultats filtrés
  const lightboxPhoto = lightbox !== null ? filtered[lightbox] : null;
  const prevLightbox = () => setLightbox((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextLightbox = () =>
    setLightbox((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i));

  // Retrouver l'index dans filtered à partir d'un item paginé
  const openLightbox = (photo: Photo) => {
    const idx = filtered.findIndex((p) => p.id === photo.id);
    setLightbox(idx);
  };

  return (
    <section>
      {/* Filtres */}
      <div className="mb-6">
        <ArchiveFilters
          filters={filters}
          onFilter={updateFilter}
          categories={categories}
          annees={annees}
          total={photos.length}
          filteredTotal={filtered.length}
          placeholder="Rechercher une photo…"
        />
      </div>

      {/* Grille masonry-like */}
      {paginated.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 space-y-3">
          {paginated.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer bg-neutral-100"
              onClick={() => openLightbox(photo)}
            >
              <img
                src={photo.thumb || photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0C3823]/0 group-hover:bg-[#0C3823]/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  strokeWidth={1.8}
                />
              </div>
              {/* Badge catégorie */}
              <span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {photo.categorie}
              </span>
            </div>
          ))}
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} strokeWidth={2} />
          </button>

          {/* Nav précédent */}
          {lightbox! > 0 && (
            <button
              className="absolute left-4 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
            >
              <ChevronLeft size={22} strokeWidth={2} />
            </button>
          )}

          <img
            src={lightboxPhoto.src}
            alt={lightboxPhoto.alt}
            className="max-h-[88vh] max-w-[88vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Nav suivant */}
          {lightbox! < filtered.length - 1 && (
            <button
              className="absolute right-4 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
            >
              <ChevronRight size={22} strokeWidth={2} />
            </button>
          )}

          {/* Légende */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white/80 text-[13px]">{lightboxPhoto.alt}</p>
            <p className="text-white/40 text-[11px] mt-0.5">
              {lightbox! + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-24 text-neutral-400">
      <p className="font-semibold text-neutral-500">Aucun résultat</p>
      <p className="text-[13px] mt-1">Essayez d'autres mots-clés ou filtres</p>
    </div>
  );
}