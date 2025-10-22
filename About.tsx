import React from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";

export function About() {
  const team = [
    {
      name: "Jean-Marc Delorme",
      role: "Architecte Paysagiste",
      description: "15 ans d'expérience en conception paysagère tropicale",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
    },
    {
      name: "Marie Casimir",
      role: "Conceptrice 3D",
      description: "Experte en visualisation et modélisation 3D",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    },
    {
      name: "Patrick Lebrun",
      role: "Chef de Projet",
      description: "Coordination et suivi de chantiers",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    }
  ];

  const values = [
    {
      icon: "🌱",
      title: "Respect de l'environnement",
      description: "Nous privilégions les plantes locales et les pratiques durables"
    },
    {
      icon: "🎨",
      title: "Créativité & Innovation",
      description: "Chaque projet est unique et conçu sur mesure"
    },
    {
      icon: "🤝",
      title: "Écoute & Proximité",
      description: "Votre satisfaction est au cœur de nos préoccupations"
    },
    {
      icon: "⚡",
      title: "Réactivité",
      description: "Réponse sous 24h et suivi personnalisé"
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
            <Badge variant="outline" className="mb-4">À Propos</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre Histoire & Notre Vision
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Depuis plus de 10 ans, nous façonnons les jardins d'exception de la Guadeloupe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Papillon Guadeloupe Création est née de la passion de Jean-Marc Delorme pour 
                  l'aménagement paysager tropical. Après avoir travaillé 10 ans en métropole, 
                  il décide de revenir en Guadeloupe pour créer des jardins qui respectent 
                  et valorisent la biodiversité locale.
                </p>
                <p>
                  Notre approche unique combine expertise technique, créativité artistique et 
                  technologies modernes de visualisation 3D. Nous croyons que chaque espace 
                  extérieur peut devenir un havre de paix qui reflète la personnalité de ses propriétaires.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers d'avoir accompagné plus de 50 projets, 
                  des jardins privés aux espaces paysagers d'hôtels de luxe.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">Discutons de votre projet</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                  alt="Notre équipe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Années d'expertise</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Nos Valeurs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ce qui nous guide au quotidien
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Notre Équipe</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Les experts qui donnent vie à vos projets
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all group">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Envie de travailler avec nous ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Rejoignez les nombreux clients satisfaits qui nous font confiance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Démarrer un projet</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-700">
                <Link to="/realisations">Voir nos réalisations</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
