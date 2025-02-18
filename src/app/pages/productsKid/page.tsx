"use client";

import React from "react";
import ProductsCard from "@/components/productsCard";

const productsItems = [
  {
    id: "tshirtEnfantBlanc",
    title: "T-shirt blanc unisexe",
    price: 30,
    imgSource: "/tshirt-enfant.jpg",
    description:
      "Ce pantalon chino beige est fabriqué en coton de qualité supérieure, avec une légère touche d’élasthanne pour un confort optimal et une grande liberté de mouvement. Son design épuré et sa teinte neutre lui confèrent un style élégant et polyvalent. Fabriqué en Turquie, il allie confort et durabilité. Matière : 98% coton, 2% élasthanne Coupe : Droite, taille moyenne Couleur : Beige Entretien : Lavage en machine à 30°C Ce pantalon chino est idéal pour un look chic ou décontracté, selon l’occasion.",
  },
  {
    id: "tshirtMancheLongueEnfant",
    title: "T-shirt à manches longues",
    price: 30,
    imgSource: "/tshirt-mlongue.jpg",
    description:
      "Ce t-shirt noir est confectionné en coton 100% biologique, offrant douceur, confort et respirabilité. Sa coupe droite et son col rond en font un basique intemporel, parfait pour toutes les occasions. Fabriqué avec soin, il garantit durabilité et qualité. Matière : 100% coton biologique Coupe : Droite, col rond Couleur : Noir Entretien : Lavage en machine à 30°C Ce t-shirt est un essentiel polyvalent pour un style minimaliste et moderne.",
  },
  {
    id: "tshirtMoto",
    title: "T-shirt moto",
    price: 30,
    imgSource: "/tshirt-moto.jpg",
    description:
      "Ce t-shirt violet est confectionné en coton 100% biologique, offrant douceur, confort et respirabilité. Sa coupe droite et son col rond en font un basique intemporel, parfait pour toutes les occasions. Fabriqué avec soin, il garantit durabilité et qualité. Matière : 100% coton biologique Coupe : Droite, col rond Couleur : Violet Entretien : Lavage en machine à 30°C Ce t-shirt est un essentiel polyvalent pour un style minimaliste et moderne.",
  },
  {
    id: "tshirtKid",
    title: "T-shirt panda",
    price: 30,
    imgSource: "/teeshirtenfant.jpg",
    description:
      "Ce t-shirt beige est confectionné en coton 100% biologique, offrant douceur, confort et respirabilité. Sa coupe droite et son col rond en font un basique intemporel, parfait pour toutes les occasions. Fabriqué avec soin, il garantit durabilité et qualité. Matière : 100% coton biologique Coupe : Droite, col rond Couleur : Beige Entretien : Lavage en machine à 30°C Ce t-shirt est un essentiel polyvalent pour un style minimaliste et moderne.",
  },
  {
    id: "spiderman",
    title: "pyjama Spiderman",
    price: 30,
    imgSource: "/spiderman.jpg",
    description:
      "Ce t-shirt vert est confectionné en coton 100% biologique, offrant douceur, confort et respirabilité. Sa coupe droite et son col rond en font un basique intemporel, parfait pour toutes les occasions. Fabriqué avec soin, il garantit durabilité et qualité. Matière : 100% coton biologique Coupe : Droite, col rond Couleur : Vert Entretien : Lavage en machine à 30°C Ce t-shirt est un essentiel polyvalent pour un style minimaliste et moderne.",
  },
  {
    id: "helloKitty",
    title: "pyjama Hello Kitty",
    price: 30,
    imgSource: "/helloKitty.avif",
    description:
      "Ce t-shirt blanc est confectionné en coton 100% biologique, offrant douceur, confort et respirabilité. Sa coupe droite et son col rond en font un basique intemporel, parfait pour toutes les occasions. Fabriqué avec soin, il garantit durabilité et qualité. Matière : 100% coton biologique Coupe : Droite, col rond Couleur : Blanc Entretien : Lavage en machine à 30°C Ce t-shirt est un essentiel polyvalent pour un style minimaliste et moderne.",
  },
  {
    id: "tshirt-7",
    title: "t-shirt",
    price: 30,
    imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg",
    description: "We",
  },
  {
    id: "chaussettesCars",
    title: "Chaussettes Cars",
    price: 10,
    imgSource: "/chaussettesCars.webp",
    description: "We",
  },
  {
    id: "chaussettesMinnie",
    title: "Chaussettes Minnie",
    price: 10,
    imgSource: "/chaussettesMinnie.jpg",
    description: "We",
  },
];

function ProductsKid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {productsItems.map((product) => (
        <ProductsCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductsKid;
