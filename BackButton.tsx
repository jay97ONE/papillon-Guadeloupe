import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "motion/react";

interface BackButtonProps {
  label?: string;
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

export function BackButton({ label = "Retour", variant = "ghost", className = "" }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    // Vérifie s'il y a un historique, sinon retourne à l'accueil
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        onClick={handleBack}
        variant={variant}
        className={`group ${className}`}
      >
        <svg 
          className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
        {label}
      </Button>
    </motion.div>
  );
}
