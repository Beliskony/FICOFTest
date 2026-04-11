import { useState } from "react";
import {
  Download,
  ExternalLink,
  FileText,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type { Evenement, Edition } from "../../Interfaces/types";

// ─────────────────────────────────────────────────────────────────────────────
// EditionCard — carte + panel PDF/articles expandable en dessous
// ─────────────────────────────────────────────────────────────────────────────

function EditionCard({ edition }: { edition: Edition }) {
  const [open, setOpen] = useState(false);
  const isPast = edition.spotsRestants === null;
  const hasContent = !!edition.rapport || edition.articles.length > 0;

  return (
    <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm">
      {/* ── Carte visuelle ── */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={edition.image}
          alt={edition.theme}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

        {/* Badge */}
        {isPast && (
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            Édition passée
          </div>
        )}

        {/* Bloc date */}
        <div className="absolute top-3 left-3 flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-sm">
          <span className="text-xl font-bold text-[#2E7D52] leading-none">{edition.day}</span>
          <span className="text-[9px] font-semibold text-[#2E7D52] uppercase tracking-wide mt-0.5">
            {edition.month}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="px-5 py-4">
        <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2">
          {edition.theme}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <MapPin size={12} className="opacity-60 shrink-0" />
          <span>{edition.lieu}</span>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-gray-100 px-5 py-3 flex items-center justify-between">
        {isPast ? (
          <span className="text-xs text-gray-400">
            {edition.participants.toLocaleString("fr-FR")} participants
          </span>
        ) : (
          <span className="text-xs text-gray-400">
            Places restantes :{" "}
            <span className="text-[#2E7D52] font-semibold">{edition.spotsRestants}</span>
          </span>
        )}

        {/* Bouton toggle ressources */}
        {hasContent ? (
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1.5 text-[12px] font-bold text-[#2E7D52] hover:text-[#0C3823] transition-colors"
          >
            Ressources
            {open
              ? <ChevronUp size={14} strokeWidth={2.5} />
              : <ChevronDown size={14} strokeWidth={2.5} />
            }
          </button>
        ) : (
          <span className="text-[11px] text-gray-300 italic">Aucune ressource</span>
        )}
      </div>

      {/* ── Panel ressources (expandable) ── */}
      {open && hasContent && (
        <div className="border-t border-gray-100 bg-[#F7F9F7] px-5 py-5 space-y-5">

          {/* Rapport PDF */}
          {edition.rapport && (
            <div className="flex items-start gap-4">
              {/* Miniature couverture */}
              <div
                className="shrink-0 w-12 rounded-lg overflow-hidden bg-neutral-200 border border-neutral-100 flex items-center justify-center"
                style={{ height: "60px" }}
              >
                {edition.rapport.couverture ? (
                  <img
                    src={edition.rapport.couverture}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FileText size={18} className="text-neutral-300" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#2E7D52] font-bold mb-0.5">
                  Rapport officiel
                </p>
                <p className="text-[13px] font-bold text-[#0C3823] leading-snug mb-1">
                  {edition.rapport.titre}
                </p>
                <p className="text-[12px] text-neutral-400 leading-relaxed mb-3">
                  {edition.rapport.description}
                </p>
                <a
                  href={edition.rapport.fichier}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0C3823] text-white text-[11px] font-bold px-3.5 py-2 rounded-xl hover:bg-[#0f4a2d] transition-colors"
                >
                  <Download size={11} strokeWidth={2.5} />
                  Télécharger le PDF
                </a>
              </div>
            </div>
          )}

          {/* Articles presse */}
          {edition.articles.length > 0 && (
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">
                Revue de presse · {edition.articles.length} article{edition.articles.length > 1 ? "s" : ""}
              </p>
              <div className="space-y-0.5">
                {edition.articles.map((a) => (
                  <a
                    key={a.url}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-2.5 border-b border-neutral-100 last:border-b-0"
                  >
                    <div className="flex-1 min-w-0 pr-4">
                      <p className="text-[13px] font-semibold text-[#0C3823] group-hover:text-[#2E7D52] transition-colors leading-snug truncate">
                        {a.titre}
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] text-neutral-400">{a.source}</span>
                        <span className="text-neutral-300">·</span>
                        <span className="text-[11px] text-neutral-400">{a.date}</span>
                      </div>
                    </div>
                    <ExternalLink
                      size={12}
                      strokeWidth={2}
                      className="shrink-0 text-neutral-300 group-hover:text-[#2E7D52] transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// RealisationsTab — grille de cartes
// ─────────────────────────────────────────────────────────────────────────────

function RealisationsTab({ evenement }: { evenement: Evenement }) {
  const sorted = [...evenement.editions].sort((a, b) => b.annee - a.annee);
  //const total = evenement.editions.reduce((acc, e) => acc + e.participants, 0);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      {/* Résumé chiffres 
      <div className="flex flex-wrap gap-10 mb-12 pb-10 border-b border-neutral-100">
        {[
          { val: sorted.length, label: "Éditions" },
          { val: total.toLocaleString("fr-FR") + "+", label: "Participants cumulés" },
          { val: sorted[0]?.annee ?? "—", label: "Dernière édition" },
        ].map(({ val, label }) => (
          <div key={label} className="border-l-2 border-[#0C3823] pl-4">
            <div className="text-2xl font-black text-[#0C3823]">{val}</div>
            <div className="text-[12px] text-neutral-400 mt-0.5">{label}</div>
          </div>
        ))}
      </div> */}

      {/* Grille cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sorted.map((edition) => (
          <EditionCard key={edition.annee} edition={edition} />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PresentationTab
// ─────────────────────────────────────────────────────────────────────────────

function PresentationTab({ evenement }: { evenement: Evenement }) {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">
        <div className="space-y-5">
          {evenement.presentation.map((para, i) => (
            <p key={i} className="text-[15px] text-neutral-500 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-px bg-neutral-100 rounded-2xl overflow-hidden shrink-0">
          {evenement.stats.map(({ val, label }) => (
            <div key={label} className="bg-white px-7 py-8">
              <div className="text-[26px] font-black text-[#0C3823] leading-none">{val}</div>
              <div className="text-[12px] text-neutral-400 mt-2 leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EventPage
// ─────────────────────────────────────────────────────────────────────────────

type Tab = "presentation" | "realisations";

export default function EventPage({ evenement }: { evenement: Evenement }) {
  const [tab, setTab] = useState<Tab>("presentation");

  return (
    <main>
      {/* ── Hero ── */}
      <div className="bg-[#0C3823] pt-40 pb-0 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#4CAF73] font-bold mb-4">
            Événement FICOF
          </p>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-none tracking-tight">
            {evenement.sigle}
          </h1>
          <p className="text-[17px] text-white/50 mt-3 mb-8 max-w-2xl leading-relaxed font-medium">
            {evenement.nomComplet}
          </p>
          <p className="text-[14px] text-white/40 max-w-xl leading-relaxed mb-12">
            {evenement.description}
          </p>

          {/* ── Tab bar ── */}
          <div className="flex border-b border-white/10">
            {([
              { key: "presentation" as Tab, label: "Présentation" },
              { key: "realisations" as Tab, label: "Réalisations" },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-6 py-4 text-[13px] font-bold tracking-wide border-b-2 -mb-px transition-all duration-150 ${
                  tab === key
                    ? "border-[#4CAF73] text-white"
                    : "border-transparent text-white/35 hover:text-white/60"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="bg-white min-h-[60vh]">
        {tab === "presentation" && <PresentationTab evenement={evenement} />}
        {tab === "realisations" && <RealisationsTab evenement={evenement} />}
      </div>
    </main>
  );
}