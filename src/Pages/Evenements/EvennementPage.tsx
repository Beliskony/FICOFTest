// src/pages/EvenementPage.tsx

import { useParams } from "react-router-dom";
import EventPage from "./EventPage";
import { evenements } from "../../data/EventsData";

export default function EvenementPage() {
  const { slug } = useParams<{ slug: string }>();
  const ev = slug ? evenements[slug] : undefined;

  if (!ev) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#2E7D52] font-bold mb-3">
            Événement introuvable
          </p>
          <h1 className="text-4xl font-black text-[#0C3823] mb-4">
            Page non trouvée
          </h1>
          <p className="text-[14px] text-neutral-400 mb-8">
            L'événement <strong className="text-neutral-600">"{slug}"</strong> n'existe pas.
          </p>
          <a
            href="/evenements"
            className="bg-[#0C3823] text-white text-[13px] font-bold px-6 py-3 rounded-xl hover:bg-[#0f4a2d] transition-colors"
          >
            Voir tous les événements
          </a>
        </div>
      </div>
    );
  }

  return <EventPage evenement={ev} />;
}