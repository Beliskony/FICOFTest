const partenaires = [
  { id: 1, name: "Ordre des Experts-Comptables", logo: "/1.png" },
  { id: 2, name: "Banque Nationale d'Investissement", logo: "/2.png" },
  { id: 3, name: "Société Générale Côte d'Ivoire", logo: "/3.png" },
  { id: 4, name: "EY Côte d'Ivoire", logo: "/4.png" },
  { id: 5, name: "KPMG Côte d'Ivoire", logo: "/5.png" },
  { id: 6, name: "PwC CI", logo: "/6.png" },
];

export default function Presentation() {
  // Empêcher tout comportement par défaut
  const handleLogoClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Logo ${name} cliqué - aucune action`);
  };

  return (
    <div className="bg-white">
      {/* Partenaires */}
      <section className="py-16 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Fédération Ivoirienne des Comptables & Financiers
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Excellence, Innovation et Leadership au service de la finance ivoirienne
            </p>
          </div>

          {/* Partenaires */}
          <div className="border-t border-gray-200 pt-12">
            <p className="text-center text-xs uppercase tracking-wider text-gray-400 font-semibold mb-8">
              Ils nous font confiance
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partenaires.map((partenaire) => (
                <div 
                  key={partenaire.id} 
                  className="flex justify-center cursor-pointer"
                  onClick={(e) => handleLogoClick(e, partenaire.name)}
                >
                  <img
                    src={partenaire.logo}
                    alt={partenaire.name}
                    className="h-20 w-auto hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Édito du Président */}
      <section className="py-20 bg-[#0A1F14] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image du Président */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-[#2E7D52] to-transparent rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img
                src="https://images.pexels.com/photos/3777573/pexels-photo-3777573.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dr. Kouadio N'Guessan - Président FICOF"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>

            {/* Message */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2E7D52]/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-[#4CAF73] rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-[#4CAF73] uppercase tracking-wider">
                  Mot du Président
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dr. Kouadio N'Guessan
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6 italic">
                "C'est avec une grande fierté que je vous souhaite la bienvenue au sein de la Fédération 
                Ivoirienne des Comptables et Financiers. Notre mission est de former, accompagner et 
                connecter les talents de demain pour bâtir une finance plus forte et plus inclusive en 
                Côte d'Ivoire."
              </p>
              <div className="border-l-4 border-[#4CAF73] pl-4 mb-6">
                <p className="text-white/60 text-sm leading-relaxed">
                  Expert-comptable et financier de renom, le Dr Kouadio N'Guessan a consacré sa carrière 
                  à la formation et au développement des jeunes talents ivoiriens. Avec plus de 25 ans 
                  d'expérience dans les plus grands cabinets internationaux, il apporte à FICOF une vision 
                  stratégique et une expertise reconnue dans les domaines de la finance d'entreprise et 
                  de la gouvernance.
                </p>
              </div>
              {/* Tags corrigés */}
              <div className="flex flex-wrap items-center gap-3">
                {['Expert-comptable', 'Financier', 'Formateur'].map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-white/10 rounded-full text-xs text-white/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}