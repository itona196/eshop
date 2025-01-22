"use client"
import React from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { Card, CardContent, CardFooter } from './ui/card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface ProductsCardProps {
  title: string;
  imgSource: string;
  price: number;
  description: string;
}

function ProductsCard({ title, imgSource, price, description,}: ProductsCardProps) {
  const addWL = () => {
    toast.success('Ton produit a été ajouté à ta liste de souhaits', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })};

  const addTC = () => {
    toast.success('Ton produit a été ajouté à ton panier', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  return (
    <Card className="flex flex-col justify-between items-center shadow-lg border-0 w-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer w-full">
            <CardContent className="text-center p-0 flex-1 w-full overflow-hidden">
              <img
                src={imgSource}
                alt={title}
                className="h-full w-full object-cover"
              />
            </CardContent>

            <CardFooter className="w-full text-center bg-bleu p-4 text-white">
              <p className="text-xl w-full font-semibold">{title}</p>
              <p className="text-xl w-full font-semibold">CHF {price}</p>
            </CardFooter>
          </div>
        </DialogTrigger>

        <DialogContent className="fixed inset-0 bg-white p-6 flex flex-col justify-between z-50 w-full h-full overflow-auto rounded-lg">
          <DialogTitle className="text-3xl font-bold text-blue-600">{title}</DialogTitle>
          
          <img 
            src={imgSource}
            alt={title}
            className="w-96 h-96 object-cover rounded-md mx-auto mt-4 shadow-lg"
          />
          <DialogDescription className="text-lg mt-4 text-gray-700">{description}</DialogDescription>
          <p className="mt-4 font-semibold text-gray-800">Prix: CHF {price}</p>

          <div className="mt-4">
            <label htmlFor="size" className="block text-black font-medium">Choisir la taille :</label>
            <select id="size" className="mt-2 w-40 p-2 border rounded-md bg-white focus:ring-2 focus:ring-blue">
              <option value="S">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-bleu text-white rounded-md hover:bg-gray-700 transition-all duration-200"
              onClick={addWL}>
              ❤️ Ajouter à la liste de souhaits
            </button>

            <button className="px-6 py-3 bg-bleu text-white rounded-md hover:bg-gray-700 transition-all duration-200"
              onClick={addTC}>
              Ajouter au panier
            </button>
          </div>
          <ToastContainer />

        </DialogContent>
      </Dialog>
    </Card>
  );
}


export default ProductsCard;
