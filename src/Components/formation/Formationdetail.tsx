import { X, Clock, MapPin, Calendar, Award, ChevronDown, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { Formation } from "../../Interfaces/formationstype";

type Props = {
  formation: Formation;
  onClose: () => void;
  onInscrire: (formation: Formation) => void;
};

export default function FormationDetail({ formation, onClose, onInscrire }: Props) {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const Icon = formation.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4 md:p-8">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl my-auto">
        {/* Header */}
        <div className="relative bg-[#0C3823] rounded-t-3xl p-8 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={18} strokeWidth={2.5} />
          </button>

          <div className="relative flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
              <Icon size={26} className="text-emerald-300" strokeWidth={1.8} />
            </div>
            <div>
              <span className="text-emerald-300 text-[11px] font-bold uppercase tracking-[0.2em]">
                {formation.categorie}
              </span>
              <h2 className="text-white font-black text-xl md:text-2xl leading-tight mt-1 max-w-xl">
                {formation.titre}
              </h2>
            </div>
          </div>

          {/* Méta badges */}
          <div className="relative flex flex-wrap gap-3 mt-6">
            {[
              { icon: Clock, label: formation.duree },
              { icon: Award, label: formation.niveau },
              { icon: MapPin, label: formation.modalite },
            ].map(({ icon: MetaIcon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-[12px] font-medium px-3 py-1.5 rounded-lg"
              >
                <MetaIcon size={13} strokeWidth={2} />
                {label}
              </div>
            ))}
            <div className="ml-auto bg-emerald-400 text-[#0C3823] font-black text-[14px] px-4 py-1.5 rounded-lg">
              {formation.prix}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">

          {/* Objectifs */}
          <div>
            <h3 className="text-[13px] font-black text-[#0C3823] uppercase tracking-[0.15em] mb-4">
              Objectifs pédagogiques
            </h3>
            <ul className="space-y-2.5">
              {formation.objectifs.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-neutral-700">
                  <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" strokeWidth={2.5} />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Programme */}
          <div>
            <h3 className="text-[13px] font-black text-[#0C3823] uppercase tracking-[0.15em] mb-4">
              Programme de formation
            </h3>
            <div className="space-y-2">
              {formation.programme.map((mod, i) => (
                <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors"
                  >
                    <span className="font-semibold text-[14px] text-neutral-800">{mod.module}</span>
                    <ChevronDown
                      size={16}
                      strokeWidth={2.5}
                      className={`text-neutral-400 transition-transform duration-200 shrink-0 ${
                        openModule === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openModule === i && (
                    <ul className="px-5 py-4 space-y-2 border-t border-neutral-200">
                      {mod.contenu.map((c, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-[13px] text-neutral-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0C3823] mt-1.5 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Modalités d'inscription */}
          <div className="bg-neutral-50 rounded-2xl p-6">
            <h3 className="text-[13px] font-black text-[#0C3823] uppercase tracking-[0.15em] mb-5">
              Modalités d'inscription
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.15em] mb-1">
                  Prérequis
                </p>
                <p className="text-[13px] text-neutral-700 font-medium">
                  {formation.inscription.prerequis}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.15em] mb-1">
                  Lieu
                </p>
                <p className="text-[13px] text-neutral-700 font-medium">
                  {formation.inscription.lieu}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.15em] mb-2">
                  Sessions disponibles
                </p>
                <div className="space-y-1.5">
                  {formation.inscription.sessions.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12px] text-neutral-700">
                      <Calendar size={12} className="text-[#0C3823]" strokeWidth={2} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => onInscrire(formation)}
            className="w-full flex items-center justify-center gap-3 bg-[#0C3823] text-white font-black text-[15px] py-4 rounded-2xl hover:bg-[#0f4a2d] active:scale-[0.99] transition-all shadow-lg shadow-green-900/20"
          >
            S'inscrire à cette formation
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}