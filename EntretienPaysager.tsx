import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";
import { toast } from "sonner@2.0.3";

export function EntretienPaysager() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeClient: "",
    typeService: "",
    superficie: "",
    frequence: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demande de devis entretien:", formData);
    
    // Notification de succès avec détails rassurants
    toast.success("✅ Demande de devis entretien envoyée !", {
      description: "Parfait ! Un expert paysagiste analysera votre demande et vous contactera sous 24h avec un devis détaillé gratuit. Pensez à vérifier vos emails !",
      duration: 8000,
    });
    
    // Réinitialiser le formulaire
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      typeClient: "",
      typeService: "",
      superficie: "",
      frequence: "",
      message: ""
    });
  };

  const servicesParticuliers = [
    {
      icon: "🌿",
      title: "Tonte de pelouse",
      description: "Tonte régulière avec ramassage des déchets verts, bordures nettes",
      tarif: "À partir de 35€"
    },
    {
      icon: "✂️",
      title: "Taille de haies & arbustes",
      description: "Taille d'entretien et de formation, respect des périodes de végétation",
      tarif: "Sur devis"
    },
    {
      icon: "🍂",
      title: "Débroussaillage",
      description: "Nettoyage des terrains envahis, évacuation des déchets verts",
      tarif: "À partir de 45€/h"
    },
    {
      icon: "💐",
      title: "Entretien massifs",
      description: "Désherbage, paillage, taille, fertilisation adaptée au climat tropical",
      tarif: "Forfait mensuel"
    },
    {
      icon: "🌺",
      title: "Plantation & rempotage",
      description: "Conseil et plantation de végétaux adaptés, rempotage de plantes",
      tarif: "Sur devis"
    },
    {
      icon: "💧",
      title: "Installation arrosage",
      description: "Mise en place et entretien de systèmes d'arrosage automatique",
      tarif: "Sur devis"
    }
  ];

  const servicesCollectivites = [
    {
      icon: "🏢",
      title: "Espaces verts collectifs",
      description: "Entretien régulier des espaces communs en résidences et copropriétés",
      avantages: ["Contrat annuel", "Planning défini", "Équipe d��diée"]
    },
    {
      icon: "🏛️",
      title: "Collectivités publiques",
      description: "Maintenance des parcs, jardins publics, et espaces municipaux",
      avantages: ["Normes de sécurité", "Intervention rapide", "Matériel professionnel"]
    },
    {
      icon: "🏨",
      title: "Hôtels & Résidences",
      description: "Service premium pour établissements touristiques et de prestige",
      avantages: ["Intervention discrète", "Résultat impeccable", "Flexibilité horaires"]
    },
    {
      icon: "🏪",
      title: "Commerces & Bureaux",
      description: "Valorisation de l'image de marque par des espaces verts soignés",
      avantages: ["Devis personnalisé", "Facturation simplifiée", "Service régulier"]
    }
  ];

  const beforeAfter = [
    {
      before: "https://images.unsplash.com/photo-1748864794465-d169e6ac2707?w=600",
      after: "https://images.unsplash.com/photo-1743327811352-8f9b286f9c12?w=600",
      title: "Jardin résidentiel - Les Abymes",
      description: "Débroussaillage complet, tonte, et taille des haies"
    },
    {
      before: "https://images.unsplash.com/photo-1666091090647-750ddca8bf75?w=600",
      after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      title: "Espace collectif - Gosier",
      description: "Transformation d'un espace vert négligé en jardin d'agrément"
    },
    {
      before: "https://images.unsplash.com/photo-1748864794465-d169e6ac2707?w=600",
      after: "https://images.unsplash.com/photo-1743327811352-8f9b286f9c12?w=600",
      title: "Hôtel - Sainte-Anne",
      description: "Entretien mensuel avec taille ornementale des végétaux"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1743327811352-8f9b286f9c12?w=1920"
            alt="Services d'entretien paysager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <BackButton className="mb-6" variant="outline" />
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-green-500/20 text-white border-green-400/40 backdrop-blur-sm">
              🌿 Entretien Paysager Professionnel
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Services d'Entretien Paysager{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Particuliers & Collectivités
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Confiez l'entretien de vos espaces verts à nos experts. Interventions régulières ou ponctuelles, 
              pour des jardins toujours impeccables en Guadeloupe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
                <a href="#devis">Demander un devis gratuit</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black backdrop-blur-sm">
                <a href="#avant-apres">Voir nos réalisations</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Particuliers */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Pour Particuliers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos services d'entretien pour votre jardin
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des prestations sur mesure adaptées à vos besoins et à votre budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesParticuliers.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-green-500/30">
                  <CardHeader>
                    <div className="text-5xl mb-3">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {service.tarif}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              💚 Contrats d'entretien annuels disponibles avec tarifs préférentiels
            </p>
            <Button size="lg" asChild>
              <a href="#devis">Obtenir un devis personnalisé</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Collectivités */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Pour Collectivités</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Solutions professionnelles pour espaces collectifs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partenaire de confiance pour l'entretien de vos espaces verts professionnels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicesCollectivites.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{service.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.avantages.map((avantage, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{avantage}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Vous êtes une collectivité ?</h3>
                <p className="mb-6 opacity-90">
                  Bénéficiez d'un accompagnement sur mesure et de tarifs adaptés à vos besoins
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#devis">Demander un devis collectivité</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avant/Après */}
      <section id="avant-apres" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Nos Réalisations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Avant / Après : La transformation de vos espaces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez le résultat de nos interventions d'entretien paysager
            </p>
          </motion.div>

          <div className="space-y-16">
            {beforeAfter.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden shadow-xl group">
                      <ImageWithFallback
                        src={project.before}
                        alt={`Avant - ${project.title}`}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-600">AVANT</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden shadow-xl group">
                      <ImageWithFallback
                        src={project.after}
                        alt={`Après - ${project.title}`}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-600">APRÈS</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                {index < beforeAfter.length - 1 && (
                  <div className="border-b border-muted mt-12"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire Devis */}
      <section id="devis" className="py-20 bg-gradient-to-b from-green-50/30 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Demande de Devis</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Obtenez votre devis gratuit en 24h
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Remplissez ce formulaire et recevez une estimation personnalisée pour vos besoins d'entretien
            </p>
          </motion.div>

          <Card className="max-w-3xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom complet *</Label>
                    <Input
                      id="nom"
                      required
                      value={formData.nom}
                      onChange={(e) => setFormData({...formData, nom: e.target.value})}
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                      placeholder="+590 690 XX XX XX"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="typeClient">Type de client *</Label>
                    <Select value={formData.typeClient} onValueChange={(value) => setFormData({...formData, typeClient: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="particulier">Particulier</SelectItem>
                        <SelectItem value="copropriete">Copropriété</SelectItem>
                        <SelectItem value="collectivite">Collectivité publique</SelectItem>
                        <SelectItem value="hotel">Hôtel / Résidence</SelectItem>
                        <SelectItem value="commerce">Commerce / Bureau</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="typeService">Type de service *</Label>
                    <Select value={formData.typeService} onValueChange={(value) => setFormData({...formData, typeService: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tonte">Tonte de pelouse</SelectItem>
                        <SelectItem value="taille">Taille de haies/arbustes</SelectItem>
                        <SelectItem value="debroussaillage">Débroussaillage</SelectItem>
                        <SelectItem value="massifs">Entretien massifs</SelectItem>
                        <SelectItem value="complet">Entretien complet</SelectItem>
                        <SelectItem value="ponctuel">Intervention ponctuelle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="superficie">Superficie (m²)</Label>
                    <Input
                      id="superficie"
                      value={formData.superficie}
                      onChange={(e) => setFormData({...formData, superficie: e.target.value})}
                      placeholder="Ex: 500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frequence">Fréquence souhaitée *</Label>
                  <Select value={formData.frequence} onValueChange={(value) => setFormData({...formData, frequence: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ponctuelle">Intervention ponctuelle</SelectItem>
                      <SelectItem value="mensuelle">Mensuelle</SelectItem>
                      <SelectItem value="bimensuelle">Bi-mensuelle</SelectItem>
                      <SelectItem value="hebdomadaire">Hebdomadaire</SelectItem>
                      <SelectItem value="annuel">Contrat annuel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Détails de votre projet</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Décrivez vos besoins, l'état actuel de votre espace vert, vos attentes..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  Envoyer ma demande de devis
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  📞 Réponse sous 24h • Devis gratuit et sans engagement
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d'une intervention rapide ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous directement au +590 690 XX XX XX
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-700">
              <Link to="/services">Tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
