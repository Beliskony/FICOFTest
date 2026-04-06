// components/Home/QuickAccess.tsx
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  BookOpen, 
  Briefcase, 
  Users, 
  MapPin, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';

const quickAccessItems = [
  { 
    icon: Calendar, 
    label: "Événements", 
    path: "/evenements", 
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Conférences, ateliers et rencontres professionnelles",
  },
  { 
    icon: BookOpen, 
    label: "Formations", 
    path: "/formations", 
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    description: "Perfectionnez vos compétences avec nos experts",
  },
  { 
    icon: Briefcase, 
    label: "Offres d'emploi", 
    path: "/emploi", 
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "Découvrez les opportunités de carrière",
  },
  { 
    icon: Users, 
    label: "Adhésion", 
    path: "/adhesion", 
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    description: "Rejoignez la communauté FICOF",
  },
  { 
    icon: MapPin, 
    label: "Contact", 
    path: "/contact", 
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    description: "Une question ? Contactez-nous",
  },
  { 
    icon: MessageCircle, 
    label: "WhatsApp", 
    path: "https://wa.me/2250000000000", 
    external: true, 
    color: "text-green-600",
    bgColor: "bg-green-600/10",
    description: "Échangez instantanément avec nous",
  },
];

export default function QuickAccess() {
  const renderItem = (item: typeof quickAccessItems[0], index: number) => {
    const Icon = item.icon;
    
    if (item.external) {
      return (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
        >
          <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-7 h-7 ${item.color}`} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.description}</p>
          <div className="flex items-center gap-2 text-[#2E7D52] font-semibold text-sm group-hover:gap-3 transition-all">
            <span>Accéder</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      );
    }
    
    return (
      <Link
        key={index}
        to={item.path}
        className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
      >
        <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-7 h-7 ${item.color}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.description}</p>
        <div className="flex items-center gap-2 text-[#2E7D52] font-semibold text-sm group-hover:gap-3 transition-all">
          <span>Accéder</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2E7D52]/10 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[#4CAF73] rounded-full"></span>
            <span className="text-sm font-medium text-[#2E7D52] uppercase tracking-wider">
              Navigation rapide
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Accès direct aux services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Découvrez nos services et rejoignez notre communauté en quelques clics
          </p>
        </div>

        {/* Grille des accès rapides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccessItems.map((item, index) => renderItem(item, index))}
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#2E7D52] mb-1">500+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Membres actifs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#2E7D52] mb-1">50+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Formations par an</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#2E7D52] mb-1">20+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Événements annuels</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#2E7D52] mb-1">100+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Offres d'emploi</div>
          </div>
        </div>
      </div>
    </section>
  );
}