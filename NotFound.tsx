import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-6">
      <motion.div 
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-9xl font-bold text-green-600 mb-4"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          404
        </motion.div>
        
        <h1 className="text-4xl font-bold mb-4">Page non trouvée</h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Désolé, la page que vous recherchez semble s'être envolée comme un papillon... 🦋
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/">Retour à l'accueil</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            → Accueil
          </Link>
          <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
            → Services
          </Link>
          <Link to="/realisations" className="text-muted-foreground hover:text-primary transition-colors">
            → Réalisations
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            → Contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
