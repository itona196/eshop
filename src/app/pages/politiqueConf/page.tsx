import React from 'react';

function PolitiqueConf() {
    return (
        <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 min-h-screen py-12 px-5 md:px-20">
            <div className="max-w-4xl mx-auto bg-secondary p-8 shadow-lg rounded-xl">
                <h1 className="text-3xl font-bold text-accent mb-6">Politique de Confidentialité</h1>
                
                <p className="text-textLight text-sm mb-4">Dernière mise à jour : 30.01.2025</p>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">1. Collecte des données</h2>
                    <p className="text-text">Nous collectons les informations nécessaires à l'utilisation de notre site, telles que votre nom, votre adresse e-mail et votre adresse de livraison lors de vos achats.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">2. Utilisation des données</h2>
                    <p className="text-text">Vos informations personnelles sont utilisées uniquement pour le traitement des commandes, la personnalisation de votre expérience et l'amélioration de nos services.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">3. Protection des données</h2>
                    <p className="text-text">Nous mettons en œuvre des mesures de sécurité avancées pour protéger vos informations contre tout accès non autorisé.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">4. Partage des données</h2>
                    <p className="text-text">Vos informations ne sont jamais vendues ou partagées avec des tiers, sauf pour les services nécessaires à la livraison et au paiement.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">5. Cookies</h2>
                    <p className="text-text">Nous utilisons des cookies pour améliorer votre expérience utilisateur. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.</p>
                </section>
                
                <p className="text-text text-center mt-6">Si vous avez des questions, contactez-nous à <a href="mailto:support@loop.com" className="text-accent font-bold hover:text-blue-700">support@loop.com</a>.</p>
            </div>
        </div>
    );
}

export default PolitiqueConf;
