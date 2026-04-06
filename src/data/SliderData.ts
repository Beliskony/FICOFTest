interface Slide {
  id: number;
  title: string;
  image: string;
  description: string;
  thumbnail: string;
}

export const sliderData: Slide[] = [
  {
    id: 1,
    title: "AFCOM 2025 - Assises des Jeunes Financiers et Comptables",
    description: "Rejoignez les 500+ jeunes professionnels pour 3 jours de conférences, ateliers et networking. Thème : 'L'innovation financière au service de l'émergence de la Côte d'Ivoire'",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    thumbnail: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
  },
  {
    id: 2,
    title: "Formation en Comptabilité Approfondie",
    description: "Perfectionnez vos compétences en comptabilité avec nos formateurs certifiés. Programme complet sur 3 mois avec certification internationale",
    image: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1200",
    thumbnail: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
  },
  {
    id: 3,
    title: "Café du Jeune Professionnel",
    description: "Échangez avec des experts du secteur bancaire et financier ivoirien. Networking, partage d'expériences et opportunités de carrière",
    image: "https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg?auto=compress&cs=tinysrgb&w=1200",
    thumbnail: "https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
  },
  {
    id: 4,
    title: "Conférence sur la Finance de Marché",
    description: "Découvrez les tendances et innovations de la finance de marché en Afrique de l'Ouest. Intervenants de renom et cas pratiques",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    thumbnail: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
  },
  {
    id: 5,
    title: "Remise des Prix d'Excellence FICOF",
    description: "Célébrons ensemble les meilleurs jeunes talents de la finance et de la comptabilité en Côte d'Ivoire",
    image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1200",
    thumbnail: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
  }
];