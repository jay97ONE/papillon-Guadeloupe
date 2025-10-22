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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";
import { toast } from "sonner@2.0.3";

export function LocationMotoculteur() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeLocation: "",
    duree: "",
    surface: "",
    dateDebut: "",
    avecOperateur: "oui",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demande de location motoculteur:", formData);
    
    // Notification de succès avec informations sur la réponse
    toast.success("🚜 Réservation motoculteur enregistrée !", {
      description: "Excellent ! Nous vérifions la disponibilité et vous confirmons votre réservation sous 24h. Un SMS de confirmation suivra. Vérifiez vos emails !",
      duration: 8000,
    });
    
    // Réinitialiser le formulaire
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      typeLocation: "",
      duree: "",
      surface: "",
      dateDebut: "",
      avecOperateur: "oui",
      message: ""
    });
  };

  const caracteristiques = [
    {
      icon: "⚙️",
      titre: "Puissance",
      valeur: "9 CV",
      description: "Moteur essence 4 temps professionnel"
    },
    {
      icon: "📏",
      titre: "Largeur de travail",
      valeur: "60-90 cm",
      description: "Ajustable selon vos besoins"
    },
    {
      icon: "🌱",
      titre: "Profondeur",
      valeur: "Jusqu'à 30 cm",
      description: "Labour professionnel efficace"
    },
    {
      icon: "⚡",
      titre: "Vitesse",
      valeur: "2 vitesses",
      description: "Avant + Marche arrière"
    },
    {
      icon: "🔧",
      titre: "Équipement",
      valeur: "Fraises rotatives",
      description: "Fraises renforcées pour tous terrains"
    },
    {
      icon: "💪",
      titre: "Capacité",
      valeur: "500-2000 m²/jour",
      description: "Selon la nature du terrain"
    }
  ];

  const avantages = [
    {
      icon: "⏱️",
      titre: "Gain de temps considérable",
      description: "Un motoculteur professionnel travaille 10x plus vite qu'à la main",
      stats: "90% de temps économisé"
    },
    {
      icon: "💰",
      titre: "Solution économique",
      description: "Louez uniquement quand vous en avez besoin sans investissement",
      stats: "Dès 120€/jour"
    },
    {
      icon: "👷",
      titre: "Avec opérateur qualifié",
      description: "Notre professionnel assure le travail dans les règles de l'art",
      stats: "15 ans d'expérience"
    },
    {
      icon: "🎯",
      titre: "Travail professionnel",
      description: "Résultat impeccable pour vos plantations et aménagements",
      stats: "Qualité garantie"
    },
    {
      icon: "🌿",
      titre: "Préparation optimale",
      description: "Sol parfaitement ameubli et aéré pour vos cultures",
      stats: "Meilleur rendement"
    },
    {
      icon: "🛡️",
      titre: "Sans risque",
      description: "Matériel assuré et entretenu, aucun souci de panne",
      stats: "100% opérationnel"
    }
  ];

  const utilisations = [
    {
      titre: "Préparation de terrain",
      items: [
        "Labour avant plantation",
        "Retournement de terre",
        "Défrichage de terrain",
        "Création de potager"
      ]
    },
    {
      titre: "Entretien & Aménagement",
      items: [
        "Aération du sol",
        "Incorporation d'amendements",
        "Nettoyage de terrain",
        "Préparation de pelouse"
      ]
    },
    {
      titre: "Travaux professionnels",
      items: [
        "Chantiers d'aménagement",
        "Espaces verts collectifs",
        "Terrains agricoles",
        "Projets de paysagisme"
      ]
    }
  ];

  const manipulationSteps = [
    {
      etape: "1",
      titre: "Démarrage",
      description: "Vérifier le niveau d'essence, positionner le starter, tirer le lanceur",
      securite: "Port de chaussures de sécurité obligatoire"
    },
    {
      etape: "2",
      titre: "Réglages",
      description: "Ajuster la profondeur de labour, sélectionner la vitesse adaptée",
      securite: "Toujours régler moteur arrêté"
    },
    {
      etape: "3",
      titre: "Travail",
      description: "Avancer progressivement, maintenir une allure régulière, bandes parallèles",
      securite: "Ne jamais mettre les mains près des fraises"
    },
    {
      etape: "4",
      titre: "Arrêt",
      description: "Relever les fraises, mettre au point mort, couper le moteur",
      securite: "Attendre l'arrêt complet avant intervention"
    }
  ];

  const tarifs = [
    {
      formule: "Demi-journée",
      duree: "4 heures",
      sansOperateur: "80€",
      avecOperateur: "160€",
      surface: "Jusqu'à 300 m²",
      badge: ""
    },
    {
      formule: "Journée",
      duree: "8 heures",
      sansOperateur: "120€",
      avecOperateur: "280€",
      surface: "Jusqu'à 800 m²",
      badge: "Populaire"
    },
    {
      formule: "Weekend",
      duree: "2 jours",
      sansOperateur: "200€",
      avecOperateur: "500€",
      surface: "Jusqu'à 1500 m²",
      badge: ""
    },
    {
      formule: "Semaine",
      duree: "5 jours",
      sansOperateur: "450€",
      avecOperateur: "1100€",
      surface: "Grands terrains",
      badge: "Meilleur prix"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1725916631452-b411a5991fce?w=1920"
            alt="Location motoculteur professionnel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <BackButton className="mb-6" variant="outline" />
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-white border-orange-400/40 backdrop-blur-sm">
              🚜 Location Matériel Professionnel
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Location de Motoculteur{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                avec Opérateur Qualifié
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Préparez vos terrains rapidement et efficacement avec notre motoculteur professionnel 
              et notre opérateur expérimenté. Service disponible en Guadeloupe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
                <a href="#tarifs">Voir les tarifs</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black backdrop-blur-sm">
                <a href="#devis">Demander un devis</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Caractéristiques Motoculteur */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Équipement Professionnel</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Motoculteur professionnel haute performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Matériel robuste et fiable, adapté aux terrains tropicaux de Guadeloupe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {caracteristiques.map((carac, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-xl transition-all border-2 hover:border-orange-500/30">
                  <CardHeader>
                    <div className="text-5xl mb-3">{carac.icon}</div>
                    <div className="text-sm text-muted-foreground mb-1">{carac.titre}</div>
                    <CardTitle className="text-2xl text-orange-600">{carac.valeur}</CardTitle>
                    <CardDescription>{carac.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">✨</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Matériel professionnel entretenu</h3>
                    <p className="text-muted-foreground">
                      Notre motoculteur est entretenu régulièrement et vérifié avant chaque location. 
                      Pièces d'usure changées systématiquement, huile et filtres neufs, fraises affûtées. 
                      Garantie de bon fonctionnement à 100%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Les Avantages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi louer notre motoculteur ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{avantage.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{avantage.titre}</CardTitle>
                        <CardDescription className="text-base mb-3">{avantage.description}</CardDescription>
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                          {avantage.stats}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Utilisations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Utilisations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pour quels travaux utiliser un motoculteur ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {utilisations.map((usage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-center mb-4">{usage.titre}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {usage.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Manipulation */}
      <section className="py-20 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Guide d'Utilisation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comment utiliser le motoculteur en toute sécurité
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Formation rapide incluse avec la location • Notre opérateur peut aussi gérer tout le travail
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {manipulationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xl">
                          {step.etape}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{step.titre}</h3>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="flex items-start gap-2 text-sm bg-red-50 text-red-700 p-3 rounded-lg border border-red-200">
                          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span className="font-medium">Sécurité : {step.securite}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white border-0">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">👷</div>
                <h3 className="text-2xl font-bold mb-4">Option avec opérateur professionnel</h3>
                <p className="mb-6 opacity-90 text-lg">
                  Vous préférez déléguer ? Notre opérateur qualifié prend en charge tout le travail. 
                  Résultat professionnel garanti, sans effort de votre part !
                </p>
                <Badge variant="secondary" className="text-lg px-6 py-2">
                  ✅ 15 ans d'expérience • Formation professionnelle • Assurance incluse
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Tarifs Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos formules de location
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tarifs transparents • Essence incluse • Matériel assuré
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tarifs.map((tarif, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${tarif.badge ? 'border-2 border-orange-500 shadow-xl' : ''}`}>
                  {tarif.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-orange-600">{tarif.badge}</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">{tarif.formule}</CardTitle>
                    <CardDescription className="text-base">{tarif.duree}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Sans opérateur</div>
                      <div className="text-3xl font-bold text-orange-600">{tarif.sansOperateur}</div>
                    </div>
                    <div className="text-center border-t pt-4">
                      <div className="text-sm text-muted-foreground mb-1">Avec opérateur</div>
                      <div className="text-3xl font-bold text-green-600">{tarif.avecOperateur}</div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground pt-2 border-t">
                      📐 {tarif.surface}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✅ Essence incluse dans tous les tarifs</p>
                  <p>✅ Matériel assuré et entretenu</p>
                  <p>✅ Formation à l'utilisation (location sans opérateur)</p>
                  <p>✅ Caution de 300€ (chèque non encaissé)</p>
                  <p>✅ Réduction de 10% pour les locations de 2 semaines et plus</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulaire Devis */}
      <section id="devis" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Réservation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Réserver votre motoculteur
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Réponse sous 24h • Disponibilité en temps réel • Devis gratuit
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
                    <Label htmlFor="dateDebut">Date souhaitée *</Label>
                    <Input
                      id="dateDebut"
                      type="date"
                      required
                      value={formData.dateDebut}
                      onChange={(e) => setFormData({...formData, dateDebut: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="duree">Durée de location *</Label>
                    <Select value={formData.duree} onValueChange={(value) => setFormData({...formData, duree: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demi-journee">Demi-journée (4h)</SelectItem>
                        <SelectItem value="journee">Journée (8h)</SelectItem>
                        <SelectItem value="weekend">Weekend (2 jours)</SelectItem>
                        <SelectItem value="semaine">Semaine (5 jours)</SelectItem>
                        <SelectItem value="autre">Autre durée</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="surface">Surface à travailler (m²)</Label>
                    <Input
                      id="surface"
                      value={formData.surface}
                      onChange={(e) => setFormData({...formData, surface: e.target.value})}
                      placeholder="Ex: 500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Avec opérateur professionnel ? *</Label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="avecOperateur"
                        value="oui"
                        checked={formData.avecOperateur === "oui"}
                        onChange={(e) => setFormData({...formData, avecOperateur: e.target.value})}
                        className="w-4 h-4"
                      />
                      <span>Oui, avec opérateur (recommandé)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="avecOperateur"
                        value="non"
                        checked={formData.avecOperateur === "non"}
                        onChange={(e) => setFormData({...formData, avecOperateur: e.target.value})}
                        className="w-4 h-4"
                      />
                      <span>Non, location seule</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Détails du projet</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Décrivez votre projet : type de terrain, nature du sol, objectif du travail..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700">
                  Envoyer ma demande de réservation
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  📞 Réponse sous 24h • Réservation confirmée après vérification de disponibilité
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d'informations complémentaires ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous au +590 690 XX XX XX ou visitez notre page services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-orange-700">
              <Link to="/services">Tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
