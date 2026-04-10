import { useState, useMemo } from "react";
import { Play, Clock, ExternalLink } from "lucide-react";
import type { Video } from "../../Interfaces/archivetype";
import { usePaginatedFilter } from "../../hooks/UsePaginationFilter";
import ArchiveFilters from "./ArchiveFilter";
import Pagination from "./Pagination";

type Props = { videos: Video[] };

const SEARCH_KEYS: (keyof Video)[] = ["titre", "categorie"];

export default function VideoSection({ videos }: Props) {
  const categories = useMemo(() => [...new Set(videos.map((v) => v.categorie))], [videos]);
  const annees = useMemo(() => [...new Set(videos.map((v) => v.annee))].sort((a, b) => b - a), [videos]);

  const { paginated, filtered, filters, updateFilter, page, setPage, totalPages } =
    usePaginatedFilter(videos, SEARCH_KEYS, 12);

  return (
    <section>
      <div className="mb-6">
        <ArchiveFilters
          filters={filters}
          onFilter={updateFilter}
          categories={categories}
          annees={annees}
          total={videos.length}
          filteredTotal={filtered.length}
          placeholder="Rechercher une vidéo…"
        />
      </div>

      {paginated.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginated.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </section>
  );
}

// ─── Carte vidéo avec lazy embed ─────────────────────────────────────────────
function VideoCard({ video }: { video: Video }) {
  const [played, setPlayed] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-lg hover:shadow-black/6 transition-all duration-300">
      {/* Embed area */}
      <div className="relative aspect-video bg-neutral-900">
        {played ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.titre}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <img
              src={thumb}
              alt={video.titre}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay play */}
            <button
              onClick={() => setPlayed(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              aria-label={`Lire : ${video.titre}`}
            >
              <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Play size={20} className="text-[#0C3823] ml-1" strokeWidth={2} fill="currentColor" />
              </div>
            </button>
            {/* Durée */}
            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
              <Clock size={10} strokeWidth={2} />
              {video.duree}
            </span>
          </>
        )}
      </div>

      {/* Infos */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-[13px] text-neutral-800 leading-snug line-clamp-2">
            {video.titre}
          </h3>
          <a
            href={`https://youtu.be/${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-neutral-400 hover:text-[#0C3823] transition-colors"
            title="Ouvrir sur YouTube"
          >
            <ExternalLink size={14} strokeWidth={2} />
          </a>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[11px] font-semibold text-[#0C3823] bg-[#0C3823]/8 px-2 py-0.5 rounded-full">
            {video.categorie}
          </span>
          <span className="text-[11px] text-neutral-400">{video.annee}</span>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-24 text-neutral-400">
      <p className="font-semibold text-neutral-500">Aucune vidéo trouvée</p>
      <p className="text-[13px] mt-1">Essayez d'autres filtres</p>
    </div>
  );
}