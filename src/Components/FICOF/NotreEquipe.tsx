type Person = {
  name: string;
  role: string;
  category: "Bureau" | "Intervenant";
  photo: string;
};

const people: Person[] = [
  {
    name: "Kouassi Yao Bertrand",
    role: "Président",
    category: "Bureau",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ahou Sylvie Kouamé",
    role: "Vice-Présidente",
    category: "Bureau",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Konan Émile Tra",
    role: "Secrétaire Général",
    category: "Bureau",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Bamba Fatoumata",
    role: "Trésorière",
    category: "Bureau",
    photo: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Adou Christophe",
    role: "Expert-comptable DSCG",
    category: "Intervenant",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "N'Guessan Hervé",
    role: "Fiscaliste & Consultant",
    category: "Intervenant",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Koné Aminata",
    role: "Finance de marché",
    category: "Intervenant",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Assi Jean-Pierre",
    role: "DRH & Coach",
    category: "Intervenant",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];

export default function NotreEquipe() {
  const bureau = people.filter((p) => p.category === "Bureau");
  const intervenants = people.filter((p) => p.category === "Intervenant");

  return (
    <section className="py-28 px-6 bg-[#0C3823]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#4CAF73] font-semibold mb-4">
              Les personnes
            </p>
            <h2 className="text-5xl font-black text-white leading-[1.05] tracking-tight">
              Notre équipe &<br />nos intervenants
            </h2>
          </div>
          <p className="text-[14px] text-white/40 max-w-xs leading-relaxed">
            Des professionnels engagés qui donnent de leur temps et de leur expertise pour faire avancer la communauté.
          </p>
        </div>

        {/* Bureau exécutif */}
        <div className="mb-16">
          <p className="text-[10.5px] uppercase tracking-[0.22em] text-white/30 font-bold mb-8 border-b border-white/10 pb-4">
            Bureau exécutif
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bureau.map((p) => (
              <div key={p.name} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white/5">
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                </div>
                <div className="text-[15px] font-bold text-white leading-snug mb-1">{p.name}</div>
                <div className="text-[12px] text-white/40">{p.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mb-16" />

        {/* Intervenants */}
        <div>
          <p className="text-[10.5px] uppercase tracking-[0.22em] text-white/30 font-bold mb-8 border-b border-white/10 pb-4">
            Intervenants & formateurs
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {intervenants.map((p) => (
              <div key={p.name} className="group flex flex-col items-center text-center">
                <div className="w-full aspect-square rounded-full overflow-hidden mb-4 ring-1 ring-white/10 group-hover:ring-[#4CAF73]/50 transition-all duration-300 bg-white/5">
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                </div>
                <div className="text-[14px] font-bold text-white leading-snug mb-1">{p.name}</div>
                <div className="text-[12px] text-white/40">{p.role}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}