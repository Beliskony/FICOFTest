import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

interface Event {
  id: number;
  day: string;
  month: string;
  title: string;
  location: string;
  type: 'Conférence' | 'Formation' | 'Atelier' | 'Networking';
  spots: number;
  link: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    day: '12',
    month: 'Avr',
    title: 'AFCOM 2025 — Assises des Jeunes Financiers',
    location: 'Sofitel Abidjan, Plateau',
    type: 'Conférence',
    spots: 48,
    link: '/events/afcom',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    day: '20',
    month: 'Avr',
    title: 'Formation Fiscalité Approfondie — Session Printemps',
    location: 'Centre FICOF, Cocody',
    type: 'Formation',
    spots: 22,
    link: '/events/fiscalite',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    day: '03',
    month: 'Mai',
    title: 'Café du Jeune Professionnel — Édition Mai',
    location: 'Espace Latrille, Cocody',
    type: 'Networking',
    spots: 65,
    link: '/events/cjp',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];


export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#2E7D52]/10 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-[#4CAF73] rounded-full" />
              <span className="text-xs font-semibold text-[#2E7D52] uppercase tracking-wider">
                Agenda
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Événements à venir
            </h2>
            <p className="text-gray-500 mt-2">
              Conférences, ateliers et rencontres au calendrier FICOF
            </p>
          </div>

          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7D52] border border-[#2E7D52] px-4 py-2 rounded-xl hover:bg-[#2E7D52] hover:text-white transition-all duration-200 whitespace-nowrap"
          >
            Voir tout l'agenda
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event) => (
            <Link
              key={event.id}
              to={event.link}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image avec overlays */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient bas */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

               

                {/* Bloc date en haut à gauche */}
                <div className="absolute top-3 left-3 flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-sm">
                  <span className="text-xl font-bold text-[#2E7D52] leading-none">{event.day}</span>
                  <span className="text-[9px] font-semibold text-[#2E7D52] uppercase tracking-wide mt-0.5">{event.month}</span>
                </div>
              </div>

              {/* Body */}
              <div className="px-5 py-4">
                <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#2E7D52] transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPin size={12} className="opacity-60 shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 px-5 py-3 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  Places restantes :{' '}
                  <span className="text-[#2E7D52] font-semibold">{event.spots}</span>
                </span>
                <ArrowRight
                  size={15}
                  className="text-[#2E7D52] group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}