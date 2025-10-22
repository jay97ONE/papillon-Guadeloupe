import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Toaster } from "./ui/sonner";

const CONTACT_EMAIL = "papillonguadeloupe1@gmail.com";
const PHONE = "+590 690 XX XX XX";
const BUTTERFLY_LOGO = "https://images.unsplash.com/photo-1749829537470-929d6cf1213d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXJmbHklMjB0cm9waWNhbCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MDE1ODcxMHww&ixlib=rb-4.1.0&q=80&w=1080";

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Système de notifications toast */}
      <Toaster 
        position="top-right" 
        richColors 
        closeButton
      />
      
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              className="w-12 h-12 rounded-xl overflow-hidden shadow-md ring-2 ring-green-500/20 group-hover:ring-green-500/40 transition-all"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ImageWithFallback
                src={BUTTERFLY_LOGO}
                alt="Papillon Guadeloupe Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Papillon Guadeloupe
              </div>
              <div className="text-xs text-muted-foreground tracking-wide">Création Paysagère</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-5">
            <Link 
              to="/" 
              className={`relative hover:text-primary transition-all text-sm ${isActive('/') ? 'text-primary font-medium' : ''}`}
            >
              Accueil
              {isActive('/') && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            <Link 
              to="/services" 
              className={`relative hover:text-primary transition-all text-sm ${isActive('/services') ? 'text-primary font-medium' : ''}`}
            >
              Services
              {isActive('/services') && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            <Link 
              to="/realisations" 
              className={`relative hover:text-primary transition-all text-sm ${isActive('/realisations') ? 'text-primary font-medium' : ''}`}
            >
              Réalisations
              {isActive('/realisations') && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            <Link 
              to="/processus" 
              className={`relative hover:text-primary transition-all text-sm ${isActive('/processus') ? 'text-primary font-medium' : ''}`}
            >
              Processus
              {isActive('/processus') && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            <Link 
              to="/a-propos" 
              className={`relative hover:text-primary transition-all text-sm ${isActive('/a-propos') ? 'text-primary font-medium' : ''}`}
            >
              À Propos
              {isActive('/a-propos') && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            <Link 
              to="/contact" 
              className={`relative hover:text-primary transition-all text-sm ${isActive('/contact') ? 'text-primary font-medium' : ''}`}
            >
              Contact
              {isActive('/contact') && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            <Button asChild className="ml-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-md hover:shadow-lg transition-all">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileNavOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>

        {mobileNavOpen && (
          <div className="lg:hidden bg-background border-t">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              <Link 
                to="/" 
                onClick={() => setMobileNavOpen(false)}
                className={`py-2 hover:text-primary ${isActive('/') ? 'text-primary font-medium' : ''}`}
              >
                Accueil
              </Link>
              <Link 
                to="/services" 
                onClick={() => setMobileNavOpen(false)}
                className={`py-2 hover:text-primary ${isActive('/services') ? 'text-primary font-medium' : ''}`}
              >
                Services
              </Link>
              <Link 
                to="/realisations" 
                onClick={() => setMobileNavOpen(false)}
                className={`py-2 hover:text-primary ${isActive('/realisations') ? 'text-primary font-medium' : ''}`}
              >
                Réalisations
              </Link>
              <Link 
                to="/processus" 
                onClick={() => setMobileNavOpen(false)}
                className={`py-2 hover:text-primary ${isActive('/processus') ? 'text-primary font-medium' : ''}`}
              >
                Processus
              </Link>
              <Link 
                to="/a-propos" 
                onClick={() => setMobileNavOpen(false)}
                className={`py-2 hover:text-primary ${isActive('/a-propos') ? 'text-primary font-medium' : ''}`}
              >
                À Propos
              </Link>
              <Link 
                to="/galerie" 
                onClick={() => setMobileNavOpen(false)}
                className={`py-2 hover:text-primary ${isActive('/galerie') ? 'text-primary font-medium' : ''}`}
              >
                Galerie
              </Link>
              <Link 
                to="/faq" 
                onClick={() => setMobileNavOpen(false)}
                className={`py-2 hover:text-primary ${isActive('/faq') ? 'text-primary font-medium' : ''}`}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setMobileNavOpen(false)}
                className={`py-2 hover:text-primary ${isActive('/contact') ? 'text-primary font-medium' : ''}`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMTRjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/20">
                  <ImageWithFallback
                    src={BUTTERFLY_LOGO}
                    alt="Papillon Guadeloupe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">Papillon Guadeloupe</div>
                  <div className="text-sm text-green-400">Création Paysagère</div>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Architecte paysagiste en Guadeloupe, 
                nous concevons des jardins d'exception parfaitement adaptés au climat tropical.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-green-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Services
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><Link to="/services" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <span className="text-green-500">→</span> Conception paysagère
                </Link></li>
                <li><Link to="/entretien-paysager" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <span className="text-green-500">→</span> Entretien paysager
                </Link></li>
                <li><Link to="/location-motoculteur" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <span className="text-green-500">→</span> Location motoculteur
                </Link></li>
                <li><Link to="/services" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <span className="text-green-500">→</span> Tous nos services
                </Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-green-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Informations
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><Link to="/a-propos" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <span className="text-green-500">→</span> À propos
                </Link></li>
                <li><Link to="/realisations" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <span className="text-green-500">→</span> Nos réalisations
                </Link></li>
                <li><Link to="/processus" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <span className="text-green-500">→</span> Notre processus
                </Link></li>
                <li><Link to="/faq" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <span className="text-green-500">→</span> FAQ
                </Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-green-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${PHONE}`} className="hover:text-green-400 transition-colors">{PHONE}</a>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-green-400 transition-colors break-all">{CONTACT_EMAIL}</a>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Toute la Guadeloupe</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <div className="text-sm text-slate-400">
                © {new Date().getFullYear()} <span className="text-green-400 font-medium">PAPILLON GUADELOUPE SASU</span>. Tous droits réservés.
              </div>
              <div className="text-sm text-slate-400">
                🌺 Aménagement paysager professionnel en Guadeloupe • SIRET : 830 230 603 00011
              </div>
            </div>
            <div className="flex justify-center gap-6 text-sm">
              <Link to="/a-propos" className="text-slate-400 hover:text-green-400 transition-colors">À propos</Link>
              <Link to="/faq" className="text-slate-400 hover:text-green-400 transition-colors">FAQ</Link>
              <Link to="/mentions-legales" className="text-slate-400 hover:text-green-400 transition-colors">Mentions légales</Link>
              <Link to="/contact" className="text-slate-400 hover:text-green-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}