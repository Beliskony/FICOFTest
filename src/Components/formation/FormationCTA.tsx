import { MessageCircle, Phone, ArrowRight } from "lucide-react";

type Props = {
  onInscrire: () => void;
};

export default function FormationsCTA({ onInscrire }: Props) {
  return (
    <section className="bg-[#0C3823] py-16 mt-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
          Besoin d'aide pour choisir ?
        </h2>
        <p className="text-white/60 text-[16px] max-w-xl mx-auto mb-10">
          Notre équipe vous accompagne pour identifier la formation la mieux
          adaptée à votre profil et à vos objectifs professionnels.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onInscrire}
            className="flex items-center gap-2.5 bg-white text-[#0C3823] font-black text-[14px] px-7 py-4 rounded-2xl hover:bg-emerald-50 transition-colors shadow-xl"
          >
            S'inscrire à une formation
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
          <a
            href="https://wa.me/2250000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-[14px] px-7 py-4 rounded-2xl hover:bg-[#1ebe5d] transition-colors"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Nous contacter sur WhatsApp
          </a>
          <a
            href="tel:+2250000000000"
            className="flex items-center gap-2.5 text-white/70 hover:text-white font-semibold text-[14px] transition-colors"
          >
            <Phone size={16} strokeWidth={2} />
            +225 00 00 00 00
          </a>
        </div>
      </div>
    </section>
  );
}