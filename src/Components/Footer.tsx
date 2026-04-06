import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  ChevronRight,
  BookOpen,
  Calendar,
  Briefcase,
  Archive,
  Video,
  Users,
} from "lucide-react";

// Icônes SVG pour les réseaux sociaux
const FacebookIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="15" 
    height="15" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="15" 
    height="15" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02v-6.5l5.75 3.25-5.75 3.25z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="15" 
    height="15" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
  </svg>
);

const footerLinks = [
  {
    title: "Organisation",
    icon: Users,
    links: [
      { label: "Qui sommes-nous ?", href: "/ficof#qui-sommes-nous" },
      { label: "Notre équipe", href: "/ficof#equipe" },
      { label: "Nos réalisations", href: "/ficof#realisations" },
      { label: "La vie de FICOF", href: "/ficof#vie-ficof" },
      { label: "Nos parrains", href: "/ficof#parrains" },
    ],
  },
  {
    title: "Formations",
    icon: BookOpen,
    links: [
      { label: "Comptabilité approfondie", href: "/formations/comptabilite" },
      { label: "Fiscalité & E-IMPÔTS", href: "/formations/fiscalite" },
      { label: "Paie & E-CNPS", href: "/formations/paie" },
      { label: "Finance de marché", href: "/formations/finance" },
      { label: "Management & RH", href: "/formations/management" },
      { label: "Conseils & orientations", href: "/formations/conseils" },
    ],
  },
  {
    title: "Événements & Services",
    icon: Calendar,
    links: [
      { label: "AFCOM", href: "/evenements/afcom" },
      { label: "CJP — Café du Jeune Pro", href: "/evenements/cjp" },
      { label: "ReM — Rencontre du Modèle", href: "/evenements/rem" },
      { label: "Offres d'emploi", href: "/emploi" },
      { label: "Conférences en direct", href: "/conferences" },
      { label: "Archives & Bibliothèque", href: "/archives" },
    ],
  },
];

const socials = [
  { icon: FacebookIcon, href: "https://facebook.com/ficof", label: "Facebook", color: "hover:bg-[#1877F2]" },
  { icon: YoutubeIcon, href: "https://youtube.com/ficof", label: "YouTube", color: "hover:bg-[#FF0000]" },
  { icon: LinkedinIcon, href: "https://linkedin.com/company/ficof", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
  { icon: MessageCircle, href: "https://wa.me/2250000000000", label: "WhatsApp", color: "hover:bg-[#25D366]" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1F14] text-white">
      {/* ── Newsletter band ── */}
      <div className="border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF73] font-bold mb-1">
              Restez informé
            </p>
            <h3 className="text-xl font-black text-white">
              Rejoignez la communauté FICOF
            </h3>
            <p className="text-sm text-white/50 mt-1">
              Actualités, formations, événements — directement dans votre boîte mail.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto gap-2"
          >
            <input
              type="email"
              placeholder="votre@email.ci"
              className="flex-1 md:w-72 bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#4CAF73]/60 focus:bg-white/8 transition-all"
            />
            <button
              type="submit"
              className="shrink-0 bg-[#2E7D52] hover:bg-[#3a9962] active:scale-[0.97] text-white text-sm font-bold px-5 py-3 rounded-xl transition-all duration-150 flex items-center gap-1.5"
            >
              S'inscrire
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
        {/* Brand column */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[11px] bg-[#2E7D52] flex items-center justify-center shadow-lg shadow-green-900/40">
              <span className="text-white font-black text-sm tracking-tight">FI</span>
            </div>
            <div>
              <div className="font-black text-white text-[17px] tracking-tight leading-none">FICOF</div>
              <div className="text-[9.5px] text-white/40 tracking-[0.2em] uppercase font-semibold mt-0.75">
                Côte d'Ivoire
              </div>
            </div>
          </div>

          <p className="text-[13.5px] text-white/50 leading-relaxed max-w-xs">
            La Fédération Ivoirienne des Comptables &amp; Financiers accompagne les jeunes
            professionnels dans leur développement et leur rayonnement.
          </p>

          {/* Contact info */}
          <div className="space-y-2.5">
            <a
              href="mailto:contact@ficof.ci"
              className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-white transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#2E7D52]/30 transition-colors">
                <Mail size={13} strokeWidth={2} className="text-[#4CAF73]" />
              </div>
              contact@ficof.ci
            </a>
            <a
              href="tel:+2250000000000"
              className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-white transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#2E7D52]/30 transition-colors">
                <Phone size={13} strokeWidth={2} className="text-[#4CAF73]" />
              </div>
              +225 00 00 00 00
            </a>
            <div className="flex items-start gap-2.5 text-[13px] text-white/50">
              <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={13} strokeWidth={2} className="text-[#4CAF73]" />
              </div>
              <span>Abidjan, Plateau — Côte d'Ivoire</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-9 h-9 rounded-xl bg-white/6 flex items-center justify-center text-white/50 hover:text-white transition-all duration-150 ${color}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map((col) => {
          const Icon = col.icon;
          return (
            <div key={col.title}>
              <div className="flex items-center gap-2 mb-5">
                <Icon size={14} strokeWidth={2} className="text-[#4CAF73]" />
                <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                  {col.title}
                </h4>
              </div>
              <ul className="space-y-1.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-1 text-[13px] text-white/50 hover:text-white transition-colors duration-150"
                    >
                      <ChevronRight
                        size={11}
                        strokeWidth={2.5}
                        className="text-[#2E7D52] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 shrink-0"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* ── Quick-action bar ── */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {[
              { icon: Briefcase, label: "Offres d'emploi", href: "/emploi" },
              { icon: Video, label: "Conférences live", href: "/conferences" },
              { icon: Archive, label: "Bibliothèque", href: "/archives#bibliotheque" },
              { icon: Users, label: "Adhérer", href: "/adhesion" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-1.5 bg-white/5 hover:bg-[#2E7D52] text-white/60 hover:text-white text-[12px] font-semibold px-3.5 py-2 rounded-lg transition-all duration-150"
              >
                <Icon size={12} strokeWidth={2.5} />
                {label}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/2250000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-[0.97] text-white text-[12px] font-bold px-4 py-2 rounded-lg transition-all duration-150 shrink-0"
          >
            <MessageCircle size={13} strokeWidth={2.5} />
            Écrire sur WhatsApp
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px] text-white/30">
          <span>© {year} FICOF — Fédération Ivoirienne des Comptables &amp; Financiers. Tous droits réservés.</span>
          <div className="flex items-center gap-4">
            <a href="/mentions-legales" className="hover:text-white/70 transition-colors">Mentions légales</a>
            <a href="/confidentialite" className="hover:text-white/70 transition-colors">Confidentialité</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}