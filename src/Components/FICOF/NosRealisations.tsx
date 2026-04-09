type Realisation = {
  periode: string;
  activite: string;
  type: string;
  participants: string;
  statut: "Réalisé" | "En cours";
};

const realisations: Realisation[] = [
  { periode: "Mars 2025", activite: "AFCOM 2025 — Assises des Jeunes Financiers", type: "Événement", participants: "320", statut: "Réalisé" },
  { periode: "Fév. 2025", activite: "Formation Fiscalité & E-IMPÔTS — Session 2", type: "Formation", participants: "45", statut: "Réalisé" },
  { periode: "Jan. 2025", activite: "CJP — Café du Jeune Professionnel #12", type: "Networking", participants: "80", statut: "Réalisé" },
  { periode: "Déc. 2024", activite: "Webinaire Finance de marché", type: "Formation", participants: "130", statut: "Réalisé" },
  { periode: "Nov. 2024", activite: "ReM — Rencontre du Modèle #5", type: "Mentorat", participants: "60", statut: "Réalisé" },
  { periode: "Oct. 2024", activite: "Formation Paie & E-CNPS", type: "Formation", participants: "38", statut: "Réalisé" },
  { periode: "Juin 2025", activite: "AFCOM 2025 — Édition annuelle", type: "Événement", participants: "—", statut: "En cours" },
];

export default function NosRealisations() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#2E7D52] font-semibold mb-4">
              Bilan d'activités
            </p>
            <h2 className="text-5xl font-black text-[#0C3823] leading-[1.05] tracking-tight">
              Nos réalisations
            </h2>
          </div>
          <p className="text-[14px] text-neutral-400 max-w-xs leading-relaxed">
            Un aperçu des activités récentes menées par FICOF au profit de ses membres.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border-2 border-neutral-100">
          {/* Table header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-[#0C3823] text-white px-7 py-4 text-[10.5px] uppercase tracking-[0.2em] font-bold">
            <span>Activité</span>
            <span>Type</span>
            <span className="text-center">Participants</span>
            <span className="text-right">Statut</span>
          </div>

          {/* Table rows */}
          {realisations.map((r, i) => (
            <div
              key={r.activite}
              className={`grid grid-cols-[2fr_1fr_1fr_1fr] items-center px-7 py-5 border-b border-neutral-50 last:border-b-0 ${
                i % 2 === 0 ? "bg-white" : "bg-[#F7F9F7]"
              }`}
            >
              <div>
                <div className="text-[14px] font-semibold text-[#0C3823] leading-snug">{r.activite}</div>
                <div className="text-[11.5px] text-neutral-400 mt-0.5">{r.periode}</div>
              </div>
              <div className="text-[13px] text-neutral-500">{r.type}</div>
              <div className="text-[14px] font-semibold text-[#0C3823] text-center tabular-nums">
                {r.participants}
              </div>
              <div className="flex justify-end">
                <span
                  className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                    r.statut === "Réalisé"
                      ? "bg-[#E8F5EE] text-[#0C3823]"
                      : "bg-[#FFF8E1] text-[#8B6200]"
                  }`}
                >
                  {r.statut}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary row 
        <div className="mt-8 flex flex-wrap gap-8">
          {[
            { val: "700+", label: "Participants cumulés" },
            { val: "6", label: "Activités réalisées" },
            { val: "3", label: "Types d'événements" },
          ].map(({ val, label }) => (
            <div key={label} className="border-l-2 border-[#0C3823] pl-4">
              <div className="text-2xl font-black text-[#0C3823]">{val}</div>
              <div className="text-[12px] text-neutral-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}