"use client";

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  Mail,
  User,
  Calendar,
  BookOpen,
  Briefcase,
  Archive,
  Video,
  Home,
  Info,
  MapPin,
} from "lucide-react";

type NavItem = {
  label: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { label: "Accueil", path: "/", icon: Home },
  { label: "FICOF", path: "/ficof", icon: Info },
  { label: "Événements", path: "/evenements", icon: Calendar },
  { label: "Formations", path: "/formations", icon: BookOpen },
  { label: "Offres d'emploi", path: "/emploi", icon: Briefcase },
  { label: "Archives", path: "/archives", icon: Archive },
  { label: "Conférences", path: "/conferences", icon: Video },
  { label: "Contact", path: "/contact", icon: MapPin },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Top bar ── */}
      <div className="bg-[#0C3823] text-white/60 text-[11px] tracking-wide px-6 hidden md:flex justify-between items-center h-9">
        <span className="uppercase tracking-[0.18em] text-white/40 font-semibold">
          Fédération Ivoirienne des Comptables &amp; Financiers
        </span>
        <div className="flex items-center gap-5">
          <a
            href="tel:+2250000000000"
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-150"
          >
            <Phone size={11} strokeWidth={2} />
            <span>+225 00 00 00 00</span>
          </a>
          <a
            href="mailto:contact@ficof.ci"
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-150"
          >
            <Mail size={11} strokeWidth={2} />
            <span>contact@ficof.ci</span>
          </a>
          <a
            href="https://wa.me/2250000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1 rounded-full hover:bg-[#1ebe5d] transition-colors text-[10px] font-bold uppercase tracking-wider"
          >
            <MessageCircle size={10} strokeWidth={2.5} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── Main nav ── */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-lg shadow-black/6 border-b border-neutral-100"
            : "bg-white border-b border-neutral-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#0C3823] flex items-center justify-center shadow-md shadow-green-900/25 group-hover:shadow-lg group-hover:shadow-green-900/30 transition-all duration-200">
              <span className="text-white font-black text-base tracking-tight">FI</span>
            </div>
            <div className="leading-none">
              <div className="font-black text-[#0C3823] text-xl tracking-tight">FICOF</div>
              <div className="text-[10px] text-neutral-400 tracking-[0.2em] uppercase font-medium mt-0.5">
                Côte d'Ivoire
              </div>
            </div>
          </Link>

          {/* Desktop nav - Sans menus déroulants */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-[14px] font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-[#0C3823] text-white shadow-md shadow-green-900/20"
                      : "text-neutral-600 hover:text-[#0C3823] hover:bg-[#0C3823]/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            <Link
              to="/adhesion"
              className="hidden md:flex items-center gap-2 bg-[#0C3823] text-white text-[13px] font-bold px-5 py-2.5 rounded-xl hover:bg-[#0f4a2d] active:scale-[0.98] transition-all duration-150 shadow-md shadow-green-900/20"
            >
              <User size={13} strokeWidth={2.5} />
              Adhérer
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-neutral-500 hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {menuOpen && (
          <div className="lg:hidden border-t border-neutral-100 bg-white max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-semibold transition-colors ${
                        isActive
                          ? "bg-[#0C3823] text-white"
                          : "text-neutral-700 hover:bg-neutral-50"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        location.pathname === item.path
                          ? "bg-white/20"
                          : "bg-[#0C3823]/[0.07]"
                      }`}
                    >
                      <Icon size={16} strokeWidth={2} className={location.pathname === item.path ? "text-white" : "text-[#0C3823]"} />
                    </div>
                    {item.label}
                  </NavLink>
                );
              })}

              {/* Mobile CTAs */}
              <div className="pt-4 pb-2 flex flex-col gap-2 border-t border-neutral-100 mt-2">
                <Link
                  to="/adhesion"
                  className="flex items-center justify-center gap-2 bg-[#0C3823] text-white text-sm font-bold px-5 py-3 rounded-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  <User size={14} strokeWidth={2.5} />
                  Adhérer à FICOF
                </Link>
                <a
                  href="https://wa.me/2250000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-bold px-5 py-3 rounded-xl"
                >
                  <MessageCircle size={14} strokeWidth={2.5} />
                  Nous écrire sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}