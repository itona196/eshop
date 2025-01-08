import React from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { Card, CardContent, CardFooter } from './ui/card'

interface ProductsCardProps {
  title: string;
  imgSource: string;
  price: number;
  description: string;
}

function ProductsCard({ title, imgSource, price, description }: ProductsCardProps) {
  return (
    <Card className="flex flex-col justify-between items-center shadow-lg border-0">
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <CardContent className="text-center p-0 flex-1">
              <img
                src={imgSource}
                alt={title}
                className="h-full w-full object-cover rounded-t-md"
              />
            </CardContent>

            <CardFooter className="w-full text-center bg-bleu p-4 text-white">
              <p className="text-xl w-full font-semibold">{title}</p>
              <p className="text-xl w-full font-semibold">CHF {price}</p>
            </CardFooter>
          </div>
        </DialogTrigger>

        <DialogContent className="fixed inset-0 bg-white p-6 flex flex-col justify-between z-50 w-full h-full">
          <DialogTitle className="text-3xl font-bold text-bleu">{title}</DialogTitle>
          
          <img 
            src={imgSource}
            alt={title}
            className="h-100 w-96 object-cover rounded-md mt-4"
          />
          <DialogDescription className="text-lg">{description}</DialogDescription>
          <p className="mt-4 font-semibold">Prix: CHF {price}</p>

          <div className="mt-4">
            <label htmlFor="size" className="block text-black">Choisir la taille :</label>
            <select id="size" className="mt-2 w-full p-2 border rounded-md">
              <option value="S">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <button className="px-4 py-2 bg-bleu text-white rounded-md hover:bg-blanc">
              Ajouter au panier
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default ProductsCard;
