import React from 'react';

function Retour() {
    return (
        <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 min-h-screen py-12 px-5 md:px-20">
            <div className="max-w-4xl mx-auto bg-secondary p-8 shadow-lg rounded-xl">
                <h1 className="text-3xl font-bold text-accent mb-6">Politique de Retour</h1>
                
                <p className="text-textLight text-sm mb-4">Dernière mise à jour : 30.01.2025</p>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">1. Délai de Retour</h2>
                    <p className="text-text">Vous disposez de <span className="font-bold">30 jours</span> après réception de votre commande pour retourner un produit.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">2. Conditions d'Éligibilité</h2>
                    <p className="text-text">Pour être éligible à un retour, l'article doit être non porté, non lavé, avec toutes ses étiquettes et dans son emballage d'origine.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">3. Procédure de Retour</h2>
                    <p className="text-text">Pour initier un retour, contactez-nous à <a href="mailto:" className="text-accent font-bold">retours@loop.com</a> en mentionnant votre numéro de commande et la raison du retour.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">4. Frais de Retour</h2>
                    <p className="text-text">Les frais de retour sont à la charge du client, sauf en cas d'erreur de notre part ou d'article défectueux.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">5. Remboursements</h2>
                    <p className="text-text">Une fois votre retour reçu et inspecté, nous vous informerons de son approbation. Si approuvé, le remboursement sera effectué sur votre mode de paiement initial sous 7 à 10 jours ouvrables.</p>
                </section>
                
                <p className="text-text text-center mt-6">Si vous avez des questions, contactez-nous à <a href="mailto:support@loop.com" className="text-accent font-bold text-accent font-bold hover:text-blue-700">support@loop.com</a>.</p>
            </div>
        </div>
    );
}

export default Retour;
