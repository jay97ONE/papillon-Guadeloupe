import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { BackButton } from "../components/BackButton";

export function MentionsLegales() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <BackButton className="mb-6" />
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Informations Légales</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Informations légales concernant le site Papillon Guadeloupe Création
            </p>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Éditeur du site</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <strong className="block mb-2">PAPILLON GUADELOUPE SASU</strong>
                  <p className="text-muted-foreground">
                    Architecte paysagiste de jardins d'exception<br />
                    Guadeloupe, Antilles françaises<br />
                    <br />
                    <strong>SIRET :</strong> 830 230 603 00011<br />
                    <strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)<br />
                    <br />
                    Email : <a href="mailto:papillonguadeloupe1@gmail.com" className="text-green-600 hover:underline">papillonguadeloupe1@gmail.com</a><br />
                    Téléphone : <a href="tel:+590690XXXXXX" className="text-green-600 hover:underline">+590 690 XX XX XX</a>
                  </p>
                </div>
                <div>
                  <strong className="block mb-2">Directeur de publication</strong>
                  <p className="text-muted-foreground">
                    Président de PAPILLON GUADELOUPE SASU
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hébergement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ce site est hébergé par :<br />
                  <strong>Netlify, Inc.</strong><br />
                  2325 3rd Street, Suite 296<br />
                  San Francisco, CA 94107, États-Unis<br />
                  Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">www.netlify.com</a>
                </p>
                <p className="text-muted-foreground mt-4 text-sm">
                  <em>Note : Les informations d'hébergement peuvent être mises à jour selon la plateforme choisie (Netlify, Vercel, OVH, O2Switch, etc.)</em>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                  les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-muted-foreground">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de publication.
                </p>
                <p className="text-muted-foreground">
                  Les photos utilisées sur ce site proviennent de nos réalisations ou sont issues de banques 
                  d'images libres de droits (Unsplash). Voir <Link to="/attributions" className="text-green-600 hover:underline">Attributions</Link>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Protection des données personnelles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement 
                  Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
                  de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-muted-foreground">
                  <strong>Données collectées :</strong><br />
                  Les informations recueillies via les formulaires de contact (nom, email, téléphone, message) 
                  sont destinées exclusivement à Papillon Guadeloupe Création pour répondre à vos demandes de 
                  devis ou d'information.
                </p>
                <p className="text-muted-foreground">
                  <strong>Conservation des données :</strong><br />
                  Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, 
                  puis archivées conformément aux obligations légales.
                </p>
                <p className="text-muted-foreground">
                  <strong>Exercer vos droits :</strong><br />
                  Pour exercer vos droits, contactez-nous à : 
                  <a href="mailto:papillonguadeloupe1@gmail.com" className="text-green-600 hover:underline ml-1">
                    papillonguadeloupe1@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques 
                  nécessaires au bon fonctionnement du site peuvent être utilisés (session de navigation).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation de responsabilité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Papillon Guadeloupe Création s'efforce d'assurer l'exactitude et la mise à jour des informations 
                  diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou 
                  l'exhaustivité des informations mises à disposition.
                </p>
                <p className="text-muted-foreground">
                  En conséquence, Papillon Guadeloupe Création décline toute responsabilité pour toute 
                  imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Liens hypertextes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ce site peut contenir des liens vers d'autres sites. Papillon Guadeloupe Création ne peut 
                  être tenue responsable du contenu de ces sites externes ni des éventuels dommages résultant 
                  de leur consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Droit applicable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Le présent site et les présentes mentions légales sont régis par le droit français. 
                  Tout litige sera soumis à la compétence exclusive des tribunaux français.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pour toute question concernant ces mentions légales ou le traitement de vos données, 
                  vous pouvez nous contacter :
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>📧 Email : <a href="mailto:papillonguadeloupe1@gmail.com" className="text-green-600 hover:underline">papillonguadeloupe1@gmail.com</a></li>
                  <li>📱 Téléphone : <a href="tel:+590690XXXXXX" className="text-green-600 hover:underline">+590 690 XX XX XX</a></li>
                  <li>📝 Via le <Link to="/contact" className="text-green-600 hover:underline">formulaire de contact</Link></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Dernière mise à jour : 14 décembre 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
}
