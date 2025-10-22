import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function Processus() {
  const processSteps = [
    {
      step: 1,
      title: "Analyse & Conception",
      subtitle: "Étude approfondie de votre projet",
      duration: "1-2 semaines",
      description: "Questionnaire personnalisé, visite sur site et analyse des contraintes techniques. Échange approfondi sur vos besoins et attentes.",
      details: [
        "Relevé des mesures précises",
        "Analyse du terrain et de l'exposition", 
        "Étude des contraintes techniques",
        "Identification des besoins et souhaits",
        "Devis personnalisé détaillé"
      ],
      icon: "📋"
    },
    {
      step: 2,
      title: "Création & Visualisation",
      subtitle: "Conception de votre jardin idéal",
      duration: "2-4 semaines",
      description: "Esquisse initiale, puis projet 3D complet avec possibilité de modifications jusqu'à validation finale.",
      details: [
        "Esquisse d'aménagement initial",
        "Rendus 3D photo-réalistes",
        "Plusieurs points de vue",
        "Modifications incluses",
        "Validation finale du projet"
      ],
      icon: "🎨"
    },
    {
      step: 3,
      title: "Remise & Accompagnement",
      subtitle: "Concrétisation de votre projet",
      duration: "1 semaine + suivi",
      description: "Livraison des documents complets et accompagnement pour la réalisation avec nos partenaires ou en autonomie.",
      details: [
        "Plans techniques détaillés",
        "Liste des matériaux et quantitatifs",
        "Palette végétale adaptée",
        "Recommandations d'entretien",
        "Mise en relation avec nos partenaires"
      ],
      icon: "🚀"
    }
  ];

  const documentsRemis = [
    {
      title: "Plans et Documents Techniques",
      items: [
        "Plan de masse légendé",
        "Plan de plantation détaillé",
        "Plans avec cotations précises", 
        "Coupes et élévations",
        "Documents techniques conformes"
      ]
    },
    {
      title: "Visualisations 3D",
      items: [
        "Rendus 3D haute définition",
        "Plusieurs points de vue",
        "Différentes saisonnalités",
        "Visualisations jour/nuit",
        "Vidéo 3D de présentation"
      ]
    },
    {
      title: "Guides et Préconisations",
      items: [
        "Palette végétale détaillée",
        "Quantitatifs précis",
        "Palette matériaux avec références",
        "Guide d'entretien",
        "Proposition de mobiliers"
      ]
    }
  ];

  const optionsRealisations = [
    {
      title: "Réalisation Autonome",
      description: "Vous réalisez vous-même l'aménagement de votre terrain avec nos plans et conseils.",
      icon: "🔨",
      advantages: [
        "Économies sur la main d'œuvre",
        "Réalisation à votre rythme",
        "Satisfaction personnelle",
        "Support conseil inclus"
      ]
    },
    {
      title: "Professionnel de votre choix",
      description: "Vous faites appel à un paysagiste ou artisan de votre choix avec nos documents.",
      icon: "🤝",
      advantages: [
        "Liberté de choix du prestataire",
        "Négociation directe des tarifs",
        "Plans techniques fournis",
        "Support si questions"
      ]
    },
    {
      title: "Partenaire Recommandé",
      description: "Nous vous recommandons un paysagiste partenaire adapté pour réaliser votre projet.",
      icon: "⭐",
      advantages: [
        "Professionnel qualifié et vérifié",
        "Connaissance de nos méthodes",
        "Suivi de chantier inclus",
        "Garantie de conformité"
      ]
    }
  ];

  const preparationDocuments = [
    "Permis de construire (si applicable)",
    "Plans des réseaux existants",
    "Plans d'architecte de la maison",
    "Acte de vente avec réglementation",
    "PLU ou règlement de lotissement",
    "Photos actuelles du terrain",
    "Budget approximatif envisagé"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <BackButton className="mb-6" />
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Notre Processus</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Une méthodologie éprouvée en 3 étapes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De l'analyse initiale à la remise des documents finaux, 
              nous vous accompagnons à chaque étape de votre projet d'aménagement paysager.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                          <CardDescription className="text-lg">{step.subtitle}</CardDescription>
                          <Badge variant="secondary" className="mt-2">
                            Durée : {step.duration}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      <div>
                        <h4 className="font-medium mb-3">Détails de cette étape :</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Step Visual */}
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center text-6xl mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-medium text-muted-foreground">
                      Étape {step.step} : {step.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Remis */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Livrables</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Documents remis en fin de projet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vous recevez un dossier complet avec tous les éléments nécessaires 
              pour concrétiser votre aménagement paysager.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {documentsRemis.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
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

      {/* Options de Réalisation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Après la Conception</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              3 options pour concrétiser votre projet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une fois le travail de conception validé, vous avez le choix pour la réalisation 
              selon vos préférences et votre budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {optionsRealisations.map((option, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-3xl mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium mb-3">Avantages :</h4>
                    <ul className="space-y-2 text-left">
                      {option.advantages.map((advantage, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Préparation du Rendez-vous */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Préparation</Badge>
              <h2 className="text-3xl font-bold mb-6">
                Documents à préparer pour le rendez-vous
              </h2>
              <p className="text-muted-foreground">
                Pour optimiser notre première rencontre et vous proposer la meilleure solution.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium mb-4">Documents techniques :</h3>
                    <ul className="space-y-2">
                      {preparationDocuments.slice(0, 4).map((doc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                          </svg>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Informations complémentaires :</h3>
                    <ul className="space-y-2">
                      {preparationDocuments.slice(4).map((doc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                          </svg>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>💡 Conseil :</strong> Si vous ne disposez pas de tous ces documents, 
                    ce n'est pas bloquant ! Nous nous adaptons à votre situation et vous guidons 
                    dans les démarches nécessaires.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Notre processus éprouvé garantit un résultat à la hauteur de vos attentes. 
                Contactez-nous pour programmer votre première visite conseil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Démarrer mon projet</Link>
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