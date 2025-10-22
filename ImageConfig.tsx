// Configuration centrale des médias (images + vidéos)
export const MEDIA = {
  // Images principales
  images: {
    hero: "/images/hero/hero-main.jpg",
    logo: "/images/logo/papillon-logo.png",
    
    // Portfolio - Projets avant/après
    portfolio: [
      {
        id: 1,
        before: "/images/portfolio/projet-01-avant.jpg",
        after: "/images/portfolio/projet-01-apres.jpg",
        thumbnail: "/images/portfolio/projet-01-thumb.jpg"
      },
      {
        id: 2,
        before: "/images/portfolio/projet-02-avant.jpg", 
        after: "/images/portfolio/projet-02-apres.jpg",
        thumbnail: "/images/portfolio/projet-02-thumb.jpg"
      },
      {
        id: 3,
        before: "/images/portfolio/projet-03-avant.jpg",
        after: "/images/portfolio/projet-03-apres.jpg",
        thumbnail: "/images/portfolio/projet-03-thumb.jpg"
      },
      {
        id: 4,
        before: "/images/portfolio/projet-04-avant.jpg",
        after: "/images/portfolio/projet-04-apres.jpg",
        thumbnail: "/images/portfolio/projet-04-thumb.jpg"
      },
      {
        id: 5,
        before: "/images/portfolio/projet-05-avant.jpg",
        after: "/images/portfolio/projet-05-apres.jpg",
        thumbnail: "/images/portfolio/projet-05-thumb.jpg"
      },
      {
        id: 6,
        before: "/images/portfolio/projet-06-avant.jpg",
        after: "/images/portfolio/projet-06-apres.jpg",
        thumbnail: "/images/portfolio/projet-06-thumb.jpg"
      }
    ],
    
    // Services
    services: {
      consultation: "/images/services/consultation.jpg",
      conception3d: "/images/services/conception-3d.jpg",
      realisation: "/images/services/realisation.jpg",
      maitrise: "/images/services/maitrise-oeuvre.jpg"
    },

    // Processus
    processus: {
      analyse: "/images/processus/analyse-terrain.jpg",
      conception: "/images/processus/conception-3d.jpg",
      accompagnement: "/images/processus/accompagnement.jpg"
    }
  },

  // Vidéos
  videos: {
    // Vidéo principale de présentation
    hero: "/videos/papillon-presentation.mp4",
    
    // Vidéos du processus
    processus: {
      visite3d: "/videos/visite-3d-exemple.mp4",
      timelapseRealisation: "/videos/timelapse-realisation.mp4"
    },
    
    // Vidéos portfolio (avant/après animées)
    portfolio: [
      {
        id: 1,
        video: "/videos/portfolio/projet-01-transformation.mp4",
        poster: "/images/portfolio/projet-01-poster.jpg"
      },
      {
        id: 2,
        video: "/videos/portfolio/projet-02-transformation.mp4",
        poster: "/images/portfolio/projet-02-poster.jpg"
      },
      {
        id: 3,
        video: "/videos/portfolio/projet-03-transformation.mp4",
        poster: "/images/portfolio/projet-03-poster.jpg"
      }
    ],

    // Videos témoignages clients
    testimonials: [
      {
        id: 1,
        video: "/videos/testimonials/client-marie-d.mp4",
        poster: "/images/testimonials/marie-d-poster.jpg"
      },
      {
        id: 2,
        video: "/videos/testimonials/client-jean-luc-p.mp4",
        poster: "/images/testimonials/jean-luc-p-poster.jpg"
      }
    ]
  }
};

// Médias de fallback (Unsplash actuelles + vidéos placeholder)
export const FALLBACK_MEDIA = {
  images: {
    hero: "https://images.unsplash.com/photo-1758612120966-b20c01160c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBsYW5kc2NhcGUlMjBkZXNpZ258ZW58MXx8fHwxNzU4OTYwMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    portfolioBefore: "https://images.unsplash.com/photo-1673370491774-42a963ca1ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBiZWZvcmUlMjBhZnRlciUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc1ODk2MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    portfolioAfter: "https://images.unsplash.com/photo-1758812647166-6d4166137f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJkZW4lMjAzRCUyMGRlc2lnbnxlbnwxfHx8fDE3NTg5NjAzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tropicalGarden: "https://images.unsplash.com/photo-1640627349323-82aa2da94150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMGd1YWRlbG91cGV8ZW58MXx8fHwxNzU4OTYwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    consultation: "https://images.unsplash.com/photo-1598693452686-a428df8f83cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kc2NhcGUlMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzU4OTYwNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    landscape: "https://images.unsplash.com/photo-1758435260100-0c7be32a97bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBhcmNoaXRlY3R1cmUlMjBwbGFubmluZ3xlbnwxfHx8fDE3NTg5NjA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  videos: {
    placeholder: "https://www.w3schools.com/html/mov_bbb.mp4" // Vidéo de test
  }
};

// Fonction utilitaire pour obtenir une image avec fallback
export function getImage(path: string, fallbackKey?: string): string {
  // En production, vérifier si le fichier existe et utiliser le fallback si nécessaire
  // Pour l'instant, retourner le path ou le fallback
  if (fallbackKey && FALLBACK_MEDIA.images[fallbackKey as keyof typeof FALLBACK_MEDIA.images]) {
    return FALLBACK_MEDIA.images[fallbackKey as keyof typeof FALLBACK_MEDIA.images];
  }
  return path;
}

// Fonction utilitaire pour obtenir une vidéo avec fallback
export function getVideo(path: string): string {
  // En production, vérifier si le fichier existe
  return path;
}