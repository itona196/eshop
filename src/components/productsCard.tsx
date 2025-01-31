"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
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
        Ce produit a été ajouté à votre liste de souhaits !{" "}
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
        theme: "light",
      }
    );
  };

  const addTC = () => {
    toast.success(
      <span>
        Ce produit a été ajouté au panier !{" "}
        <span
          onClick={() => router.push("/pages/cart")}
          className="text-blue-500 underline cursor-pointer"
        >
          Cliquez ici pour accéder à votre panier
        </span>
      </span>,
      {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100"
    >
      <Card className="flex flex-col justify-between items-center shadow-lg border-0 w-full rounded-lg bg-white hover:shadow-xl transition-all">
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer w-full"
            >
              <CardContent className="text-center p-0 flex-1 w-full overflow-hidden">
                <motion.img
                  src={imgSource}
                  alt={title}
                  className="h-full w-full object-cover rounded-t-lg"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </CardContent>
              <CardFooter className="w-full text-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 p-4 text-white rounded-b-lg">
                <p className="text-xl font-semibold">{title}</p>
                <p className="text-xl font-semibold">CHF {price}</p>
              </CardFooter>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="fixed inset-0 bg-white p-8 flex flex-col justify-between z-50 w-full h-full overflow-auto">
            <DialogClose asChild>
              <motion.button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                aria-label="Close"
                whileHover={{ scale: 1.2 }}
              >
                ✖
              </motion.button>
            </DialogClose>
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex-shrink-0 w-full md:w-1/2">
                <motion.img
                  src={imgSource}
                  alt={title}
                  className="w-full h-auto object-cover rounded-md shadow-md"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between p-6">
                <DialogTitle className="text-3xl font-bold text-gray-900">
                  {title}
                </DialogTitle>
                <DialogDescription className="text-lg font-medium text-gray-800 mt-4">
                  {description}
                </DialogDescription>
                <p className="mt-4 text-lg font-semibold text-gray-900">
                  Prix : CHF {price}
                </p>
                <div className="mt-6 flex flex-col md:flex-row justify-end items-end gap-4">
                  <button
                    className="px-6 py-3 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-white hover:opacity-90 transition-all duration-300 rounded-full"
                    onClick={addWL}
                  >
                    ❤️ WishList
                  </button>
                  <button
                    className="px-6 py-3 bg-gradient-to-r from-green-300 to-green-500 text-white hover:opacity-90 transition-all duration-300 rounded-full"
                    onClick={addTC}
                  >
                    🛒 Cart
                  </button>
                </div>
              </div>
            </div>
            <ToastContainer />
          </DialogContent>
        </Dialog>
      </Card>
    </motion.div>
  );
}

export default ProductsCard;