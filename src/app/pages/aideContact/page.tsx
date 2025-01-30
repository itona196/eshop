import React from 'react';

function AideContact() {
    return (
        <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 min-h-screen py-12 px-5 md:px-20">
            <div className="max-w-4xl mx-auto p-8 shadow-lg rounded-xl">
                <h1 className="text-3xl font-bold text-accent mb-6">Aide & Contact</h1>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">Besoin d'aide ?</h2>
                    <p className="text-text">Si vous avez une question concernant votre commande, nos produits ou notre site, consultez notre <a href="/pages/faq" className="text-accent font-bold hover:text-blue-700">FAQ</a>.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">Nous contacter</h2>
                    <p className="text-text">Vous pouvez nous contacter par e-mail à <a href="mailto:support@loop.com" className="text-accent font-bold hover:text-blue-700">support@loop.com</a> ou via notre <a href="/contact" className="text-accent font-bold hover:text-blue-700">formulaire de contact</a>.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">Suivi de commande</h2>
                    <p className="text-text">Pour suivre l'état de votre commande, connectez-vous à votre compte et accédez à la section <a href="/suivi" className="text-accent font-bold hover:text-blue-700">Suivi de commande</a>.</p>
                </section>
                
                <p className="text-text text-center mt-6">Nous faisons notre maximum pour répondre dans les plus brefs délais.</p>
            </div>
        </div>
    );
}

export default AideContact;
