import React from 'react';

function FAQ() {
    return (
        <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 min-h-screen py-12 px-5 md:px-20">
            <div className="max-w-4xl mx-auto bg-secondary p-8 shadow-lg rounded-xl">
                <h1 className="text-3xl font-bold text-accent mb-6">Foire Aux Questions (FAQ)</h1>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">1. Comment passer une commande ?</h2>
                    <p className="text-text">Ajoutez les articles souhaités à votre panier, accédez à votre panier et suivez les instructions pour finaliser votre achat.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">2. Quels sont les délais de livraison ?</h2>
                    <p className="text-text">Les délais varient selon votre localisation. En général, les livraisons prennent entre 3 et 7 jours ouvrables.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">3. Comment suivre ma commande ?</h2>
                    <p className="text-text">Vous pouvez suivre votre commande en vous connectant à votre compte et en accédant à la section <a href="/suivi" className="text-accent font-bold hover:text-blue-700">Suivi de commande</a>.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">4. Puis-je retourner un article ?</h2>
                    <p className="text-text">Oui, vous avez 30 jours après réception pour retourner un produit. Consultez notre <a href="/pages/retour" className="text-accent font-bold hover:text-blue-700">Politique de Retour</a> pour plus de détails.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">5. Quels moyens de paiement acceptez-vous ?</h2>
                    <p className="text-text">Nous acceptons les paiements par carte bancaire, PayPal et d'autres méthodes sécurisées.</p>
                </section>
                
                <p className="text-text text-center mt-6">Si vous avez d'autres questions, contactez-nous à <a href="mailto:support@loop.com" className="text-accent font-bold hover:text-blue-700">support@loop.com</a>.</p>
            </div>
        </div>
    );
}

export default FAQ;