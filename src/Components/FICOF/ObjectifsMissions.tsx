const pillars = [
  {
    tag: "Objectifs",
    title: "Ce que nous poursuivons",
    body:
      "Structurer et valoriser la profession comptable et financière en Côte d'Ivoire. Renforcer les compétences des membres, favoriser l'insertion professionnelle et créer un réseau solide entre pairs.",
  },
  {
    tag: "Mission",
    title: "Ce que nous faisons",
    body:
      "Former, connecter et représenter les jeunes professionnels du chiffre. Nous organisons des événements, des formations certifiantes et des espaces de mentorat pour accélérer le développement de chacun.",
  },
  {
    tag: "Vision",
    title: "Où nous allons",
    body:
      "Devenir la référence des fédérations professionnelles comptables et financières en Afrique de l'Ouest, portée par une communauté d'excellence reconnue à l'échelle régionale.",
  },
];

const values = [
  { label: "Excellence", desc: "Exigence dans chaque action, chaque formation, chaque événement." },
  { label: "Solidarité", desc: "La force du collectif au service de la réussite individuelle." },
  { label: "Intégrité", desc: "Droiture et transparence comme fondements de notre pratique." },
  { label: "Innovation", desc: "S'adapter, anticiper, proposer de nouvelles approches." },
];

export default function ObjectifsMissions() {
  return (
    <section className="py-28 px-6 bg-[#F7F9F7]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 max-w-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#2E7D52] font-semibold mb-4">
            Notre raison d'être
          </p>
          <h2 className="text-5xl font-black text-[#0C3823] leading-[1.05] tracking-tight">
            Objectifs, mission,<br />vision & valeurs
          </h2>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 rounded-2xl overflow-hidden mb-px">
          {pillars.map((p) => (
            <div key={p.tag} className="bg-white px-9 py-10 flex flex-col gap-4">
              <span className="text-[10.5px] uppercase tracking-[0.22em] text-[#2E7D52] font-bold">
                {p.tag}
              </span>
              <h3 className="text-[18px] font-black text-[#0C3823] leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="text-[14px] text-neutral-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Values — horizontal rule list */}
        <div className="mt-14">
          <p className="text-[10.5px] uppercase tracking-[0.22em] text-neutral-400 font-bold mb-8">
            Nos valeurs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={v.label} className="border-t-2 border-[#0C3823] pt-5">
                <span className="text-[11px] text-neutral-300 font-semibold tabular-nums mr-2">
                  0{i + 1}
                </span>
                <h4 className="text-[17px] font-black text-[#0C3823] mt-1 mb-2">{v.label}</h4>
                <p className="text-[13px] text-neutral-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}