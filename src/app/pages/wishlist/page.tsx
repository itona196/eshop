"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useCart } from "@/components/cartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

interface WishlistItem {
  id: string;
  title: string;
  imgSource: string;
  price: number;
  size?: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlistItems((prevWishlist) => {
      if (!prevWishlist.some((p) => p.id === item.id)) {
        toast.success("Ajouté à la wishlist !");
        return [...prevWishlist, item];
      }
      toast.info("Ce produit est déjà dans la wishlist.");
      return prevWishlist;
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems((prevWishlist) => prevWishlist.filter((product) => product.id !== id));
    toast.info("Produit retiré de la wishlist.");
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    toast.info("Wishlist vidée.");
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return ctx;
}

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const moveToCart = (item: WishlistItem) => {
    addToCart({ id: item.id, title: item.title, imgSource: item.imgSource, price: item.price, size: item.size || "M" });
    removeFromWishlist(item.id);
    toast.success("Ajouté au panier et supprimé de la wishlist!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6 text-black">
      <ToastContainer />
      <h1 className="text-4xl font-extrabold mb-6 text-black text-center">Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-center text-lg">Votre wishlist est vide.</p>
      ) : (
        <div className="max-w-4xl mx-auto grid gap-6">
          {wishlistItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex justify-between bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-4 rounded-xl shadow-md items-center text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <img src={item.imgSource} alt={item.title} className="w-20 h-20 rounded-lg shadow-md" />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="font-bold">CHF {item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => moveToCart(item)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
                >
                  🛒 Ajouter au Panier
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 hover:text-red-700 text-xl"
                >
                  ❌
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WishlistPage() {
  return (
    <WishlistProvider>
      <Wishlist />
    </WishlistProvider>
  );
}
