export default function ArchivesHero() {
  return (
    <section className="relative bg-[#0C3823] overflow-hidden pt-28 pb-20">
      {/* Motif décoratif */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-32 -right-32 w-125 h-125 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-75 h-75 rounded-full bg-white/5 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8">
          Médiathèque & Ressources
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Explorez nos
            <span className="block text-emerald-300">archives</span>
            et ressources
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            Photos, vidéos, documents officiels et liens utiles mis à
            disposition par la FICOF pour les professionnels de Côte d'Ivoire.
          </p>
        </div>
      </div>
    </section>
  );
}