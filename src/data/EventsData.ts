import type { Evenement } from "../Interfaces/types";

export const evenements: Record<string, Evenement> = {
  afcom: {
    slug: "afcom",
    sigle: "AFCOM",
    nomComplet: "Assises des Jeunes Financiers Comptables",
    description:
      "L'événement annuel majeur de FICOF, réunissant des centaines de professionnels autour de panels, conférences et ateliers pratiques.",
    presentation: [
      "Les Assises des Jeunes Financiers Comptables sont le rendez-vous incontournable de la profession en Côte d'Ivoire. Chaque édition rassemble comptables, auditeurs, fiscalistes et financiers autour d'un thème fédérateur choisi pour sa pertinence avec l'actualité économique nationale.",
      "L'AFCOM offre une scène nationale aux jeunes professionnels du chiffre : panels d'experts, ateliers pratiques, tables rondes et moments de networking de qualité constituent l'ossature de chaque journée.",
      "En quelques années, l'événement s'est imposé comme un catalyseur de la profession, influençant les pratiques et nourrissant le dialogue entre les jeunes et les institutions.",
    ],
    stats: [
      { val: "3", label: "Éditions" },
      { val: "800+", label: "Participants cumulés" },
      { val: "20+", label: "Intervenants invités" },
      { val: "2022", label: "Première édition" },
    ],
    editions: [
      {
        annee: 2024,
        theme: "La digitalisation de la comptabilité ivoirienne",
        date: "14 juin 2024",
        day: "14",
        month: "Juin",
        lieu: "Hôtel Ivoire, Abidjan",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        participants: 320,
        spotsRestants: null,
        rapport: {
          titre: "Rapport AFCOM 2024",
          description:
            "Synthèse des panels, recommandations issues des ateliers et perspectives pour la profession.",
          fichier: "/rapports/afcom-2024.pdf",
          couverture: "/rapports/afcom-2024-cover.jpg",
        },
        articles: [
          {
            titre: "L'AFCOM 2024 réunit 320 professionnels du chiffre à Abidjan",
            source: "Fratmat",
            date: "15 juin 2024",
            url: "https://fratmat.info/",
          },
          {
            titre: "Comptabilité : les jeunes experts tracent la feuille de route digitale",
            source: "Abidjan.net",
            date: "16 juin 2024",
            url: "https://abidjan.net/",
          },
        ],
      },
      {
        annee: 2023,
        theme: "Fiscalité et compétitivité des entreprises ivoiriennes",
        date: "10 juin 2023",
        day: "10",
        month: "Juin",
        lieu: "Sofitel Abidjan Hôtel Ivoire",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
        participants: 280,
        spotsRestants: null,
        rapport: {
          titre: "Rapport AFCOM 2023",
          description:
            "Compte-rendu des travaux, résolutions adoptées et témoignages des participants.",
          fichier: "/rapports/afcom-2023.pdf",
        },
        articles: [
          {
            titre: "AFCOM 2023 : cap sur la fiscalité au service de la croissance",
            source: "Le Patriote",
            date: "11 juin 2023",
            url: "https://lepatriote.net/",
          },
        ],
      },
      {
        annee: 2022,
        theme: "Le rôle du comptable dans l'accès au financement des PME",
        date: "18 juin 2022",
        day: "18",
        month: "Juin",
        lieu: "Palm Club, Cocody",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
        participants: 210,
        spotsRestants: null,
        articles: [],
      },
    ],
  },

  cjp: {
    slug: "cjp",
    sigle: "CJP",
    nomComplet: "Café du Jeune Professionnel",
    description:
      "Un rendez-vous mensuel informel où les jeunes financiers et comptables échangent autour d'un thème d'actualité professionnelle.",
    presentation: [
      "Le Café du Jeune Professionnel est né d'un constat simple : les jeunes professionnels ont besoin d'espaces d'échange hors des cadres formels. En deux heures, autour d'un café, ils débattent, partagent leurs expériences et construisent leur réseau.",
      "Chaque session tourne autour d'un thème choisi par la communauté — négociation salariale, outils fiscaux, reconversion, entrepreneuriat — animé par un modérateur FICOF et enrichi par les témoignages des présents.",
      "Format accessible et sans hiérarchie, le CJP s'adresse aussi bien au jeune diplômé qu'au professionnel de 10 ans d'expérience.",
    ],
    stats: [
      { val: "13+", label: "Sessions organisées" },
      { val: "Mensuel", label: "Fréquence" },
      { val: "60", label: "Participants en moyenne" },
      { val: "2023", label: "Première session" },
    ],
    editions: [
      {
        annee: 2025,
        theme: "Comment négocier son salaire en sortie d'école ?",
        date: "22 mars 2025",
        day: "22",
        month: "Mars",
        lieu: "Urban Café, Plateau",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
        participants: 80,
        spotsRestants: 12,
        articles: [
          {
            titre: "CJP #13 : les jeunes pros boostent leur culture salariale",
            source: "Abidjan.net",
            date: "23 mars 2025",
            url: "https://abidjan.net/",
          },
        ],
      },
      {
        annee: 2024,
        theme: "E-IMPÔTS : prise en main et bonnes pratiques",
        date: "14 novembre 2024",
        day: "14",
        month: "Nov",
        lieu: "Le Patio, Marcory",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
        participants: 65,
        spotsRestants: null,
        articles: [],
      },
    ],
  },

  rem: {
    slug: "rem",
    sigle: "ReM",
    nomComplet: "À la Rencontre de mon Modèle",
    description:
      "Un format d'entretien privilégié où un jeune professionnel interroge une figure inspirante de la finance ivoirienne.",
    presentation: [
      "À la Rencontre de mon Modèle propose une expérience rare : un entretien intime entre un jeune professionnel et une figure établie du monde financier et comptable ivoirien, devant un public restreint et attentif.",
      "L'objectif est de briser les codes du networking formel, de créer une connexion humaine et authentique entre les générations, et d'offrir aux participants une source d'inspiration concrète et actionnable.",
      "Chaque édition accueille un invité d'exception choisi pour son parcours atypique ou exemplaire — directeur financier, associé de cabinet, entrepreneur ou régulateur — qui répond sans filtre aux questions d'un jeune pair.",
    ],
    stats: [
      { val: "5", label: "Éditions" },
      { val: "270+", label: "Participants cumulés" },
      { val: "5", label: "Modèles invités" },
      { val: "2022", label: "Première édition" },
    ],
    editions: [
      {
        annee: 2024,
        theme: "Parcours d'un DGF ivoirien : de l'école à la direction",
        date: "19 octobre 2024",
        day: "19",
        month: "Oct",
        lieu: "FICOF HQ, Plateau",
        image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
        participants: 60,
        spotsRestants: null,
        rapport: {
          titre: "Synthèse ReM 2024",
          description:
            "Résumé de l'entretien et des questions-réponses avec le modèle invité.",
          fichier: "/rapports/rem-2024.pdf",
        },
        articles: [
          {
            titre: "ReM 2024 : quand l'inspiration rencontre l'ambition",
            source: "Fratmat",
            date: "20 octobre 2024",
            url: "https://fratmat.info/",
          },
        ],
      },
      {
        annee: 2023,
        theme: "Être expert-comptable en Afrique de l'Ouest aujourd'hui",
        date: "25 novembre 2023",
        day: "25",
        month: "Nov",
        lieu: "FICOF HQ, Plateau",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        participants: 50,
        spotsRestants: null,
        articles: [],
      },
    ],
  },
};