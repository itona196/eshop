"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    console.log("🔄 Mise à jour de localStorage :", wishlistItems);
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (item: WishlistItem) => {
    console.log("✅ addToWishlist appelé avec :", item);
    setWishlistItems((prevWishlist) => {
      if (!prevWishlist.some((p) => p.id === item.id && p.size === item.size)) {
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
