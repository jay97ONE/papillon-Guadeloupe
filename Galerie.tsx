import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { VideoPlayer, PortfolioVideo } from '../components/VideoPlayer';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { MEDIA, FALLBACK_MEDIA } from '../components/ImageConfig';

export function Galerie() {
  const [selectedMedia, setSelectedMedia] = useState<{type: 'image' | 'video', src: string, title: string} | null>(null);
  
  const mediaCategories = [
    {
      id: 'photos',
      title: 'Photos',
      description: 'Nos plus belles réalisations en images'
    },
    {
      id: 'videos',
      title: 'Vidéos',
      description: 'Transformations et processus en mouvement'
    },
    {
      id: 'conception',
      title: 'Conception 3D',
      description: 'Rendus et visualisations avant réalisation'
    }
  ];

  const portfolioPhotos = MEDIA.images.portfolio.map((project, index) => ({
    id: project.id,
    title: `Projet ${project.id} - Avant`,
    src: project.before,
    category: 'Avant',
    type: 'image' as const
  })).concat(
    MEDIA.images.portfolio.map((project, index) => ({
      id: project.id + 100,
      title: `Projet ${project.id} - Après`,
      src: project.after,
      category: 'Après',
      type: 'image' as const
    }))
  );

  const portfolioVideos = MEDIA.videos.portfolio.map(video => ({
    id: video.id,
    title: `Transformation - Projet ${video.id}`,
    src: video.video,
    poster: video.poster,
    category: 'Transformation',
    type: 'video' as const
  }));

  const processusVideos = [
    {
      id: 'visite-3d',
      title: 'Visite virtuelle 3D',
      src: MEDIA.videos.processus.visite3d,
      poster: MEDIA.images.processus.conception,
      category: 'Processus',
      type: 'video' as const
    },
    {
      id: 'timelapse',
      title: 'Réalisation en timelapse',
      src: MEDIA.videos.processus.timelapseRealisation,
      poster: MEDIA.images.processus.accompagnement,
      category: 'Processus',
      type: 'video' as const
    }
  ];

  const conceptionImages = Object.entries(MEDIA.images.processus).map(([key, src], index) => ({
    id: `conception-${index}`,
    title: `Conception ${key}`,
    src,
    category: 'Conception 3D',
    type: 'image' as const
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <BackButton className="mb-6" />
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Galerie Médias</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Découvrez nos créations en images et vidéos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Plongez dans l'univers de Papillon Guadeloupe à travers nos réalisations, 
              notre processus créatif et nos transformations spectaculaires.
            </p>
          </div>
        </div>
      </section>

      {/* Media Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="videos">Vidéos</TabsTrigger>
              <TabsTrigger value="conception">Conception 3D</TabsTrigger>
            </TabsList>

            {/* Photos Tab */}
            <TabsContent value="photos">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Galerie Photos</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nos plus belles réalisations photographiées sous tous les angles. 
                  Découvrez les transformations avant/après de nos projets.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {portfolioPhotos.map((photo) => (
                  <Card 
                    key={photo.id} 
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
                    onClick={() => setSelectedMedia({type: 'image', src: photo.src, title: photo.title})}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-3 right-3 bg-black/50 text-white"
                      >
                        {photo.category}
                      </Badge>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm">{photo.title}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Galerie Vidéos</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transformations en timelapse, visites virtuelles 3D et démonstrations 
                  de notre processus créatif.
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Vidéo principale de présentation */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Présentation Papillon Guadeloupe
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video">
                      <VideoPlayer
                        src={MEDIA.videos.hero}
                        poster={MEDIA.images.hero}
                        className="w-full h-full rounded-lg overflow-hidden"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Vidéos du portfolio */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center">Transformations en vidéo</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioVideos.map((video) => (
                      <Card key={video.id} className="overflow-hidden">
                        <div className="aspect-video">
                          <VideoPlayer
                            src={video.src}
                            poster={video.poster}
                            className="w-full h-full"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm">{video.title}</CardTitle>
                          <Badge variant="outline" className="w-fit">
                            {video.category}
                          </Badge>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Vidéos du processus */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center">Notre processus en action</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {processusVideos.map((video) => (
                      <Card key={video.id} className="overflow-hidden">
                        <div className="aspect-video">
                          <VideoPlayer
                            src={video.src}
                            poster={video.poster}
                            className="w-full h-full"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm">{video.title}</CardTitle>
                          <Badge variant="outline" className="w-fit">
                            {video.category}
                          </Badge>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Conception 3D Tab */}
            <TabsContent value="conception">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Conception 3D</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nos rendus 3D photo-réalistes vous permettent de visualiser votre futur jardin 
                  avant même le début des travaux.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conceptionImages.map((image) => (
                  <Card 
                    key={image.id} 
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
                    onClick={() => setSelectedMedia({type: 'image', src: image.src, title: image.title})}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-3 right-3 bg-blue-600 text-white"
                      >
                        3D
                      </Badge>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm">{image.title}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
                Inspiré par nos créations ? Contactez-nous pour transformer votre espace extérieur 
                en jardin d'exception adapté au climat tropical de la Guadeloupe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Démarrer mon projet</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-700">
                  <Link to="/processus">Voir notre processus</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modal de visualisation (optionnel) */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedMedia(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
            {selectedMedia.type === 'image' ? (
              <img 
                src={selectedMedia.src} 
                alt={selectedMedia.title}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <video 
                src={selectedMedia.src} 
                controls 
                autoPlay
                className="max-w-full max-h-full"
              />
            )}
            <div className="absolute -bottom-12 left-0 text-white">
              <h3 className="font-medium">{selectedMedia.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}