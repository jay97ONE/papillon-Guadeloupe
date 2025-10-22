import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1758612120966-b20c01160c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBsYW5kc2NhcGUlMjBkZXNpZ258ZW58MXx8fHwxNzU4OTYwMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Home() {
  const [testimonialsIndex, setTestimonialsIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Papillon Guadeloupe Création a transformé notre espace extérieur en véritable havre de paix. Leur expertise technique et leur créativité ont dépassé nos attentes.",
      author: "Marie D., Propriétaire villa Les Abymes",
      rating: 5
    },
    {
      id: 2,
      quote: "Collaboration parfaite pour l'aménagement de notre complexe hôtelier. Plans 3D précis, respect des délais et rendu exceptionnel.",
      author: "Jean-Luc P., Directeur Hôtel Tropical Resort",
      rating: 5
    },
    {
      id: 3,
      quote: "Service professionnel de A à Z. La visite conseil nous a permis d'optimiser notre budget et d'obtenir le jardin de nos rêves.",
      author: "Sophie L., Résidence Gosier",
      rating: 5
    },
  ];

  const highlights = [
    {
      title: "Expertise Tropicale",
      description: "Connaissance approfondie de la flore et du climat guadeloupéen",
      icon: "🌺"
    },
    {
      title: "Visualisation 3D",
      description: "Rendus photo-réalistes pour valider votre projet avant réalisation",
      icon: "🎨"
    },
    {
      title: "Accompagnement Complet",
      description: "De la conception à la réalisation avec nos partenaires qualifiés",
      icon: "🤝"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMAGE}
            alt="Aménagement paysager de luxe en Guadeloupe"
            className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-white border-green-400/40 backdrop-blur-sm shadow-lg">
                🌺 Spécialiste des Jardins Tropicaux
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Architecte paysagiste de{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                jardins d'exception
              </span>
              {" "}en Guadeloupe
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              De la conception 3D à la réalisation, nous donnons vie à vos projets d'aménagement paysager 
              avec l'expertise d'un climat tropical unique et la passion du détail.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button size="lg" asChild className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-xl hover:shadow-2xl transition-all">
                <Link to="/contact">Obtenir un devis gratuit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/95 text-green-700 font-semibold border-2 border-green-500 hover:bg-green-600 hover:text-white hover:border-green-600 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all">
                <Link to="/realisations">Découvrir nos réalisations</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-6 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Visualisation 3D incluse</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Expertise climat tropical</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Suivi personnalisé</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-green-600/30 text-green-700">Pourquoi nous choisir ?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Une expertise unique en Guadeloupe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous combinons passion du paysagisme, expertise tropicale et technologies modernes 
              pour créer des jardins d'exception.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center group hover:shadow-2xl transition-all duration-300 border-2 hover:border-green-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="relative">
                    <motion.div 
                      className="text-6xl mb-4 inline-block"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.div>
                    <CardTitle className="text-xl mb-2 group-hover:text-green-600 transition-colors">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Nos Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Des solutions pour tous vos projets
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Particuliers ou professionnels, nous avons la solution adaptée à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <CardTitle>Particuliers</CardTitle>
                    <CardDescription>Pour votre résidence</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Visite conseil personnalisée
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Conception 3D complète
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    À partir de 225€ TTC
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/services">Découvrir nos services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <CardTitle>Professionnels</CardTitle>
                    <CardDescription>Projets d'envergure</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Études paysagères complexes
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Maîtrise d'œuvre paysagère
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Hôtels, résidences, espaces publics
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/services">Découvrir nos services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMTRjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-green-100">Projets réalisés</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-green-100">Clients professionnels</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-green-100">Clients satisfaits</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-green-100">Ans d'expérience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-green-600/30 text-green-700">Témoignages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              La satisfaction de nos clients
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les retours de nos clients qui nous ont fait confiance
            </p>
          </motion.div>

          <Card className="max-w-4xl mx-auto shadow-xl border-2 hover:shadow-2xl transition-shadow">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[testimonialsIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl italic text-muted-foreground mb-6">
                  "{testimonials[testimonialsIndex].quote}"
                </blockquote>
                <footer className="font-medium">
                  — {testimonials[testimonialsIndex].author}
                </footer>
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTestimonialsIndex(i => i === 0 ? testimonials.length - 1 : i - 1)}
                >
                  ←
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialsIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === testimonialsIndex ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTestimonialsIndex(i => i === testimonials.length - 1 ? 0 : i + 1)}
                >
                  →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMTRjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl mb-4 shadow-xl">
                🦋
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à transformer votre espace extérieur ?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons 
              donner vie à vos projets d'aménagement paysager tropical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="shadow-xl hover:shadow-2xl transition-all bg-white hover:bg-slate-100 text-green-700 font-semibold">
                <Link to="/contact">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Demander un devis gratuit
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white hover:text-green-700 backdrop-blur-sm shadow-lg font-semibold">
                <Link to="/realisations">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Voir nos réalisations
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}