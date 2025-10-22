import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { BackButton } from "../components/BackButton";

const PORTFOLIO = [
  {
    id: 1,
    title: "Villa moderne - Transformation complète",
    before: "https://images.unsplash.com/photo-1673370491774-42a963ca1ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBiZWZvcmUlMjBhZnRlciUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc1ODk2MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    after: "https://images.unsplash.com/photo-1758812647166-6d4166137f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJkZW4lMjAzRCUyMGRlc2lnbnxlbnwxfHx8fDE3NTg5NjAzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Particulier",
    location: "Les Abymes",
    description: "Transformation complète d'un jardin résidentiel avec création d'espaces de vie extérieurs, piscine paysagère et végétation tropicale.",
    services: ["Conception 3D", "Plans techniques", "Suivi de réalisation"]
  },
  {
    id: 2,
    title: "Hôtel de luxe - Aménagement tropical",
    before: "https://images.unsplash.com/photo-1598693452686-a428df8f83cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kc2NhcGUlMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzU4OTYwNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    after: "https://images.unsplash.com/photo-1640627349323-82aa2da94150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMGd1YWRlbG91cGV8ZW58MXx8fHwxNzU4OTYwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Professionnel",
    location: "Saint-François",
    description: "Aménagement paysager complet d'un complexe hôtelier 4 étoiles avec jardins thématiques, espaces détente et parcours botaniques.",
    services: ["Étude paysagère", "Maîtrise d'œuvre", "Coordination", "Suivi travaux"]
  },
  {
    id: 3,
    title: "Résidence privée - Jardin zen tropical",
    before: "https://images.unsplash.com/photo-1758435260100-0c7be32a97bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBhcmNoaXRlY3R1cmUlMjBwbGFubmluZ3xlbnwxfHx8fDE3NTg5NjA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    after: "https://images.unsplash.com/photo-1758612120966-b20c01160c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBsYW5kc2NhcGUlMjBkZXNpZ258ZW58MXx8fHwxNzU4OTYwMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Particulier",
    location: "Gosier",
    description: "Création d'un jardin zen avec bassins, végétation exotique et espaces de méditation dans un esprit tropical contemporain.",
    services: ["Visite conseil", "Conception 3D", "Palette végétale"]
  },
  {
    id: 4,
    title: "Restaurant tropical - Terrasse paysagée",
    before: "https://images.unsplash.com/photo-1598693452686-a428df8f83cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kc2NhcGUlMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzU4OTYwNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    after: "https://images.unsplash.com/photo-1640627349323-82aa2da94150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMGd1YWRlbG91cGV8ZW58MXx8fHwxNzU4OTYwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Professionnel",
    location: "Sainte-Anne",
    description: "Aménagement d'une terrasse de restaurant avec végétation luxuriante, éclairage d'ambiance et espaces clients optimisés.",
    services: ["Étude commerciale", "Conception 3D", "Éclairage paysager"]
  },
  {
    id: 5,
    title: "Villa familiale - Jardin et piscine",
    before: "https://images.unsplash.com/photo-1673370491774-42a963ca1ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBiZWZvcmUlMjBhZnRlciUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc1ODk2MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    after: "https://images.unsplash.com/photo-1758812647166-6d4166137f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJkZW4lMjAzRCUyMGRlc2lnbnxlbnwxfHx8fDE3NTg5NjAzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Particulier",
    location: "Baie-Mahault",
    description: "Réaménagement complet d'un jardin familial avec zone piscine, aire de jeux enfants et espaces de détente parents.",
    services: ["Visite conseil", "Plans techniques", "Coordination travaux"]
  },
  {
    id: 6,
    title: "Résidence touristique - Jardins communs",
    before: "https://images.unsplash.com/photo-1758435260100-0c7be32a97bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBhcmNoaXRlY3R1cmUlMjBwbGFubmluZ3xlbnwxfHx8fDE3NTg5NjA0MDB8MA&ixlib=rb-4.1.0&q=80&w-1080&utm_source=figma&utm_medium=referral",
    after: "https://images.unsplash.com/photo-1640627349323-82aa2da94150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMGd1YWRlbG91cGV8ZW58MXx8fHwxNzU4OTYwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Professionnel",
    location: "Le Moule",
    description: "Conception des espaces verts d'une résidence de vacances avec jardins partagés, aires de détente et cheminements piétons.",
    services: ["Étude paysagère", "Plans directeurs", "Maîtrise d'œuvre"]
  }
];

export function Realisations() {
  const [portfolioIndex, setPortfolioIndex] = useState(PORTFOLIO.map(() => 50));
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Particulier", "Professionnel"];

  const filteredPortfolio = selectedCategory === "Tous" 
    ? PORTFOLIO 
    : PORTFOLIO.filter(project => project.category === selectedCategory);

  function handlePortfolioSlide(idx: number, value: number) {
    setPortfolioIndex((prev) => prev.map((v, i) => (i === idx ? value : v)));
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <BackButton className="mb-6" />
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Nos Réalisations</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Des transformations spectaculaires
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez comment nous transformons les espaces extérieurs avec des aménagements 
              paysagers adaptés au climat tropical de la Guadeloupe.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-32"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, idx) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                {/* Before/After Comparison */}
                <div className="relative h-64 bg-muted">
                  <ImageWithFallback
                    src={project.before}
                    alt={`${project.title} - avant`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 overflow-hidden">
                    <ImageWithFallback
                      src={project.after}
                      alt={`${project.title} - après`}
                      className="absolute top-0 left-0 h-full object-cover transition-all duration-300"
                      style={{
                        width: `${portfolioIndex[idx]}%`,
                        clipPath: `inset(0 ${100 - portfolioIndex[idx]}% 0 0)`,
                      }}
                    />
                  </div>
                  
                  {/* Slider */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={portfolioIndex[idx]}
                    onChange={(e) => handlePortfolioSlide(idx, Number(e.target.value))}
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-11/12 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(to right, #22c55e 0%, #22c55e ${portfolioIndex[idx]}%, rgba(255,255,255,0.3) ${portfolioIndex[idx]}%, rgba(255,255,255,0.3) 100%)`
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Before/After Labels */}
                  <div className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                    Avant
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                    Après
                  </div>
                </div>

                {/* Project Details */}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.location}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Services réalisés :</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.services.map((service, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                      <span>Glissez pour comparer</span>
                      <span>{portfolioIndex[idx]}% après</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucune réalisation trouvée pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos chiffres clés</h2>
            <p className="text-muted-foreground">L'expérience au service de vos projets</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Hôtels & résidences</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Clients satisfaits</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Notre Méthode</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comment nous créons ces transformations
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Chaque projet suit une méthodologie éprouvée en 3 étapes : analyse, conception et accompagnement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/processus">Découvrir notre processus</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Démarrer mon projet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre projet sera notre prochaine réalisation
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Rejoignez nos clients satisfaits et transformez votre espace extérieur 
                en jardin d'exception adapté au climat tropical de la Guadeloupe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Commencer mon projet</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-700">
                  <Link to="/services">Voir nos services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}