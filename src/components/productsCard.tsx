"use client";
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

interface ProductsCardProps {
  title: string;
  imgSource: string;
  price: number;
  description: string;
}

function ProductsCard({ title, imgSource, price, description }: ProductsCardProps) {
  const router = useRouter();

  const addWL = () => {
    toast.success(
      <span>
        Ton produit a été ajouté à ta liste de souhaits !{" "}
        <span
          onClick={() => router.push("/pages/wishlist")}
          className="text-blue-500 underline cursor-pointer"
        >
          Cliquez ici pour accéder à votre liste
        </span>
      </span>,
      {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  const addTC = () => {
    toast.success("Ton produit a été ajouté à ton panier", {
      position: "bottom-center",
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
        <DialogTitle />
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

        <DialogContent className="fixed inset-0 bg-white p-6 flex flex-col md:flex-row justify-between z-50 w-full h-full overflow-auto rounded-lg">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img src={imgSource} alt={title} className="w-full h-auto object-cover rounded-md shadow-lg" />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between p-6">
            <div>
              <DialogDescription className="text-lg font-medium text-gray-800">{description}</DialogDescription>
              <p className="mt-4 text-lg font-semibold text-gray-900">Prix: CHF {price}</p>
            </div>

            {/* Selector and Buttons in Bottom Right */}
            <div className="mt-6 flex flex-col md:flex-row justify-end items-end gap-4">
              <div>
                <label htmlFor="size" className="block text-black font-medium">
                  Choisir la taille :
                </label>
                <select
                  id="size"
                  className="mt-2 w-40 p-2 border rounded-md bg-white focus:ring-2 focus:ring-blue"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <button
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 transition-all duration-300 rounded-full"
                  onClick={addWL}
                >
                  ❤️ Ajouter à la liste de souhaits
                </button>
                <button
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 transition-all duration-300 rounded-full"
                  onClick={addTC}
                >
                  🛒 Ajouter au panier
                </button>
              </div>
            </div>
          </div>

          <ToastContainer />
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default ProductsCard;