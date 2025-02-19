import React from 'react';

function APropos() {
    return (
        <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 min-h-screen py-12 px-5 md:px-20">
            <div className="max-w-4xl mx-auto bg-secondary p-8 shadow-lg rounded-xl">
                <h1 className="text-3xl font-bold text-accent mb-6">À Propos de Nous</h1>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">Notre Mission</h2>
                    <p className="text-text">
                        Chez Loop, nous croyons en une mode moderne, accessible et durable. Nous nous efforçons d'offrir des vêtements de qualité tout en réduisant notre impact environnemental. 
                        Notre mission est de proposer des collections tendance, éthiques et accessibles à tous, en mettant l'accent sur la durabilité et l'innovation.
                    </p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">Notre Histoire</h2>
                    <p className="text-text">
                        Loop a été fondé en 2024 à Genève, en Suisse, avec la volonté de révolutionner l’industrie de la mode. Nous avons commencé en tant que petite marque indépendante, proposant des pièces conçues avec des matériaux recyclés et des processus de fabrication éco-responsables.
                        Depuis notre création, nous avons élargi notre gamme de produits et nous sommes implantés dans plusieurs pays d’Europe. 
                        Notre siège social est situé au cœur de Genève, où nos équipes de designers et de créateurs travaillent chaque jour pour proposer des collections innovantes et respectueuses de l’environnement.
                    </p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-accent mb-2">Nos Valeurs</h2>
                    <p className="text-text">Nous nous engageons à respecter des valeurs fortes qui nous guident dans toutes nos décisions :</p>
                    <ul className="list-disc list-inside mt-2">
                        <li><span className="font-bold">Qualité :</span> Nous sélectionnons les meilleurs matériaux pour garantir des vêtements durables et confortables.</li>
                        <li><span className="font-bold">Innovation :</span> Nous utilisons des technologies récentes pour des designs uniques.</li>
                        <li><span className="font-bold">Éthique :</span> Nous veillons à collaborer avec des fournisseurs respectant des conditions de travail équitables.</li>
                        <li><span className="font-bold">Durabilité :</span> Nous nous engageons dans une démarche écoresponsable en privilégiant des matériaux recyclés et des processus de fabrication respectueux de l’environnement.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default APropos;
