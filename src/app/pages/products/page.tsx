import React from 'react'
import ProductsCard from '@/components/productsCard'
import { DialogHeader } from '@/components/ui/dialog'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'

const productsItems = [
  { title: "pantalon",    price: 50,    imgSource: "/6d7aea9c334642ffa4c5f09809573e9f.webp", description: "Ce jean bleu clair à coupe large est confectionné en coton de qualité supérieure, avec une touche d’élasthanne pour plus de confort et de flexibilité. Le délavage subtil lui donne un look décontracté et intemporel, parfait pour un style casual. Fabriqué en Turquie, il combine durabilité et confort. Matière : 98% coton, 2% élasthanne Coupe : Large, taille moyenne Couleur : Bleu clair délavé Entretien : Lavage en machine à 30°C. Ce jean large vous assure à la fois confort et style pour toutes les occasions."},
  { title: "pantalon",    price: 50,    imgSource: "/pantalon-bleu.png", description: "Ce pantalon bleu clair à coupe large est fabriqué en coton de qualité supérieure, avec une légère touche d’élasthanne pour un confort optimal et une grande liberté de mouvement. Son délavage subtil lui confère un style décontracté et intemporel. Fabriqué en Turquie, il allie confort et durabilité. Matière : 98% coton, 2% élasthanne Coupe : Large, taille moyenne Couleur : Bleu clair délavé Entretien : Lavage en machine à 30°C Ce pantalon large est le choix parfait pour un look casual et confortable en toute occasion."},
  { title: "pantalon",    price: 50,    imgSource: "/chino.png", description: "Ce pantalon chino beige est fabriqué en coton de qualité supérieure, avec une légère touche d’élasthanne pour un confort optimal et une grande liberté de mouvement. Son design épuré et sa teinte neutre lui confèrent un style élégant et polyvalent. Fabriqué en Turquie, il allie confort et durabilité. Matière : 98% coton, 2% élasthanne Coupe : Droite, taille moyenne Couleur : Beige Entretien : Lavage en machine à 30°C Ce pantalon chino est idéal pour un look chic ou décontracté, selon l’occasion."},
  { title: "t-shirt",     price: 30,    imgSource: "/tshirt-noir.png", description: "Ce t-shirt noir est confectionné en coton 100% biologique, offrant douceur, confort et respirabilité. Sa coupe droite et son col rond en font un basique intemporel, parfait pour toutes les occasions. Fabriqué avec soin, il garantit durabilité et qualité. Matière : 100% coton biologique Coupe : Droite, col rond Couleur : Noir Entretien : Lavage en machine à 30°C Ce t-shirt est un essentiel polyvalent pour un style minimaliste et moderne."},
  { title: "t-shirt",     price: 30,    imgSource: "/tshirt-violet.png", description: "Ce t-shirt violet est confectionné en coton 100% biologique, offrant douceur, confort et respirabilité. Sa coupe droite et son col rond en font un basique intemporel, parfait pour toutes les occasions. Fabriqué avec soin, il garantit durabilité et qualité. Matière : 100% coton biologique Coupe : Droite, col rond Couleur : Violet Entretien : Lavage en machine à 30°C Ce t-shirt est un essentiel polyvalent pour un style minimaliste et moderne."},
  { title: "t-shirt",     price: 30,    imgSource: "/tshirt-beige.png", description: "Ce t-shirt beige est confectionné en coton 100% biologique, offrant douceur, confort et respirabilité. Sa coupe droite et son col rond en font un basique intemporel, parfait pour toutes les occasions. Fabriqué avec soin, il garantit durabilité et qualité. Matière : 100% coton biologique Coupe : Droite, col rond Couleur : Beige Entretien : Lavage en machine à 30°C Ce t-shirt est un essentiel polyvalent pour un style minimaliste et moderne."},
  { title: "t-shirt",     price: 30,    imgSource: "/tshirt-vert.png", description: "Ce t-shirt vert est confectionné en coton 100% biologique, offrant douceur, confort et respirabilité. Sa coupe droite et son col rond en font un basique intemporel, parfait pour toutes les occasions. Fabriqué avec soin, il garantit durabilité et qualité. Matière : 100% coton biologique Coupe : Droite, col rond Couleur : Vert Entretien : Lavage en machine à 30°C Ce t-shirt est un essentiel polyvalent pour un style minimaliste et moderne."},
  { title: "t-shirt",     price: 30,    imgSource: "/tshirt-blanc.png", description: "Ce t-shirt blanc est confectionné en coton 100% biologique, offrant douceur, confort et respirabilité. Sa coupe droite et son col rond en font un basique intemporel, parfait pour toutes les occasions. Fabriqué avec soin, il garantit durabilité et qualité. Matière : 100% coton biologique Coupe : Droite, col rond Couleur : Blanc Entretien : Lavage en machine à 30°C Ce t-shirt est un essentiel polyvalent pour un style minimaliste et moderne."},
  { title: "t-shirt",     price: 30,    imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg", description: "We"},
  { title: "chaussettes", price: 10,    imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg", description: "We"},
  { title: "chaussettes", price: 10,    imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg", description: "We"},
  { title: "chaussettes", price: 10,    imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg", description: "We"},
  { title: "bracelet",    price: 50,    imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg", description: "We"},
  { title: "bague",       price: 60,    imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg", description: "We"},
  { title: "collier",     price: 50,    imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg", description: "We"},
]

function Products() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {productsItems.map((product, index) => (
        <ProductsCard key={index} {...product} />
      ))}
    </div>
  );
}

export default Products;
