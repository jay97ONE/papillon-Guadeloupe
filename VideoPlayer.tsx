import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { MEDIA, FALLBACK_MEDIA, getVideo } from './ImageConfig';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  showPlayButton?: boolean;
  fallbackToImage?: boolean;
}

export function VideoPlayer({ 
  src, 
  poster, 
  className = "", 
  autoplay = false,
  muted = true,
  loop = false,
  controls = true,
  showPlayButton = true,
  fallbackToImage = true
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleError = () => {
    setHasError(true);
  };

  // Si erreur et fallback activé, afficher l'image poster
  if (hasError && fallbackToImage && poster) {
    return (
      <div className={`relative ${className}`}>
        <img 
          src={poster} 
          alt="Aperçu vidéo non disponible"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-white text-center">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Vidéo temporairement indisponible</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      <video
        ref={videoRef}
        poster={poster}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={handleError}
        className="w-full h-full object-cover"
      >
        <source src={getVideo(src)} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>

      {/* Bouton play/pause personnalisé */}
      {showPlayButton && !controls && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="secondary"
            size="lg"
            className="bg-black/50 hover:bg-black/70 text-white border-0 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={isPlaying ? handlePause : handlePlay}
          >
            {isPlaying ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-7 0a7 7 0 1114 0M9 14h6" />
              </svg>
            )}
          </Button>
        </div>
      )}

      {/* Overlay de chargement */}
      {!hasError && (
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="text-white text-center">
            <svg className="w-6 h-6 mx-auto animate-spin opacity-60" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

// Composant spécialisé pour les vidéos de portfolio avec transformation
interface PortfolioVideoProps {
  projectId: number;
  className?: string;
}

export function PortfolioVideo({ projectId, className = "" }: PortfolioVideoProps) {
  const videoData = MEDIA.videos.portfolio.find(p => p.id === projectId);
  
  if (!videoData) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <p className="text-muted-foreground">Vidéo du projet #{projectId} non disponible</p>
      </div>
    );
  }

  return (
    <VideoPlayer
      src={videoData.video}
      poster={videoData.poster}
      className={className}
      autoplay={false}
      muted={true}
      loop={true}
      controls={true}
    />
  );
}

// Composant pour vidéo hero avec autoplay silencieux
interface HeroVideoProps {
  className?: string;
  showFallbackImage?: boolean;
}

export function HeroVideo({ className = "", showFallbackImage = true }: HeroVideoProps) {
  return (
    <VideoPlayer
      src={MEDIA.videos.hero}
      poster={MEDIA.images.hero}
      className={className}
      autoplay={true}
      muted={true}
      loop={true}
      controls={false}
      showPlayButton={false}
      fallbackToImage={showFallbackImage}
    />
  );
}