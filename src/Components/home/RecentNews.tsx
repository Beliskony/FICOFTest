// components/Home/RecentNews.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Calendar } from 'lucide-react';

// Interface pour les actualités
interface Actualite {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  link: string;
}

// Données mock (à remplacer par une API)
const actualitesData: Actualite[] = [
  {
    id: 1,
    title: "AFCOM 2025 : Les inscriptions sont ouvertes !",
    description: "Rejoignez les 500+ jeunes professionnels pour la 5ème édition des Assises des Jeunes Financiers et Comptables. Au programme : conférences, ateliers pratiques et networking.",
    date: "15 Mars 2025",
    category: "Événement",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/evenements/afcom"
  },
  {
    id: 2,
    title: "Nouvelle formation en Intelligence Économique",
    description: "Inscrivez-vous à notre formation certifiante sur la veille stratégique et l'intelligence économique. Début des cours le 10 Avril 2025.",
    date: "10 Mars 2025",
    category: "Formation",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/formations/veille"
  },
  {
    id: 3,
    title: "Offre d'emploi : Expert-Comptable Senior",
    description: "Un cabinet international recherche un expert-comptable pour rejoindre son équipe à Abidjan. Expérience minimum 5 ans requise.",
    date: "5 Mars 2025",
    category: "Recrutement",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/emploi"
  },
  {
    id: 4,
    title: "Café du Jeune Professionnel - Édition Mars",
    description: "Thème : 'Comment réussir son entretien d'embauche dans la finance ?' Intervenant : Mme Awa Diallo, DRH Groupe BICICI.",
    date: "28 Février 2025",
    category: "Événement",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/evenements/cjp"
  },
  {
    id: 5,
    title: "Formation en Fiscalité Approfondie",
    description: "Maîtrisez les nouvelles réglementations fiscales et la plateforme E-IMPÔTS. Formation certifiante de 3 mois.",
    date: "20 Février 2025",
    category: "Formation",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/formations/fiscalite"
  },
  {
    id: 6,
    title: "Conférence sur la Finance de Marché",
    description: "Découvrez les tendances et innovations de la finance de marché en Afrique de l'Ouest avec des experts internationaux.",
    date: "15 Février 2025",
    category: "Conférence",
    image: "https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/conferences"
  }
];

// Couleurs par catégorie
const categoryColors: { [key: string]: string } = {
  "Événement": "bg-blue-500",
  "Formation": "bg-green-500",
  "Recrutement": "bg-purple-500",
  "Conférence": "bg-orange-500",
  "Actualité": "bg-gray-500"
};

export default function RecentNews() {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);

  // Simulation de chargement des données
  useEffect(() => {
    setTimeout(() => {
      setActualites(actualitesData);
      setLoading(false);
    }, 500);
  }, []);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, actualites.length));
  };

  const showLess = () => {
    setVisibleCount(3);
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Chargement...
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 rounded-2xl h-96 animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const displayedActualites = actualites.slice(0, visibleCount);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#2E7D52]/10 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-[#4CAF73] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-[#2E7D52] uppercase tracking-wider">
                Restez informé
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Actualités récentes
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Découvrez les dernières nouvelles, événements et opportunités de FICOF
            </p>
          </div>
          {actualites.length > 3 && (
            <div className="flex gap-3">
              {visibleCount < actualites.length ? (
                <button
                  onClick={showMore}
                  className="px-5 py-2 rounded-xl border border-gray-200 text-gray-600 hover:border-[#2E7D52] hover:text-[#2E7D52] transition-all duration-300 font-medium text-sm"
                >
                  Voir plus
                </button>
              ) : (
                <button
                  onClick={showLess}
                  className="px-5 py-2 rounded-xl border border-gray-200 text-gray-600 hover:border-gray-400 transition-all duration-300 font-medium text-sm"
                >
                  Voir moins
                </button>
              )}
            </div>
          )}
        </div>

        {/* Grille des actualités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedActualites.map((actualite) => (
            <Link
              key={actualite.id}
              to={actualite.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={actualite.image}
                  alt={actualite.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Catégorie */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${categoryColors[actualite.category] || 'bg-gray-500'} text-white text-xs font-semibold rounded-full shadow-lg`}>
                    {actualite.category}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Calendar size={12} />
                  <span>{actualite.date}</span>
                </div>

                {/* Titre */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2E7D52] transition-colors line-clamp-2">
                  {actualite.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {actualite.description}
                </p>

                {/* Lire la suite */}
                <div className="flex items-center gap-2 text-[#2E7D52] font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Lire la suite</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Voir toutes les actualités */}
        {actualites.length > 0 && (
          <div className="text-center mt-12">
            <Link
              to="/actualites"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E7D52] text-white font-semibold hover:bg-[#3a9962] transition-all duration-300 hover:gap-3 shadow-md"
            >
              Voir toutes les actualités
              <ChevronRight size={18} />
            </Link>
          </div>
        )}

        {/* Aucune actualité */}
        {actualites.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">Aucune actualité pour le moment</p>
          </div>
        )}
      </div>
    </section>
  );
}