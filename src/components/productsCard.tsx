"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/components/cartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, StarHalf, ChevronsDown } from "lucide-react";

interface ProductsCardProps {
  id: string;
  title: string;
  imgSource: string;
  price: number;
  description: string;
}

function getRandomRating() {
  const possibleRatings = [3, 3.5, 4, 4.5, 5];
  return possibleRatings[Math.floor(Math.random() * possibleRatings.length)];
}

function getRandomRatingCount() {
  return Math.floor(Math.random() * 701) + 300;
}

function renderHalfStar(index: number) {
  return (
    <div key={index} className="relative w-8 h-8">
      <Star className="absolute top-0 left-0 text-gray-300 w-8 h-8" />
      <StarHalf fill="currentColor" stroke="none" className="absolute top-0 left-0 text-yellow-400 w-8 h-8" />
    </div>
  );
}

function renderStar(index: number, rating: number) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  if (index <= fullStars) {
    return (
      <Star
        key={index}
        fill="currentColor"
        stroke="none"
        className="w-8 h-8 text-yellow-400"
      />
    );
  } else if (index === fullStars + 1 && hasHalfStar) {
    return renderHalfStar(index);
  } else {
    return <Star key={index} className="w-8 h-8 text-gray-300" />;
  }
}

function ProductsCard({ id, title, imgSource, price, description }: ProductsCardProps) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [randomRating] = useState<number>(() => getRandomRating());
  const [ratingCount] = useState<number>(() => getRandomRatingCount());

  const addToCartHandler = () => {
    if (!selectedSize) {
      toast.error("Veuillez sélectionner une taille !", {
      //  className: "custom-toast",
      });
      return;
    }

    addToCart({
      id,
      title,
      imgSource,
      price,
      quantity: 1,
      size: selectedSize,
    });

    toast.success(
      <span>
        Le produit a été ajouté à votre panier.{' '}
        <span
          onClick={() => router.push("/pages/cart")}
          className="underline cursor-pointer"
        >
          Cliquez ici
        </span>
        {' '}pour consulter votre panier.
      </span>,
      {
       // className: "custom-toast",
        position: "top-center",
        autoClose: 3000,
      }
    );
  };

  const globalStars = [1, 2, 3, 4, 5].map((starValue) => renderStar(starValue, randomRating));

  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all w-full max-w-2xl aspect-square"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="flex flex-col h-full border-0 rounded-lg">
        <Dialog>
          <DialogTrigger asChild>
            <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer flex flex-col h-full w-full">
              <CardContent className="flex-1 w-full overflow-hidden p-0 flex items-center justify-center">
                <motion.img
                  src={imgSource}
                  alt={title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </CardContent>
              <CardFooter className="w-full text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-4 text-white">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-xl font-bold">CHF {price}</p>
              </CardFooter>
            </motion.div>
          </DialogTrigger>
          <DialogContent
            className="fixed inset-0 p-8 flex items-center justify-center z-50 w-full h-full overflow-auto bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100"
          >
            <div className="relative w-full max-w-4xl bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 rounded-xl shadow-xl p-8">
              <DialogClose asChild>
                <motion.button
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-2xl"
                  aria-label="Close"
                  whileHover={{ scale: 1.2 }}
                >
                  ✖
                </motion.button>
              </DialogClose>
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                  className="w-full md:w-1/2 flex justify-center items-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={imgSource}
                    alt={title}
                    className="w-96 h-96 object-cover rounded-lg shadow-md"
                  />
                </motion.div>
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                    {title}
                  </DialogTitle>
                  <DialogDescription className="text-md text-gray-700 leading-relaxed mb-4">
                    {description}
                  </DialogDescription>
                  <p className="text-lg font-bold text-gray-900 mb-4">Prix : CHF {price}</p>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1 flex items-center gap-2">
                      Note globale :
                      <span className="text-sm text-gray-600">({ratingCount} avis)</span>
                    </label>
                    <div className="flex items-center gap-1">{globalStars}</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Taille :</label>
                    <div className="relative">
                      <select
                        className="w-full appearance-none p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100"
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                      >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                      <span className="pointer-events-none absolute right-3 top-3 text-gray-400">
                        <ChevronsDown className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <button
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white transition-all rounded-full shadow"
                      onClick={() => toast.success("Ajouté à la liste de souhaits !", {
                        className: "custom-toast",
                      })}
                    >
                      ❤️ Ajouter à la WishList
                    </button>
                    <button
                      className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white transition-all rounded-full shadow"
                      onClick={addToCartHandler}
                    >
                      🛒 Ajouter au Panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Card>
      <ToastContainer />
    </motion.div>
  );
}

export default ProductsCard;
