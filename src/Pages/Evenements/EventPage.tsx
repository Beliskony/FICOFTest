"use client";

import { useState } from "react";
import { Download, ExternalLink, FileText, ChevronDown, ChevronUp } from "lucide-react";
import type { Evenement, Edition} from "../../Interfaces/types";

// ─────────────────────────────────────────────────────────────────────────────
// RealisationsTab
// ─────────────────────────────────────────────────────────────────────────────

function EditionBlock({ edition }: { edition: Edition }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-neutral-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-6 bg-white hover:bg-neutral-50 transition-colors text-left"
      >
        <div className="flex items-center gap-6">
          <span className="text-[34px] font-black text-[#0C3823] leading-none tabular-nums w-16 shrink-0">
            {edition.annee}
          </span>
          <div>
            <p className="text-[14.5px] font-bold text-[#0C3823] leading-snug">
              {edition.theme}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1">
              <span className="text-[12px] text-neutral-400">{edition.date}</span>
              <span className="text-neutral-200">·</span>
              <span className="text-[12px] text-neutral-400">{edition.lieu}</span>
              <span className="text-neutral-200">·</span>
              <span className="text-[12px] text-neutral-400">
                {edition.participants.toLocaleString("fr-FR")} participants
              </span>
            </div>
          </div>
        </div>
        <div className="shrink-0 ml-4 text-neutral-300">
          {open ? <ChevronUp size={17} strokeWidth={2} /> : <ChevronDown size={17} strokeWidth={2} />}
        </div>
      </button>

      {open && (
        <div className="px-7 pb-7 pt-6 border-t border-neutral-100 bg-white space-y-6">
          {/* Rapport */}
          {edition.rapport && (
            <div className="flex items-start gap-5 bg-[#F7F9F7] rounded-2xl p-6 border border-neutral-100">
              <div className="shrink-0 w-14 h-18 rounded-lg overflow-hidden bg-neutral-200 border border-neutral-100 flex items-center justify-center" style={{ height: "72px" }}>
                {edition.rapport.couverture ? (
                  <img src={edition.rapport.couverture} alt="" className="w-full h-full object-cover" />
                ) : (
                  <FileText size={20} className="text-neutral-300" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10.5px] uppercase tracking-[0.2em] text-[#2E7D52] font-bold mb-1">
                  Rapport officiel
                </p>
                <h4 className="text-[14.5px] font-bold text-[#0C3823] leading-snug mb-1.5">
                  {edition.rapport.titre}
                </h4>
                <p className="text-[13px] text-neutral-400 leading-relaxed mb-4">
                  {edition.rapport.description}
                </p>
                <a
                  href={edition.rapport.fichier}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0C3823] text-white text-[12px] font-bold px-4 py-2.5 rounded-xl hover:bg-[#0f4a2d] transition-colors"
                >
                  <Download size={12} strokeWidth={2.5} />
                  Télécharger le PDF
                </a>
              </div>
            </div>
          )}

          {/* Articles */}
          {edition.articles.length > 0 && (
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3">
                Revue de presse — {edition.articles.length} article{edition.articles.length > 1 ? "s" : ""}
              </p>
              <div>
                {edition.articles.map((a) => (
                  <a
                    key={a.url}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50 -mx-2 px-2 rounded-lg transition-colors"
                  >
                    <div className="flex-1 min-w-0 pr-6">
                      <p className="text-[14px] font-semibold text-[#0C3823] group-hover:text-[#2E7D52] transition-colors leading-snug">
                        {a.titre}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11.5px] text-neutral-400">{a.source}</span>
                        <span className="text-neutral-200">·</span>
                        <span className="text-[11.5px] text-neutral-400">{a.date}</span>
                      </div>
                    </div>
                    <ExternalLink size={13} strokeWidth={2} className="shrink-0 text-neutral-300 group-hover:text-[#2E7D52] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {!edition.rapport && edition.articles.length === 0 && (
            <p className="text-[13px] text-neutral-400 italic">
              Les ressources de cette édition seront disponibles prochainement.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function RealisationsTab({ evenement }: { evenement: Evenement }) {
  const sorted = [...evenement.editions].sort((a, b) => b.annee - a.annee);
  const total = evenement.editions.reduce((acc, e) => acc + e.participants, 0);

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      {/* Summary */}
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
      </div>

      {/* Editions */}
      <div className="space-y-3">
        {sorted.map((e) => (
          <EditionBlock key={e.annee} edition={e} />
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
        {/* Paragraphs */}
        <div className="space-y-5">
          {evenement.presentation.map((para, i) => (
            <p key={i} className="text-[15px] text-neutral-500 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Stats */}
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
// EventPage — the single template used for AFCOM, CJP and ReM
// ─────────────────────────────────────────────────────────────────────────────

type Tab = "presentation" | "realisations";

export default function EventPage({ evenement }: { evenement: Evenement }) {
  const [tab, setTab] = useState<Tab>("presentation");
  const derniere = [...evenement.editions].sort((a, b) => b.annee - a.annee)[0];

  return (
    <main>
      {/* Hero */}
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
          <p className="text-[14px] text-white/40 max-w-xl leading-relaxed mb-10">
            {evenement.description}
          </p>

          {/* Meta */}
          {derniere && (
            <div className="flex flex-wrap gap-x-6 gap-y-1 mb-12 text-[13px] text-white/35">
              <span>
                Dernière édition :{" "}
                <strong className="text-white/60 font-semibold">{derniere.annee}</strong>
              </span>
              <span>·</span>
              <span>{derniere.lieu}</span>
              <span>·</span>
              <span>
                <strong className="text-white/60 font-semibold">
                  {derniere.participants}
                </strong>{" "}
                participants
              </span>
            </div>
          )}

          {/* Tab bar */}
          <div className="flex border-b border-white/10">
            {(
              [
                { key: "presentation" as Tab, label: "Présentation" },
                { key: "realisations" as Tab, label: "Réalisations" },
              ]
            ).map(({ key, label }) => (
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

      {/* Content */}
      <div className="bg-white min-h-[60vh]">
        {tab === "presentation" && <PresentationTab evenement={evenement} />}
        {tab === "realisations" && <RealisationsTab evenement={evenement} />}
      </div>
    </main>
  );
}