type Parrain = {
  nom: string;
  logo: string;
  categorie: "Institutionnel" | "Partenaire";
};

// Remplace les URLs par les vrais logos de chaque organisation
const parrains: Parrain[] = [
  {
    nom: "Ordre National des Experts-Comptables et Comptables Agréés",
    logo: "/logos/onecca.png",
    categorie: "Institutionnel",
  },
  {
    nom: "Direction Générale des Impôts",
    logo: "/logos/dgi.png",
    categorie: "Institutionnel",
  },
  {
    nom: "Caisse Nationale de Prévoyance Sociale",
    logo: "/logos/cnps.png",
    categorie: "Institutionnel",
  },
  {
    nom: "Centre de Promotion des Investissements en Côte d'Ivoire",
    logo: "/logos/cepici.png",
    categorie: "Partenaire",
  },
  {
    nom: "Banque Centrale des États de l'Afrique de l'Ouest",
    logo: "/logos/bceao.png",
    categorie: "Partenaire",
  },
  {
    nom: "Union Économique et Monétaire Ouest-Africaine",
    logo: "/logos/uemoa.png",
    categorie: "Partenaire",
  },
];

export default function NosParrains() {
  const institutionnels = parrains.filter((p) => p.categorie === "Institutionnel");
  const partenaires = parrains.filter((p) => p.categorie === "Partenaire");

  return (
    <section className="py-28 px-6 bg-[#F7F9F7]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#2E7D52] font-semibold mb-4">
            Ils nous font confiance
          </p>
          <h2 className="text-5xl font-black text-[#0C3823] leading-[1.05] tracking-tight">
            Nos parrains
          </h2>
        </div>

        {/* Institutionnels */}
        <div className="mb-14">
          <p className="text-[10.5px] uppercase tracking-[0.22em] text-neutral-400 font-bold mb-8 border-b border-neutral-200 pb-4">
            Partenaires institutionnels
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 rounded-2xl overflow-hidden">
            {institutionnels.map((p) => (
              <div
                key={p.nom}
                className="bg-white px-10 py-10 flex items-center justify-center group"
              >
                <img
                  src={p.logo}
                  alt={p.nom}
                  title={p.nom}
                  className="h-14 w-auto max-w-40 object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partenaires */}
        <div>
          <p className="text-[10.5px] uppercase tracking-[0.22em] text-neutral-400 font-bold mb-8 border-b border-neutral-200 pb-4">
            Partenaires stratégiques
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 rounded-2xl overflow-hidden">
            {partenaires.map((p) => (
              <div
                key={p.nom}
                className="bg-white px-10 py-10 flex items-center justify-center group"
              >
                <img
                  src={p.logo}
                  alt={p.nom}
                  title={p.nom}
                  className="h-12 w-auto max-w-35 object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA 
        <div className="mt-16 border-t border-neutral-200 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-[#0C3823] mb-1">Vous souhaitez nous soutenir ?</h3>
            <p className="text-[14px] text-neutral-400">
              Rejoignez nos partenaires et participez au développement de la profession.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#0C3823] text-white text-[13px] font-bold px-7 py-3.5 rounded-xl hover:bg-[#0f4a2d] transition-colors"
          >
            Devenir parrain
          </a>
        </div> */}

      </div>
    </section>
  );
}