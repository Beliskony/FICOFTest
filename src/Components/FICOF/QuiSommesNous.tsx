export default function QuiSommesNous() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text side */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#2E7D52] font-semibold mb-6">
            Notre identité
          </p>
          <h2 className="text-5xl font-black text-[#0C3823] leading-[1.05] mb-8 tracking-tight">
            Qui sommes-<br />nous ?
          </h2>
          <div className="space-y-5 text-[15px] text-neutral-500 leading-relaxed">
            <p>
              La <strong className="text-[#0C3823] font-semibold">Fédération Ivoirienne des Comptables &amp; Financiers (FICOF)</strong> est
              une organisation professionnelle dédiée à l'accompagnement des jeunes
              professionnels du chiffre en Côte d'Ivoire.
            </p>
            <p>
              Fondée sur la conviction que l'excellence professionnelle se construit
              collectivement, FICOF crée des espaces d'échange, de formation et de
              mise en réseau pour les comptables, auditeurs, fiscalistes et financiers
              de toute la nation.
            </p>
            <p>
              Nous fédérons une communauté engagée, ancrée dans les réalités ivoiriennes
              et tournée vers les standards internationaux.
            </p>
          </div>
        </div>

        {/* Visual side — a clean stat block */}
        <div className="bg-neutral-100 p-6 border border-neutral-100 rounded-2xl overflow-hidden hover:border-[#0C3823]/20 transition-all hover:p-2">
             <img src="https://www.ficof-ci.org/wp-content/uploads/2025/05/FB_IMG_1718052939893.jpg" alt="FICOF" className="w-full h-full object-cover hover:rounded-2xl" />
        </div>
      </div>
    </section>
  );
}