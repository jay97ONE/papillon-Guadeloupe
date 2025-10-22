import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BackButton } from "../components/BackButton";

export function Services() {
  const servicesParticuliers = [
    {
      title: "Visite Conseil Personnalisée",
      description: "Analyse de votre terrain et conseils d'experts pour optimiser votre aménagement paysager selon vos besoins et votre budget.",
      price: "À partir de 225€ TTC",
      duration: "2h à domicile",
      includes: [
        "Analyse complète du terrain",
        "Conseils personnalisés d'agencement",
        "Préconisations végétales adaptées au climat",
        "Proposition de matériaux",
        "Croquis d'idées d'aménagement"
      ]
    },
    {
      title: "Conception Complète 3D",
      description: "Création d'un aménagement paysager sur mesure avec plans techniques et visualisations 3D réalistes.",
      price: "Sur devis",
      duration: "3-4 semaines",
      includes: [
        "Plans de masse et plantation légendaires",
        "Rendus 3D plusieurs points de vue",
        "Palette végétale détaillée",
        "Documents techniques complets",
        "Accompagnement dans la réalisation"
      ]
    }
  ];

  const servicesProfessionnels = [
    {
      title: "Études Paysagères Complexes",
      description: "Conception d'aménagements paysagers pour projets d'envergure : hôtels, résidences, espaces publics.",
      price: "Sur devis",
      duration: "4-8 semaines",
      includes: [
        "Étude d'impact environnemental",
        "Plans techniques conformes aux normes",
        "Modélisation 3D photo-réaliste",
        "Vidéos 3D de présentation",
        "Accompagnement réglementaire"
      ]
    },
    {
      title: "Maîtrise d'Œuvre Paysagère",
      description: "Suivi complet de vos projets d'aménagement, de la conception à la réalisation avec nos partenaires qualifiés.",
      price: "Sur devis",
      duration: "Variable",
      includes: [
        "Coordination des intervenants",
        "Suivi de chantier",
        "Contrôle qualité",
        "Réception des travaux",
        "Garantie de conformité"
      ]
    }
  ];

  const documentsInclus = [
    {
      category: "Documents papiers",
      items: [
        "Plan de masse légendaire",
        "Plan de plantation légendaire", 
        "Palette végétale et quantitatif",
        "Images 3D plusieurs points de vue",
        "Proposition de mobiliers extérieurs",
        "Documents techniques",
        "Palette matériaux et quantitatif",
        "Plan avec cotation"
      ]
    },
    {
      category: "Documents numériques",
      items: [
        "Rendus 3D plusieurs points de vue (différentes saisonnalités)",
        "Visualisation horaires variables (jour/nuit)",
        "Dossier de présentation PDF",
        "Plans techniques en PDF",
        "Vidéo 3D (différentes saisonnalités)",
        "Fichiers sources modifiables"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <BackButton className="mb-6" />
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Nos Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Des solutions sur mesure pour chaque projet
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Que vous soyez particulier ou professionnel, nous adaptons notre expertise 
              à vos besoins spécifiques pour concevoir des jardins d'exception.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="particuliers" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="particuliers">Particuliers</TabsTrigger>
              <TabsTrigger value="professionnels">Professionnels</TabsTrigger>
            </TabsList>

            <TabsContent value="particuliers">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Services pour Particuliers</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transformez votre espace extérieur en véritable havre de paix avec nos services 
                  spécialement conçus pour les propriétaires privés.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {servicesParticuliers.map((service, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="secondary">{service.price}</Badge>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                      <div className="text-sm text-muted-foreground">
                        ⏱️ Durée : {service.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium">Inclus dans cette prestation :</h4>
                        <ul className="space-y-1">
                          {service.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full mt-6" asChild>
                        <Link to="/contact">Demander ce service</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="professionnels">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Services pour Professionnels</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Accompagnement technique et créatif pour vos projets d'envergure : 
                  hôtels, résidences, espaces publics et commerciaux.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {servicesProfessionnels.map((service, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="secondary">{service.price}</Badge>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                      <div className="text-sm text-muted-foreground">
                        ⏱️ Durée : {service.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium">Prestations incluses :</h4>
                        <ul className="space-y-1">
                          {service.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full mt-6" asChild>
                        <Link to="/contact">Demander un devis</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Documents et Livrables */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Livrables</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Documents inclus dans nos prestations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vous recevez un dossier complet avec tous les éléments nécessaires 
              pour concrétiser votre projet d'aménagement paysager.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {documentsInclus.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center">
                      {index + 1}
                    </div>
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir nos services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Nos Avantages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi choisir Papillon Guadeloupe ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌺</span>
                </div>
                <CardTitle>Expertise Tropicale</CardTitle>
                <CardDescription>
                  Connaissance approfondie du climat et de la flore guadeloupéenne pour des aménagements parfaitement adaptés.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <CardTitle>Visualisation 3D</CardTitle>
                <CardDescription>
                  Rendus photo-réalistes et vidéos 3D pour visualiser votre projet avant sa réalisation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <CardTitle>Accompagnement Complet</CardTitle>
                <CardDescription>
                  De la conception à la réalisation, avec nos partenaires qualifiés et notre réseau local.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Additionnels */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Services Complémentaires</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Découvrez nos autres services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-2xl transition-all border-2 hover:border-green-500/30">
              <CardHeader>
                <div className="text-6xl mb-4">🌿</div>
                <CardTitle className="text-2xl mb-2">Entretien Paysager</CardTitle>
                <CardDescription className="text-base">
                  Services d'entretien régulier pour particuliers et collectivités
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Interventions ponctuelles ou régulières
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Photos avant/après de nos interventions
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/entretien-paysager">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all border-2 hover:border-orange-500/30">
              <CardHeader>
                <div className="text-6xl mb-4">🚜</div>
                <CardTitle className="text-2xl mb-2">Location Motoculteur</CardTitle>
                <CardDescription className="text-base">
                  Motoculteur professionnel avec ou sans opérateur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Matériel professionnel 9 CV
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Dès 120€/jour, essence incluse
                  </li>
                </ul>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link to="/location-motoculteur">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contactez-nous pour discuter de vos besoins et recevoir une proposition personnalisée 
                adaptée à votre budget et vos attentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Demander un devis</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-700">
                  <Link to="/processus">Voir notre processus</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}