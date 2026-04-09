type AgendaItem = { date: string; month: string; title: string; type: string };
type Annonce = { label: string; title: string; date: string };

const agenda: AgendaItem[] = [
  { date: "14", month: "Juin", title: "AFCOM 2025 — Assises des Jeunes Financiers", type: "Événement" },
  { date: "22", month: "Juin", title: "CJP — Café du Jeune Professionnel", type: "Networking" },
  { date: "05", month: "Juil", title: "Formation Fiscalité & E-IMPÔTS — Session 3", type: "Formation" },
  { date: "19", month: "Juil", title: "ReM — À la Rencontre de mon Modèle", type: "Mentorat" },
];

const annonces: Annonce[] = [
  {
    label: "Recrutement",
    title: "FICOF recrute un(e) chargé(e) de communication",
    date: "Candidature jusqu'au 30 mai 2025",
  },
  {
    label: "Annonce",
    title: "Ouverture des inscriptions — Formation Paie & E-CNPS",
    date: "Disponible dès maintenant",
  },
  {
    label: "Recrutement",
    title: "Appel à intervenants pour l'AFCOM 2025",
    date: "Dossiers avant le 10 juin 2025",
  },
];

export default function VieFICOF() {
  return (
    <section className="py-28 px-6 bg-[#F7F9F7]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#2E7D52] font-semibold mb-4">
            Au quotidien
          </p>
          <h2 className="text-5xl font-black text-[#0C3823] leading-[1.05] tracking-tight">
            La vie de FICOF
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12">
          {/* Agenda */}
          <div>
            <p className="text-[10.5px] uppercase tracking-[0.22em] text-neutral-400 font-bold mb-6">
              Agenda
            </p>
            <div className="space-y-px rounded-2xl overflow-hidden bg-neutral-200">
              {agenda.map((item) => (
                <div
                  key={item.title}
                  className="bg-white flex items-start gap-6 px-7 py-6 hover:bg-[#F7F9F7] transition-colors group"
                >
                  {/* Date block */}
                  <div className="shrink-0 text-center w-10">
                    <div className="text-[22px] font-black text-[#0C3823] leading-none">{item.date}</div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">{item.month}</div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[10.5px] uppercase tracking-[0.15em] text-[#2E7D52] font-semibold mb-1">
                      {item.type}
                    </div>
                    <div className="text-[14px] font-semibold text-[#0C3823] leading-snug group-hover:text-[#2E7D52] transition-colors">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Annonces & Recrutements */}
          <div>
            <p className="text-[10.5px] uppercase tracking-[0.22em] text-neutral-400 font-bold mb-6">
              Annonces & Recrutements
            </p>
            <div className="space-y-4">
              {annonces.map((a) => (
                <div
                  key={a.title}
                  className="bg-white rounded-2xl px-7 py-6 border border-neutral-100 hover:border-[#0C3823]/15 hover:shadow-sm transition-all duration-200 cursor-pointer group"
                >
                  <div
                    className={`text-[10.5px] uppercase tracking-[0.18em] font-bold mb-2 ${
                      a.label === "Recrutement" ? "text-[#0C3823]" : "text-[#2E7D52]"
                    }`}
                  >
                    {a.label}
                  </div>
                  <p className="text-[14.5px] font-semibold text-[#0C3823] leading-snug mb-3 group-hover:text-[#2E7D52] transition-colors">
                    {a.title}
                  </p>
                  <p className="text-[12px] text-neutral-400">{a.date}</p>
                </div>
              ))}

              <div className="pt-2">
                <a
                  href="/evenements"
                  className="text-[13px] font-semibold text-[#0C3823] underline underline-offset-4 decoration-neutral-200 hover:decoration-[#0C3823] transition-all"
                >
                  Voir toutes les annonces →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}