import React from 'react';

function Conditions() {
    return (
        <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 min-h-screen py-10 px-5 md:px-20">
            <div className="max-w-4xl mx-auto bg-secondary p-8 shadow-lg rounded-xl">
                <h1 className="text-3xl font-bold text-accent mb-6">Conditions Générales d'Utilisation</h1>
                
                <p className="text-textLight text-sm mb-4">Dernière mise à jour : 30.01.2025</p>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">1. Acceptation des conditions</h2>
                    <p className="text-text">En naviguant sur le site <span className="font-bold">Loop</span>, vous acceptez les présentes conditions d'utilisation. Si ces conditions ne vous conviennent pas, nous vous prions de ne pas utiliser notre site.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">2. Utilisation du site</h2>
                    <p className="text-text">Loop vous accorde une licence limitée, non exclusive et non transférable pour naviguer et faire des achats sur son site. Toute reproduction, modification ou utilisation à des fins commerciales sans autorisation est strictement interdite.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">3. Produits et Prix</h2>
                    <p className="text-text">Les prix de nos produits sont affichés en CHF et peuvent être modifiés sans préavis. Nous nous efforçons d'afficher des informations précises, mais des erreurs peuvent survenir. En cas d'erreur de prix, nous nous réservons le droit d'annuler toute commande concernée.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">4. Paiement et Sécurité</h2>
                    <p className="text-text">Les paiements sont sécurisés via nos partenaires de paiement certifiés. Loop ne stocke aucune information bancaire.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">5. Expédition et Livraison</h2>
                    <p className="text-text">Nous expédions nos produits dans toute l'UE. Les délais de livraison sont estimés et peuvent varier en fonction de votre emplacement.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">6. Retours et Remboursements</h2>
                    <p className="text-text">Vous pouvez retourner un produit dans un délai de 30 jours après réception, sous certaines conditions. Consultez notre page <a href="/pages/retour" className="text-accent font-bold hover:text-blue-700">Politique de Retour</a> pour plus de détails.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">7. Protection des Données</h2>
                    <p className="text-text">Vos données personnelles sont protégées conformément à notre <a href="/pages/politiqueConf" className="text-accent font-bold hover:text-blue-700">Politique de Confidentialité</a>.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">8. Modification des Conditions</h2>
                    <p className="text-text">Loop se réserve le droit de modifier ces conditions à tout moment. Nous vous encourageons à les consulter régulièrement.</p>
                </section>
                
                <p className="text-text text-center mt-6">Si vous avez des questions, contactez-nous à <span className="font-bold"><a href="mailto:support@loop.com" className="text-accent font-bold hover:text-blue-700">support@loop.com</a></span>.</p>
            </div>
        </div>
    );
}

export default Conditions;
