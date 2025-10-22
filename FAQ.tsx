import React from "react";
import { Badge } from "../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";

export function FAQ() {
  const faqCategories = [
    {
      category: "Services & Tarifs",
      questions: [
        {
          q: "Quels sont vos tarifs pour une visite conseil ?",
          a: "Nos visites conseil démarrent à 225€ TTC pour 2h. Ce tarif inclut l'analyse complète du terrain, des conseils personnalisés, et des préconisations végétales. Des suppléments peuvent s'appliquer selon la surface et la localisation."
        },
        {
          q: "Proposez-vous des devis gratuits ?",
          a: "Oui ! Le premier contact et l'échange téléphonique sont gratuits. Après discussion de votre projet, nous vous envoyons un devis détaillé sans engagement dans les 48h."
        },
        {
          q: "Que comprend le service de conception 3D ?",
          a: "Notre service de conception 3D inclut : plans de masse, rendus 3D photo-réalistes de plusieurs points de vue, palette végétale détaillée, documents techniques, et accompagnement jusqu'à validation finale. Modifications illimitées incluses."
        },
        {
          q: "Réalisez-vous les travaux d'aménagement ?",
          a: "Nous sommes spécialisés dans la conception. Nous vous recommandons des partenaires qualifiés pour la réalisation ou vous pouvez choisir votre propre prestataire avec nos plans."
        }
      ]
    },
    {
      category: "Zone d'intervention",
      questions: [
        {
          q: "Dans quelles communes intervenez-vous ?",
          a: "Nous intervenons sur toute la Guadeloupe : Grande-Terre, Basse-Terre, et les îles. Les frais de déplacement sont inclus pour la plupart des communes."
        },
        {
          q: "Y a-t-il des frais de déplacement ?",
          a: "Les déplacements sont inclus dans nos tarifs pour la plupart des communes de Guadeloupe. Un supplément peut s'appliquer pour les zones très éloignées ou difficiles d'accès."
        }
      ]
    },
    {
      category: "Processus & Délais",
      questions: [
        {
          q: "Combien de temps prend un projet de conception ?",
          a: "Un projet de conception 3D complet prend généralement entre 3 et 4 semaines : 1-2 semaines pour l'analyse, 2-3 semaines pour la conception, puis 1 semaine pour les ajustements finaux."
        },
        {
          q: "Dans quel délai répondez-vous aux demandes ?",
          a: "Nous nous engageons à répondre à toute demande dans les 24h ouvrées. Pour les demandes urgentes, nous organisons un échange téléphonique dans les meilleurs délais."
        },
        {
          q: "Puis-je demander des modifications sur le projet 3D ?",
          a: "Absolument ! Les modifications sont illimitées et incluses dans notre prestation jusqu'à ce que vous soyez entièrement satisfait du résultat."
        },
        {
          q: "Que se passe-t-il après la conception ?",
          a: "Après validation du projet, vous recevez tous les documents (plans, 3D, quantitatifs, palette végétale). Nous vous mettons en relation avec nos partenaires ou vous êtes libre de réaliser avec le prestataire de votre choix."
        }
      ]
    },
    {
      category: "Expertise & Spécificités",
      questions: [
        {
          q: "Pourquoi choisir un paysagiste spécialisé en climat tropical ?",
          a: "Le climat tropical guadeloupéen nécessite une expertise spécifique : choix de plantes adaptées aux cyclones, gestion de l'humidité, sélection d'espèces résistantes à la sécheresse et au sel. Notre connaissance locale garantit la pérennité de votre aménagement."
        },
        {
          q: "Travaillez-vous avec des plantes locales ?",
          a: "Oui, nous privilégions les plantes endémiques et adaptées au climat local. Cela garantit une meilleure résistance, moins d'entretien, et un respect de la biodiversité guadeloupéenne."
        },
        {
          q: "Proposez-vous des solutions éco-responsables ?",
          a: "Absolument ! Nous concevons des jardins durables : récupération d'eau de pluie, paillage naturel, compostage, plantes mellifères pour les pollinisateurs, et limitation des produits chimiques."
        }
      ]
    },
    {
      category: "Pour les professionnels",
      questions: [
        {
          q: "Travaillez-vous avec des hôtels et résidences ?",
          a: "Oui, nous avons une expertise solide en projets professionnels : hôtels, résidences touristiques, restaurants, espaces publics. Nous gérons les études paysagères complexes et la maîtrise d'œuvre."
        },
        {
          q: "Proposez-vous un suivi de chantier ?",
          a: "Oui, notre service de maîtrise d'œuvre paysagère inclut le suivi complet du chantier, la coordination des intervenants, le contrôle qualité, et la réception des travaux."
        },
        {
          q: "Pouvez-vous vous adapter à un budget spécifique ?",
          a: "Oui, nous travaillons avec vous pour optimiser votre budget. Nous proposons des solutions par phases, des alternatives de matériaux, et une priorisation des aménagements selon vos contraintes financières."
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <BackButton className="mb-6" />
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Questions Fréquentes</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Toutes les réponses à vos questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vous avez des interrogations ? Retrouvez ici les réponses aux questions les plus fréquentes
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{category.category}</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded"></div>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem key={qIndex} value={`item-${catIndex}-${qIndex}`} className="border rounded-lg px-6 hover:border-green-500/50 transition-colors">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium pr-4">{item.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="max-w-3xl mx-auto text-center border-2">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Nous contacter</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+590690XXXXXX">Appelez-nous</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
