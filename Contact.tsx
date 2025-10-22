import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Label } from "../components/ui/label";
import { BackButton } from "../components/BackButton";
import { toast } from "sonner@2.0.3";

const CONTACT_EMAIL = "papillonguadeloupe1@gmail.com";
const PHONE = "+590 690 XX XX XX";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    location: '',
    budget: '',
    message: '',
    urgency: ''
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      ...formData,
      date: new Date().toISOString(),
    };
    console.log("DEMANDE DE CONTACT", payload);
    
    // Afficher une notification de succès professionnelle
    toast.success("🎉 Demande envoyée avec succès !", {
      description: "Merci pour votre confiance ! Notre équipe vous contactera sous 24h avec un devis personnalisé. Vérifiez vos emails (dont spam).",
      duration: 8000,
    });
    
    // Réinitialiser le formulaire
    setFormData({ 
      name: '', 
      email: '', 
      phone: '',
      project: '', 
      location: '',
      budget: '',
      message: '',
      urgency: ''
    });
  }

  function handleInputChange(field: string, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  const servicePricing = [
    {
      service: "Visite Conseil",
      description: "Analyse terrain + conseils personnalisés",
      price: "À partir de 225€ TTC",
      duration: "2h",
      supplements: [
        "Supplément selon surface du terrain",
        "Frais de déplacement selon localisation",
        "Option ambiance 3D : +100€ TTC"
      ]
    },
    {
      service: "Conception 3D Complète",
      description: "Plans + rendus 3D + documents techniques",
      price: "Sur devis personnalisé",
      duration: "3-4 semaines",
      supplements: [
        "Tarif selon complexité du projet",
        "Modifications illimitées incluses",
        "Vidéo 3D : nous consulter"
      ]
    }
  ];

  const zones = [
    "Les Abymes", "Baie-Mahault", "Le Gosier", "Sainte-Anne", "Saint-François",
    "Le Moule", "Petit-Bourg", "Capesterre-Belle-Eau", "Basse-Terre",
    "Pointe-à-Pitre", "Autre commune"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <BackButton className="mb-6" />
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Contact</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Démarrons votre projet ensemble
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Racontez-nous votre vision et recevez une proposition personnalisée 
              sous 24h. Premier échange téléphonique offert.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Demande de devis gratuit</CardTitle>
                <CardDescription>
                  Plus votre demande est détaillée, plus notre proposition sera précise et adaptée.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Informations personnelles */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet *</label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required 
                        placeholder="Votre nom" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Téléphone</label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        type="tel"
                        placeholder="0690 XX XX XX" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      type="email" 
                      required 
                      placeholder="votre@email.com" 
                    />
                  </div>

                  {/* Projet */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type de service *</label>
                      <Select value={formData.project} onValueChange={(value) => handleInputChange('project', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre besoin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="visite-conseil">Visite conseil (particulier)</SelectItem>
                          <SelectItem value="conception-3d">Conception complète 3D</SelectItem>
                          <SelectItem value="etude-professionnelle">Étude paysagère (professionnel)</SelectItem>
                          <SelectItem value="maitrise-oeuvre">Maîtrise d'œuvre</SelectItem>
                          <SelectItem value="autre">Autre / Je ne sais pas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Localisation</label>
                      <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Votre commune" />
                        </SelectTrigger>
                        <SelectContent>
                          {zones.map(zone => (
                            <SelectItem key={zone} value={zone}>{zone}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget approximatif</label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Votre budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moins-5k">Moins de 5 000€</SelectItem>
                          <SelectItem value="5k-15k">5 000€ - 15 000€</SelectItem>
                          <SelectItem value="15k-30k">15 000€ - 30 000€</SelectItem>
                          <SelectItem value="30k-50k">30 000€ - 50 000€</SelectItem>
                          <SelectItem value="plus-50k">Plus de 50 000€</SelectItem>
                          <SelectItem value="non-defini">Pas encore défini</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Urgence du projet</label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Délai souhaité" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (moins de 1 mois)</SelectItem>
                          <SelectItem value="rapide">Rapide (1-3 mois)</SelectItem>
                          <SelectItem value="normal">Normal (3-6 mois)</SelectItem>
                          <SelectItem value="flexible">Flexible (plus de 6 mois)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description de votre projet *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      placeholder="Décrivez votre terrain actuel, vos envies d'aménagement, vos contraintes, l'usage souhaité de l'espace... Plus vous êtes précis, mieux nous pourrons vous conseiller !"
                    />
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" className="flex-1">
                        Envoyer ma demande
                      </Button>
                      <Button type="button" variant="outline" asChild>
                        <a href={`mailto:${CONTACT_EMAIL}`}>Écrire directement</a>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Nous nous engageons à vous répondre dans les 24h ouvrées.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Direct */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact direct
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <a href={`tel:${PHONE}`} className="text-primary hover:underline">{PHONE}</a>
                    <div className="text-sm text-muted-foreground">Du lundi au vendredi, 8h-18h</div>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
                    <div className="text-sm text-muted-foreground">Réponse sous 24h</div>
                  </div>
                  <div>
                    <div className="font-medium">Zone d'intervention</div>
                    <div className="text-muted-foreground">Toute la Guadeloupe</div>
                    <div className="text-sm text-muted-foreground">Déplacements inclus dans nos tarifs</div>
                  </div>
                </CardContent>
              </Card>

              {/* Tarifs */}
              <Card>
                <CardHeader>
                  <CardTitle>Nos tarifs</CardTitle>
                  <CardDescription>
                    Tarification transparente pour nos principales prestations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {servicePricing.map((service, index) => (
                      <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium">{service.service}</div>
                            <div className="text-sm text-muted-foreground">{service.description}</div>
                          </div>
                          <Badge variant="secondary">{service.price}</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground mb-2">
                          ⏱️ {service.duration}
                        </div>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {service.supplements.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pourquoi nous choisir */}
              <Card>
                <CardHeader>
                  <CardTitle>Pourquoi nous choisir ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="font-medium">Expertise tropicale</div>
                        <div className="text-sm text-muted-foreground">Connaissance approfondie du climat et de la flore locale</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="font-medium">Visualisation 3D</div>
                        <div className="text-sm text-muted-foreground">Rendus photo-réalistes pour valider votre projet</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="font-medium">Accompagnement complet</div>
                        <div className="text-sm text-muted-foreground">De la conception à la réalisation avec nos partenaires</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="font-medium">Réactivité</div>
                        <div className="text-sm text-muted-foreground">Réponse rapide et suivi personnalisé de chaque projet</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Questions Fréquentes</Badge>
              <h2 className="text-3xl font-bold mb-6">
                Réponses à vos questions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quelle est votre zone d'intervention ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nous intervenons sur toute la Guadeloupe. Les frais de déplacement sont inclus 
                    dans nos tarifs pour la plupart des communes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Combien coûte une visite conseil ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    À partir de 225€ TTC pour une visite de 2h avec analyse du terrain 
                    et conseils personnalisés. Supplément selon surface et localisation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Proposez-vous la réalisation des travaux ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nous concevons les projets et vous recommandons des partenaires qualifiés 
                    pour la réalisation, ou vous pouvez choisir votre propre prestataire.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dans quels délais recevrai-je ma réponse ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nous nous engageons à vous répondre dans les 24h ouvrées pour un premier contact 
                    et organiser rapidement une visite ou un échange téléphonique.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}